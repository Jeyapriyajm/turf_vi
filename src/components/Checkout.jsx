import { useCart } from "../context/CartContext";
import { createOrder } from "../services/createOrder";

const Checkout = () => {
  const { cartItems, clearCart } = useCart();

  const handleCheckout = async () => {
    if (cartItems.length === 0) {
      alert("Cart is empty");
      return;
    }

    const customerInfo = {
      first_name: "John",
      last_name: "Doe",
      email: "john@example.com",
      address_1: "123 Street",
      city: "Colombo",
      state: "WP",
      postcode: "00100",
      country: "LK",
    };

    const lineItems = cartItems.map((item) => ({
      product_id: item.id,
      quantity: item.quantity,
    }));

    try {
      const response = await createOrder(customerInfo, lineItems);
      console.log("Order Response:", response.data);
      alert("Order placed successfully!");
      clearCart();
    } catch (error) {
      console.error("Order Error:", error.response?.data || error.message);
      alert("Failed to place order.");
    }
  };

  return (
    <div className="p-4 border-t mt-4">
      <button
        className="bg-green-500 text-white px-6 py-2 rounded"
        onClick={handleCheckout}
      >
        Checkout
      </button>
    </div>
  );
};

export default Checkout;
