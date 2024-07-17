import { Product } from "./../../interfaces/index";
import * as actionTypes from "./actionTypes.ts";
const initialState = {
  productsList: [],
  isLoading: false,
  error: null,
};

const productsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS_REQUEST:
      return { ...state, isLoading: true };
    case actionTypes.FETCH_PRODUCTS_SUCCESS:
      return { ...state, isLoading: false, productsList: action.payload };
    case actionTypes.FETCH_PRODUCTS_FAIL:
      return { ...state, isLoading: false, error: action.payload };
    case actionTypes.DELETE_PRODUCT:
      return {
        ...state,
        productsList: state.productsList.filter(
          (product: Product) => product._id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default productsReducer;
