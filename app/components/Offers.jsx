'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Offers = () => {
  const [activeOffer, setActiveOffer] = useState(null);

  const offers = [
    {
      id: 1,
      title: 'Buy 1 Get 1 Free',
      description: 'On all burgers every Monday',
      emoji: '🍔',
      discount: '50%',
      code: 'BOGO50',
      validTill: '30 June 2024',
      bg: 'from-[#FFB5B5] to-[#FF8A8A]'
    },
    {
      id: 2,
      title: 'Free Delivery',
      description: 'On orders above $30',
      emoji: '🛵',
      discount: '100%',
      code: 'FREEDEL30',
      validTill: '31 July 2024',
      bg: 'from-[#A0E7E5] to-[#7fd1cf]'
    },
    {
      id: 3,
      title: 'Combo Offer',
      description: 'Burger + Fries + Drink at $19.99',
      emoji: '🍟',
      discount: '35%',
      code: 'COMBO35',
      validTill: '15 June 2024',
      bg: 'from-[#FFD966] to-[#FFC107]'
    },
    {
      id: 4,
      title: 'Student Discount',
      description: 'Show your ID card',
      emoji: '🎓',
      discount: '20%',
      code: 'STUDENT20',
      validTill: 'Ongoing',
      bg: 'from-[#FFB5B5] to-[#FF8A8A]'
    },
    {
      id: 5,
      title: 'Happy Hours',
      description: '2PM - 5PM, 30% off on sides',
      emoji: '⏰',
      discount: '30%',
      code: 'HAPPY30',
      validTill: 'Daily',
      bg: 'from-[#A0E7E5] to-[#7fd1cf]'
    },
    {
      id: 6,
      title: 'Family Pack',
      description: '4 burgers + 2 fries + 4 drinks',
      emoji: '👨‍👩‍👧‍👦',
      discount: '40%',
      code: 'FAMILY40',
      validTill: '30 Aug 2024',
      bg: 'from-[#FFD966] to-[#FFC107]'
    }
  ];

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#FFE5D9] via-[#FFEED9] to-[#FFF5E6] min-h-screen overflow-hidden">
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[5%] right-[10%] w-72 h-72 bg-[#FFB5B5]/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-[15%] left-[5%] w-80 h-80 bg-[#A0E7E5]/20 rounded-full blur-3xl animate-pulse-slower"></div>
        <div className="absolute top-[40%] left-[30%] w-64 h-64 bg-[#FFD966]/20 rounded-full blur-3xl animate-float"></div>
        
        {/* Floating Offer Emojis */}
        <span className="absolute top-[20%] left-[15%] text-7xl opacity-10 animate-float-super-slow">🏷️</span>
        <span className="absolute bottom-[30%] right-[20%] text-8xl opacity-10 animate-float-delay2">🎉</span>
        <span className="absolute top-[60%] left-[80%] text-7xl opacity-10 animate-bounce-slow">💸</span>
        <span className="absolute bottom-[10%] left-[40%] text-6xl opacity-10 animate-spin-slow">✨</span>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-down">
          <h1 className="font-['Fredoka'] text-5xl sm:text-6xl lg:text-7xl font-black mb-4">
            <span className="bg-gradient-to-r from-[#FFB5B5] to-[#FF8A8A] px-8 py-4 rounded-[80px_20px_80px_20px] border-5 border-black shadow-[15px_15px_0_black] inline-block transform hover:scale-105 transition-transform">
              🔥 HOT OFFERS
            </span>
          </h1>
          <p className="font-['Fredoka'] text-2xl text-gray-700 mt-6">
            <span className="inline-block animate-wiggle">🎁</span> Grab them before they're gone! 
            <span className="inline-block animate-bounce-slow ml-2">🏃‍♂️</span>
          </p>
          
          {/* Countdown Badge */}
          <div className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-full border-3 border-black shadow-[6px_6px_0_#FFD966] mt-8 animate-float-slow">
            <span className="text-2xl animate-ping-slow">⏰</span>
            <span className="font-['Fredoka'] text-lg font-bold">Limited Time Offers</span>
          </div>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {offers.map((offer, index) => (
            <div
              key={offer.id}
              className={`relative group bg-gradient-to-br ${offer.bg} p-1 rounded-[50px] animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setActiveOffer(offer.id)}
              onMouseLeave={() => setActiveOffer(null)}
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-[48px] p-6 sm:p-8 border-4 border-black shadow-[12px_12px_0_black] hover:shadow-[20px_20px_0_black] transition-all duration-300 hover:-translate-y-2 h-full">
                
                {/* Offer Badge */}
                <div className="absolute -top-4 -right-4 bg-[#FFD966] w-16 h-16 rounded-full border-4 border-black shadow-[6px_6px_0_black] flex items-center justify-center animate-bounce-slow">
                  <span className="font-['Fredoka'] text-2xl font-black">{offer.discount}</span>
                </div>

                {/* Emoji */}
                <div className="text-7xl sm:text-8xl mb-4 text-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  {offer.emoji}
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="font-['Fredoka'] text-2xl sm:text-3xl font-bold text-black mb-3">
                    {offer.title}
                  </h3>
                  
                  <p className="font-['Fredoka'] text-gray-700 text-base sm:text-lg mb-4">
                    {offer.description}
                  </p>

                  {/* Promo Code */}
                  <div className="bg-gradient-to-r from-[#FFE5D9] to-[#FFD966] p-3 rounded-full border-3 border-black shadow-[4px_4px_0_black] mb-4">
                    <span className="font-['Fredoka'] text-sm sm:text-base font-bold">
                      Code: <span className="bg-white px-3 py-1 rounded-full border-2 border-black">{offer.code}</span>
                    </span>
                  </div>

                  {/* Valid Till */}
                  <div className="flex items-center justify-center gap-2 text-gray-600 mb-5">
                    <span className="text-xl">📅</span>
                    <span className="font-['Fredoka'] text-sm sm:text-base">
                      Valid till: {offer.validTill}
                    </span>
                  </div>

                  {/* Claim Button */}
                  <button className="group/btn relative w-full font-['Fredoka'] text-lg sm:text-xl font-bold px-6 py-3 border-4 border-black rounded-[40px] shadow-[8px_8px_0_black] hover:shadow-[4px_4px_0_black] hover:scale-95 transition-all duration-200 bg-black text-white">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Claim Offer
                      <span className="text-2xl group-hover/btn:rotate-12 transition-transform">🎁</span>
                    </span>
                    <span className="absolute inset-0 bg-gray-800 rounded-[40px] translate-x-1 translate-y-1 -z-10"></span>
                  </button>
                </div>

                {/* Animated Sparkles */}
                {activeOffer === offer.id && (
                  <>
                    <span className="absolute -top-2 left-1/2 text-2xl animate-twinkle">✨</span>
                    <span className="absolute bottom-1/2 -left-3 text-2xl animate-twinkle-delay">⭐</span>
                    <span className="absolute top-1/2 -right-3 text-2xl animate-twinkle-delay2">💫</span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Special Mega Offer Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#FF8A8A] via-[#FFB5B5] to-[#FFD966] p-10 rounded-[70px] border-6 border-black shadow-[25px_25px_0_black] relative overflow-hidden animate-slide-up">
          <div className="absolute inset-0 opacity-10">
            <span className="absolute top-0 left-0 text-9xl rotate-12">🎉</span>
            <span className="absolute bottom-0 right-0 text-9xl -rotate-12">🏆</span>
          </div>
          
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center lg:text-left">
              <span className="inline-block bg-white px-5 py-2 rounded-full border-3 border-black text-sm font-bold mb-4 animate-pulse-slow">
                ⚡ WEEKEND SPECIAL
              </span>
              <h2 className="font-['Fredoka'] text-4xl sm:text-5xl lg:text-6xl font-black text-black mb-3">
                50% OFF ON FIRST ORDER
              </h2>
              <p className="font-['Fredoka'] text-xl text-black/80 mb-4">
                Use code: <span className="bg-white px-6 py-2 rounded-full border-3 border-black font-bold text-2xl">WELCOME50</span>
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <span className="text-3xl animate-bounce-slow">🔥</span>
                <span className="font-['Fredoka'] text-lg font-bold text-black">New customers only</span>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="bg-white p-5 rounded-full border-4 border-black shadow-[8px_8px_0_black]">
                <span className="text-7xl animate-float-super-slow">🍔</span>
              </div>
              <div className="bg-white p-5 rounded-full border-4 border-black shadow-[8px_8px_0_black]">
                <span className="text-7xl animate-bounce-slow">🍕</span>
              </div>
              <div className="bg-white p-5 rounded-full border-4 border-black shadow-[8px_8px_0_black]">
                <span className="text-7xl animate-spin-slow">🥤</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12">
          <p className="font-['Fredoka'] text-gray-600 text-lg">
            *Offers cannot be combined with other discounts. T&C apply.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Offers;