import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { clearCart } from "../../redux/actions/cartActions";
import "./Checkout.css";

const Checkout = () => {
  const cart = useSelector((state) => state.cartState.cart || []);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  // calculate
  const subtotal = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  const shippingCost = subtotal > 0 ? 10 : 0;
  const total = subtotal + shippingCost;

  // checkout popup
  const handleCheckout = () => {
    const isConfirmed = window.confirm("Are you sure you want to purchase?");
    if (isConfirmed) {
      handlePurchase();
    }
  };

  const handlePurchase = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Thank you for your purchase!");
      dispatch(clearCart());
    }, 2000); // Giả lập quá trình thanh toán mất 2 giây
  };

  return (
    <div className="checkout-container">
      <div className="order-info">
        <h2>Order Info</h2>
        <p>Subtotal: ${subtotal.toFixed(2)}</p>
        <p>Shipping Cost: ${shippingCost.toFixed(2)}</p>
        <p>
          Total: <strong>${total.toFixed(2)}</strong>
        </p>
        {loading ? (
          <div className="loading-spinner"></div>
        ) : (
          <button
            className="checkout-button"
            onClick={handleCheckout}
            disabled={cart.length === 0}
          >
            Checkout
          </button>
        )}
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
