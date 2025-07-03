import React, { useState } from 'react';
import { Heart, ShoppingCart, Menu, X } from 'lucide-react';

const Header = ({ currentPage, setCurrentPage, cart }) => {
    console.log('Cart: ', cart.push('a'));
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className='fixed top-0 w-full bg-white/95 backdrop-blur-lg shadow-lg z-50 border-b border-gray-100'>
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center">
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                             Luxé
                        </h1>
                    </div>

                    <nav className="hidden md:flex space-x-8">
                        {['Home', 'Products', 'Contact'].map((item) => (
                            <button
                                key={item}
                                onClick={() => setCurrentPage(item.toLowerCase())}
                                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                                    currentPage === item.toLowerCase() 
                                    ? 'bg-purple-600 text-white shadow-lg'
                                    : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
                                }`}
                            >
                                {item}
                            </button>
                        ))}
                    </nav>

                    <div className="flex items-center space-x-4">
                        <button className='p-2 rounded-full hover:bg-gray-100 transition-colors'>
                            <Heart className='h-6 w-6 text-gray-600' />
                        </button>
                        <button className='p-2 rounded-full hover:bg-red-100 transition-colors relative'>
                            <ShoppingCart className='h-6 w-6 text-gray-600' />
                            {cart.length > 0 && (
                                <span className='absolute -top-1 -right-1 bg-purple-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center'>
                                    {cart.length}
                                </span>
                            )}
                        </button>
                        <button 
                            className='md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors'
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
                        </button>
                    </div>
                </div>
            </div> 

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className='md:hidden bg-white border-t border-gray-200 shadow-lg'>
                    <nav className='px-4 py-4 space-y-2'>
                        {['Home', 'Products', 'Contact'].map((item) => (
                            <button
                                key={item}
                                onClick={() => {
                                    setCurrentPage(item.toLowerCase());
                                    setIsMenuOpen(false);
                                }}
                                className={`block w-full text-left px-4 py-3 rounded-lg transition-all ${
                                    currentPage === item.toLowerCase()
                                    ? 'bg-purple-600 text-white'
                                    : 'text-gray-700 hover:bg-purple-50'
                                }`}
                            >
                                {item}
                            </button>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;