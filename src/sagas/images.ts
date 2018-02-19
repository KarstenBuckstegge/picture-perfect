import { put, call, takeLatest } from 'redux-saga/effects';

import { FETCH_IMAGES_REQUESTED, FETCH_IMAGES_SUCCESS } from '../actions';

const api = (url: string) => fetch(url).then(res => res.json());

function* fetchImages() {
  try {
    const image = yield call(api, 'http://echo.jsontest.com/url/abc/url/def');
    yield put({ type: FETCH_IMAGES_SUCCESS, payload: image.url });
  } catch (e) {
    console.error('FETCH IMAGES FAILED', e);
  }
}

export function* ImagesSaga() {
  yield takeLatest(FETCH_IMAGES_REQUESTED, fetchImages);
}
