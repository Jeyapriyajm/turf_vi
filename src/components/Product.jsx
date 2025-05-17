import React from "react";
import "./Product.css";
import { dividerImage } from "../assets";
import { FaCartPlus, FaEye } from "react-icons/fa";

const Product = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-category">{product.category}</div>
      <div className="divider-container">
        <img src={dividerImage} alt="divider" className="divider-image" />
      </div>
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">${product.price}</p>
      <div className="product-actions">
        <button className="action-button add-to-cart">
          <FaCartPlus />
        </button>
        <button className="action-button view-details">
          <FaEye />
        </button>
      </div>
    </div>
  );
};

export default Product;
