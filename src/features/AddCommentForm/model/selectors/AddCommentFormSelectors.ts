import { StateSheme } from 'app/providers/StoreProvider';

export const getAddCommentFormText = (state: StateSheme) => state.addCommentForm?.text;
export const getAddCommentFormError = (state: StateSheme) => state.addCommentForm?.error;