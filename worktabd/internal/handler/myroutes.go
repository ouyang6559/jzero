package handler

// myroutes. 非框架生成的 routes. 建议能用框架自带解决的就用自带的功能!

import (
	"github.com/jaronnie/worktab/worktabd/internal/svc"
	"github.com/zeromicro/go-zero/rest"
)

func RegisterMyHandlers(server *rest.Server, serverCtx *svc.ServiceContext) {
	server.AddRoutes(
		[]rest.Route{
			{
				Method:  "GET",
				Path:    "/api/v1.0/health",
				Handler: HealthHandler(serverCtx),
			},
			{
				Method:  "GET",
				Path:    "/",
				Handler: StaticFSHandler(serverCtx),
			},
		},
	)
}
