import { StateSheme } from "app/providers/StoreProvider"
import { getProfileError} from "./getProfileError"

describe('getProfileError test', () => {
    test('should return err', () => {
       
        const state: DeepPartial<StateSheme> = {
                profile: {
                    error: '123'
                }
        }
        expect(getProfileError(state as StateSheme)).toEqual('123')
    }),
    test('should work with empty state', () => {
        const state: DeepPartial<StateSheme> = {
        }
        expect(getProfileError(state as StateSheme)).toEqual(undefined)
    })
})