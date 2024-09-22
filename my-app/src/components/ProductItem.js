import React from "react";
import { useDispatch } from "react-redux";
import { selectProduct } from "../redux/actions/productActions";
import "./style/ProductItem.css";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleSelectProduct = () => {
    dispatch(selectProduct(product));
  };

  return (
    <div className="product-item">
      <img
        className="product-image"
        src={product.imageUrl}
        alt={product.productName}
      />
      <div className="product-details">
        <h2 className="product-title">{product.productName}</h2>
        <p className="product-description">{product.description}</p>
      </div>
      <div className="product-footer">
        <p className="product-price">${product.price}</p>
        <button
          className="view-details"
          onClick={() => handleSelectProduct(product)}
        >
          Details
        </button>
      </div>
    </div>
  );
};
export default ProductItem;
