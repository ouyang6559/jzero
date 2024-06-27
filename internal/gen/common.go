package gen

import (
	"fmt"
	"os"
	"path/filepath"
	"strings"

	"github.com/zeromicro/go-zero/tools/goctl/pkg/parser/api/parser"
)

func GetProtoDir(protoDirPath string) ([]os.DirEntry, error) {
	protoDir, err := os.ReadDir(protoDirPath)
	if err != nil {
		return nil, nil
	}
	return protoDir, nil
}

func GetProtoFilenames(protoDirPath string) ([]string, error) {
	protoDir, err := GetProtoDir(protoDirPath)
	if err != nil {
		return nil, nil
	}

	var protoFilenames []string
	for _, protoFile := range protoDir {
		if protoFile.IsDir() {
			continue
		}
		if strings.HasSuffix(protoFile.Name(), ".proto") {
			protoFilenames = append(protoFilenames, protoFile.Name())
		}
	}
	return protoFilenames, nil
}

func GetMainApiFilePath(apiDirName string) (string, bool, error) {
	apiDir, err := os.ReadDir(apiDirName)
	if err != nil {
		return "", false, err
	}

	var mainApiFilePath string
	var isDelete bool

	for _, file := range apiDir {
		if file.Name() == "main.api" {
			mainApiFilePath = filepath.Join(apiDirName, file.Name())
			isDelete = false
			break
		}
	}

	if mainApiFilePath == "" {
		apiFilePath, err := getRouteApiFilePath(apiDirName)
		if err != nil {
			return "", false, err
		}
		sb := strings.Builder{}
		sb.WriteString("syntax = \"v1\"")
		sb.WriteString("\n")

		for _, api := range apiFilePath {
			sb.WriteString(fmt.Sprintf("import \"%s\"\n", api))
		}

		f, err := os.CreateTemp(apiDirName, "*.api")
		if err != nil {
			return "", false, err
		}

		_, err = f.WriteString(sb.String())
		if err != nil {
			return f.Name(), true, err
		}
		mainApiFilePath = f.Name()
		isDelete = true
		f.Close()
	}
	return mainApiFilePath, isDelete, nil
}

func GetApiServiceName(apiDirName string) string {
	fs, err := getRouteApiFilePath(apiDirName)
	if err != nil {
		return ""
	}
	for _, file := range fs {
		apiSpec, err := parser.Parse(filepath.Join(apiDirName, file), "")
		if err != nil {
			return ""
		}
		if apiSpec.Service.Name != "" {
			return apiSpec.Service.Name
		}
	}
	return ""
}
