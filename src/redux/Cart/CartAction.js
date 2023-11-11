import { ADD_TO_CART, REMOVE_FROM_CART, INCREASE, DECREASE } from "./CartTypes";
export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  };
};

export const increase = (id) => {
  return {
    type: INCREASE,
    payload: id,
  };
};

export const decrease = (id) => {
  return {
    type: DECREASE,
    payload: id,
  };
};
