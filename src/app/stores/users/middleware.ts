import { all, put, takeLatest } from 'redux-saga/effects';
import { ApiService } from '@app/core/services/api.service';
import { GET_USER, GET_USERS, SET_USERS } from './types';

const api = new ApiService();

function* getUsers() {
  try {
    const res = yield api.get(['users']);
    yield put({
      type: SET_USERS,
      payload: res
    });
  } catch (error) {
    yield put({
      type: SET_USERS
    });
  }
}

function* getUser(payload) {
  try {
    const res = yield api.get(['user'], payload);
    yield put({
      type: SET_USERS,
      payload: res
    });
  } catch (error) {
    yield put({
      type: SET_USERS
    });
  }
}

export default function* userSaga() {
  yield all([takeLatest(GET_USERS, getUsers), takeLatest(GET_USER, getUser)]);
}
