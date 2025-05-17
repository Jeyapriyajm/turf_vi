// src/services/createOrder.js
import wooClient from "./wooClient";

/**
 * Create a WooCommerce order using customer info, line items, and payment method.
 * @param {Object} customerInfo - Contains billing and shipping details.
 * @param {Array} lineItems - Array of products (id and quantity).
 * @param {String} paymentMethod - One of: 'cod', 'bacs', 'stripe', 'paypal'.
 * @returns {Promise} Axios response with the created order data.
 */
export const createOrder = async (customerInfo, lineItems, paymentMethod) => {
  const paymentDetails = {
    cod: {
      payment_method: "cod",
      payment_method_title: "Cash on Delivery",
      set_paid: false,
    },
    bacs: {
      payment_method: "bacs",
      payment_method_title: "Bank Deposit",
      set_paid: false,
    },
    stripe: {
      payment_method: "stripe",
      payment_method_title: "Stripe",
      set_paid: true,
    },
    paypal: {
      payment_method: "paypal",
      payment_method_title: "PayPal",
      set_paid: true,
    },
  };

  try {
    const response = await wooClient.post("/orders", {
      ...paymentDetails[paymentMethod],
      billing: customerInfo,
      shipping: customerInfo,
      line_items: lineItems,
    });

    return response.data;
  } catch (error) {
    console.error("Order creation failed:", error);
    throw error;
  }
};
