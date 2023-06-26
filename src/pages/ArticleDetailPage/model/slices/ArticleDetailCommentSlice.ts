import {
    EntityState,
    PayloadAction,
    createEntityAdapter,
    createSlice,
  } from '@reduxjs/toolkit'
import { StateSheme } from 'app/providers/StoreProvider'
import { Comment } from 'entities/Comment/model/types/comment'
import { ArticleDetailsCommentSchema } from '../types/ArticleDetailsCommentSchema'
import { fetchCommentsByArticleId } from '../services/fetchCommentsById/fetchCommentsById'
  
  const commentsAdapter = createEntityAdapter<Comment>({
    selectId: (comment) => comment.id
  })
  
export const getArticleComments = commentsAdapter.getSelectors<StateSheme>(
    (state) => state.articleDetailsComments || commentsAdapter.getInitialState()
  )

  const ArticleDetailsCommentsSlice = createSlice({
    name: 'comments',
    initialState: commentsAdapter.getInitialState<ArticleDetailsCommentSchema>({
      isLoading: false,
      error: undefined,
      ids: [],
      entities: {}
    }),
    reducers: {
    
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticleId.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchCommentsByArticleId.fulfilled, (
                state,
                action: PayloadAction<Comment[]>,
            ) => {
                state.isLoading = false;
                commentsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
  })
  
  export const { reducer: articleDetailsCommentsReducer } = ArticleDetailsCommentsSlice;

  
