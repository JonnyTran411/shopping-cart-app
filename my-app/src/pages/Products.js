import React from "react";
import ProductDetails from "../components/ProductDetails";
import ProductList from "../components/ProductList";
import "./style/ProductPage.css";

const Products = () => {
  const [selectedProduct, setSelectedProduct] = React.useState(null);
  return (
    <div className="product-page">
      <div className="product-details-section">
        <ProductDetails product={selectedProduct} />
      </div>

      <div className="product-list-section">
        <ProductList onSelectProduct={setSelectedProduct} />
      </div>
    </div>
  );
};
export default Products;
