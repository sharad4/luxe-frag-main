import React, { useEffect } from 'react'
import { useAnimation } from '../hooks/useAnimation';
import ProductDetail from '../components/ProductDetail';
import ProductList from '../components/ProductList';

const ProductsPage = ({ products, selectedProduct, setSelectedProduct, addToCart }) => {
  const { animateElements } = useAnimation();

  useEffect(() => {
    const productElements = document.querySelectorAll('product-animate');
    animateElements(productElements, 100);
  }, [animateElements]);

  return (
    <div className='pt-24 pb-16'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="product-animate text-5xl font-bold text-center mb-16 text-gray-900">
          Our Collection
        </h1>

        {selectedProduct ? (
          <ProductDetail 
            product={selectedProduct}
            setSelectedProduct={setSelectedProduct}
            addToCart={addToCart}
          />
        ) : (
          <ProductList 
            products={products}
            setSelectedProduct={setSelectedProduct}
            addToCart={addToCart}
          />
        )}
      </div>
    </div>
  );
};

export default ProductsPage