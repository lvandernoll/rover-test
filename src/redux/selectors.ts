import { RootState } from './store';

export const userState = (state: RootState) => state.user;
export const getToken = (state: RootState) => userState(state).token;
export const getUserRole = (state: RootState) =>
  userState(state).currentUser.role;
export const getUserRoleLevel = (state: RootState) => getUserRole(state).level;
