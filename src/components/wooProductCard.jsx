import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./ProductCard.css";

const WooProductCard = ({ product, onQuickView }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <div className="image-wrapper">
        <img src={product.images?.[0]?.src} alt={product.name} />
        {product.on_sale && <span className="badge">Sale</span>}
        <div className="overlay">
          <button onClick={() => addToCart(product)} title="Add to Cart">
            <i className="fas fa-cart-plus" />
          </button>
          <button onClick={() => onQuickView(product)} title="Quick View">
            <i className="fas fa-eye" />
          </button>
          <Link to={`/product/${product.id}`} title="View Product">
            <i className="fas fa-link" />
          </Link>
        </div>
      </div>
      <h2 className="product-title">{product.name}</h2>
      <div
        className="product-price"
        dangerouslySetInnerHTML={{ __html: product.price_html }}
      />
    </div>
  );
};

export default WooProductCard;
