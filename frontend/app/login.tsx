import { TextInput, Pressable, Text, View, } from "react-native";
import { Link } from "expo-router";

export default function Login() {
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
            <TextInput style={{ padding: 10, backgroundColor: "white", borderRadius: 5, marginTop: 10  }} placeholder="email"></TextInput>
            <TextInput style={{ padding: 10, backgroundColor: "white", borderRadius: 5, marginTop: 10 }} placeholder="password"></TextInput>
            <Link href="/" style={{ marginTop: 10}} asChild>
                <Pressable style={{ padding: 10, backgroundColor: "white", borderRadius: 5, alignItems: "center" }}>
                <Text style={{ fontSize: 16 }}>Login</Text>
                </Pressable>
            </Link>
        </View>
    </View>
  );
}
