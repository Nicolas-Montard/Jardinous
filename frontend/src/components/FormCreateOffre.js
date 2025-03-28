import React, { useState } from 'react';
import '../css/Form.css';

function FormCreateOffre() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [picture, setPicture] = useState(''); 
  const [categoryId, setCategoryId] = useState('');
  const [priceByDay, setPriceByDay] = useState('');
  const [stock, setStock] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      title,
      description,
      picture,
      categoryId,
      priceByDay: parseFloat(priceByDay),
      stock: parseInt(stock, 10)
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/tool", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error("Erreur lors de la création de l'offre");
      }
      
      const result = await response.json();
      setMessage("Offre créée avec succès !");
      setTitle('');
      setDescription('');
      setPicture('');
      setCategoryId('');
      setPriceByDay('');
      setStock('');
    } catch (error) {
      console.error(error);
      setMessage("Erreur lors de la création de l'offre");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="create-offre">
      <input
        className="bg-grey input"
        type="text"
        name="title"
        id="title"
        placeholder="Titre"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="bg-grey input"
        type="text"
        name="description"
        id="description"
        placeholder="Description"
        required
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        className="bg-grey input"
        type="text"
        name="picture"
        id="picture"
        placeholder="URL de l'image"
        required
        value={picture}
        onChange={(e) => setPicture(e.target.value)}
      />
      <select
        className="bg-grey input"
        name="category"
        id="category"
        required
        value={categoryId}
        onChange={(e) => setCategoryId(e.target.value)}
      >
        <option value="">Category</option>
        <option value="1">Catégorie 1</option>
        <option value="2">Catégorie 2</option>
      </select>
      <input
        className="bg-grey input small"
        type="text"
        name="priceByDay"
        id="priceByDay"
        placeholder="Prix / J"
        required
        value={priceByDay}
        onChange={(e) => setPriceByDay(e.target.value)}
      />
      <input
        className="bg-grey input small"
        type="number"
        name="stock"
        id="stock"
        required
        value={stock}
        onChange={(e) => setStock(e.target.value)}
      />
      <input className="btn-brown" type="submit" value="Save" />
      {message && <p>{message}</p>}
    </form>
  );
}

export default FormCreateOffre;


