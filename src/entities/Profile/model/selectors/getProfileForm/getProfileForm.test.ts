import { StateSheme } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
    test('should return error', () => {
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
                form: data,
            },
        };
        expect(getProfileForm(state as StateSheme)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSheme> = {};
        expect(getProfileForm(state as StateSheme)).toEqual(undefined);
    });
});
