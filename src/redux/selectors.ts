import { RootState } from './store';

export const selectUserState = (state: RootState) => state.user;
export const selectToken = (state: RootState) => selectUserState(state).token;
export const selectcurrentUser = (state: RootState) =>
  selectUserState(state).currentUser;
export const selectUserRole = (state: RootState) =>
  selectcurrentUser(state)?.role;
export const selectUserRoleLevel = (state: RootState) =>
  selectUserRole(state)?.level;
