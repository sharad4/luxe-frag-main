import { Facebook, Instagram, Twitter } from 'lucide-react'
import React, { useState } from 'react'

const Footer = ({ setCurrentPage }) => {

  return (
    <footer className='bg-gray-900 text-white py-12'>
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-2xl font-bold md-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Luxé</h3>
                    <p className="text-gray-400 mb-4">
                        Crafting exquisite frangances that tell your unique story.
                    </p>
                    <div className="flex space-x-4">
                        <Facebook className='h-5 w-5 text-gray-400 hover:text-white cursor-pointer'/>
                        <Instagram className='h-5 w-5 text-gray-400 hover:text-white cursor-pointer'/>
                        <Twitter className='h-5 w-5 text-gray-400 hover:text-white cursor-pointer'/>
                    </div>
                </div>
                <div>
                    <h4 className='text-lg font-semibold mb-4'>Quick Links</h4>
                    <ul className="space-y-2">
                        <li><button onClick={() => setCurrentPage('home')} className='text-gray-400 hover:text-white'>Home</button></li>
                        <li><button onClick={() => setCurrentPage('products')} className='text-gray-400 hover:text-white'>Products</button></li>
                        <li><button onClick={() => setCurrentPage('contact')} className='text-gray-400 hover:text-white'>Contact</button></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li>Shipping Info</li>
                        <li>Returns</li>
                        <li>Size Guide</li>
                        <li>Care Instructions</li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
                    <p className="text-gray-400 mb-4">Subscribe for exclusive offers and new arrivals.</p>
                    <div className="flex">
                        <input 
                            type="email" 
                            placeholder='Your email'
                            className="flex-1 px-3 py-2 rounded-l-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500" 
                        />
                        <button className="bg-purple-600 px-4 py-2 rounded-r-lg hover:bg-purple-700 transition-colors">Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                <p>&copy; 2025 Luxé Perfume. All rights reserved.</p>
            </div>
       </div>
    </footer>
  );
};

export default Footer;