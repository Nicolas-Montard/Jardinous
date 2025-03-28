import React from 'react';
import CaddieArticle from './CaddieArticle';
import '../css/CaddieList.css';

function CaddieList({ articles }) {
  return (
    <div className="caddie-list">
      {articles.map((article, index) => (
        <CaddieArticle
          key={index}
          title={article.title}
          subtitle="Outil"
          description={article.description}
          price={article.priceByDay}
          quantity={article.quantity}
        />
      ))}
    </div>
  );
}

export default CaddieList;
