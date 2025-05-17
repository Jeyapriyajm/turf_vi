import { useState } from "react";
import useProducts from "../hooks/useProducts";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import "./WooProductList.css";

const WooProductList = () => {
  const products = useProducts();
  const { addToCart } = useCart();
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  if (!products || products.length === 0) {
    return (
      <div className="wooproduct-loading">
        <div className="wooproduct-spinner"></div>
        <p>Loading products...</p>
      </div>
    );
  }

  return (
    <div className="wooproduct-grid">
      {products.map((product) => (
        <div key={product.id} className="wooproduct-card">
          <div className="wooproduct-image-wrapper">
            {product.on_sale && (
              <span className="wooproduct-sale-badge">Sale</span>
            )}
            {product.images?.[0]?.src && (
              <img
                src={product.images[0].src}
                alt={product.name}
                className="wooproduct-image"
              />
            )}
            <div className="wooproduct-actions">
              <button onClick={() => addToCart(product)} title="Add to Cart">
                <i className="fas fa-cart-plus"></i>
              </button>
              <button
                onClick={() => setQuickViewProduct(product)}
                title="Quick View"
              >
                <i className="fas fa-eye"></i>
              </button>
              <Link
                to={`/product/${product.id}`}
                title="View Product"
                className="wooproduct-view-link"
              >
                <i className="fas fa-link"></i>
              </Link>
            </div>
          </div>
          <h2 className="wooproduct-title">{product.name}</h2>
          <div
            className="wooproduct-price"
            dangerouslySetInnerHTML={{ __html: product.price_html }}
          />
        </div>
      ))}

      {quickViewProduct && (
        <div
          className="wooproduct-quickview-overlay"
          onClick={() => setQuickViewProduct(null)}
        >
          <div
            className="wooproduct-quickview"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="wooproduct-quickview-close"
              onClick={() => setQuickViewProduct(null)}
            >
              <i className="fas fa-times"></i>
            </button>
            <img
              src={quickViewProduct.images?.[0]?.src}
              alt={quickViewProduct.name}
            />
            <h2>{quickViewProduct.name}</h2>
            <div
              className="wooproduct-price"
              dangerouslySetInnerHTML={{ __html: quickViewProduct.price_html }}
            />
            <div
              className="wooproduct-description"
              dangerouslySetInnerHTML={{
                __html: quickViewProduct.short_description,
              }}
            />
            <div className="wooproduct-quickview-buttons">
              <button
                onClick={() => addToCart(quickViewProduct)}
                className="wooproduct-add-btn"
              >
                Add to Cart
              </button>
              <Link
                to={`/product/${quickViewProduct.id}`}
                className="wooproduct-view-btn"
              >
                View Product
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WooProductList;
