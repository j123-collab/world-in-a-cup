import Hero from '../components/Hero/Hero';
import Map from '../components/Map/Map';
import Varieties from '../components/Varieties/Varieties';
import News from '../components/News/News';
import About from '../components/About/About';

const Home = () => {
  return (
    <div className="home-page animate-fade-in">
      <Hero />
      <Map />
      <Varieties />
      <News />
      <About />
    </div>
  );
};

export default Home;
