import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Booking = {
  content: string;
  date_booked: string;
};

type BookingState = {
  bookings: Booking[];
};

const initialState: BookingState = {
  bookings: [],
};

const bookingSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {
    book(state, action: PayloadAction<Booking>) {
      state.bookings.push(action.payload);
      console.log(state.bookings);
    },
  },
});

export const { book } = bookingSlice.actions;
export default bookingSlice.reducer;
