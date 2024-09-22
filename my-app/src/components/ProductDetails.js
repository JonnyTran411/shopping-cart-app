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
      <button className="add-to-cart" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;
