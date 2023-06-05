import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileErr } from 'entities/Profile';
import { ValidateProfile} from './validateProfile';

const data = {
    username: 'admin',
    age: 22,
    country: Country.Russia,
    lastname: 'komarov',
    first: 'asd',
    city: 'asf',
    currency: Currency.USD,
};

describe('validateProfileData.test', () => {
    test('success', async () => {
        const result = ValidateProfile(data);

        expect(result).toEqual([]);
    });

    test('without first and last name', async () => {
        const result = ValidateProfile({ ...data, first: '', lastname: '' });

        expect(result).toEqual([
            ValidateProfileErr.INCORRECT_USER_DATA,
        ]);
    });

    test('incorrect age', async () => {
        const result = ValidateProfile({ ...data, age: undefined });

        expect(result).toEqual([
            ValidateProfileErr.INCORRECT_AGE,
        ]);
    });

    test('incorrect country', async () => {
        const result = ValidateProfile({ ...data, country: undefined });

        expect(result).toEqual([
            ValidateProfileErr.INCORRECT_COUNTRY,
        ]);
    });

    test('incorrect all', async () => {
        const result = ValidateProfile({});

        expect(result).toEqual([
            ValidateProfileErr.INCORRECT_USER_DATA,
            ValidateProfileErr.INCORRECT_AGE,
            ValidateProfileErr.INCORRECT_COUNTRY,
        ]);
    });
});
