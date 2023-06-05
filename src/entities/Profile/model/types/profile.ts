import { Country } from "shared/conts/Country";
import { Currency } from "shared/conts/Currency";


export enum ValidateProfileErr {
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_AGE = 'INCORRECT_AGE',
    INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
    NO_DATA = "NO_DATA",
    SERVER_ERROR = "SERVER_ERROR"
} 

export interface Profile {
    first?: string;
    lastname?: string;
    age?: number,
    currency?: Currency,
    country?: Country | string;
    city?: string,
    username?: string;
    avatar?: string;
}

//для стейта 
export interface ProfileSchema {
    data?: Profile;
    form?: Profile
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    validateErr?: ValidateProfileErr[]
}
