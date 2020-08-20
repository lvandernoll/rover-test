import { all } from 'redux-saga/effects';
import userSaga from 'redux/actions/user/saga';

export default function* rootSaga() {
  yield all([userSaga()]);
}
