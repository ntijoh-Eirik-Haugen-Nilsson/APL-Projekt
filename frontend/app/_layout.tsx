import { Stack } from "expo-router"
import { Provider, useDispatch } from "react-redux"
import { store } from "../store"
import { useEffect } from "react"
import { fetchUsers } from "../store/AuthSlice"
import type { AppDispatch } from "../store"

function InitAuth() {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchUsers())
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
