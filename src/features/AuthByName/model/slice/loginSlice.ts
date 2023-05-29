import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { LoginSchema } from '../types/LoginSchema'
import { loginByUserName } from 'features/AuthByName/services/loginByUsername/loginByUsername';

const initialState: LoginSchema = {
  isLoading: false,
  username: '',
  password: '',
};

export const LoginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state,action:PayloadAction<string>) => {
        state.username = action.payload
    },
    setPassword: (state,action:PayloadAction<string>) => {
      state.password = action.payload
    },
   
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginByUserName.pending, (state, action) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(loginByUserName.fulfilled, (state, action) => {
        state.isLoading = false

      })
      .addCase(loginByUserName.rejected, (state, action) => {
        state.error = action.payload
        state.isLoading = false
      })
  },
})

export const { actions: loginActions } = LoginSlice
export const {reducer: loginReducer} = LoginSlice
