import { ADD_TO_CART } from "../actions/cartActions";

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { productId, quantity } = action.payload;

      // check if item is already in cart
      const existingItem = state.cartItems.find(
        (item) => item.productId === productId
      );

      if (existingItem) {
        // if item is already in cart, update quantity
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.productId === action.payload.productId
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          ),
        };
      } else {
        // if item is not in cart, add item
        return {
          ...state,
          cartItems: [
            ...state.cartItems,
            {
              productId,
              quantity,
            },
          ],
        };
      }

    default:
      return state;
  }
};
export default cartReducer;
