export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_QUANTITY = "UPDATE_QUANTITY";

// Action add to cart
export const addToCart = (product, quantity) => {
  return {
    type: ADD_TO_CART,
    payload: {
      ...product,
      quantity,
    },
  };
};

// Action remove from cart
export const removeFromCart = (productId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: productId,
  };
};

//action  update quantity
export const updateQuantity = (productId, quantity) => {
  return {
    type: UPDATE_QUANTITY,
    payload: {
      productId,
      quantity,
    },
  };
};
