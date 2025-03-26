
import React from 'react';
import '../css/Header.css'; 

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="site-title">Jardinous</h1>
      </div>
      <div className="header-center">
        <input type="text"className="search-input"placeholder="Rechercher un outil"/>
      </div>
      <div className="header-right">
        <button className="cart-button">Panier</button>
      </div>
    </header>
  );
}

export default Header;
