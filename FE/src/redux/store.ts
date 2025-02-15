import { thunk } from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducers";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
