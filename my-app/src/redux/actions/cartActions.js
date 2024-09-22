export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_QUANTITY = "UPDATE_QUANTITY";

// Action add to cart
export const addToCart = (product, quantity) => {
  return {
    type: ADD_TO_CART,
    payload: {
      id: product.productId,
      ...product,
      quantity,
    },
  };
};

// Action remove from cart
export const removeFromCart = (product) => {
  return {
    type: REMOVE_FROM_CART,
    payload: product,
  };
};

//action  update quantity
export const updateQuantity = (productId, newQuantity) => {
  return {
    type: UPDATE_QUANTITY,
    payload: {
      productId,
      newQuantity,
    },
  };
};
