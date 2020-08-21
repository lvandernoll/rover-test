import { put, takeEvery, call } from 'redux-saga/effects';
import * as actionTypes from './action-types';
import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import {
  fetchAssignments,
  postAssignments,
} from 'services/http/assignmentRequest';

export function* getAssignments() {
  try {
    const response = yield fetchAssignments();
    if (response) {
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
  try {
    const response = yield postAssignments(payload);
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
  } catch (error) {
    yield put({
      type: actionTypes.POST_ASSIGNMENT_FAILED,
      payload: error,
    });
  }
}

export default function* assignmentsSaga() {
  yield takeEvery(actionTypes.POST_ASSIGNMENT, createAssignment);
}
