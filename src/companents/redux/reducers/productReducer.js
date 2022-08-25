//import { StaticRouter } from "react-router-dom";
import { ActionTypes } from "../contants/action-types";

const initialState = {
  products: [
    /*{
      id: 1,
      title: "Title",
      category: "programmer",
    },*/
  ],
  product: {},
};
export const productReducer = (state = initialState, { type, payload }) => {
  console.log({ payload });
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state.product, ...payload };

    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};

    default:
      return state;
  }
};
