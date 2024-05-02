// Code generated by jzero. DO NOT EDIT.
// type: clientset

package jzero

import (
	"github.com/jzero-io/jzero-go/rest"
	"github.com/jzero-io/jzero-go/typed"

	"github.com/jzero-io/jzero-go/typed/jzero"
)

type Interface interface {
	Direct() typed.DirectInterface

	Jzero() jzero.JzeroInterface
}

type Clientset struct {
	// direct client to request
	direct *typed.DirectClient

	jzero *jzero.JzeroClient
}

func (x *Clientset) Direct() typed.DirectInterface {
	return x.direct
}

func (x *Clientset) Jzero() jzero.JzeroInterface {
	return x.jzero
}

func NewClientWithOptions(ops ...rest.Opt) (jzero.JzeroInterface, error) {
	c := &rest.RESTClient{}
	for _, op := range ops {
		if err := op(c); err != nil {
			return nil, err
		}
	}
	configShallowCopy := *c
	var cs Clientset
	var err error
	cs.direct, err = typed.NewForConfig(&configShallowCopy)
	if err != nil {
		return nil, err
	}
	cs.jzero, err = jzero.NewForConfig(&configShallowCopy)
	if err != nil {
		return nil, err
	}
	
	return cs.Jzero(), nil
}