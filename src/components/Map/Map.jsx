import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Map.css';

const regions = [
  { id: 'east-asia', name: 'China (East Asia)', x: 74, y: 35, teas: ['Oolong', 'Pu-erh', 'White Tea'] },
  { id: 'japan', name: 'Japan', x: 84, y: 30, teas: ['Matcha', 'Sencha', 'Gyokuro'] },
  { id: 'taiwan', name: 'Taiwan', x: 80, y: 40, teas: ['High Mountain Oolong', 'Baozhong'] },
  { id: 'india', name: 'India (South Asia)', x: 67, y: 45, teas: ['Darjeeling', 'Assam', 'Chai'] },
  { id: 'srilanka', name: 'Sri Lanka', x: 68, y: 55, teas: ['Ceylon Black', 'Silver Tips'] },
  { id: 'africa', name: 'South Africa', x: 53, y: 75, teas: ['Rooibos', 'Honeybush'] },
  { id: 'sa', name: 'South America', x: 28, y: 70, teas: ['Yerba Mate'] },
];

const Map = () => {
  const [activeRegion, setActiveRegion] = useState(null);

  return (
    <section id="map" className="map-section container">
      <div className="section-header">
        <h2>Origins</h2>
        <p className="subtitle">Journey to the source of the world's finest leaves.</p>
      </div>
      
      <div className="map-container glass-panel">
        <div className="map-visual">
          {/* Actual SVG map via CSS Masking */}
          <div className="world-map-svg" style={{
            WebkitMaskImage: `url(${import.meta.env.BASE_URL}world-map.svg)`,
            maskImage: `url(${import.meta.env.BASE_URL}world-map.svg)`
          }}></div>
          
          {regions.map((region) => (
            <div 
              key={region.id}
              className={`map-point ${activeRegion?.id === region.id ? 'active' : ''}`}
              style={{ left: `${region.x}%`, top: `${region.y}%` }}
              onClick={() => setActiveRegion(region)}
            >
              <div className="point-pulse"></div>
            </div>
          ))}
        </div>
        
        <div className="region-info">
          {activeRegion ? (
            <div className="info-card animate-fade-in" key={activeRegion.id}>
              <h3>{activeRegion.name}</h3>
              <p>Discover our exclusive reserves from this region.</p>
              <ul className="tea-list">
                {activeRegion.teas.map(tea => (
                  <li key={tea}>{tea}</li>
                ))}
              </ul>
              <Link to={`/origin/${activeRegion.id}`} className="btn-secondary" style={{ display: 'inline-block', textDecoration: 'none', textAlign: 'center' }}>Shop Region</Link>
            </div>
          ) : (
            <div className="info-card empty">
              <h3>Select a Region</h3>
              <p>Click on the map points to explore our origins.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Map;
