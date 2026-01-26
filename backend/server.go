package main

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

type User struct {
	ID       string `json:"id"`
	Username string `json:"username"`
	Password string `json:"password"`
	Name     string `json:"name"`
}

var users []User = []User{
	{ID: "1", Username: "hannes", Password: "1234", Name: "Hannes"},
	{ID: "2", Username: "eirik", Password: "1234", Name: "Eirik"},
}

func enableCORS(w http.ResponseWriter) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
}

func main() {
	router := mux.NewRouter()
	router.HandleFunc("/users", getUsers).Methods("GET")
	router.HandleFunc("/users", createUser).Methods("POST")
	log.Println("Server started on :8080")

	log.Fatal(http.ListenAndServe(":8080", router))
}

func getUsers(w http.ResponseWriter, r *http.Request) {
	enableCORS(w)

	if r.Method == "OPTIONS" {
		return
	}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(users)
	log.Println("Returned users:", users)
}

func createUser(w http.ResponseWriter, r *http.Request) {
	enableCORS(w)

	if r.Method == "OPTIONS" {
		return
	}
	w.Header().Set("Content-Type", "application/json")
	var newUser User
	_ = json.NewDecoder(r.Body).Decode(&newUser)
	users = append(users, newUser)
	json.NewEncoder(w).Encode(newUser)
}