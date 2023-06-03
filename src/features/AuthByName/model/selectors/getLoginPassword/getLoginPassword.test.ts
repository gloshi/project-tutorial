import { StateSheme } from "app/providers/StoreProvider"
import { getLoginPassword } from "./getLoginPassword"

describe('getLoginPassword test', () => {
    test('should return password', () => {
        const state: DeepPartial<StateSheme> = {
            loginForm: {
                password: '123'
            }
        }
        expect(getLoginPassword(state as StateSheme)).toEqual('123')
    }),
    test('should work with empty value', () => {
        const state: DeepPartial<StateSheme> = {
        }
        expect(getLoginPassword(state as StateSheme)).toEqual('')
    })
})