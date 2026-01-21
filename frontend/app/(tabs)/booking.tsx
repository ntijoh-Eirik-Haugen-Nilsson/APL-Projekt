import { Text, View } from "react-native";
import { Image } from "expo-image";
const box = require("../../assets/images/box.png")

export default function Booking() {
  return (
    <View
    style={{
      backgroundColor: "red",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}
    >
      <Image
        source={box}
        style={{ width: 200, height: 200 }}
        contentFit="contain"
      >

      </Image>
      <Text>Your package</Text>
    </View>
  );
}
