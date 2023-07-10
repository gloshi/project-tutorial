import {
    EntityState,
    PayloadAction,
    createEntityAdapter,
    createSlice,
  } from '@reduxjs/toolkit'
import { StateSheme } from 'app/providers/StoreProvider'
import { Article, ArticleView } from 'entities/Article'
import { Comment } from 'entities/Comment/model/types/comment'
import { articlePageSchema } from '../types/articlePageSchema'
import { fetchArticlesList } from '../services/fetchArticleList/fetchArticleList'
  
  const ArticleAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id
  })
  
export const getArticles = ArticleAdapter.getSelectors<StateSheme>(
    (state) => state.articlesPage || ArticleAdapter.getInitialState()
  )

  const ArticlePageSlice = createSlice({
    name: 'ArticlePageSlice',
    initialState: ArticleAdapter.getInitialState<articlePageSchema>({
      isLoading: false,
      error: undefined,
      ids: [],
      entities: {},
      view: ArticleView.SMALL
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticlesList.fulfilled, (
                state,
                action: PayloadAction<Article[]>,
            ) => {
                state.isLoading = false;
                ArticleAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
   
  })
  
  export const { reducer: ArticlePageReducer, actions: ArticlesPageActions } = ArticlePageSlice;

  
