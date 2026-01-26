import { View, Text, Pressable } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../../store/AuthSlice"
import { useRouter } from "expo-router"

export default function Profile() {
  const dispatch = useDispatch()
  const router = useRouter()
  const user = useSelector((state: any) => state.auth.currentUser)
  const handleLogout = () => {
    dispatch(logout())
    router.replace("/login")
  }

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>
        ID: {user?.id}
      </Text>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>
        Name: {user?.name}
      </Text>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>
        Username: {user?.username}
      </Text>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>
        Password: Not showing u hahaha!
      </Text>
      <Pressable
        onPress={handleLogout}
        style={{
          backgroundColor: "red",
          padding: 10,
          borderRadius: 5,
        }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>
          Logga ut
        </Text>
      </Pressable>
    </View>
  )
}
