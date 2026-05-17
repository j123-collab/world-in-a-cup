import { useEffect } from 'react';
import Map from '../components/Map/Map';

const MapPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="map-page animate-fade-in" style={{ paddingTop: '100px', minHeight: '80vh' }}>
      <Map />
    </div>
  );
};

export default MapPage;
