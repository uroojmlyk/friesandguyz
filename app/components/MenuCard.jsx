'use client';

import React, { useState } from 'react';

const MenuCard = ({ item, onAddToCart }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    setIsAdded(true);
    onAddToCart(item);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div 
      className="relative group bg-white/90 backdrop-blur-sm rounded-[40px] sm:rounded-[50px] border-4 sm:border-5 border-black shadow-[12px_12px_0_black] hover:shadow-[20px_20px_0_black] transition-all duration-300 hover:-translate-y-2 p-6 sm:p-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Decorative Elements */}
      <div className="absolute -top-3 -right-3 w-12 h-12 bg-[#FFB5B5] rounded-full border-3 border-black shadow-[4px_4px_0_black] flex items-center justify-center animate-bounce-slow">
        <span className="text-2xl animate-wiggle">🍔</span>
      </div>
      
      {/* Cartoon Stars */}
      {isHovered && (
        <>
          <span className="absolute -top-2 left-1/2 text-3xl animate-twinkle">✨</span>
          <span className="absolute top-1/2 -left-4 text-2xl animate-twinkle-delay">⭐</span>
          <span className="absolute bottom-0 right-8 text-2xl animate-twinkle-delay2">💫</span>
        </>
      )}

      {/* Food Image with Animation */}
      <div className="relative mb-6 flex justify-center">
        <div className="relative">
          <div className={`text-[120px] sm:text-[140px] transform transition-all duration-500 ${isHovered ? 'scale-110 rotate-6' : 'scale-100 rotate-0'}`}>
            {item.emoji}
          </div>
          
          {/* Steam Effect */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex gap-1">
            <span className={`text-3xl sm:text-4xl transition-opacity duration-300 ${isHovered ? 'opacity-100 animate-steam1' : 'opacity-0'}`}>💨</span>
            <span className={`text-3xl sm:text-4xl transition-opacity duration-300 ${isHovered ? 'opacity-100 animate-steam2' : 'opacity-0'}`}>💨</span>
            <span className={`text-3xl sm:text-4xl transition-opacity duration-300 ${isHovered ? 'opacity-100 animate-steam3' : 'opacity-0'}`}>💨</span>
          </div>

          {/* Floating Toppings */}
          <span className={`absolute -top-4 -right-4 text-3xl transition-all duration-500 ${isHovered ? 'opacity-100 animate-float' : 'opacity-0'}`}>🧀</span>
          <span className={`absolute -bottom-2 -left-4 text-3xl transition-all duration-500 delay-100 ${isHovered ? 'opacity-100 animate-float-delay2' : 'opacity-0'}`}>🥬</span>
        </div>
      </div>

      {/* Content */}
      <div className="text-center">
        <h3 className="font-['Fredoka'] text-2xl sm:text-3xl font-bold text-black mb-2">
          {item.name}
        </h3>
        
        <p className="font-['Fredoka'] text-gray-600 text-sm sm:text-base mb-4 px-2">
          {item.description}
        </p>

        {/* Price & Rating */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="bg-[#FFD966] px-4 py-2 rounded-full border-3 border-black shadow-[4px_4px_0_black]">
            <span className="font-['Fredoka'] text-xl sm:text-2xl font-bold">${item.price}</span>
          </div>
          
          <div className="flex items-center gap-1 bg-white px-3 py-2 rounded-full border-3 border-black shadow-[4px_4px_0_black]">
            <span className="text-yellow-400 text-xl">★</span>
            <span className="font-['Fredoka'] font-bold">{item.rating}</span>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          disabled={isAdded}
          className={`group relative w-full font-['Fredoka'] text-lg sm:text-xl font-bold px-6 py-4 border-4 border-black rounded-[40px] shadow-[8px_8px_0_black] hover:shadow-[4px_4px_0_black] hover:scale-95 transition-all duration-200 ${
            isAdded 
              ? 'bg-green-400 text-white' 
              : 'bg-[#A0E7E5] text-black hover:bg-[#8fd1cf]'
          }`}
        >
          <span className="relative z-10 flex items-center justify-center gap-3">
            {isAdded ? (
              <>
                <span className="text-2xl animate-bounce">✅</span>
                Added to Cart!
              </>
            ) : (
              <>
                <span className="text-2xl group-hover:rotate-12 transition-transform">🛒</span>
                Add to Cart
              </>
            )}
          </span>
          <span className={`absolute inset-0 rounded-[40px] translate-x-1 translate-y-1 -z-10 ${
            isAdded ? 'bg-green-600' : 'bg-[#7fd1cf]'
          }`}></span>
        </button>

        {/* Cartoon Badge */}
        <div className="absolute -bottom-3 -left-3 bg-[#FFB5B5] px-3 py-1 rounded-full border-3 border-black shadow-[4px_4px_0_black] text-xs sm:text-sm font-bold animate-float-slow">
          {item.category}
        </div>
      </div>
    </div>
  );
};

export default MenuCard;