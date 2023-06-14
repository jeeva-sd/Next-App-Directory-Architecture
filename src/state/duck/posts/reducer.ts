import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PostState } from './types';

const initialState: PostState = {
  loading: false,
  post: [],
};

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    fetchPost: (state: PostState) => {
      state.loading = true;
      state.post = initialState.post;
    },
    fetchPostSuccess: (state: PostState, action: PayloadAction<any>) => {
      state.loading = false;
      state.post = action.payload;
    },
    fetchPostError: (state: PostState) => {
      state.loading = false;
      state.post = initialState.post;
    },
  }
});

export const { fetchPost, fetchPostSuccess, fetchPostError } = postSlice.actions;
export const { reducer: postReducer } = postSlice;
