import { put, takeEvery, call } from 'redux-saga/effects';
import * as actionTypes from './action-types';
import * as actions from './actions';
import fetchApi from 'utils/fetchApi';
import { UserAuth, LoginResponse, ErrorResponse } from './actions';
import { ActionType } from 'typesafe-actions';
import { getAssignments } from '../assignments/saga';

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

function* login({ payload }: ActionType<typeof actions.login>) {
  const response = yield fetchToken(payload);
  if (!response.error) {
    yield put({ type: actionTypes.LOGIN_SUCCESS, payload: response });
    yield call(getAssignments);
  } else {
    yield put({ type: actionTypes.LOGIN_FAILED, payload: response });
  }
}

export default function* userSaga() {
  yield takeEvery(actionTypes.LOGIN, login);
}
