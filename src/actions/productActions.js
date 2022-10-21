import axios from "axios";
export const productListActions = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "PRODUCT_LIST_REQUEST" });
      const { data } = await axios.get("/api/products");
      dispatch({ type: "PRODUCT_LIST_DETAILS", payload: data });
    } catch (error) {
      dispatch({ type: "PRODUCT_LIST_ERROR", error: error.message });
    }
  };
};
export const productAction = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "PRODUCT_REQUEST" });
      const { data } = await axios.get(`/api/products/:${id}`);
      //it gets error because of the status code and returns the response to it
      dispatch({ type: "PRODUCT_DETAILS", payload: data });
    } catch (error) {
      dispatch({ type: "PRODUCT_LIST_ERROR", error: error.message });
    }
  };
};
