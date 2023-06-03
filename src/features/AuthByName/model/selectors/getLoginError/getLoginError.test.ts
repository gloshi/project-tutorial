import { StateSheme } from "app/providers/StoreProvider"
import { getLoginError } from "./getLoginError"

describe('getLoginError test', () => {
    test('should return err', () => {
        const state: DeepPartial<StateSheme> = {
            loginForm: {
                error: 'error error'
            }
        }
        expect(getLoginError(state as StateSheme)).toEqual('error error')
    }),
    test('should work with empty state', () => {
        const state: DeepPartial<StateSheme> = {
        }
        expect(getLoginError(state as StateSheme)).toEqual('error')
    })
})