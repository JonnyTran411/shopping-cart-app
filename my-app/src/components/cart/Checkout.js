import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
  const cart = useSelector((state) => state.cartState.cart);

  // calculate
  const subtotal = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  const shippingCost = subtotal > 0 ? 10 : 0;
  const total = subtotal + shippingCost;

  return (
    <div className="checkout-container">
      <div className="order-info">
        <h2>Order Info</h2>
        <p>Subtotal: ${subtotal.toFixed(2)}</p>
        <p>Shipping Cost: ${shippingCost.toFixed(2)}</p>
        <p>
          Total: <strong>${total.toFixed(2)}</strong>
        </p>
        <button className="checkout-button">Checkout</button>
        <Link to="/products">
          <button className="continue-shopping-button">
            Continue shopping
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Checkout;
