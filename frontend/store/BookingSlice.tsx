import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

type Booking = {
  content: string;
  weight: string;
  dimensions: string;
  date_booked: string;
};

type BookingState = {
  bookings: Booking[];
};

const initialState: BookingState = {
  bookings: [],
};

export const fetchBookings = createAsyncThunk<Booking[]>(
  'bookings/fetchBookings',
  async (_, thunkAPI) => {
    try {
      const BASE_URL = process.env.EXPO_PUBLIC_API_URL;
      if (!BASE_URL) {
        throw new Error("API URL is not defined");
      }
      const response = await fetch(`${BASE_URL}/bookings`)
      if (!response.ok) throw new Error('Kunde inte hämta bookings')
      const data = (await response.json()) as Booking[]
    console.log("Fetched bookings:", data)
      return data
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const createBooking = createAsyncThunk<
  Booking, 
  Booking, 
  { rejectValue: string }
>(
  "bookings/createBooking",
  async (newBooking, thunkAPI) => {
    try {
      const BASE_URL = process.env.EXPO_PUBLIC_API_URL;
      if (!BASE_URL) throw new Error("API URL is not defined");

      const response = await fetch(`${BASE_URL}/bookings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newBooking),
      });

      if (!response.ok) throw new Error("Kunde inte skapa booking");

      const data = (await response.json()) as Booking;
      console.log("Booking created:", data);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


const bookingSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {

    // book(state, action: PayloadAction<Booking>) {
    //   state.bookings.push(action.payload);
    //   console.log("New booking added:", action.payload);
    // },
  },
    extraReducers: (builder) => {
    builder
    .addCase(fetchBookings.fulfilled, (state, action) => {
      state.bookings = action.payload;
    })
    .addCase(createBooking.fulfilled, (state, action) => {
      state.bookings.push(action.payload);
      console.log("Booking added to store:", action.payload);
    })
    .addCase(fetchBookings.rejected, (state, action) => {
      console.error("Fetch bookings failed:", action.payload);
    })
    .addCase(createBooking.rejected, (state, action) => {
      console.error("Create booking failed:", action.payload);
    });
},

});

// export const { book } = bookingSlice.actions;
export default bookingSlice.reducer;
