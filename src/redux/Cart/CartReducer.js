import { ADD_TO_CART, REMOVE_FROM_CART, INCREASE, DECREASE } from "./CartTypes";
const initialState = {
  cart: [],
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      var product = action.payload;
      return {
        ...state,
        cart: state.cart.find((cartItem) => cartItem.id === product.id)
          ? state.cart.map((cartItem) =>
              cartItem.id === product.id
                ? { ...cartItem, count: cartItem.count + 1 }
                : cartItem
            )
          : [...state.cart, { ...product, count: 1 }],
      };
    case REMOVE_FROM_CART:
      var id = action.payload;
      return {
        ...state,
        cart: state.cart.filter((cartItem) => cartItem.id !== id),
      };
    case INCREASE:
      id = action.payload;
      return {
        ...state,
        cart: state.cart.map((cartItem) =>
          cartItem.id === id
            ? { ...cartItem, count: cartItem.count + 1 }
            : cartItem
        ),
      };
    case DECREASE:
      id = action.payload;
      return {
        ...state,
        cart: state.cart.map((cartItem) =>
          cartItem.id === id
            ? {
                ...cartItem,
                count: cartItem.count > 1 ? cartItem.count - 1 : 1,
              }
            : cartItem
        ),
      };
    default:
      return state;
  }
};

export default CartReducer;
