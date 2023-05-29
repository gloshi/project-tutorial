import { StateSheme } from "app/providers/StoreProvider";

export const getLoginPassword = (state:StateSheme) => state?.loginForm?.password || ''