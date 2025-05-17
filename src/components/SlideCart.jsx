import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./SlideCart.css";

const SlideCart = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
    onClose();
  };

  return (
    <div className={`slide-cart ${isOpen ? "open" : ""}`}>
      <div className="slide-cart-header">
        <h2>Your Cart</h2>
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>
      </div>
      {cartItems.length === 0 ? (
        <p className="empty-text">Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="item-info">
                <p>{item.name}</p>
                <p>${item.price}</p>
              </div>
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) =>
                  updateQuantity(item.id, parseInt(e.target.value))
                }
              />
              <i
                className="fas fa-times"
                onClick={() => removeFromCart(item.id)}
              ></i>
            </div>
          ))}
          <button className="checkout-btn" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default SlideCart;
