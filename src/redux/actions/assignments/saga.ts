import { put, takeEvery, call } from 'redux-saga/effects';
import * as actionTypes from './action-types';
import * as actions from './actions';
import fetchApi from 'utils/fetchApi';
import { ErrorResponse } from '../user/actions';
import { select } from 'redux-saga/effects';
import { getToken } from 'redux/selectors';
import { Assignment, AssignmentRequest } from 'interfaces';
import { ActionType } from 'typesafe-actions';

const fetchAssignments = (token: string) => {
  return fetchApi<Assignment[] | ErrorResponse>('/assignments', {
    headers: {
      'content-type': 'application/json',
      Authorization: token,
    },
  });
};

const postAssignments = (token: string, assignmentData: AssignmentRequest) => {
  return fetchApi<Assignment[] | ErrorResponse>('/assignments', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      Authorization: token,
    },
    data: {
      ...assignmentData,
    },
  });
};

export function* getAssignments() {
  const token = yield select(getToken);
  const response = yield fetchAssignments(token);
  try {
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
  } catch (error) {
    yield put({
      type: actionTypes.FETCH_ASSIGNMENTS_FAILED,
      payload: error,
    });
  }
}

function* createAssignment({
  payload,
}: ActionType<typeof actions.postAssignment>) {
  const token = yield select(getToken);
  const response = yield postAssignments(token, payload);
  if (!response.error) {
    yield put({
      type: actionTypes.POST_ASSIGNMENT_SUCCESS,
    });
    yield call(getAssignments);
  } else {
    yield put({
      type: actionTypes.POST_ASSIGNMENT_FAILED,
      payload: response.error,
    });
  }
}

export default function* assignmentsSaga() {
  yield takeEvery(actionTypes.POST_ASSIGNMENT, createAssignment);
}
