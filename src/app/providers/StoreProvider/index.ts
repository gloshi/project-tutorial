import StoreProvider from "./ui/StoreProvider";
import { createReduxStore ,AppDispatch} from "./config/store";
import type { StateSheme,ReduxStoreWithManager,ThunkExtraAtg,ThunkConfig } from "./config/StateSheme";
export {
    createReduxStore,
    StoreProvider,
    StateSheme,
    ReduxStoreWithManager,
    AppDispatch,
    ThunkExtraAtg,
    ThunkConfig
}
