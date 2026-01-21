import { TextInput, Pressable, Text, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../store/AuthSlice"
import { RootState } from "../store"
import { useRouter } from "expo-router"
import { useState, useEffect } from "react"

export default function Login() {
  const dispatch = useDispatch()
  const router = useRouter()

  const { currentUser, error } = useSelector(
    (state: RootState) => state.auth
  )

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = () => {
    dispatch(login({ username, password }))
  }

  useEffect(() => {
    if (currentUser) {
      router.replace("/")
    }
  }, [currentUser, router])

  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 80, marginBottom: 20 }}>Welcome!</Text>

      <View style={{ padding: 80, backgroundColor: "green" }}>
        <TextInput
          style={{ padding: 10, backgroundColor: "white", borderRadius: 5 }}
          placeholder="username"
          value={username}
          onChangeText={setUsername}
        />

        <TextInput
          style={{
            padding: 10,
            backgroundColor: "white",
            borderRadius: 5,
            marginTop: 10,
          }}
          placeholder="password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {error && (
          <Text style={{ color: "red", marginTop: 10 }}>{error}</Text>
        )}

        <Pressable
          onPress={handleLogin}
          style={{
            padding: 10,
            backgroundColor: "white",
            borderRadius: 5,
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <Text style={{ fontSize: 16 }}>Login</Text>
        </Pressable>
      </View>
    </View>
  )
}
