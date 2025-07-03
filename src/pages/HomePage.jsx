import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedProducts from '../components/FeaturedProducts';
import { useAnimation } from '../hooks/useAnimation';

const HomePage = ({ products, setCurrentPage, setSelectedProduct }) => {
  const { animateElements } = useAnimation();

  useEffect(() => {
    const heroElements = document.querySelectorAll('.hero-animate');
    animateElements(heroElements, 200);
  }, [animateElements]);

  return (
    <div>
      <HeroSection setCurrentPage={setCurrentPage} />
      <FeaturedProducts 
        products={products}
        setCurrentPage={setCurrentPage}
        setSelectedProduct={setSelectedProduct}
      /> 
    </div>
  )
}

export default HomePage;