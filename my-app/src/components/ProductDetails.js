import React from "react";

const ProductDetails = ({ product }) => {
  if (!product) {
    return <div>Please select a product to view details.</div>;
  }

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <div>
        <button>-</button>
        <input type="number" value="1" readOnly />
        <button>+</button>
      </div>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
