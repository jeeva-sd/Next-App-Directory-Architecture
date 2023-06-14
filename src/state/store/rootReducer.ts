import { combineReducers } from '@reduxjs/toolkit';
import { postReducer } from '../duck/posts';

const rootReducer = combineReducers({
  posts: postReducer,
});

export default rootReducer;