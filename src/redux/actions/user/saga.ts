import { put, takeEvery, call } from 'redux-saga/effects';
import * as actionTypes from './action-types';
import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { fetchToken, fetchUser } from 'services/http/userRequest';
import { getAssignments } from '../assignments/saga';

function* login({ payload }: ActionType<typeof actions.login>) {
  try {
    const response = yield call(fetchToken, payload);
    if (response.token) {
      yield put({ type: actionTypes.LOGIN_SUCCESS, payload: response });
    } else {
      yield put({ type: actionTypes.LOGIN_FAILED, payload: response });
    }
  } catch (error) {
    yield put({ type: actionTypes.LOGIN_FAILED, payload: error });
  }
}

function* loadDataAfterLogin() {
  yield call(getUserData);
  yield call(getAssignments);
}

function* getUserData() {
  try {
    const response = yield call(fetchUser);
    if (!response.error) {
      yield put({ type: actionTypes.USER_DATA_SUCCESS, payload: response });
    } else {
      yield put({ type: actionTypes.USER_DATA_FAIL, payload: response });
    }
  } catch (error) {
    yield put({ type: actionTypes.USER_DATA_FAIL, payload: error });
  }
}

export default function* userSaga() {
  yield takeEvery(actionTypes.LOGIN, login);
  yield takeEvery(actionTypes.LOGIN_SUCCESS, loadDataAfterLogin);
}
