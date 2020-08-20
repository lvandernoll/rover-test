import { RootState } from './store';

export const getToken = (state: RootState) => state.user.token;
export const assignmentState = (state: RootState) => state.assignments;
export const postAssignmentSuccess = (state: RootState) =>
  state.assignments.success;
export const userState = (state: RootState) => state.user;
export const selectUserState = (state: RootState) => state.user;
export const selectToken = (state: RootState) => selectUserState(state).token;
export const selectcurrentUser = (state: RootState) =>
  selectUserState(state).currentUser;
export const selectUserRole = (state: RootState) =>
  selectcurrentUser(state)?.role;
export const selectUserRoleLevel = (state: RootState) =>
  selectUserRole(state)?.level;
