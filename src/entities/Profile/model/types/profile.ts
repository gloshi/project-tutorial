import { Country } from "shared/conts/Country";
import { Currency } from "shared/conts/Currency";

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
}
