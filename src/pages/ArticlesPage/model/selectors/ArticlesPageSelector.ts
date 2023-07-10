import { StateSheme } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article';

export const getArticlesPageIsLoading = (state: StateSheme) => state.articlesPage?.isLoading || false;
export const getArticlesPageError = (state: StateSheme) => state.articlesPage?.error;
export const getArticlesPageView = (state: StateSheme) => state.articlesPage?.view || ArticleView.SMALL;
