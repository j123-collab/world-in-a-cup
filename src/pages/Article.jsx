import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { articles } from '../data/articles';
import './Article.css';

const Article = () => {
  const { id } = useParams();
  const article = articles.find(a => a.id === id);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return <Navigate to="/journal" />;
  }

  // Find related articles (just take the first 2 that aren't this one)
  const relatedArticles = articles.filter(a => a.id !== id).slice(0, 2);

  return (
    <article className="article-page animate-fade-in">
      <div 
        className="article-hero"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(10,10,10,1)), url(${article.image})` }}
      >
        <div className="container article-hero-content">
          <span className="article-category">{article.category}</span>
          <h1 className="article-title">{article.title}</h1>
          <div className="article-meta">
            <span className="article-author">By {article.author}</span>
            <span className="meta-separator">•</span>
            <span className="article-date">{article.date}</span>
          </div>
        </div>
      </div>

      <div className="container article-body-container">
        <div className="article-content">
          <p className="article-lead">{article.excerpt}</p>
          
          {/* We split by double newline to create paragraphs from the template literal */}
          {article.content.trim().split('\n\n').map((paragraph, idx) => (
            <p key={idx}>{paragraph.trim()}</p>
          ))}
        </div>
      </div>

      <section className="related-articles container">
        <h2>Read More</h2>
        <div className="related-grid">
          {relatedArticles.map((item) => (
            <Link to={`/article/${item.id}`} key={item.id} className="related-card">
              <div 
                className="related-image"
                style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.6)), url(${item.image})` }}
              ></div>
              <div className="related-content">
                <span className="related-category">{item.category}</span>
                <h3>{item.title}</h3>
              </div>
            </Link>
          ))}
        </div>
        <div className="view-all-wrapper">
          <Link to="/journal" className="btn btn-outline">View All Articles</Link>
        </div>
      </section>
    </article>
  );
};

export default Article;
