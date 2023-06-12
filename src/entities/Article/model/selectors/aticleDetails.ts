import { StateSheme } from 'app/providers/StoreProvider';

export const getArticleDetailsData = (state: StateSheme) => state.articleDetails?.data;
export const getArticleDetailsIsLoading = (state: StateSheme) => state.articleDetails?.isLoading || false;
export const getArticleDetailsError = (state: StateSheme) => state.articleDetails?.error;
