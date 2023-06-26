import { StateSheme } from 'app/providers/StoreProvider';

export const getArticleCommentsIsLoading = (state: StateSheme) => state.articleDetailsComments?.isLoading;
export const getArticleCommentsError = (state: StateSheme) => state.articleDetailsComments?.error;
