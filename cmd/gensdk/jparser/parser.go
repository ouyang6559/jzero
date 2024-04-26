package jparser

import (
	"net/http"
	"net/url"
	"strings"

	"github.com/jaronnie/jzero/daemon/pkg/stringx"

	"github.com/jaronnie/jzero/cmd/gensdk/jparser/api"
	"github.com/jaronnie/jzero/cmd/gensdk/jparser/gateway"
	"github.com/jaronnie/jzero/cmd/gensdk/vars"

	"github.com/jhump/protoreflect/desc"
	"github.com/zeromicro/go-zero/tools/goctl/api/spec"
	"google.golang.org/genproto/googleapis/api/annotations"
	"google.golang.org/protobuf/proto"
)

func Parse(fds []*desc.FileDescriptor, apiSpecs []*spec.ApiSpec) (vars.ScopeResourceHTTPInterfaceMap, error) {
	scopeResourceHTTPInterfaceMap := make(vars.ScopeResourceHTTPInterfaceMap)
	resourceHTTPInterfaceMap := make(map[vars.Resource][]*vars.HTTPInterface)

	interfaces, err := genHTTPInterfaces(fds, apiSpecs)
	if err != nil {
		return nil, err
	}

	var credentialInterfaces []*vars.HTTPInterface
	for _, iface := range interfaces {
		if iface.Resource == "credential" {
			credentialInterfaces = append(credentialInterfaces, iface)
		}
	}

	resourceHTTPInterfaceMap["credential"] = credentialInterfaces
	scopeResourceHTTPInterfaceMap["jzero"] = resourceHTTPInterfaceMap

	return scopeResourceHTTPInterfaceMap, nil
}

func genHTTPInterfaces(fds []*desc.FileDescriptor, apiSpecs []*spec.ApiSpec) ([]*vars.HTTPInterface, error) {
	var httpInterfaces []*vars.HTTPInterface

	for _, fd := range fds {
		services := fd.GetServices()
		for _, service := range services {
			methods := service.GetMethods()
			for _, method := range methods {
				ext := proto.GetExtension(method.GetMethodOptions(), annotations.E_Http)
				var httpInterface vars.HTTPInterface
				switch rule := ext.(type) {
				case *annotations.HttpRule:
					if rule == nil {
						continue
					}

					switch httpRule := rule.GetPattern().(type) {
					case *annotations.HttpRule_Get:
						httpInterface.Method = http.MethodGet
						httpInterface.URL = httpRule.Get
					case *annotations.HttpRule_Post:
						httpInterface.Method = http.MethodPost
						httpInterface.URL = httpRule.Post
					}

					var requestBodyName string
					if (httpInterface.Method == http.MethodPost) && rule.Body != "*" {
						for _, v := range method.GetInputType().GetFields() {
							if rule.Body == v.GetName() {
								requestBodyName = v.GetName()
							}
						}
					} else {
						requestBodyName = method.GetInputType().GetName()
					}
					httpInterface.RequestBody = &vars.RequestBody{
						RealBodyName: requestBodyName,
						Name:         stringx.FirstUpper(method.GetInputType().GetName()),
						Body:         rule.Body,
						Type:         "proto",
						Package:      strings.TrimPrefix(*service.GetFile().GetFileOptions().GoPackage, "./"),
					}
					httpInterface.ResponseBody = &vars.ResponseBody{
						Name:    stringx.FirstUpper(method.GetOutputType().GetName()),
						Package: strings.TrimPrefix(*service.GetFile().GetFileOptions().GoPackage, "./"),
					}
				}
				httpInterface.MethodName = method.GetName()
				httpInterface.Resource = vars.Resource(service.GetName())

				pathParams, err := gateway.PathParam(httpInterface.URL)
				if err != nil {
					return nil, nil
				}
				httpInterface.PathParams = pathParams
				queryParams := gateway.CreateQueryParams(method)
				httpInterface.QueryParams = queryParams

				httpInterfaces = append(httpInterfaces, &httpInterface)
			}
		}
	}

	for _, apiSpec := range apiSpecs {
		for _, group := range apiSpec.Service.Groups {
			for _, route := range group.Routes {
				path, _ := url.JoinPath(group.Annotation.Properties["prefix"], route.Path)

				httpInterface := vars.HTTPInterface{
					Resource:   vars.Resource(group.Annotation.Properties["group"]),
					Method:     route.Method,
					URL:        path,
					MethodName: route.Handler,
					Comments:   route.AtDoc.Text,
				}
				if route.RequestType != nil {
					httpInterface.RequestBody = &vars.RequestBody{
						Name:         route.RequestType.Name(),
						RealBodyName: route.RequestType.Name(),
						Package:      "types",
						Type:         "api",
					}
				}
				if route.ResponseType != nil {
					httpInterface.ResponseBody = &vars.ResponseBody{
						Name: route.ResponseType.Name(),
					}
				}

				pathParams, err := api.CreatePathParam(httpInterface.URL, &route)
				if err != nil {
					return nil, nil
				}
				httpInterface.PathParams = pathParams
				queryParams := api.CreateQueryParams(&route)
				httpInterface.QueryParams = queryParams

				httpInterfaces = append(httpInterfaces, &httpInterface)
			}
		}
	}
	return httpInterfaces, nil
}
