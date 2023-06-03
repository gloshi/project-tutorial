import { StateSheme } from "app/providers/StoreProvider"
import { getLoginIsLoading } from "./getLoginIsLoading"

describe('getLoginIsLoading test', () => {
    test('should return isloading', () => {
        const state: DeepPartial<StateSheme> = {
            loginForm: {
                isLoading: true
            }
        }
        expect(getLoginIsLoading(state as StateSheme)).toEqual(true)
    }),
    test('should work with false', () => {
        const state: DeepPartial<StateSheme> = {
        }
        expect(getLoginIsLoading(state as StateSheme)).toEqual(false)
    })
})