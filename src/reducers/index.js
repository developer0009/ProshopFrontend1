import { combineReducers } from "@reduxjs/toolkit";
import { productListReducer, singleProductReducer } from "./productReducers";
export default combineReducers({
  productList: productListReducer,
  product: singleProductReducer,
});
