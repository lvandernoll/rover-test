import { RootState } from './store';

export const getToken = (state: RootState) => state.user.token;
export const assignmentState = (state: RootState) => state.assignments;
export const postAssignmentSuccess = (state: RootState) =>
  state.assignments.success;
export const userState = (state: RootState) => state.user;
