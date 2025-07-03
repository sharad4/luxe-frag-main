import React, { useState } from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import { products } from './data/products';

import HeroSection from './components/HeroSection';


function App() {
  const [currentPage, setCurrentPage ] = useState('home');
  const [cart, setCart] = useState([]);

  return (
    <div className="min-h-screen bg-white">
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        cart={cart}
      />
      <HeroSection />
        {/* {renderCurrentPage()} */}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default App
