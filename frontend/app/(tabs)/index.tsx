import { Text, View } from "react-native";
import { Image } from 'expo-image'
const logo = require("../../assets/images/logo.png")

export default function HomePage() {
  return (
    <View
      style={{
        backgroundColor: "green",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Welcome to:</Text>
      <Image
        source={logo}
        style={{ width: 400, height: 400}}
          contentFit="contain"    
      />
    </View>
  );
}
