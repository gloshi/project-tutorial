import { ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { StateSheme } from './StateSheme'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { createReducerManager } from './reducerManager'

export function createReduxStore(initialState?: StateSheme) {

  const rootReducer: ReducersMapObject<StateSheme> = {
    counter: counterReducer,
    user: userReducer,

  }

  const reducerManager = createReducerManager(rootReducer)

  const store = configureStore<StateSheme>({
    reducer: reducerManager.reduce,
    devTools: _IS_DEV_,
    preloadedState: initialState
  })

  //@ts-ignore
  store.reducerManager = reducerManager;
  return store
}

