import { Link } from 'react-router-dom';
import './Varieties.css';

const teaTypes = [
  { name: 'White', desc: 'Delicate & minimally processed', image: import.meta.env.BASE_URL + 'images/tea_white_1779026827979.png' },
  { name: 'Green', desc: 'Fresh, grassy & unoxidized', image: import.meta.env.BASE_URL + 'images/tea_green_1779026840624.png' },
  { name: 'Yellow', desc: 'Rare, mellow & slightly oxidized', image: import.meta.env.BASE_URL + 'images/tea_yellow_1779026853821.png' },
  { name: 'Black', desc: 'Robust, fully oxidized & rich', image: import.meta.env.BASE_URL + 'images/tea_black_1779026871128.png' },
  { name: 'Oolong', desc: 'Partially oxidized, complex profiles', image: import.meta.env.BASE_URL + 'images/tea_oolong_1779026883563.png' },
  { name: 'Pu-erh', desc: 'Fermented, earthy & aged', image: import.meta.env.BASE_URL + 'images/tea_puerh_1779026896375.png' },
  { name: 'Rooibos', desc: 'Caffeine-free, sweet & nutty', image: import.meta.env.BASE_URL + 'images/tea_rooibos_1779026919858.png' },
  { name: 'Herbal', desc: 'Aromatic infusions & tisanes', image: import.meta.env.BASE_URL + 'images/tea_herbal_1779026934955.png' },
  { name: 'Matcha', desc: 'Finely ground, vibrant green', image: import.meta.env.BASE_URL + 'images/tea_matcha_1779026946276.png' },
  { name: 'Chai', desc: 'Spiced, aromatic & warming', image: import.meta.env.BASE_URL + 'images/tea_chai_1779026958244.png' },
  { name: 'Hand Crafted', desc: 'Artisanal blooming teas', image: import.meta.env.BASE_URL + 'images/tea_hand_crafted_1779026971980.png' },
  { name: 'Flavoured', desc: 'Infused with fruits & botanicals', image: import.meta.env.BASE_URL + 'images/tea_flavoured_1779026984695.png' }
];

const Varieties = () => {
  return (
    <section id="shop" className="varieties-section container">
      <div className="section-header">
        <h2>The Collection</h2>
        <p className="subtitle">Explore our twelve distinct varieties of exceptional quality.</p>
      </div>
      
      <div className="varieties-grid">
        {teaTypes.map((tea, index) => (
          <Link 
            key={index} 
            to={`/collection/${tea.name.toLowerCase()}`}
            style={{ textDecoration: 'none' }}
          >
            <div 
              className="variety-card glass-panel animate-fade-in" 
              style={{
                animationDelay: `${index * 0.1}s`,
                backgroundImage: `linear-gradient(180deg, rgba(10,10,10,0.1) 0%, rgba(10,10,10,0.95) 100%), url(${tea.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="card-content">
                <h3>{tea.name}</h3>
                <p>{tea.desc}</p>
              </div>
              <div className="card-overlay">
                <span>View Collection</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Varieties;
