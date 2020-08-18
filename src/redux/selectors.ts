import { RootState } from './store';

export const getToken = (state: RootState) => state.user.token;
export const userState = (state: RootState) => state.user;
