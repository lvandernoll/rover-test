import { ActionType, createReducer } from 'typesafe-actions';
import * as actions from './actions';
import { Assignment } from 'interfaces';

export interface AssignmentState {
  assignments: Assignment[];
  error: string;
  isLoading: boolean;
  success: boolean;
}

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
  }))
  .handleAction(actions.fetchAssingmentsSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    assignments: action.payload,
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
