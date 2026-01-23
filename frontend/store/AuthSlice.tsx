// authSlice.ts
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'

type User = {
  id: string
  username: string
  password: string
  name: string
}

type AuthState = {
  users: User[]
  currentUser: User | null
  error: string | null
}

// Async thunk för att hämta användare
export const fetchUsers = createAsyncThunk<User[]>(
  'auth/fetchUsers',
  async (_, thunkAPI) => {
    try {
      const response = await fetch('http://localhost:8080/users')
      if (!response.ok) throw new Error('Kunde inte hämta users')
      const data = (await response.json()) as User[]
    console.log("Fetched users:", data)
      return data
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

const initialState: AuthState = {
  users: [],
  currentUser: null,
  error: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(
      state,
      action: PayloadAction<{ username: string; password: string }>
    ) {
      const user = state.users.find(
        u =>
          u.username === action.payload.username &&
          u.password === action.payload.password
      )

      if (user) {
        state.currentUser = user
        state.error = null
      } else {
        state.error = 'Fel användarnamn eller lösenord'
      }
    },
    logout(state) {
      state.currentUser = null
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload 
        state.error = null
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.error = action.payload as string
      })
  }
})
export const { login, logout } = authSlice.actions
export default authSlice.reducer
