import {  CombinedState, Reducer, ReducersMapObject, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { StateSheme, ThunkExtraAtg } from './StateSheme'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { createReducerManager } from './reducerManager'
import { useDispatch } from 'react-redux'
import { $api } from 'shared/api/api'
import { NavigateOptions, To } from 'react-router-dom'

export function createReduxStore(

  initialState?: StateSheme,
  asyncReducers?: ReducersMapObject<StateSheme>,
  navigate?: (to: To, options?: NavigateOptions) => void, 
  ) {
//@ts-ignore
  const rootReducer: ReducersMapObject<StateSheme> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
    
  }
  const extraArg: ThunkExtraAtg = {
    api: $api,
    //@ts-ignore
    navigate,
};
  const reducerManager = createReducerManager(rootReducer)

  const store = configureStore({
    
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSheme>>,
    devTools: _IS_DEV_,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: extraArg
      },
    }),
  })

  //@ts-ignore
  store.reducerManager = reducerManager;
  return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
