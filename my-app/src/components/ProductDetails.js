import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "../redux/actions/cartActions";
import "./style/ProductDetail.css";

const ProductDetails = () => {
  const selectedProduct = useSelector(
    (state) => state.productState.selectedProduct
  );
  const dispatch = useDispatch();

  //state quantity of product
  const [quantity, setQuantity] = useState(1);

  // handle add to cart
  const handleAddToCart = () => {
    dispatch(addToCart(selectedProduct.id, quantity));
    toast.success("Added to cart!");
  };

  // handle quantity change
  const handleQuantityChange = (amount) => {
    if (quantity + amount >= 1 && quantity + amount <= 99) {
      setQuantity(quantity + amount);
    }
  };

  // if (!selectedProduct) {
  //   return <div>Please select a product to view details.</div>;
  // }

  const totalPrice = (selectedProduct.price * quantity).toFixed(2);

  return (
    <div className="product-details">
      <img src={selectedProduct.imageUrl} alt={selectedProduct.productName} />
      <h1>{selectedProduct.productName}</h1>
      <p>{selectedProduct.description}</p>
      <p>Price: ${totalPrice}</p>
      <div className="quantity-controls">
        <button
          onClick={() => handleQuantityChange(-1)}
          disabled={quantity === 1}
        >
          -
        </button>
        <input type="number" value={quantity} readOnly />
        <button
          onClick={() => handleQuantityChange(1)}
          disabled={quantity === 99}
        >
          +
        </button>
      </div>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
