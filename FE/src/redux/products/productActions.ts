import { Dispatch } from "redux";
import instance from "../../apis";
import { Product } from "../../interfaces";
import * as actionTypes from "./actionTypes";

export const fetchProductsRequest = () => {
  return {
    type: actionTypes.FETCH_PRODUCTS_REQUEST,
  };
};

export const fetchProductsSuccess = (products: Product[]) => {
  return {
    type: actionTypes.FETCH_PRODUCTS_SUCCESS,
    payload: products,
  };
};

export const fetchProductsFail = (error: string) => {
  return {
    type: actionTypes.FETCH_PRODUCTS_FAIL,
    payload: error,
  };
};
export const deleteProduct = (productId: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchProductsRequest());
    await instance.delete(`product/${productId}`);
    dispatch(fetchProducts());
  };
};
export const fetchProducts = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(fetchProductsRequest());
      const { data } = await instance.get("product");
      const products = data.data;
      dispatch(fetchProductsSuccess(products));
    } catch (error: any) {
      dispatch(fetchProductsFail(error));
    }
  };
};
