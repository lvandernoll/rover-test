import { RootState } from './store';

export const userState = (state: RootState) => state.user;
export const getToken = (state: RootState) => state.user.token;
export const roleId = (state: RootState) => state.user.user.roleId;
