import { configureStore } from '@reduxjs/toolkit'
import { StateSheme } from './StateSheme'
import { counterReducer } from 'entities/Counter'

export function createReduxStore(initialState?:StateSheme){
    return configureStore<StateSheme>({
        reducer: {
          counter: counterReducer
        },
        devTools: _IS_DEV_,
        preloadedState: initialState
      })
}

