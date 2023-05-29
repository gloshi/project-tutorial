import { StateSheme } from "app/providers/StoreProvider";

export const getLoginIsLoading = (state:StateSheme) => state?.loginForm?.isLoading || false