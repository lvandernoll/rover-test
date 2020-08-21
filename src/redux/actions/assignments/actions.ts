import { createAction } from 'typesafe-actions';
import * as actionTypes from './action-types';
import { Assignment, ErrorResponse, AssignmentRequest } from 'interfaces';

export const fetchAssignments = createAction(actionTypes.FETCH_ASSIGNMENTS)();
export const fetchAssingmentsSuccess = createAction(
  actionTypes.FETCH_ASSIGNMENTS_SUCCESS,
)<Assignment[]>();
export const fetchAssignmentsFailed = createAction(
  actionTypes.FETCH_ASSIGNMENTS_FAILED,
)<ErrorResponse>();

export const postAssignment = createAction(actionTypes.POST_ASSIGNMENT)<
  AssignmentRequest
>();
export const postAssingmentSuccess = createAction(
  actionTypes.POST_ASSIGNMENT_SUCCESS,
)<AssignmentRequest>();
export const postAssignmentsFailed = createAction(
  actionTypes.POST_ASSIGNMENT_FAILED,
)<ErrorResponse>();