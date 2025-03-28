import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ArticleList from './components/ArticleList';
import { getProducts } from './services/ProductService'; 
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchData() {
      const data = await getProducts();
      setProducts(data);
    }
    fetchData();
  }, []);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <main className="main-content">
        
        <ArticleList articles={filteredProducts} />
      </main>

      <Footer />
    </div>
  );
}

export default App;

