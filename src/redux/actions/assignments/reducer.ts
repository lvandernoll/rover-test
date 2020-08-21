import { ActionType, createReducer } from 'typesafe-actions';
import * as actions from './actions';
import { AssignmentState } from 'interfaces';

export type AssignmentActions = ActionType<typeof actions>;

const initialState: AssignmentState = {
  assignments: [],
  error: '',
  isLoading: true,
  success: false,
};

export const assignmentReducer = createReducer<
  AssignmentState,
  AssignmentActions
>(initialState)
  .handleAction(actions.fetchAssignments, (state) => ({
    ...state,
    error: '',
    isLoading: false,
    success: false,
  }))
  .handleAction(actions.fetchAssingmentsSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    assignments: action.payload,
    success: false,
  }))
  .handleAction(actions.fetchAssignmentsFailed, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.payload.error,
  }))
  .handleAction(actions.postAssignment, (state) => ({
    ...state,
    error: '',
    isLoading: false,
    success: false,
  }))
  .handleAction(actions.postAssingmentSuccess, (state) => ({
    ...state,
    error: '',
    isLoading: false,
    success: true,
  }))
  .handleAction(actions.postAssignmentsFailed, (state, action) => ({
    ...state,
    error: action.payload.error,
    isLoading: false,
    success: false,
  }));
