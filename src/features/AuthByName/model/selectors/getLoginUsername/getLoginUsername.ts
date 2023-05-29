import { StateSheme } from "app/providers/StoreProvider";

export const getLoginUsername = (state:StateSheme) => state?.loginForm?.username || ''