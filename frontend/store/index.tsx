import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSlice";
import bookingReducer from "./BookingSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    bookings: bookingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
