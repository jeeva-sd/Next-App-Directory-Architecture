import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchPostSuccess, fetchPostError } from './reducer';
import { service } from '~/services';

export function* fetchPostSaga(action: ReturnType<any>): Generator {
  try {
    const post: any = yield call(service.posts.getPost, action.payload);
    yield put(fetchPostSuccess(post));
  } catch (error) {
    yield put(fetchPostError());
    console.error(error);
  }
}

export function* watchFetchPosts() {
  yield takeLatest('posts/fetchPost', fetchPostSaga);
}