import React from "react";

const ProductItem = ({ product }) => {
  return (
    <div className="product-item">
      <img src="src={product.image}" alt="{product.name}" />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button>View Details</button>
    </div>
  );
};
export default ProductItem;
