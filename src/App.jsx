import React, { useState } from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import { products } from './data/products';


function App() {
  const [currentPage, setCurrentPage ] = useState('home');
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
  }

  const renderCurrentPage = () => {
    switch(currentPage) {
      case 'home':
        return (
          <HomePage 
            products={products}
            setCurrentPage={setCurrentPage}
            setSelectedProduct={setSelectedProduct}
          />
        );
      case 'products':
        return (
          <ProductsPage
            products={products}
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
            addToCart={addToCart}
          />
        );
      case 'contact':
        return <ContactPage />;
      default:
        return (
          <HomePage 
            products={products}
            setCurrentPage={setCurrentPage}
            setSelectedProduct={setSelectedProduct}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        cart={cart}
      />
        {renderCurrentPage()}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default App
