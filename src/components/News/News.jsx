import { Link } from 'react-router-dom';
import { articles } from '../../data/articles';
import './News.css';

const News = () => {
  // Only show the first 3 articles on the homepage
  const recentArticles = articles.slice(0, 3);

  return (
    <section id="news" className="news-section container">
      <div className="section-header">
        <h2>The Journal</h2>
        <p className="subtitle">Stories, events, and education from the world of tea.</p>
      </div>
      
      <div className="news-grid">
        {recentArticles.map((item) => (
          <article key={item.id} className="news-card">
            <Link to={`/article/${item.id}`} style={{ display: 'block' }}>
              <div 
                className="news-image"
                style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.6)), url(${item.image})` }}
              ></div>
            </Link>
            <div className="news-content">
              <span className="news-category">{item.category}</span>
              <Link to={`/article/${item.id}`} style={{ textDecoration: 'none' }}>
                <h3>{item.title}</h3>
              </Link>
              <p>{item.excerpt}</p>
              <div className="news-meta">
                <span className="news-date">{item.date}</span>
                <Link to={`/article/${item.id}`} className="read-more">Read Article</Link>
              </div>
            </div>
          </article>
        ))}
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <Link to="/journal" className="btn btn-outline">View All Journal Entries</Link>
      </div>
    </section>
  );
};

export default News;
