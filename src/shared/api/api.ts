import axios from "axios";
import { USER_LOCALSTORAGE_KEY } from "shared/conts/localStorage";

//если не разработка то реальный адрес продакшена
const baseUrl = _IS_DEV_ ? 'http://localhost:8000/' : 'http://localhost:8000/'

export const $api = axios.create({
    baseURL: baseUrl,
    headers: {
        authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || '' 
    }
})