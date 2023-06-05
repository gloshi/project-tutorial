import { StateSheme } from 'app/providers/StoreProvider';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading.test', () => {
    test('should work with filled state', () => {
        const state: DeepPartial<StateSheme> = {
            profile: {
                isLoading: true,
            },
        };
        expect(getProfileIsLoading(state as StateSheme)).toEqual(true);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSheme> = {};
        expect(getProfileIsLoading(state as StateSheme)).toEqual(undefined);
    });
});