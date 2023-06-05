import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile, ValidateProfileErr } from '../../types/profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { ValidateProfile } from '../validateProfile/validateProfile';

export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<ValidateProfileErr[]>
    >(
        'profile/updateProfileData',
        async (_, thunkApi) => {
            const { extra, rejectWithValue, getState } = thunkApi;

            const formData = getProfileForm(getState())
            const errors = ValidateProfile(formData)
            if(errors.length){
                return rejectWithValue(errors)
            }
            try {
                const response = await extra.api.put<Profile>('/profile', formData);
                if(!response.data){
                    throw new Error
                }
                return response.data;
            } catch (e) {
                console.log(e);
                return rejectWithValue([ValidateProfileErr.SERVER_ERROR]);
            }
        },
    );
