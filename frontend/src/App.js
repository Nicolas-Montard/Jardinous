import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Article from './components/Article';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />

     
      <main className="main-content">
        <div className="articles-grid">
          <Article
            image=""
            title="Tondeuse à gazon"
            category="Outil"
            description="Tondeuse à gazon performante pour un entretien impeccable de votre jardin."
            price="20.00"
          />
          <Article
            image=""
            title="Taille-haie"
            category="Outil"
            description="Taille-haie robuste pour tailler vos haies facilement."
            price="15.00"
          />
          <Article
            image=""
            title="Souffleur de feuilles"
            category="Outil"
            description="Souffleur pour faciliter le nettoyage des feuilles mortes."
            price="10.00"
          />
          <Article
            image=""
            title="Motobineuse"
            category="Outil"
            description="Idéal pour retourner la terre et préparer vos plantations."
            price="25.00"
          />
        </div>
      </main>

    
      <Footer />
    </div>
  );
}

export default App;