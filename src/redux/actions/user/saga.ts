import { put, takeEvery, call } from 'redux-saga/effects';
import * as actionTypes from './action-types';
import * as actions from './actions';
import fetchApi from 'utils/fetchApi';
import { UserAuth, LoginResponse, ErrorResponse } from './actions';
import { ActionType } from 'typesafe-actions';

const fetchToken = (
  userAuth: UserAuth,
): Promise<LoginResponse | ErrorResponse> => {
  return fetchApi<LoginResponse | ErrorResponse>('/login', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    data: {
      email: userAuth.email + '@competa.com',
    },
  });
};

const fetchUser = (token: string): Promise<LoginResponse | ErrorResponse> => {
  return fetchApi<LoginResponse | ErrorResponse>('/users/me', {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      Authorization: token,
    },
  });
};

function* login({ payload }: ActionType<typeof actions.login>) {
  const response = yield call(fetchToken, payload);
  if (!response.error) {
    yield call(getUserData, response.token);
    yield put({ type: actionTypes.LOGIN_SUCCESS, payload: response });
  } else {
    yield put({ type: actionTypes.LOGIN_FAILED, payload: response });
  }
}

function* getUserData(token: string) {
  const response = yield call(fetchUser, token);
  if (!response.error) {
    yield put({ type: actionTypes.USER_DATA_SUCCESS, payload: response.user });
  } else {
    yield put({ type: actionTypes.USER_DATA_FAIL, payload: response });
  }
}

export default function* userSaga() {
  yield takeEvery(actionTypes.LOGIN, login);
}
