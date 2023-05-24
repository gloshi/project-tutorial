import { counterActions, counterReducer } from "./CounterSlice";
import { CounterScheme } from "../types/CounterSchema";

describe('counter decrement', () => {
    test('should return counter value', () => {
        const state: CounterScheme = {value: 10};
        expect(counterReducer(state,counterActions.decrement())).toEqual({value:9});
    });
});
describe('counter increment', () => {
    test('should return counter value', () => {
        const state: CounterScheme = {value: 10};
        expect(counterReducer(state,counterActions.increment())).toEqual({value:11});
    });
});


describe('empty state', () => {
    test('should return counter value', () => {
        expect(counterReducer(undefined,counterActions.increment())).toEqual({value:1});
    });
});
