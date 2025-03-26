
import React from 'react';
import '../css/Header.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleUser} from "@fortawesome/free-solid-svg-icons";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header className="bg-green header">
        <h1>Jardinous</h1>
        <div className="header-right">
            <input type="text" className="search-input bg-grey" placeholder="Rechercher un outil"/>
            <button className="btn-icon"><FontAwesomeIcon icon={faCartShopping} size="xl"/></button>
            <button className="btn-icon"><FontAwesomeIcon icon={faCircleUser} size="xl"/></button>
        </div>
    </header>
  );
}

export default Header;
