import { StateSheme } from "app/providers/StoreProvider"
import { getLoginUsername } from "./getLoginUsername"

describe('getLoginUsername test', () => {
    test('should return password', () => {
        const state: DeepPartial<StateSheme> = {
            loginForm: {
                username: 'gloshi'
            }
        }
        expect(getLoginUsername(state as StateSheme)).toEqual('gloshi')
    }),
    test('should work with empty value', () => {
        const state: DeepPartial<StateSheme> = {
        }
        expect(getLoginUsername(state as StateSheme)).toEqual('')
    })
})