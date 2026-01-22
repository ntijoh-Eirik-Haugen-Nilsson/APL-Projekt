import { Image } from "expo-image";
import React from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { useDispatch } from "react-redux";
import { book } from "../../store/BookingSlice";

const box = require("../../assets/images/box.png");

export default function Booking() {
  const dispatch = useDispatch();

  const [formContent, onChangeContent] = React.useState("");

  const handleBooking = () => {
    dispatch(
      book({
        content: formContent,
        date_booked: new Date().toISOString(),
      }),
    );
  };

  return (
    <View
      style={{
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

      <Text style={{ margin: 20 }}>Your package</Text>

      <View>
        <TextInput
          style={{
            padding: 10,
            backgroundColor: "white",
            width: 200,
            borderRadius: 5,
          }}
          placeholder="Content type"
          placeholderTextColor="grey"
          value={formContent}
          onChangeText={onChangeContent}
        />

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
    </View>
  );
}
