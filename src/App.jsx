import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Journal from './pages/Journal';
import Article from './pages/Article';
import Collection from './pages/Collection';
import Product from './pages/Product';
import Origin from './pages/Origin';
import './App.css'; 

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/article/:id" element={<Article />} />
            <Route path="/collection/:category" element={<Collection />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/origin/:regionId" element={<Origin />} />
          </Routes>
        </main>
        
        <footer style={{
          padding: '4rem 2rem',
          textAlign: 'center',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          marginTop: '4rem'
        }}>
          <div className="container">
            <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-accent-gold)', marginBottom: '1rem' }}>
              World in a Cup
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              &copy; {new Date().getFullYear()} World in a Cup. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
