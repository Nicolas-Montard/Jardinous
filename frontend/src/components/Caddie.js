import React from 'react';
import { useCart } from '../context/CartContext';
import CaddieList from './CaddieList';
import CaddieForm from './CaddieForm';
import Header from './Header';
import Footer from './Footer';
import '../css/Caddie.css'; 

function Caddie() {
  const { cartItems, getTotalPrice } = useCart(); 

  return (
    <div className="app-container">
      <Header />

      <div className="caddie-page main-content">
        <h1 className="green">Vos Articles</h1>
        <div className="caddie-container">
          <div className="caddie-articles">
            <CaddieList articles={cartItems} />
          </div>
          <div className="caddie-form-container">
            <CaddieForm />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Caddie;
