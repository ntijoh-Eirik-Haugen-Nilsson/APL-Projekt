import { Tabs, Link } from "expo-router"
import { Pressable, Text, View} from "react-native"
import { useSelector } from "react-redux"
import { RootState } from "../../store"
import { Image } from 'expo-image'
const logo = require("../../assets/images/logo.png")




function HeaderRight() {
  const user = useSelector((state: RootState) => state.auth.currentUser)

  if (!user) {
    return (
        <View style={{ marginLeft: 16 , flexDirection: "row", alignItems: "center", gap: 8 }}>
            <Image
              source={logo}
              style={{ width: 80, height: 80}}
                contentFit="contain"    
            />
            <Link href="/login" asChild>
                <Pressable style={{ marginRight: 16 }}>
                <Text style={{ fontSize: 16 }}>Login</Text>
                </Pressable>
            </Link>
        </View>
    )
  }

  return (
    <View
      style={{
        marginRight: 16,
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
      }}
    >
        <Image
            source={logo}
            style={{ width: 80, height: 80}}
            contentFit="contain"    
        />
      <Text style={{ fontSize: 16 }}>{user.name}</Text>
  
    </View>

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
