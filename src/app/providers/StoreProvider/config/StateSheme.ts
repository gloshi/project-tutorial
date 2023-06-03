import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit"
import { AxiosInstance } from "axios"
import { CounterScheme } from "entities/Counter"
import { ProfileSchema } from "entities/Profile"
import { UserSchema } from "entities/User"
import { LoginSchema } from "features/AuthByName"
import { NavigateOptions, To } from "react-router-dom"

export interface StateSheme {
    counter: CounterScheme
    user: UserSchema
    //асинхронный редюсер, чтобы бандал был меньше
    loginForm?: LoginSchema
    profile: ProfileSchema
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

export interface ThunkExtraAtg {
    api: AxiosInstance
    navigate: (to: To, options?: NavigateOptions) => void, 

}
export interface ThunkConfig<T> {
    rejectValue: T
    extra: ThunkExtraAtg
}
