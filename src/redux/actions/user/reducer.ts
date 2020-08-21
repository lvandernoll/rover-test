import { ActionType, createReducer } from 'typesafe-actions';
import * as actions from './actions';
import { UserData } from 'interfaces';

export interface UserState {
  token: string;
  error: string;
  currentUser: UserData | null;
}
export type UserActions = ActionType<typeof actions>;

const initialState: UserState = {
  token: '',
  error: '',
  currentUser: null,
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
    currentUser: initialState.currentUser,
  }))
  .handleAction(actions.getUserData, (state) => ({
    ...state,
    error: '',
  }))
  .handleAction(actions.userDataSuccess, (state, action) => ({
    ...state,
    currentUser: action.payload,
  }))
  .handleAction(actions.userDataFail, (state, action) => ({
    ...state,
    error: action.payload.error,
  }));
