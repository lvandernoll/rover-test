import { createAction } from 'typesafe-actions';
import * as actionTypes from './action-types';
import { Assignment, ErrorResponse } from 'interfaces';

export const fetchAssignments = createAction(actionTypes.FETCH_ASSIGNMENTS)<
  Assignment
>();
export const fetchAssingmentsSuccess = createAction(
  actionTypes.FETCH_ASSIGNMENTS_SUCCESS,
)<Assignment[]>();
export const fetchAssignmentsFailed = createAction(
  actionTypes.FETCH_ASSIGNMENTS_FAILED,
)<ErrorResponse>();

export const postAssignment = createAction(actionTypes.POST_ASSIGNMENT)<
  Assignment
>();
export const postAssingmentSuccess = createAction(
  actionTypes.POST_ASSIGNMENT_SUCCESS,
)<Assignment[]>();
export const postAssignmentsFailed = createAction(
  actionTypes.POST_ASSIGNMENT_FAILED,
)<ErrorResponse>();
