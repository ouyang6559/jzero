/*
Copyright © 2024 jaronnie <jaron@jaronnie.com>

*/

package cmd

import (
	"github.com/spf13/cobra"

	"github.com/jzero-io/jzero/daemon"
)

// daemonCmd represents the daemon command
var daemonCmd = &cobra.Command{
	Use:   "daemon",
	Short: "jzero daemon",
	Long:  `jzero daemon`,
	Run: func(_ *cobra.Command, _ []string) {
		daemon.Start(cfgFile)
	},
}

func init() {
	rootCmd.AddCommand(daemonCmd)
}
