import { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { products } from '../data/products';
import './Product.css';

const Product = () => {
  const { id } = useParams();
  const [prevId, setPrevId] = useState(id);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  
  if (id !== prevId) {
    setPrevId(id);
    setQuantity(1);
    setAdded(false);
  }
  
  const product = products.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return <Navigate to="/collection/all" />;
  }

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 3000);
  };

  // Find some recommended products (same category or random)
  const recommended = products.filter(p => p.id !== id).slice(0, 3);

  return (
    <div className="product-page animate-fade-in">
      <div className="container product-container">
        
        {/* Left Column: Image */}
        <div className="product-image-column">
          <div 
            className="product-main-image"
            style={{ backgroundImage: `url(${product.image})` }}
          ></div>
        </div>
        
        {/* Right Column: Details */}
        <div className="product-details-column">
          <span className="product-category-label">
            <Link to={`/collection/${product.category.toLowerCase()}`}>{product.category} Tea</Link>
          </span>
          <h1 className="product-title">{product.name}</h1>
          <div className="product-price-large">${product.price.toFixed(2)}</div>
          
          <div className="product-meta">
            <span className="origin-label">Origin:</span> {product.origin}
          </div>

          <p className="product-description">{product.description}</p>
          
          <div className="brewing-guide">
            <h3>Brewing Guide</h3>
            <div className="brewing-stats">
              <div className="stat">
                <span className="stat-label">Temp</span>
                <span className="stat-value">{product.brewingInstructions.temp}</span>
              </div>
              <div className="stat">
                <span className="stat-label">Time</span>
                <span className="stat-value">{product.brewingInstructions.time}</span>
              </div>
              <div className="stat">
                <span className="stat-label">Amount</span>
                <span className="stat-value">{product.brewingInstructions.amount}</span>
              </div>
            </div>
          </div>

          <div className="purchase-actions">
            <div className="quantity-selector">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            <button 
              className={`btn ${added ? 'btn-success' : ''} add-to-cart-btn`}
              onClick={handleAddToCart}
            >
              {added ? 'Added to Bag' : 'Add to Bag'}
            </button>
          </div>
        </div>
      </div>

      {/* Recommended Section */}
      <div className="recommended-section container">
        <h2 className="recommended-title">You May Also Like</h2>
        <div className="recommended-grid">
          {recommended.map(rec => (
            <div key={rec.id} className="rec-card">
              <Link to={`/product/${rec.id}`}>
                <div 
                  className="rec-image"
                  style={{ backgroundImage: `url(${rec.image})` }}
                ></div>
                <div className="rec-info">
                  <h4>{rec.name}</h4>
                  <span>${rec.price.toFixed(2)}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
