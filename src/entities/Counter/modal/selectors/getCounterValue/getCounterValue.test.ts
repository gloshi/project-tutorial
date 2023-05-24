import { DeepPartial } from "@reduxjs/toolkit";
import { getCounterValue } from "./getCounterValue";
import { StateSheme } from "app/providers/StoreProvider";

describe('getCounterValue', () => {
    test('should return counter value', () => {
        const state: DeepPartial<StateSheme> = {
            counter: { value: 10 },
        };
        expect(getCounterValue(state as StateSheme)).toEqual( 10 );
    });
});
