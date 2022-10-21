import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_DETAILS,
  PRODUCT_LIST_ERROR,
  PRODUCT_REQUEST,
  PRODUCT_DETAILS,
  PRODUCT_ERROR,
} from "../constants/productConstants";
export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { ...state, loading: true };
    case PRODUCT_LIST_DETAILS:
      return { loading: false, products: action.payload };
    case PRODUCT_LIST_ERROR:
      console.log(action);
      return { loading: false, error: action.error };
    default:
      return state; //when ever there is default we always return previous return
  }
};
export const singleProductReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_REQUEST:
      return { ...state, loading: true };
    case PRODUCT_DETAILS:
      return { loading: false, ...action.payload };
    case PRODUCT_ERROR:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
