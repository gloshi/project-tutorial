import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { User, UserSchema } from '../types/user';
import { USER_LOCALSTORAGE_KEY } from 'shared/conts/localStorage';


const initialState:UserSchema = {
   
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
   setAuthData: (state,action: PayloadAction<User>) => {
    state.authDate = action.payload
   },
   initAuthData: (state) => {
    const user = localStorage.getItem(USER_LOCALSTORAGE_KEY)
    if(user){
      state.authDate = JSON.parse(user)
    }
   },
   logout: (state,action: PayloadAction<User>) => {
    state.authDate = undefined
    localStorage.removeItem(USER_LOCALSTORAGE_KEY)
   },
  },
  
})

export const { actions: userActions } = userSlice
export const {reducer: userReducer} = userSlice
