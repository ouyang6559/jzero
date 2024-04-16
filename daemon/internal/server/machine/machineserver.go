// Code generated by goctl. DO NOT EDIT.
// Source: machine.proto

package server

import (
	"context"

	"github.com/jaronnie/jzero/daemon/internal/logic/machine"
	"github.com/jaronnie/jzero/daemon/internal/svc"
	"github.com/jaronnie/jzero/daemon/pb/machinepb"
)

type MachineServer struct {
	svcCtx *svc.ServiceContext
	machinepb.UnimplementedMachineServer
}

func NewMachineServer(svcCtx *svc.ServiceContext) *MachineServer {
	return &MachineServer{
		svcCtx: svcCtx,
	}
}

func (s *MachineServer) MachineVersion(ctx context.Context, in *machinepb.Empty) (*machinepb.MachineVersionResponse, error) {
	l := machinelogic.NewMachineVersionLogic(ctx, s.svcCtx)
	return l.MachineVersion(in)
}
