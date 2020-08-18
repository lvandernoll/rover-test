import { ActionType, createReducer } from 'typesafe-actions';
import * as actions from './actions';
import { Assignment } from 'interfaces';

export interface AssignmentState {
  assignments: Assignment[];
  error: string;
  isLoading: boolean;
}

export type AssignmentActions = ActionType<typeof actions>;

const initialState: AssignmentState = {
  assignments: [],
  error: '',
  isLoading: false,
};

export const assignmentReducer = createReducer<
  AssignmentState,
  AssignmentActions
>(initialState)
  .handleAction(actions.fetchAssignments, (state) => ({
    ...state,
    error: '',
    isloading: true,
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
  }));
