import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type User = {
  username: string
  password: string
  name: string
}

type AuthState = {
  users: User[]
  currentUser: User | null
  error: string | null
}

const initialState: AuthState = {
  users: [
    {
      username: 'hannes',
      password: '1234',
      name: 'Hannes'
    },
    {
      username: 'eirik',
      password: '1234',
      name: 'Eirik'
    }
  ],
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
  }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer
