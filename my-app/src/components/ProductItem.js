import React from "react";
import { useDispatch } from "react-redux";
import { selectProduct } from "../redux/actions/productActions";
import "./style/ProductList.css";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleSelectProduct = () => {
    dispatch(selectProduct(product));
  };

  return (
    <div className="product-item">
      <img src={product.imageUrl} alt={product.productName} />
      <h2>{product.productName}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button onClick={handleSelectProduct}>View Details</button>
    </div>
  );
};
export default ProductItem;
