import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const cartItems = useSelector((state) => state.cartState.cart);

  // Calculate total quantity of items in cart
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav-menu">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/reviews">Reviews</Link>
          </li>
        </ul>
      </nav>

      <div className="logo">
        <Link to="/home">Shop</Link>
      </div>

      <div className="cart">
        <Link to="/cart">🛒 Cart ({totalQuantity})</Link>
      </div>
    </header>
  );
};
export default Header;
