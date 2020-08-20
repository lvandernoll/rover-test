import { createAction } from 'typesafe-actions';
import * as actionTypes from './action-types';
import { LoginResponse, ErrorResponse, UserData, UserAuth } from 'interfaces';

export const login = createAction(actionTypes.LOGIN)<UserAuth>();
export const loginSuccess = createAction(actionTypes.LOGIN_SUCCESS)<
  LoginResponse
>();
export const loginFail = createAction(actionTypes.LOGIN_FAILED)<
  ErrorResponse
>();
export const logout = createAction(actionTypes.LOGOUT)();
export const getUserData = createAction(actionTypes.GET_USER_DATA)();
export const userDataSuccess = createAction(actionTypes.USER_DATA_SUCCESS)<
  UserData
>();
export const userDataFail = createAction(actionTypes.USER_DATA_FAIL)<
  ErrorResponse
>();
