import { StateSheme } from "app/providers/StoreProvider";

export const getLoginError = (state:StateSheme) => state?.loginForm?.error || 'error'