import { Star } from 'lucide-react'
import React from 'react'

const ProductDetail = ({ product, setSelectedProduct, addToCart }) => {
  return (
    <div className='max-w-4xl mx-auto'>
        <button
         onClick={() => setSelectedProduct(null)}
         className='mb-8 text-purple-600 hover:text-purple-700 font-semibold flex items-center'
        >
           ⬅ Back to Collection
        </button>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="md:flex">
                <div className="md:w-1/2">
                    <img 
                        src={product.image}
                        alt={product.name}
                        className='w-full h-96 md:h-full object-cover'
                    />
                </div>
                <div className="md:w-1/2 p-8">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h2>
                    <div className="flex text-center mb-4">
                        <div className="flex text-yellow-400 mr-2">
                            {[...Array(5)].map((_,i) => (
                                <Star key={i} className='h-5 w-5 fill-current' />
                            ))}
                        </div>
                        <span className='text-gray-600'>({product.reviews} reviews)</span>
                    </div>
                    <p className="text-gray-700 mb-6 leading-relaxed">{product.longDescription}</p>

                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-2">Fragrance Notes:</h3>
                        <div className="flex flex-wrap gap-2">
                            {product.notes.map((note, index) => (
                                <span key={index} className='bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm'>
                                    {note}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-center justify-between">
                        <span className='text-4xl font-bold text-purple-600'>${product.price}</span>
                        <button
                         onClick={() => addToCart(product)}
                         className='bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors transform hover:scale-105'
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetail