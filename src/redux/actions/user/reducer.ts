import { ActionType, createReducer } from 'typesafe-actions';
import * as actions from './actions';

export interface UserState {
  token: string;
  error: string;
}
export type UserActions = ActionType<typeof actions>;

const initialState: UserState = {
  token: '',
  error: '',
};

export const userReducer = createReducer<UserState, UserActions>(initialState)
  .handleAction(actions.login, (state, action) => ({
    ...state,
    error: '',
  }))
  .handleAction(actions.loginSuccess, (state, action) => ({
    ...state,
    token: action.payload.token,
  }))
  .handleAction(actions.loginFail, (state, action) => ({
    ...state,
    error: action.payload.error,
  }))
  .handleAction(actions.logout, (state) => ({
    ...state,
    token: '',
  }));
