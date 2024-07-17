import { AuthState } from "../../interfaces/index.ts";
import {
  FETCH_LOGIN_REQUEST,
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGIN_FAIL,
  FETCH_REGISTER_REQUEST,
  FETCH_REGISTER_SUCCESS,
  FETCH_REGISTER_FAIL,
  LOGOUT,
  SET_ACCOUNT,
  AuthActionTypes,
} from "./actionType.ts";
const initState: AuthState = {
  userInfo: {},
  loading: false,
  isAdmin: false,
  isAuth: false,
};
export const authReducer = (state = initState, action: AuthActionTypes) => {
  switch (action.type) {
    case FETCH_LOGIN_REQUEST:
    case FETCH_REGISTER_REQUEST:
      return { ...state, loading: true };
    case FETCH_LOGIN_SUCCESS:
    case SET_ACCOUNT:
    case FETCH_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuth: true,
        userInfo: action.payload,
        isAmin: action.payload?.role === "admin",
      };
    case FETCH_LOGIN_FAIL:
    case FETCH_REGISTER_FAIL:
      return { ...state, loading: false, error: action.payload };
    case LOGOUT:
      return {
        userInfo: undefined,
        loading: false,
        isAdmin: false,
        isAuth: false,
      };
    default:
      return state;
  }
};
