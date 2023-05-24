import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { CounterScheme } from '../types/CounterSchema'

const initialState: CounterScheme = {
    value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {

      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
   
  },
})

export const { actions: counterActions } = counterSlice
export const {reducer: counterReducer} = counterSlice
