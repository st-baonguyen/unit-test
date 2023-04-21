import { all, put, takeLatest } from 'redux-saga/effects';
import { ApiService } from '@app/core/services/api.service';
import { GET_USER, GET_USERS } from './types';

const api = new ApiService();

function* getUsers() {
  try {
    const res = yield api.get(['/users']);
    console.log('res', res);
    yield put({
      type: GET_USERS,
      payload: res
    });
  } catch (error) {
    yield put({
      type: GET_USERS
    });
  }
}

function* getUser(payload) {
  try {
    const res = yield api.get(['users'], payload);
    yield put({
      type: GET_USER,
      payload: res
    });
  } catch (error) {
    yield put({
      type: GET_USER
    });
  }
}

export default function* userSagas() {
  yield all([takeLatest(GET_USERS, getUsers)]);
  yield all([takeLatest(GET_USER, getUser)]);
}
