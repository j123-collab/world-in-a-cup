import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../data/articles';
import './Journal.css';

const Journal = () => {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="journal-page animate-fade-in">
      <header className="journal-header container">
        <h1>The Journal</h1>
        <p className="subtitle">Stories, events, and education from the world of tea.</p>
      </header>

      <div className="container">
        <div className="journal-grid">
          {articles.map((item) => (
            <article key={item.id} className="journal-card">
              <Link to={`/article/${item.id}`} className="journal-image-link">
                <div 
                  className="journal-image"
                  style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.4)), url(${item.image})` }}
                ></div>
              </Link>
              <div className="journal-content">
                <span className="journal-category">{item.category}</span>
                <Link to={`/article/${item.id}`} className="journal-title-link">
                  <h3>{item.title}</h3>
                </Link>
                <p>{item.excerpt}</p>
                <div className="journal-meta">
                  <span className="journal-date">{item.date}</span>
                  <Link to={`/article/${item.id}`} className="read-more">Read Article</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journal;
