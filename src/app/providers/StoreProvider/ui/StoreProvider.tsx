import { Provider } from "react-redux"
import { createReduxStore } from "../config/store"
import { StateSheme } from "../config/StateSheme"
import { ReactNode } from "react"
import { DeepPartial } from "@reduxjs/toolkit"

interface StoreProviderProps {
    children?: ReactNode
    initialState?: DeepPartial<StateSheme>
}

const StoreProvider = (props:StoreProviderProps) => {

    const {
        children,
        initialState
    } = props

    const store = createReduxStore(initialState as StateSheme)

  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}

export default StoreProvider