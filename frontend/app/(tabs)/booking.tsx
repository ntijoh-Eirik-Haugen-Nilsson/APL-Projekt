import { Image } from "expo-image";
import { Pressable, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { book } from "../../store/BookingSlice";

const box = require("../../assets/images/box.png");

export default function Booking() {
  const dispatch = useDispatch();

  const handleBooking = () => {
    dispatch(
      book({
        name: "booking",
        date_booked: new Date().toISOString(),
      }),
    );
  };

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
      ></Image>
      <Text>Your package</Text>

      <Pressable
        onPress={handleBooking}
        style={{
          padding: 10,
          backgroundColor: "white",
          borderRadius: 5,
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Text style={{ fontSize: 16 }}>Book</Text>
      </Pressable>
    </View>
  );
}
