import { Dispatch } from "redux";
import instance from "../../apis/index.ts";
import { LoginData, RegisterData } from "../../interfaces/index.ts";
import * as actionTypes from "./actionType.ts";

const login = (data: LoginData) => async (dispatch: Dispatch) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    dispatch({ type: actionTypes.FETCH_LOGIN_REQUEST });
    const res = await instance.post("user/login", { data });
    const { accessToken } = res.data.data;
    localStorage.setItem("accessToken", accessToken);
    console.log(res);
    dispatch({
      type: actionTypes.FETCH_LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.FETCH_LOGIN_FAIL,
      payload: error,
    });
  }
};

// const logout = () => (dispatch: Dispatch<actionTypes.AuthActionTypes>) => {
//   dispatch({ type: actionTypes.LOGOUT });
//   localStorage.removeItem("accessToken");
// };
const logout = () => {
  return (dispatch: Dispatch<actionTypes.AuthActionTypes>) => {
    dispatch({ type: actionTypes.LOGOUT });
    localStorage.removeItem("accessToken");
  };
};
const setAccount =
  () => async (dispatch: Dispatch<actionTypes.AuthActionTypes>) => {
    const res = await instance.get("user/get-account");
    console.log(res.data);
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
