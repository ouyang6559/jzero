syntax = "v1"

type pathRequest {
    Name string `path:"name"`
}

type paramRequest {
    Name string `form:"name"`
}

type postRequest {
    Name string `json:"name"`
}

type response {
    Message string
}

@server(
    prefix: /api/v1
    group: hello
)
service {{ .APP }} {
    @handler HelloPathHandler
    get /hello/:name (pathRequest) returns (response)

    @handler HelloParamHandler
    get /hello (paramRequest) returns (response)

    @handler HelloPostHandler
    post /hello (postRequest) returns (response)
}
