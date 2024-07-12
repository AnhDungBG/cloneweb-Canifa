import instance from "../../apis";
import * as actionTypes from "./actionTypes";

export const fetchProductsRequest = () => {
  return {
    type: actionTypes.FETCH_PRODUCTS_REQUEST,
  };
};

export const fetchProductsSuccess = (products) => {
  return {
    type: actionTypes.FETCH_PRODUCTS_SUCCESS,
    payload: products,
  };
};

export const fetchProductsFail = (error) => {
  return {
    type: actionTypes.FETCH_PRODUCTS_FAIL,
    payload: error,
  };
};
export const deleteProduct = (productId) => {
  return async (dispatch) => {
    dispatch(fetchProductsRequest());
    await instance.delete(`/api/product/${productId}`);
    dispatch(fetchProducts());
  };
};
export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchProductsRequest());
      const { data } = await instance.get("/api/product");
      const products = data.data;
      dispatch(fetchProductsSuccess(products));
    } catch (error: string) {
      dispatch(
        fetchProductsFail(
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        )
      );
    }
  };
};
