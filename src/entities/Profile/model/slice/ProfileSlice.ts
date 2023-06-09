import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Profile, ProfileSchema } from '../types/profile';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const initialState:ProfileSchema = {
   readonly: true,
   isLoading: false,
   error: undefined,
   data: undefined 
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadonly: (state,action : PayloadAction<boolean>) => {
      state.readonly = action.payload
    },
    cancelEdit: (state) => {
      state.readonly = true,
      state.validateErr = undefined
      state.form = state.data
    },
    updateProfile: (state,action : PayloadAction<Profile>) => {
      state.form = {
        ...state.form,
        ...action.payload
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state, action) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchProfileData.fulfilled, (state, 
        action:PayloadAction<Profile>
        ) => {
        state.isLoading = false
        state.data = action.payload
        state.form = action.payload
      })
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.error = action.payload
        state.isLoading = false
      })
      //update profile data
      .addCase(updateProfileData.pending, (state, action) => {
        state.validateErr = undefined
        state.isLoading = true
      })
      .addCase(updateProfileData.fulfilled, (state, 
        action:PayloadAction<Profile>
        ) => {
        state.isLoading = false
        state.data = action.payload
        state.form = action.payload
        state.readonly = true        
        state.validateErr = undefined

      })
      .addCase(updateProfileData.rejected, (state, action) => {
        state.validateErr = action.payload
        state.isLoading = false
      })
  },
})

export const { actions: profileActions } = profileSlice
export const {reducer: profileReducer} = profileSlice