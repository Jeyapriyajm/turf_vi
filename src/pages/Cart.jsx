import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../App.css";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-page">
      <div className="cart-hero">
        <h1>Your Shopping Cart</h1>
        <p>Review your items and proceed to checkout when you're ready!</p>
      </div>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <p>{item.name}</p>
              <p>Price: ${item.price}</p>
              <input
                type="number"
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
          <button onClick={handleCheckout}>Place Order</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
