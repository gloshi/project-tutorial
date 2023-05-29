import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { User } from '../../../../entities/User/model/types/user'
import { userActions } from 'entities/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/conts/localStorage'
import { json } from 'stream/consumers'


interface loginByUserNameProps {
    username: string
    password: string
}

export const loginByUserName = createAsyncThunk<User, loginByUserNameProps, {rejectValue: string}>(
    'login/loginByUserName',
    async (dataLogin, thunkAPI) => {
        try {
            const response = await axios.post<User>('http://localhost:8000/login', dataLogin)
            if(!response.data){
                throw new Error()
            }
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
            thunkAPI.dispatch(userActions.setAuthData(response.data))
            return response.data
        } catch (error) {
            console.log(error)
            return thunkAPI.rejectWithValue('Вы ввели неправильно логин или пароль')
        }
    }
)