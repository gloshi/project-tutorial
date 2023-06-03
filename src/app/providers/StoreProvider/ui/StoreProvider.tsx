import { Provider } from "react-redux";
import { createReduxStore } from "../config/store";
import { StateSheme } from "../config/StateSheme";
import { ReactNode } from "react";
import {  ReducersMapObject } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: DeepPartial<StateSheme>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSheme>>;
}

const StoreProvider = (props: StoreProviderProps) => {
  const { children, initialState, asyncReducers } = props;

  const navigate = useNavigate();

  const store = createReduxStore(
    initialState as StateSheme,
    asyncReducers as ReducersMapObject<StateSheme>,
    navigate
  );

  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
