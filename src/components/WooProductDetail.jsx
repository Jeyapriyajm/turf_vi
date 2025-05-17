import { useParams, useNavigate } from "react-router-dom";
import useProductWithVariations from "../hooks/useProductWithVariations";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import "./WooProductDetail.css";

const WooProductDetail = () => {
  const { id } = useParams();
  const { product, variations, loading } = useProductWithVariations(id);
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [selectedVariation, setSelectedVariation] = useState(null);

  if (loading) {
    return (
      <div className="loading-overlay">
        <p>Loading...</p>
      </div>
    );
  }

  if (!product) return <p>Product not found.</p>;

  const handleAddToCart = () => {
    if (product.type === "variable" && !selectedVariation) {
      alert("Please select a variation.");
      return;
    }

    const itemToAdd = selectedVariation || product;
    addToCart(itemToAdd); // Only when button clicked, not on selection
  };

  // Get the price (fall back to regular_price and sale_price if price_html is unavailable)
  const priceDisplay = product.price_html ? (
    <div
      className="woo-productdetail-price"
      dangerouslySetInnerHTML={{ __html: product.price_html }}
    />
  ) : (
    <div className="woo-productdetail-price">
      {product.sale_price ? (
        <>
          <span className="sale-price">{product.sale_price}</span>
          <span className="regular-price">{product.regular_price}</span>
        </>
      ) : (
        <span>{product.regular_price}</span>
      )}
    </div>
  );

  return (
    <div className="woo-productdetail-container">
      <img
        className="woo-productdetail-image"
        src={product.images?.[0]?.src}
        alt={product.name}
      />
      <div className="woo-productdetail-info">
        <h1 className="woo-productdetail-title">{product.name}</h1>
        {priceDisplay}
        <div
          className="woo-productdetail-desc"
          dangerouslySetInnerHTML={{ __html: product.description }}
        />

        {product.type === "variable" && (
          <div className="woo-productdetail-variations">
            <h3>Select Variation:</h3>
            <table>
              <thead>
                <tr>
                  <th>Options</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th>Choose</th>
                </tr>
              </thead>
              <tbody>
                {variations.map((variation) => {
                  // Fallback to regular_price and sale_price if price_html is unavailable
                  const variationPriceDisplay = variation.price_html ? (
                    <span
                      dangerouslySetInnerHTML={{ __html: variation.price_html }}
                    />
                  ) : (
                    <>
                      {variation.sale_price ? (
                        <>
                          <span className="sale-price">
                            {variation.sale_price}
                          </span>
                          <span className="regular-price">
                            {variation.regular_price}
                          </span>
                        </>
                      ) : (
                        <span>{variation.regular_price}</span>
                      )}
                    </>
                  );

                  return (
                    <tr key={variation.id}>
                      <td>
                        {variation.attributes
                          .map((attr) => attr.option)
                          .join(" / ")}
                      </td>
                      <td>{variationPriceDisplay}</td>
                      <td>{variation.stock_status}</td>
                      <td>
                        <button
                          onClick={() => setSelectedVariation(variation)} // Only change the selected variation
                          className={`woo-productdetail-variation-btn ${
                            selectedVariation?.id === variation.id
                              ? "selected"
                              : ""
                          }`}
                        >
                          Select
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        <div className="woo-productdetail-buttons">
          <button onClick={handleAddToCart}>Add to Cart</button>
          <button onClick={() => navigate("/checkout")}>Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default WooProductDetail;
