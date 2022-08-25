import { ActionTypes } from "../contants/action-types";
export const setProducts = (products) => {
  console.log({ products });
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  console.log({ product });
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const remevoSelectedProduct = (product) => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    //payload: product,
  };
};
