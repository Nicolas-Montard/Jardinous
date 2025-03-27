import React, { useState, useEffect }from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ArticleList from './components/ArticleList';
import { getProducts } from './services/ProductService'; 
import './App.css';

console.log('getProducts:', getProducts);

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getProducts();
      setProducts(data);
    }
    fetchData();
  }, []);

  return (
    <div className="app-container">
      <Header />

      <main className="main-content">
        <ArticleList articles={products} />
      </main>

      <Footer />
    </div>
  );
}

export default App;

