import { FC, useEffect } from "react";
import { useDispatch, useStore } from "react-redux";
import { ReduxStoreWithManager } from "app/providers/StoreProvider";
import { StateShemeKey } from "app/providers/StoreProvider/config/StateSheme";
import { Reducer } from "@reduxjs/toolkit";

export type ReducerList = {
  [name in StateShemeKey]?: Reducer;
};

type ReducersListEntry = [StateShemeKey, Reducer];

interface DynamicModuleLoaderProps {
  reducers: ReducerList;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
  const { children, reducers, removeAfterUnmount = true } = props;
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();
  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]) => {
      store.reducerManager.add(name as StateShemeKey, reducer);
      dispatch({ type: `@INIT ${name} reducer` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name, reducer]) => {
          store.reducerManager.remove(name as StateShemeKey);
          dispatch({ type: `@DESTROY ${name} reducer` });
        });
      }
    };
  }, []);
  return <>{children}</>;
};
