import { put, takeEvery } from 'redux-saga/effects';
import * as actionTypes from './action-types';
import * as actions from './actions';
import fetchApi from 'utils/fetchApi';
import { UserAuth, LoginResponse, ErrorResponse } from './actions';
import { ActionType } from 'typesafe-actions';

const fetchToken = (
  userAuth: UserAuth,
): Promise<LoginResponse | ErrorResponse> => {
  return fetchApi<LoginResponse | ErrorResponse>('api/login', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    data: {
      email: userAuth.email + '@competa.com',
    },
  });
};

function* login({ payload }: ActionType<typeof actions.login>) {
  const response = yield fetchToken(payload);
  if (!response.error) {
    yield put({ type: actionTypes.LOGIN_SUCCESS, payload: response });
  } else {
    yield put({ type: actionTypes.LOGIN_FAILED, payload: response });
  }
}

export default function* userSaga() {
  yield takeEvery(actionTypes.LOGIN, login);
}
