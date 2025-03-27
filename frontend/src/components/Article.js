import React from 'react';
import { useCart } from '../context/CartContext'; 
import '../css/Article.css'; 

function Article({ image, title, category, description, price }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const product = {
      title,
      priceByDay: parseFloat(price),
      description,
      
    };
    addToCart(product);
  };

  return (
    <div className="article-card">
      <div className="article-content">
        <div className="article-image">
          <img src={image || "https://via.placeholder.com/150"} alt={title} />
        </div>
        <div className="article-details">
          <h2 className="article-title">{title}</h2>
          <h3 className="article-category">{category}</h3>
          <p className="article-description">{description}</p>
          <p className="article-price">{price} € / 24h</p>
          <button className="article-button" onClick={handleAddToCart}>
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
}

export default Article;
