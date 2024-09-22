import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsRequest } from "../redux/actions/productActions";
import ProductItem from "./ProductItem";
import "./style/ProductList.css";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productState.products || []);

  // Gọi action request để saga xử lý
  useEffect(() => {
    dispatch(fetchProductsRequest()); // Dispatch action để saga lắng nghe và xử lý
  }, [dispatch]);

  // if (loading) {
  //   return <p>Loading products...</p>;
  // }

  // if (error) {
  //   return <p>Failed to load products: {error.message}</p>;
  // }

  return (
    <div className="products-list">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
};

export default ProductList;
