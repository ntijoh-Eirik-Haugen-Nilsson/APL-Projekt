import { Tabs, Link } from "expo-router";
import { Pressable, Text } from "react-native";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{ 
        headerRight: () => (
          <Link href="/login" asChild>
            <Pressable style={{ marginRight: 16 }}>
              <Text style={{ fontSize: 16 }}>Login</Text>
            </Pressable>
          </Link>
        ),
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
  );
}
