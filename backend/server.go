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

type Booking struct {
  Content string `json:"content"`
  Weight  string `json:"weight"`
  Dimensions string `json:"dimensions"`
  DateBooked string `json:"date_booked"`
}

var bookings []Booking = []Booking{
	{Content: "Bokning 1", Weight: "10kg", Dimensions: "50x30x20", DateBooked: "2026-01-20"},
	{Content: "Bokning 2", Weight: "15kg", Dimensions: "60x40x30", DateBooked: "2026-01-21"},
}
func corsMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

		if r.Method == http.MethodOptions {
			w.WriteHeader(http.StatusNoContent)
			return
		}

		next.ServeHTTP(w, r)
	})
}


func main() {
	router := mux.NewRouter().StrictSlash(true)
	router.Use(corsMiddleware)
	router.HandleFunc("/bookings", getBookings).Methods("GET", "OPTIONS")
	router.HandleFunc("/bookings", createBooking).Methods("POST", "OPTIONS")

	router.HandleFunc("/users", getUsers).Methods("GET", "OPTIONS")
	router.HandleFunc("/users", createUser).Methods("POST", "OPTIONS")


	log.Println("Registered routes:")
	router.Walk(func(route *mux.Route, router *mux.Router, ancestors []*mux.Route) error {
		path, _ := route.GetPathTemplate()
		log.Println(path)
		return nil
	})

	log.Println("Server started on :8080")
	log.Fatal(http.ListenAndServe(":8080", router))
}


func getUsers(w http.ResponseWriter, r *http.Request) {
	log.Println("Received request for users")

	if r.Method == "OPTIONS" {
		return
	}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(users)
	log.Println("Returned users:", users)
}

func createUser(w http.ResponseWriter, r *http.Request) {

	if r.Method == "OPTIONS" {
		return
	}
	w.Header().Set("Content-Type", "application/json")
	var newUser User
	_ = json.NewDecoder(r.Body).Decode(&newUser)
	users = append(users, newUser)
	json.NewEncoder(w).Encode(newUser)
}

func getBookings(w http.ResponseWriter, r *http.Request) {
	log.Println("Received request for bookings")

	if r.Method == "OPTIONS" {
		return
	}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(bookings)
	log.Println("Returned bookings:", bookings)
}

func createBooking(w http.ResponseWriter, r *http.Request) {

	if r.Method == "OPTIONS" {
		return
	}
	log.Println("Received request to create booking")
	w.Header().Set("Content-Type", "application/json")
	var newBooking Booking
	_ = json.NewDecoder(r.Body).Decode(&newBooking)
	bookings = append(bookings, newBooking)
	json.NewEncoder(w).Encode(newBooking)
}
