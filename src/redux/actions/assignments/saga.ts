import { put, takeEvery } from 'redux-saga/effects';
import * as actionTypes from './action-types';
import fetchApi from 'utils/fetchApi';
import { ErrorResponse } from '../user/actions';
import { select } from 'redux-saga/effects';
import { getToken } from 'redux/selectors';
import { Assignment } from 'interfaces';

const fetchAssignments = (token: string) => {
  return fetchApi<Assignment[] | ErrorResponse>('/assignments', {
    headers: {
      'content-type': 'application/json',
      Authorization: token,
    },
  });
};

export function* assignments() {
  const token = yield select(getToken);
  const response = yield fetchAssignments(token);
  if (token) {
    yield put({
      type: actionTypes.FETCH_ASSIGNMENTS_SUCCESS,
      payload: response,
    });
  } else {
    yield put({
      type: actionTypes.FETCH_ASSIGNMENTS_FAILED,
      payload: response,
    });
  }
}

export default function* assignmentsSaga() {
  yield takeEvery(actionTypes.FETCH_ASSIGNMENTS, assignments);
}
