import { StateSheme } from 'app/providers/StoreProvider';
import { getProfileReadOnly } from './getProfileReadOnly';

describe('getProfileReadOnly.test', () => {
    test('should work with filled state', () => {
        const state: DeepPartial<StateSheme> = {
            profile: {
                readonly: true,
            },
        };
        expect(getProfileReadOnly(state as StateSheme)).toEqual(true);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSheme> = {};
        expect(getProfileReadOnly(state as StateSheme)).toEqual(undefined);
    });
});