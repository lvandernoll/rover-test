import { put, takeEvery, call } from 'redux-saga/effects';
import * as actionTypes from './action-types';
import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { fetchToken, fetchUser } from 'services/http/userRequest';

function* login({ payload }: ActionType<typeof actions.login>) {
  const response = yield call(fetchToken, payload);
  try {
    yield call(getUserData, response.token);
    yield put({ type: actionTypes.LOGIN_SUCCESS, payload: response });
    if (response.error) {
      yield put({ type: actionTypes.LOGIN_FAILED, payload: response });
    }
  } catch (error) {
    yield put({ type: actionTypes.LOGIN_FAILED, payload: error });
  }
}

function* getUserData(token: string) {
  const response = yield call(fetchUser, token);
  if (!response.error) {
    yield put({ type: actionTypes.USER_DATA_SUCCESS, payload: response });
  } else {
    yield put({ type: actionTypes.USER_DATA_FAIL, payload: response });
  }
}

export default function* userSaga() {
  yield takeEvery(actionTypes.LOGIN, login);
}
