// import * as actionTypes from "./actionTypes";
// import axios from "axios";
// export const fetchProducts = () => async (dispatch) => {
//   try {
//     dispatch({ type: actionTypes.FETCH_PRODUCTS_REQUEST });
//     const { data } = await axios.get("/api/products");
//     dispatch({ type: actionTypes.FETCH_PRODUCTS_SUCCESS, payload: data });
//   } catch (error: string) {
//     dispatch({
//       type: actionTypes.FETCH_PRODUCTS_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };
