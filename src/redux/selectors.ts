import { RootState } from './store';

export const userState = (state: RootState) => state.user;
export const token = (state: RootState) => state.user.token;
