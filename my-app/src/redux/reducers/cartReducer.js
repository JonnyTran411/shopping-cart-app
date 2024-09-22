import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_QUANTITY,
} from "../actions/cartActions";

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // check if item is already in cart
      const existingProduct = state.cart.find(
        (item) => item.productId === action.payload.productId
      );

      if (existingProduct) {
        // if item is already in cart, update quantity
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.productId === action.payload.productId
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          ),
        };
      } else {
        // if item is not in cart, add item
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.productId !== action.payload),
      };
    case UPDATE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.productId === action.payload.productId
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    default:
      return state;
  }
};
export default cartReducer;
