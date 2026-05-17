import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import './Collection.css'; // Re-use collection styles

const regionMapping = {
  'east-asia': { name: 'East Asia', match: 'China' },
  'japan': { name: 'Japan', match: 'Japan' },
  'taiwan': { name: 'Taiwan', match: 'Taiwan' },
  'india': { name: 'India', match: 'India' },
  'srilanka': { name: 'Sri Lanka', match: 'Sri Lanka' },
  'africa': { name: 'South Africa', match: 'South Africa' },
  'sa': { name: 'South America', match: 'South America' }
};

const Origin = () => {
  const { regionId } = useParams();
  
  const regionInfo = regionMapping[regionId];
  
  let filteredProducts = products.filter(p => {
    if (!regionInfo) return true; // fallback
    return p.origin.includes(regionInfo.match);
  });
  
  if (filteredProducts.length === 0) {
    filteredProducts = products; // Fallback if none found
  }

  const pageTitle = regionInfo ? `Teas from ${regionInfo.name}` : 'Origins';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [regionId]);

  return (
    <div className="collection-page animate-fade-in">
      <header className="collection-header">
        <div className="container">
          <h1>{pageTitle}</h1>
          <p className="subtitle">Discover our exceptional offerings from this region</p>
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

export default Origin;
