import React from 'react'

const HeroSection = ({ setCurrentPage }) => {
  return (
    <section className='min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900 flex items-center justify-center relative overflow-hidden'>
        <div className="absolute inset-0 bg-black/30"></div>
        <div
         className='absolute inset-0 opacity-20'
         style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=1920&h=1080&fit=crop')`,
            backgroundImage: `url('https://images.unsplash.com/photo-1695048401313-d7153c37d6ac?w=1920&h=1080&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjAzfHxwZXJmdW1lfGVufDB8fDB8fHww')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
         }}
        >
        </div>
        
        <div className='relative z-10 text-center px-4 max-w-4xl mx-auto'>
            <h1 className="hero-animate text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
                Essence of 
                <span className='block bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent'>
                    Luxury
                </span>
            </h1>
            <p>
                Discover our exclusive collection of premium fragrances crafted for those who apppreciate the finer things in life.
            </p>
            <button
             onClick={() => setCurrentPage('products')}
             className='hero-animate bg-white text-purple-900 px-8 py-4 mt-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl'
            >
                Explore Collection
            </button>
        </div>
    </section>
  );
};

export default HeroSection