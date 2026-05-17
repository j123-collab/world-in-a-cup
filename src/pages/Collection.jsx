import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import './Collection.css';

const Collection = () => {
  const { category } = useParams();
  
  // Clean up the category parameter (e.g. handle URL encoding if any)
  const decodedCategory = decodeURIComponent(category || '');
  
  // Filter products by category, or show all if no category matches perfectly
  // In a real app we might handle 'all' or specific categories more robustly
  let filteredProducts = products.filter(p => p.category.toLowerCase() === decodedCategory.toLowerCase());
  
  if (filteredProducts.length === 0) {
    // Fallback if category is empty or not found, just show all
    filteredProducts = products;
  }

  const pageTitle = decodedCategory ? `${decodedCategory.charAt(0).toUpperCase() + decodedCategory.slice(1)} Tea Collection` : 'The Collection';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  return (
    <div className="collection-page animate-fade-in">
      <header className="collection-header">
        <div className="container">
          <h1>{pageTitle}</h1>
          <p className="subtitle">Discover our exceptional {decodedCategory || 'tea'} offerings</p>
        </div>
      </header>

      <div className="container">
        <div className="product-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <Link to={`/product/${product.id}`} className="product-image-link">
                <div 
                  className="product-image"
                  style={{ backgroundImage: `url(${product.image})` }}
                >
                  <div className="product-overlay">
                    <span>Quick View</span>
                  </div>
                </div>
              </Link>
              <div className="product-info">
                <Link to={`/product/${product.id}`} className="product-title-link">
                  <h3>{product.name}</h3>
                </Link>
                <div className="product-price">${product.price.toFixed(2)}</div>
                <Link to={`/product/${product.id}`} className="btn btn-outline btn-full-width">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
