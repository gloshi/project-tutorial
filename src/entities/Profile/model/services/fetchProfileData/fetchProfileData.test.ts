import { userActions } from 'entities/User';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { fetchProfileData } from './fetchProfileData';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsync/TestAsyncThunk';

const data = {
    username: 'admin',
    age: 22,
    country: Country.Russia,
    lastname: 'komarov',
    first: 'asd',
    city: 'asf',
    currency: Currency.USD,
};

describe('fetchProfileData.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error login', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('1');

        expect(result.meta.requestStatus).toBe('fulfilled');
    });
});
