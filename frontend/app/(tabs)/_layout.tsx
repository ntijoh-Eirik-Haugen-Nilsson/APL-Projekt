import { Tabs, Link } from "expo-router"
import { Pressable, Text } from "react-native"
import { useSelector } from "react-redux"
import { RootState } from "../../store"

function HeaderRight() {
  const user = useSelector((state: RootState) => state.auth.currentUser)

  if (!user) {
    return (
      <Link href="/login" asChild>
        <Pressable style={{ marginRight: 16 }}>
          <Text style={{ fontSize: 16 }}>Login</Text>
        </Pressable>
      </Link>
    )
  }

  return (
    <Text style={{ marginRight: 16 }}>
      {user.name}
    </Text>
  )
}

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerRight: () => <HeaderRight />,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{ title: "Home" }}
      />
      <Tabs.Screen
        name="booking"
        options={{ title: "Booking" }}
      />
      <Tabs.Screen
        name="profile"
        options={{ title: "Profile" }}
      />
    </Tabs>
  )
}
