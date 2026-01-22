import React from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { book } from "../../store/BookingSlice";
import { RootState } from "../../store/index";

const box = require("../../assets/images/box.png");

export default function Booking() {
  const dispatch = useDispatch();

  const bookings = useSelector((state: RootState) => state.bookings.bookings);

  const [formContent, onChangeContent] = React.useState("");

  const handleBooking = () => {
    dispatch(
      book({
        content: formContent,
        date_booked: new Date().toISOString(),
      }),
    );
  };

  function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString("sv-SE");
  }
  function formatTime(iso: string) {
    return new Date(iso).toLocaleString("sv-SE", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  return (
    <ScrollView style={styles.scrollView}>
      {/* <Image
        source={box}
        style={{ width: 200, height: 200 }}
        contentFit="contain"
      ></Image> */}

      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Content type"
          placeholderTextColor="grey"
          value={formContent}
          onChangeText={onChangeContent}
        />

        <Pressable onPress={handleBooking} style={styles.pressable}>
          <Text style={styles.text}>Book</Text>
        </Pressable>
      </View>

      <View style={styles.container}>
        {bookings.map((booking, index) => (
          <View key={index} style={styles.bookingItem}>
            <Text style={styles.bookingText}>{booking.content}</Text>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.bookingText}>
                {formatDate(booking.date_booked)}
              </Text>
              <Text style={styles.bookingText}>
                {formatTime(booking.date_booked)}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },
  scrollView: {
    backgroundColor: "white",
    paddingTop: 80,
  },
  text: {
    fontSize: 16,
    padding: 12,
  },
  input: {
    padding: 10,
    backgroundColor: "white",
    width: 200,
    borderWidth: 1,
    borderRadius: 5,
  },
  pressable: {
    padding: 10,
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  bookingItem: {
    marginTop: 10,
    width: 200,

    borderWidth: 1,
    borderRadius: 5,
    padding: 8,
  },
  bookingText: {
    margin: 2,
  },
});
