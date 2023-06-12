import { Story } from "@storybook/react";
import { StateSheme, StoreProvider } from "app/providers/StoreProvider";
import { articleDetailsReducer } from "entities/Article/model/slice/articleDetailsSlice";
import { profileReducer } from "entities/Profile";
import { loginReducer } from "features/AuthByName/model/slice/loginSlice";
import { ReducerList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

const defAsyncReducers: ReducerList= {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer
};

export const StoreDecorator =
  (
    state: DeepPartial<StateSheme>,
    asyncReducers?: ReducerList
  ) =>
  (StoryComponent: Story) =>
    (
      <StoreProvider initialState={state} asyncReducers={{...defAsyncReducers, ...asyncReducers}}>
        <StoryComponent />
      </StoreProvider>
    );
