import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Reviews from "./pages/Reviews";
// import { ToastContainer } from "react-toastify";
// import ProductDetails from "./components/ProductDetails";
// import ProductList from "./components/ProductList";

const App = () => {
  return (
    <Router>
      <Header /> {/* Đặt Header ở trên cùng */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </Router>
  );
};

export default App;
