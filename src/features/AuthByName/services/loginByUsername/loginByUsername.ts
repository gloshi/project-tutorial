import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { User } from '../../../../entities/User/model/types/user'
import { userActions } from 'entities/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/conts/localStorage'
import { ThunkConfig, ThunkExtraAtg } from 'app/providers/StoreProvider'


interface loginByUserNameProps {
    username: string
    password: string
}

export const loginByUserName = createAsyncThunk<User, loginByUserNameProps, ThunkConfig<string>>(
    'login/loginByUserName',
    async (dataLogin, ThunkApi) => {

        const { dispatch, extra, rejectWithValue } = ThunkApi

        try {
            const response = await extra.api.post<User>('/login', dataLogin)

            if (!response.data) {
                throw new Error()
            }
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
            dispatch(userActions.setAuthData(response.data))


            extra.navigate('/about')
            return response.data
        } catch (error) {
            console.log(error)
            return rejectWithValue('Вы ввели неправильно логин или пароль')
        }
    }
)