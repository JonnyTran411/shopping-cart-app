import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "../redux/actions/cartActions";
import { selectProduct } from "../redux/actions/productActions";
import "./style/ProductDetail.css";

const ProductDetails = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.productState.products || []);
  console.log("Products:", products);

  const selectedProduct = useSelector(
    (state) => state.productState.selectedProduct
  );
  console.log("Selected Product:", selectedProduct);

  useEffect(() => {
    if (!selectedProduct && products.length > 0) {
      dispatch(selectProduct(products[0])); // Tự động chọn sản phẩm đầu tiên
    }
  }, [selectedProduct, products, dispatch]);

  // handle add to cart
  const handleAddToCart = () => {
    console.log("Adding product to cart:", selectedProduct);
    dispatch(addToCart(selectedProduct, quantity));
    toast.success(`${selectedProduct.productName} added to cart!`);
  };

  //state quantity of product
  const [quantity, setQuantity] = useState(1);

  // handle quantity change
  const handleQuantityChange = (amount) => {
    if (quantity + amount >= 1 && quantity + amount <= 99) {
      setQuantity(quantity + amount);
    }
  };

  const totalPrice =
    selectedProduct && selectedProduct.price
      ? (selectedProduct.price * quantity).toFixed(2)
      : 0;

  if (!selectedProduct || !selectedProduct.price) {
    return <div>Loading product details...</div>;
  }

  return (
    <div className="product-details">
      <div className="product-image-container">
        <img
          src={selectedProduct.imageUrl}
          alt={selectedProduct.productName}
          className="product-details-image"
        />
      </div>
      <div className="product-info">
        <h1>{selectedProduct.productName}</h1>
        <p className="product-description">{selectedProduct.description}</p>
        <div className="price-quantity">
          <div className="quantity-controls">
            <button
              onClick={() => handleQuantityChange(-1)}
              disabled={quantity === 1}
              className="quantity-btn"
            >
              -
            </button>
            <input type="number" value={quantity} readOnly />
            <button
              onClick={() => handleQuantityChange(1)}
              disabled={quantity === 99}
              className="quantity-btn"
            >
              +
            </button>
          </div>
          <p className="price">${totalPrice}</p>
        </div>
        <button className="add-to-cart" onClick={handleAddToCart}>
          <i className="fas fa-shopping-cart"></i> Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
