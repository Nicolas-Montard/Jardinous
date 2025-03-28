import React from 'react';
import { useCart } from '../context/CartContext';
import '../css/CaddieArticle.css'; 

function CaddieArticle({ title, subtitle, description, priceByDay, quantity }) {
  const { addToCart, removeOne } = useCart();

  return (
    <div className="caddie-article bg-grey">
      <div className="caddie-article-image">
        <img src="https://via.placeholder.com/100" alt="Outil" />
      </div>
      <div className="caddie-article-info">
        <h3 className="green">{title}</h3>
        <h4 className="bold">{subtitle}</h4>
        <p>{description}</p>
        <p>
          Prix pour 24h : <strong>{priceByDay} €</strong>
        </p>
        <div className="quantity-controls">
          <button onClick={() => addToCart({ title, priceByDay })}>+</button>
          <button onClick={() => removeOne({ title })}>-</button>
        </div>
        <p>
          Quantité : <strong>{quantity}</strong>
        </p>
      </div>
    </div>
  );
}

export default CaddieArticle;
