import {
  AnyAction, combineReducers, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { ReducerManager, StateSheme, StateShemeKey } from './StateSheme';

export function createReducerManager(initialReducers: ReducersMapObject<StateSheme>): ReducerManager {
  const reducers = { ...initialReducers };

  let combinedReducer = combineReducers(reducers);

  let keysToRemove: Array<StateShemeKey> = [];

  return {
      getReducerMap: () => reducers,
      reduce: (state: StateSheme, action: AnyAction) => {
          if (keysToRemove.length > 0) {
              state = { ...state };
              keysToRemove.forEach((key) => {
                  delete state[key];
              });
              keysToRemove = [];
          }
          return combinedReducer(state, action);
      },
      add: (key: StateShemeKey, reducer: Reducer) => {
          if (!key || reducers[key]) {
              return;
          }
          reducers[key] = reducer;

          combinedReducer = combineReducers(reducers);
      },
      remove: (key: StateShemeKey) => {
          if (!key || !reducers[key]) {
              return;
          }
          delete reducers[key];
          keysToRemove.push(key);
          combinedReducer = combineReducers(reducers);
      },
  };
}
  
