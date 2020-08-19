import { createAction } from 'typesafe-actions';
import * as actionTypes from './action-types';

export interface UserAuth {
  email: string;
}

export interface LoginResponse {
  token: string;
}

export interface ErrorResponse {
  error: string;
}

export const login = createAction(actionTypes.LOGIN)<UserAuth>();
export const loginSuccess = createAction(actionTypes.LOGIN_SUCCESS)<
  LoginResponse
>();
export const loginFail = createAction(actionTypes.LOGIN_FAILED)<
  ErrorResponse
>();

export const logout = createAction(actionTypes.LOGOUT)();
