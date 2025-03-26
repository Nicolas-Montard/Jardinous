
import React from 'react';
import '../css/Header.css';

function Header() {
  return (
    <header className="bg-green header">
        <h1>Jardinous</h1>
        <div className="header-right">
            <input type="text" className="search-input bg-grey" placeholder="Rechercher un outil"/>
            <button>Panier</button>
            <button>Profil</button>
        </div>
    </header>
  );
}

export default Header;
