import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Booking = {
  content: string;
  weight: string;
  dimentions: string;
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
    },
  },
});

export const { book } = bookingSlice.actions;
export default bookingSlice.reducer;
