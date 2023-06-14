import { all } from 'redux-saga/effects';
import { watchFetchPosts } from '../duck/posts/sagas';

export default function* rootSaga() {
  yield all([
    watchFetchPosts(),
  ]);
}