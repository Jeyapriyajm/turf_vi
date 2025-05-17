// src/pages/Shop.jsx
import React from "react";
import "../App.css";
import ProductList from "../components/WooProductList";

const Shop = () => {
  return (
    <div className="shop-page">
      <h1 className="text-2xl font-bold mb-4">Shop</h1>
      <ProductList />
    </div>
  );
};

export default Shop;
