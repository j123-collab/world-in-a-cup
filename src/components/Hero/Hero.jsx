import './Hero.css';

const Hero = () => {
  const scrollToCollection = () => {
    const element = document.getElementById('shop');
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="hero-background" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/hero_bg_1779026996768.png)` }}></div>
      <div className="hero-overlay"></div>
      
      <div className="container hero-content animate-fade-in">
        <h2 className="hero-quote">
          "It's always teatime<br />
          <span className="text-gold">somewhere in the world."</span>
        </h2>
        <p className="hero-author">— The Mad Hatter</p>
        
        <div className="hero-actions">
          <button className="btn-primary" onClick={scrollToCollection}>Explore Collection</button>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <span className="scroll-text">Discover</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;
