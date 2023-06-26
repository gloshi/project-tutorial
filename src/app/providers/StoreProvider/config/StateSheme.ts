import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit"
import { AxiosInstance } from "axios"
import { ArticleDetailsSchema } from "entities/Article"
import { CounterScheme } from "entities/Counter"
import { ProfileSchema } from "entities/Profile"
import { UserSchema } from "entities/User"
import { AddCommentFormSchema } from "features/AddCommentForm"
import { LoginSchema } from "features/AuthByName"
import { ArticleDetailsCommentSchema } from "pages/ArticleDetailPage"
import { NavigateOptions, To } from "react-router-dom"

export interface StateSheme {
    counter: CounterScheme
    user: UserSchema
    //асинхронный редюсер, чтобы бандал был меньше
    loginForm?: LoginSchema
    profile: ProfileSchema
    articleDetails?: ArticleDetailsSchema
    articleDetailsComments?: ArticleDetailsCommentSchema
    addCommentForm?: AddCommentFormSchema
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
    state: StateSheme
}
