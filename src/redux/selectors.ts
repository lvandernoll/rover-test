import { RootState } from './store';

//TODO Move selectors to their own files

// Assignments
export const selectAssignmentState = (state: RootState) => state.assignments;
export const selectAssignments = (state: RootState) =>
  selectAssignmentState(state).assignments;
export const selectAssignmentLoadingState = (state: RootState) =>
  selectAssignmentState(state).isLoading;
export const selectAssignmentErrorState = (state: RootState) =>
  selectAssignmentState(state).error;
export const selectPostAssignmentSuccess = (state: RootState) =>
  selectAssignmentState(state).success;

//Users
export const selectUserState = (state: RootState) => state.user;
export const selectToken = (state: RootState) => selectUserState(state).token;
export const selectCurrentUser = (state: RootState) =>
  selectUserState(state).currentUser;
export const selectUserFullName = (state: RootState) => {
  const userState = selectUserState(state).currentUser;
  return `${userState?.firstName} ${userState?.lastName}`;
};
export const selectUserRole = (state: RootState) =>
  selectCurrentUser(state)?.role;
export const selectUserRoleLevel = (state: RootState) =>
  selectUserRole(state)?.level;
