import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  updateQuantity,
} from "../../redux/actions/cartActions";
import "./CartItems.css";

const CartItems = () => {
  const cart = useSelector((state) => state.cartState.cart);
  const dispatch = useDispatch();

  const handleQuantityChange = (product, amount) => {
    if (!product.id) {
      console.log("Error: Product ID is undefined!");
      return;
    }
    const newQuantity = product.quantity + amount;

    if (newQuantity >= 1 && newQuantity <= 99) {
      dispatch(updateQuantity(product.productId, newQuantity));
    }
  };

  const handleRemove = (product) => {
    dispatch(removeFromCart(product));
  };

  return (
    <div className="cart">
      <h1>My Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>You have no products in the cart</p>
      ) : (
        cart.map((product) => (
          <div key={product.id} className="cart-item">
            <img
              src={product.imageUrl}
              alt={product.productName}
              className="cart-item-image"
            />
            <div className="cart-item-details">
              <h3>{product.productName}</h3>
              <p>{product.description}</p>
              <div className="cart-item-controls">
                <button
                  onClick={() => handleQuantityChange(product, -1)}
                  disabled={product.quantity === 1}
                >
                  -
                </button>
                <input type="number" value={product.quantity} readOnly />
                <button
                  onClick={() => handleQuantityChange(product, 1)}
                  disabled={product.quantity === 99}
                >
                  +
                </button>
                <p className="product-total-price">
                  ${(product.price * product.quantity).toFixed(2)}
                </p>
              </div>
              <button
                className="remove-btn"
                onClick={() => handleRemove(product)}
              >
                🗑 Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
export default CartItems;
