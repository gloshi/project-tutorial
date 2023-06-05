import { StateSheme } from "app/providers/StoreProvider"
import { getProfileData } from "./getProfileData"
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";

describe('getProfileData test', () => {
    test('should return err', () => {
        const data = {
            username: 'admin',
            age: 22,
            country: Country.Russia,
            lastname: 'ulbi tv',
            first: 'asd',
            city: 'asf',
            currency: Currency.USD,
        };
        const state: DeepPartial<StateSheme> = {
                profile: {
                    data

                }
        }
        expect(getProfileData(state as StateSheme)).toEqual(data)
    }),
    test('should work with empty state', () => {
        const state: DeepPartial<StateSheme> = {
        }
        expect(getProfileData(state as StateSheme)).toEqual(undefined)
    })
})