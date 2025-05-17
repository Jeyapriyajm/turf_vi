import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { createOrder } from "../services/createOrder";
import "../App.css";

const CheckoutPage = () => {
  const [orderSuccess, setOrderSuccess] = useState(null);
  const [bankDetails, setBankDetails] = useState([]);

  const { cartItems } = useCart();
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Billing information state
  const [billing, setBilling] = useState({
    first_name: "",
    email: "",
    phone: "",
    address_1: "",
    city: "",
    postcode: "",
  });

  // Convert cart items to WooCommerce format
  const getLineItems = () =>
    cartItems.map((item) => ({
      product_id: item.id,
      quantity: item.quantity,
    }));

  // Handle Cash on Delivery payment
  const handleCOD = async () => {
    try {
      await createOrder(billing, getLineItems(), "cod");
      alert("Order placed with Cash on Delivery!");
    } catch (error) {
      alert("Failed to place order: " + error.message);
    }
  };

  // Handle Bank Deposit payment
  const handleDeposit = async () => {
    try {
      const order = await createOrder(billing, getLineItems(), "bacs");
      setOrderSuccess(order);
    } catch (error) {
      alert("Failed to place order: " + error.message);
    }
  };
  useEffect(() => {
    if (orderSuccess?.payment_method === "bacs") {
      fetch("/wp-json/custom/v1/bank-details")
        .then((res) => res.json())
        .then((data) => setBankDetails(data));
    }
  }, [orderSuccess]);

  return (
    <div className="woocheckout-page">
      <h2>Checkout</h2>

      <div>
        <h3>Order Summary</h3>
        {cartItems.map((item) => (
          <div key={item.id}>
            {item.name} - {item.quantity} × ${item.price}
          </div>
        ))}
        <h4>Total: ${totalAmount.toFixed(2)}</h4>
      </div>

      <div className="woocheckout-billing-form">
        <h3>Billing Information</h3>
        <input
          placeholder="Full Name"
          value={billing.first_name}
          onChange={(e) =>
            setBilling({ ...billing, first_name: e.target.value })
          }
          required
        />
        <input
          placeholder="Email"
          type="email"
          value={billing.email}
          onChange={(e) => setBilling({ ...billing, email: e.target.value })}
          required
        />
        <input
          placeholder="Phone Number"
          value={billing.phone}
          onChange={(e) => setBilling({ ...billing, phone: e.target.value })}
          required
        />
        <input
          placeholder="Address"
          value={billing.address_1}
          onChange={(e) =>
            setBilling({ ...billing, address_1: e.target.value })
          }
          required
        />
        <input
          placeholder="City"
          value={billing.city}
          onChange={(e) => setBilling({ ...billing, city: e.target.value })}
          required
        />
        <input
          placeholder="Postal Code"
          value={billing.postcode}
          onChange={(e) => setBilling({ ...billing, postcode: e.target.value })}
          required
        />
      </div>

      {orderSuccess && (
        <div className="woocheckout-order-success">
          <h2> Order Placed Successfully!</h2>
          <p>
            <strong>Order ID:</strong> {orderSuccess.id}
          </p>
          <p>
            <strong>Name:</strong> {orderSuccess.billing.first_name}{" "}
            {orderSuccess.billing.last_name}
          </p>
          <p>
            <strong>Email:</strong> {orderSuccess.billing.email}
          </p>
          <p>
            <strong>Phone:</strong> {orderSuccess.billing.phone}
          </p>
          <p>
            <strong>Address:</strong> {orderSuccess.billing.address_1},{" "}
            {orderSuccess.billing.city}, {orderSuccess.billing.postcode}
          </p>

          {orderSuccess.payment_method === "bacs" && (
            <div className="woocheckout-bank-details">
              <h3> Bank Deposit Instructions</h3>
              <p>
                Please transfer the total amount to the bank account below and
                email the receipt to us for processing.
              </p>
              {bankDetails?.length > 0 ? (
                bankDetails.map((acc, i) => (
                  <div key={i} className="woocheckout-bank-account">
                    <p>
                      <strong>Account Name:</strong> {acc.account_name}
                    </p>
                    <p>
                      <strong>Bank Name:</strong> {acc.bank_name}
                    </p>
                    <p>
                      <strong>Account Number:</strong> {acc.account_number}
                    </p>
                    {acc.sort_code && (
                      <p>
                        <strong>Sort Code:</strong> {acc.sort_code}
                      </p>
                    )}
                    {acc.iban && (
                      <p>
                        <strong>IBAN:</strong> {acc.iban}
                      </p>
                    )}
                    {acc.bic && (
                      <p>
                        <strong>BIC:</strong> {acc.bic}
                      </p>
                    )}
                  </div>
                ))
              ) : (
                <p>Loading bank details...</p>
              )}
            </div>
          )}
        </div>
      )}

      <hr />
      {/*
      <h3>Or Pay with PayPal</h3>
      <div>
        <form
          action="https://www.paypal.com/cgi-bin/webscr"
          method="post"
          target="_blank"
        >
          <input type="hidden" name="cmd" value="_xclick" />
          <input
            type="hidden"
            name="business"
            value="your-paypal-email@example.com"
          />
          <input type="hidden" name="item_name" value="Turf VI Order" />
          <input type="hidden" name="amount" value={totalAmount.toFixed(2)} />
          <input type="hidden" name="currency_code" value="USD" />
          <input type="submit" value="Pay with PayPal" />
        </form>
      </div>
*/}
      <hr />

      <h3>Or Pay with Cash on Delivery</h3>
      <div className="woocheckout-payment-option">
        <span className="woocheckout-payment-label">Check Out the App:</span>
        <button onClick={handleCOD}>Place Order (COD)</button>
      </div>

      <h3>Or Bank Deposit</h3>
      <div className="woocheckout-payment-option">
        <span className="woocheckout-payment-label">Check Out the App:</span>
        <button onClick={handleDeposit}>Place Order (Deposit)</button>
      </div>
    </div>
  );
};

export default CheckoutPage;
