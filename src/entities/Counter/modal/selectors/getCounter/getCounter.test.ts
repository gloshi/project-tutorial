import { getCounter } from "./getCounter"
import { StateSheme } from "app/providers/StoreProvider"

describe('getCounter', () => {
    test('should return counter value', () => {
        const state: DeepPartial<StateSheme> = {
            counter: { value: 10 },
        };
        expect(getCounter(state as StateSheme)).toEqual({ value: 10 });
    });
});
