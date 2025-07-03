import React from 'react';
import { Star } from 'lucide-react';

const ProductCard = ({ product, setSelectedProduct, addToCart, showActions = false }) => {
    return (
        <div className="product-animate bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="aspect-w-16 aspect-h-20 bg-gradient-to-br from-purple-100 to-pink-100">
               <img 
                    src={product.image}
                    alt={product.name}
                    className='w-full h-80 object-cover'
               /> 
            </div>
            <div className="p-6">
                <span className='inline-block bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full mb-3'>
                    {product.category}
                </span>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400 mr-2">
                        {[...Array(5)].map((_, i)=> (
                            <Star key={i} className='h-4 w-4 fill-current' />
                        ))}
                    </div>
                    <span className='text-sm text-gray-600'>({product.reviews})</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className='text-3xl font-bold text-purple-600'>${product.price}</span> 
                    {showActions && (
                        <div className="space-x-2">
                            <button
                             onClick={() => setSelectedProduct(product)}
                             className='bg-gray-200 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-300 transition-colors'
                            >
                                Details
                            </button>
                            <button
                             onClick={() => addToCart(product)}
                             className='bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors'
                            >
                                Add to Cart
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;