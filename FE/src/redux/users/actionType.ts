import { AuthState } from "../../interfaces";

export const FETCH_LOGIN_REQUEST = "FETCH_LOGIN_REQUEST";
export const FETCH_LOGIN_SUCCESS = "FETCH_LOGIN_SUCCESS";
export const FETCH_LOGIN_FAIL = "FETCH_LOGIN_FAIL";

export const FETCH_REGISTER_REQUEST = "FETCH_REGISTER_REQUEST";
export const FETCH_REGISTER_SUCCESS = "FETCH_REGISTER_SUCCESS";
export const FETCH_REGISTER_FAIL = "FETCH_REGISTER_FAIL";

export const LOGOUT = "LOGOUT";
export const SET_ACCOUNT = "SET_ACCOUNT";
interface FetchLoginRequestAction {
  type: typeof FETCH_LOGIN_REQUEST;
}

interface FetchLoginSuccessAction {
  type: typeof FETCH_LOGIN_SUCCESS;
  payload: AuthState;
}

interface FetchLoginFailAction {
  type: typeof FETCH_LOGIN_FAIL;
  payload: unknown;
}

interface LogoutAction {
  type: typeof LOGOUT;
}

interface SetAccountAction {
  type: typeof SET_ACCOUNT;
  payload: AuthState;
}

interface FetchRegisterRequestAction {
  type: typeof FETCH_REGISTER_REQUEST;
}

interface FetchRegisterSuccessAction {
  type: typeof FETCH_REGISTER_SUCCESS;
  payload: AuthState;
}

interface FetchRegisterFailAction {
  type: typeof FETCH_REGISTER_FAIL;
}

export type AuthActionTypes =
  | FetchLoginRequestAction
  | FetchLoginSuccessAction
  | FetchLoginFailAction
  | LogoutAction
  | SetAccountAction
  | FetchRegisterRequestAction
  | FetchRegisterSuccessAction
  | FetchRegisterFailAction;
