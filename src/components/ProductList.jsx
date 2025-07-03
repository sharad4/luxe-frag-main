import React from 'react'
import ProductCard from './ProductCard';

const ProductList = ({ products, setSelectedProduct, addToCart }) => {
  return (
    <div className='grid md:grid-cols-2 gap-8'>
        {products.map((product) => (
            <ProductCard
                key={product.id}
                product={product}
                setSelectedProduct={setSelectedProduct}
                addToCart={addToCart}
                showActions={true} 
            />
        ))}
    </div>
  );
};

export default ProductList