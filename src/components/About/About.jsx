import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section container">
      <div className="about-grid">
        <div className="about-image-wrapper">
          <div 
            className="about-image animate-fade-in"
            style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/about_tea_master.png)` }}
          ></div>
        </div>
        <div className="about-content animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2>Our Philosophy</h2>
          <h3 className="about-subtitle">The Art of the Leaf</h3>
          
          <p>
            At World in a Cup, we believe that true luxury lies in provenance and patience. 
            For over two decades, our master sommeliers have travelled to the world's most 
            remote and revered tea gardens, forging relationships with generational artisan farmers.
          </p>
          
          <p>
            We do not compromise. Every leaf in our collection is hand-plucked at the peak 
            of its season, minimally processed, and rushed to our climate-controlled cellars 
            to preserve its ephemeral aromatics. 
          </p>
          
          <p>
            This is not just tea. It is terroir, history, and craftsmanship distilled into 
            a single, perfect infusion. Welcome to a world defined by uncompromising quality.
          </p>
          
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">24</span>
              <span className="stat-label">Partner Gardens</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">12</span>
              <span className="stat-label">Signature Varietals</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1</span>
              <span className="stat-label">Uncompromising Standard</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
