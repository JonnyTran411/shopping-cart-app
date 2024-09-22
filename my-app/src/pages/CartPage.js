import React from "react";
import CartItems from "../components/cart/CartItems";
import Checkout from "../components/cart/Checkout";
import "./style/CartPage.css";

const CartPage = () => {
  return (
    <div className="cart-page">
      <div className="cart-items-section">
        <CartItems />
      </div>

      <div className="checkout-section">
        <Checkout />
      </div>
    </div>
  );
};
export default CartPage;
