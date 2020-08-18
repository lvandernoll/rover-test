import { all } from 'redux-saga/effects';
import userSaga from 'redux/actions/user/saga';
import assignmentsSaga from './actions/assignments/saga';

export default function* rootSaga() {
  yield all([userSaga()]);
  yield all([assignmentsSaga()]);
}
