import { Stack } from "expo-router"
import { Provider, useDispatch } from "react-redux"
import { store } from "../store"
import { useEffect } from "react"
import { fetchUsers } from "../store/AuthSlice"
import type { AppDispatch } from "../store"
import { fetchBookings } from "@/store/BookingSlice"

function InitAuth() {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchUsers())
    dispatch(fetchBookings())
  }, [dispatch])

  return null
}

export default function RootLayout() {
  return (
    <Provider store={store}>
      <InitAuth />
      <Stack screenOptions={{ headerShown: false }} />
    </Provider>
  )
}
