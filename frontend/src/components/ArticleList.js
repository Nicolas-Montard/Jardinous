import React from 'react';
import Article from './Article'; 
import '../css/ArticleList.css';

function ArticleList({ articles = [] }) {
  return (
    <div className="articles-grid">
      {articles.map((article, index) => (
        <Article 
          key={index}
          image={article.picture}
          title={article.title}
          category="Outil" 
          description={article.description}
          price={article.priceByDay}
        />
      ))}
    </div>
  );
};

export default ArticleList;
