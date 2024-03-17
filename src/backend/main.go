package main

import (
	"fmt"
	"os"
)

func ArgmentCase() {
	for _, v := range os.Args {
		switch v {
		case "-c":

		}
	}
}

func main() {
	fmt.Printf("[OJ system-back is running]\n")

}
