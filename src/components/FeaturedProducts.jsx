import React from 'react';
import ProductCard from './ProductCard';

const FeaturedProducts = ({ products, setCurrentPage, setSelectedProduct }) => {
    const handleViewDetails = (product) => {
        setSelectedProduct(product);
        setCurrentPage('products');
    };

  return (
    <section className='py-20 bg-gray-50'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className='text-4xl font-bold text-center mb-16 text-gray-900'>
                Featured fragrances
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
                {products.map((product) => (
                    <div key={product.id} className='bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105'>
                        <div className="aspect-w-16 aspect-h-20 bg-gradient-to-br from-purple-100 to-pink-100">
                            <img 
                                src={product.image}
                                alt={product.name} 
                                className='w-full h-80 object-cover'
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
                            <p className='text-gray-600 mb-4'>{product.description}</p>
                            <div className="flex items-center justify-between">
                                <span className='text-3xl font-bold text-purple-600'>${product.price}</span>
                                <button
                                 onClick={() => handleViewDetails(product)}
                                 className='bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors'
                                >
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default FeaturedProducts