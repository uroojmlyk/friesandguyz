'use client';

import React, { useState, useEffect } from 'react';

const EmailPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Show popup after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Close after 2 seconds
      setTimeout(() => {
        setIsVisible(false);
        setIsSubmitted(false);
        setEmail('');
      }, 2000);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 animate-fade-in"
        onClick={handleClose}
      />

      {/* Popup */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[400px] bg-[#FFE5D9] rounded-[50px] border-6 border-black shadow-[25px_25px_0_black] z-50 p-8 animate-slide-up">
        
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute -top-4 -right-4 w-12 h-12 bg-[#FFB5B5] rounded-full border-4 border-black shadow-[6px_6px_0_black] hover:scale-95 transition-all duration-200 flex items-center justify-center text-2xl font-bold"
        >
          ✕
        </button>

        {isSubmitted ? (
          // Success Message
          <div className="text-center py-8">
            <div className="text-7xl mb-4 animate-bounce-slow">🎉</div>
            <h3 className="font-['Fredoka'] text-2xl font-bold text-black mb-2">
              Thank You!
            </h3>
            <p className="font-['Fredoka'] text-gray-600">
              You're now subscribed to our newsletter
            </p>
          </div>
        ) : (
          // Email Form
          <>
            {/* Header */}
            <div className="text-center mb-6">
              <div className="text-6xl mb-2 animate-float">📧</div>
              <h2 className="font-['Fredoka'] text-3xl font-black text-black mb-2">
                Get 20% OFF!
              </h2>
              <p className="font-['Fredoka'] text-gray-600">
                Subscribe to get exclusive offers and deals
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <div className="relative mb-4">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl">✉️</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full font-['Fredoka'] pl-14 pr-4 py-4 border-4 border-black rounded-[50px] shadow-[6px_6px_0_black] focus:shadow-[10px_10px_0_#FFB5B5] focus:outline-none transition-all text-lg"
                />
              </div>

              {/* Floating Emojis */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                <span className="text-2xl animate-float-slow">🍔</span>
                <span className="text-2xl animate-bounce-slow">🍟</span>
                <span className="text-2xl animate-spin-slow">🥤</span>
              </div>

              <button
                type="submit"
                className="group relative w-full font-['Fredoka'] text-xl font-bold py-4 px-6 border-5 border-black rounded-[50px] shadow-[10px_10px_0_black] hover:shadow-[5px_5px_0_black] hover:scale-95 transition-all duration-200 bg-gradient-to-r from-[#FFB5B5] to-[#A0E7E5] mt-6"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Subscribe Now
                  <span className="text-2xl group-hover:translate-x-2 transition-transform">🎁</span>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#FF8A8A] to-[#7fd1cf] rounded-[50px] translate-x-2 translate-y-2 -z-10"></span>
              </button>
            </form>

            {/* Small Text */}
            <p className="text-center font-['Fredoka'] text-xs text-gray-500 mt-4">
              No spam, only yummy food updates! 🍕
            </p>
          </>
        )}

        {/* Decorative Elements */}
        <div className="absolute -top-2 -left-2 w-8 h-8 bg-[#FFD966] rounded-full border-3 border-black animate-ping-slow"></div>
        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#FFB5B5] rounded-full border-3 border-black animate-bounce-slow"></div>
      </div>
    </>
  );
};

export default EmailPopup;