import React from 'react';
import '../css/Header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Header() {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-green header">
      <Link to="/" className="header-titel">
        <h1>Jardinous</h1>
      </Link>
      <div className="header-right">
        <input
          type="text"
          className="search-input bg-grey"
          placeholder="Rechercher un outil"
        />
        <Link to="/caddie" className="header-cart">
          <button className="btn-icon">
            <FontAwesomeIcon icon={faCartShopping} size="xl" />
          </button>
          {totalItems > 0 && (
            <span className="cart-badge">{totalItems}</span>
          )}
        </Link>
        <button className="btn-icon">
          <FontAwesomeIcon icon={faCircleUser} size="xl" />
        </button>
      </div>
    </header>
  );
}

export default Header;
