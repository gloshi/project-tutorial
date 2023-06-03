import { Country, Currence } from "shared/conts/common";

export interface Profile {
    first: string;
    lastname: string;
    age: 22,
    currency: Currence,
    country: Country;
    city: string,
    username: string;
    avatar: string;
}

//для стейта 
export interface ProfileSchema {
    data?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
}
