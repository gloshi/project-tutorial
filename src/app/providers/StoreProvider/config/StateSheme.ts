import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit"
import { CounterScheme } from "entities/Counter"
import { UserSchema } from "entities/User"
import { LoginSchema } from "features/AuthByName"

export interface StateSheme {
    counter: CounterScheme
    user: UserSchema
    //асинхронный редюсер, чтобы бандал был меньше
    loginForm?: LoginSchema
}
export type StateShemeKey = keyof StateSheme

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSheme>
    reduce: (state: StateSheme, action:AnyAction) => CombinedState<StateSheme>
    add: (key:StateShemeKey, reducer:Reducer) => void
    remove:  (key:StateShemeKey) => void
  }

export interface ReduxStoreWithManager extends EnhancedStore<StateSheme> {
    reducerManager: ReducerManager
}

