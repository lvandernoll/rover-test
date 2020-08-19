import { ActionType, createReducer } from 'typesafe-actions';
import * as actions from './actions';
import { UserData } from './actions';

export interface UserState {
  token: string;
  error: string;
  user: UserData;
}
export type UserActions = ActionType<typeof actions>;

const initialState: UserState = {
  token: '',
  error: '',
  user: {
    email: '',
    firstName: '',
    lastName: '',
    roleId: null,
    roleLevel: null,
  },
};

export const userReducer = createReducer<UserState, UserActions>(initialState)
  .handleAction(actions.login, (state) => ({
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
    user: {
      email: '',
      firstName: '',
      lastName: '',
      roleId: null,
      roleLevel: null,
    },
  }))
  .handleAction(actions.getUserData, (state) => ({
    ...state,
    error: '',
  }))
  .handleAction(actions.userDataSuccess, (state, action) => ({
    ...state,
    user: action.payload,
  }))
  .handleAction(actions.userDataFail, (state, action) => ({
    ...state,
    error: action.payload.error,
  }));
