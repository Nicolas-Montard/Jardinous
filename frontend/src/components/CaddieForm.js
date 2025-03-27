import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import '../css/CaddieForm.css'; 

function CaddieForm() {
    const { getTotalPrice } = useCart();
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [country, setCountry] = useState('');
    const [date, setDate] = useState('');
    const [duration, setDuration] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault();
  };

    return (
        <form className="caddie-form bg-grey" onSubmit={handleSubmit}>
        <div className="caddie-form-section">
            <h3 className="green">Adresse</h3>

            <label>Adresse</label>
        <input
          className="input"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />

        <label>Ville</label>
        <input
          className="input"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />

        <label>Code Postal</label>
        <input
          className="input"
          type="text"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
          required
        />

        <label>Pays</label>
        <input
          className="input"
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        />
      </div>

      <div className="caddie-form-section">
        <h3 className="green">Informations</h3>

        <label>Date</label>
        <input
          className="input"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <label>Durée (en jours)</label>
        <input
          className="input"
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          required
        />

        <label>Total</label>
        <input
          className="input"
          type="text"
          value={getTotalPrice()}
          readOnly
        /> 

        <button type="submit" className="btn-brown">
          Payer
        </button>
      </div>
    </form>
  );
}

export default CaddieForm;
