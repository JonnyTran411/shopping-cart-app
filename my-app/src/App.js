import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Reviews from "./pages/Reviews";

const App = () => {
  return (
    <Router>
      <ToastContainer />
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
