import { all, fork } from 'redux-saga/effects';
import userSaga from './users/middleware';

// We `fork()` these tasks so they execute in the background.
export function* rootSagas() {
  yield all([fork(userSaga)]);
}
