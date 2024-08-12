package main

import (
	"fmt"
	"net/http"
)

func getIndex(res http.ResponseWriter, req *http.Request) {
    fmt.Println("get index")
}

func getProfile(res http.ResponseWriter, req *http.Request) {
    fmt.Println("get profile")
}

func main() {
    http.HandleFunc("/", getIndex)
    http.HandleFunc("/profile", getProfile)

    http.ListenAndServe("localhost:3000", nil)
}
