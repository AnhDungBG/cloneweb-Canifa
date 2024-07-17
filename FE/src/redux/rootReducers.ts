import productsReducer from "./products/productReducers";
import { combineReducers } from "redux";
import { authReducer } from "./users/userReducers";
export type RootState = ReturnType<typeof rootReducer>;
const rootReducer = combineReducers({
  products: productsReducer,
  auth: authReducer,
});
export default rootReducer;
