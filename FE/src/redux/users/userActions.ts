import { Dispatch } from "redux";
import instance from "../../apis/index.ts";
import { LoginData, RegisterData } from "../../interfaces/index.ts";
import * as actionTypes from "./actionType.ts";

const login = (data: LoginData) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: actionTypes.FETCH_LOGIN_REQUEST });
    const res = await instance.post("user/login", data);
    const { accessToken } = res.data;
    localStorage.setItem("accessToken", accessToken);
    dispatch({
      type: actionTypes.FETCH_LOGIN_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.FETCH_LOGIN_FAIL,
      payload: error,
    });
  }
};

const logout =
  () => async (dispatch: Dispatch<actionTypes.AuthActionTypes>) => {
    try {
      const res = await instance.get("user/logout");
      if (res.status === 200) {
        dispatch({ type: actionTypes.LOGOUT });
        localStorage.removeItem("accessToken");
      }
    } catch (error) {
      console.log(error);
    }
  };

const setAccount =
  () => async (dispatch: Dispatch<actionTypes.AuthActionTypes>) => {
    const res = await instance.get("user/get-account");
    dispatch({
      type: actionTypes.SET_ACCOUNT,
      payload: res.data,
    });
  };

const register =
  (data: RegisterData) =>
  async (dispatch: Dispatch<actionTypes.AuthActionTypes>) => {
    try {
      dispatch({ type: actionTypes.FETCH_REGISTER_REQUEST });
      const res = await instance.post("user/register", { data });
      dispatch({
        type: actionTypes.FETCH_REGISTER_SUCCESS,
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.FETCH_REGISTER_FAIL,
        payload: error,
      });
    }
  };

export { login, register, logout, setAccount };
