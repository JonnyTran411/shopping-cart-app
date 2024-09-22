export const ADD_TO_CART = "ADD_TO_CART";

// Action creator
export const addToCart = (productId, quantity) => {
  return {
    type: ADD_TO_CART,
    payload: {
      productId,
      quantity,
    },
  };
};
