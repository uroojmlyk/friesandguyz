'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="relative bg-[#FFE5D9] border-t-6 border-black py-12 px-6 lg:px-16 overflow-hidden">
      
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <span className="absolute -bottom-10 -left-10 text-9xl opacity-5 rotate-12">🍔</span>
        <span className="absolute -top-10 -right-10 text-9xl opacity-5 -rotate-12">🍕</span>
        <span className="absolute top-1/2 left-1/2 text-8xl opacity-5 animate-spin-slow">🍟</span>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block font-['Fredoka'] text-3xl font-black bg-[#FFB5B5] px-6 py-3 rounded-[60px_20px_60px_20px] border-4 border-black shadow-[8px_8px_0_black] hover:scale-105 transition-transform duration-300 mb-4">
              🍔 FOODIE'S
            </Link>
            <p className="font-['Fredoka'] text-lg text-gray-700 mt-4">
              Serving happiness since 2024 🎉
            </p>
            <div className="flex gap-4 mt-6">
              <span className="text-3xl hover:scale-110 transition-transform cursor-pointer animate-bounce-subtle">📘</span>
              <span className="text-3xl hover:scale-110 transition-transform cursor-pointer animate-bounce-subtle delay-100">📷</span>
              <span className="text-3xl hover:scale-110 transition-transform cursor-pointer animate-bounce-subtle delay-200">🐦</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-['Fredoka'] text-2xl font-bold mb-4 border-b-4 border-black inline-block pb-2">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['Menu', 'Offers', 'Contact', 'About'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="font-['Fredoka'] text-lg hover:bg-[#FFD966] px-3 py-1 rounded-full transition-all hover:border-2 hover:border-black hover:shadow-[4px_4px_0_black] inline-block">
                    {item} →
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-['Fredoka'] text-2xl font-bold mb-4 border-b-4 border-black inline-block pb-2">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="font-['Fredoka'] text-lg flex items-center gap-2">
                <span className="text-2xl">📍</span> 123 Food Street, NYC
              </li>
              <li className="font-['Fredoka'] text-lg flex items-center gap-2">
                <span className="text-2xl">📞</span> +1 234 567 890
              </li>
              <li className="font-['Fredoka'] text-lg flex items-center gap-2">
                <span className="text-2xl">✉️</span> hello@foodies.com
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-['Fredoka'] text-2xl font-bold mb-4 border-b-4 border-black inline-block pb-2">
              Opening Hours
            </h4>
            <ul className="space-y-3">
              <li className="font-['Fredoka'] text-lg flex items-center gap-2">
                <span className="text-2xl">🕐</span> Mon-Fri: 11am - 11pm
              </li>
              <li className="font-['Fredoka'] text-lg flex items-center gap-2">
                <span className="text-2xl">🕐</span> Sat-Sun: 12pm - 12am
              </li>
              <li className="font-['Fredoka'] text-lg bg-[#FFD966] px-3 py-1 rounded-full border-2 border-black inline-block mt-2 animate-pulse-slow">
                🚚 Free Delivery
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t-4 border-black text-center">
          <p className="font-['Fredoka'] text-gray-700">
            © 2024 Foodie's. Made with <span className="animate-pulse-slow inline-block">❤️</span> and 
            <span className="inline-block animate-wiggle mx-1">🍔</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;