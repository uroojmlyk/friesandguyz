// 'use client';

// import React from 'react';
// import Link from 'next/link';

// const Footer = () => {
//   return (
//     <footer className="relative bg-[#FFE5D9] border-t-6 border-black py-12 px-6 lg:px-16 overflow-hidden">
      
//       {/* Background Decoration */}
//       <div className="absolute inset-0 overflow-hidden">
//         <span className="absolute -bottom-10 -left-10 text-9xl opacity-5 rotate-12">🍔</span>
//         <span className="absolute -top-10 -right-10 text-9xl opacity-5 -rotate-12">🍕</span>
//         <span className="absolute top-1/2 left-1/2 text-8xl opacity-5 animate-spin-slow">🍟</span>
//       </div>

//       <div className="relative max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
//           {/* Brand Column */}
//           <div className="col-span-1 md:col-span-1">
//             <Link href="/" className="inline-block font-['Fredoka'] text-3xl font-black bg-[#FFB5B5] px-6 py-3 rounded-[60px_20px_60px_20px] border-4 border-black shadow-[8px_8px_0_black] hover:scale-105 transition-transform duration-300 mb-4">
//               🍔 FOODIE'S
//             </Link>
//             <p className="font-['Fredoka'] text-lg text-gray-700 mt-4">
//               Serving happiness since 2024 🎉
//             </p>
//             <div className="flex gap-4 mt-6">
//               <span className="text-3xl hover:scale-110 transition-transform cursor-pointer animate-bounce-subtle">📘</span>
//               <span className="text-3xl hover:scale-110 transition-transform cursor-pointer animate-bounce-subtle delay-100">📷</span>
//               <span className="text-3xl hover:scale-110 transition-transform cursor-pointer animate-bounce-subtle delay-200">🐦</span>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="font-['Fredoka'] text-2xl font-bold mb-4 border-b-4 border-black inline-block pb-2">
//               Quick Links
//             </h4>
//             <ul className="space-y-3">
//               {['Menu', 'Offers', 'Contact', 'About'].map((item) => (
//                 <li key={item}>
//                   <Link href={`/${item.toLowerCase()}`} className="font-['Fredoka'] text-lg hover:bg-[#FFD966] px-3 py-1 rounded-full transition-all hover:border-2 hover:border-black hover:shadow-[4px_4px_0_black] inline-block">
//                     {item} →
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h4 className="font-['Fredoka'] text-2xl font-bold mb-4 border-b-4 border-black inline-block pb-2">
//               Contact Us
//             </h4>
//             <ul className="space-y-3">
//               <li className="font-['Fredoka'] text-lg flex items-center gap-2">
//                 <span className="text-2xl">📍</span> 123 Food Street, NYC
//               </li>
//               <li className="font-['Fredoka'] text-lg flex items-center gap-2">
//                 <span className="text-2xl">📞</span> +1 234 567 890
//               </li>
//               <li className="font-['Fredoka'] text-lg flex items-center gap-2">
//                 <span className="text-2xl">✉️</span> hello@foodies.com
//               </li>
//             </ul>
//           </div>

//           {/* Hours */}
//           <div>
//             <h4 className="font-['Fredoka'] text-2xl font-bold mb-4 border-b-4 border-black inline-block pb-2">
//               Opening Hours
//             </h4>
//             <ul className="space-y-3">
//               <li className="font-['Fredoka'] text-lg flex items-center gap-2">
//                 <span className="text-2xl">🕐</span> Mon-Fri: 11am - 11pm
//               </li>
//               <li className="font-['Fredoka'] text-lg flex items-center gap-2">
//                 <span className="text-2xl">🕐</span> Sat-Sun: 12pm - 12am
//               </li>
//               <li className="font-['Fredoka'] text-lg bg-[#FFD966] px-3 py-1 rounded-full border-2 border-black inline-block mt-2 animate-pulse-slow">
//                 🚚 Free Delivery
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Copyright */}
//         <div className="mt-12 pt-6 border-t-4 border-black text-center">
//           <p className="font-['Fredoka'] text-gray-700">
//             © 2024 Foodie's. Made with <span className="animate-pulse-slow inline-block">❤️</span> and 
//             <span className="inline-block animate-wiggle mx-1">🍔</span>
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer; 









'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="relative bg-[#FFE5D9] border-t-4 sm:border-t-5 lg:border-t-6 border-black py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 xl:px-16 overflow-hidden">
      
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <span className="absolute -bottom-8 sm:-bottom-10 -left-8 sm:-left-10 text-7xl sm:text-8xl lg:text-9xl opacity-5 rotate-12">🍔</span>
        <span className="absolute -top-8 sm:-top-10 -right-8 sm:-right-10 text-7xl sm:text-8xl lg:text-9xl opacity-5 -rotate-12">🍕</span>
        <span className="absolute top-1/2 left-1/2 text-6xl sm:text-7xl lg:text-8xl opacity-5 animate-spin-slow hidden sm:block">🍟</span>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          
          {/* Brand Column */}
          <div className="col-span-1 text-center sm:text-left">
            <Link href="/" className="inline-block font-['Fredoka'] text-2xl sm:text-2xl lg:text-3xl font-black bg-[#FFB5B5] px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-[40px_15px_40px_15px] sm:rounded-[50px_20px_50px_20px] lg:rounded-[60px_20px_60px_20px] border-3 sm:border-4 border-black shadow-[5px_5px_0_black] sm:shadow-[6px_6px_0_black] lg:shadow-[8px_8px_0_black] hover:scale-105 transition-transform duration-300 mb-3 sm:mb-4">
              🍔 FOODIE'S
            </Link>
            <p className="font-['Fredoka'] text-base sm:text-base lg:text-lg text-gray-700 mt-3 sm:mt-4">
              {t?.footer?.servingHappiness || 'Serving happiness since 2024'} 🎉
            </p>
            <div className="flex justify-center sm:justify-start gap-3 sm:gap-4 mt-4 sm:mt-5 lg:mt-6">
              <span className="text-2xl sm:text-2xl lg:text-3xl hover:scale-110 transition-transform cursor-pointer animate-bounce-subtle">📘</span>
              <span className="text-2xl sm:text-2xl lg:text-3xl hover:scale-110 transition-transform cursor-pointer animate-bounce-subtle delay-100">📷</span>
              <span className="text-2xl sm:text-2xl lg:text-3xl hover:scale-110 transition-transform cursor-pointer animate-bounce-subtle delay-200">🐦</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="font-['Fredoka'] text-xl sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 border-b-3 sm:border-b-4 border-black inline-block pb-1 sm:pb-2">
              {t?.footer?.quickLinks || 'Quick Links'}
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 lg:space-y-3">
              {['Menu', 'Offers', 'Contact', 'About'].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === 'About' ? '/about' : `/${item.toLowerCase()}`} 
                    className="font-['Fredoka'] text-base sm:text-base lg:text-lg hover:bg-[#FFD966] px-2 sm:px-2.5 lg:px-3 py-1 rounded-full transition-all hover:border-2 hover:border-black hover:shadow-[3px_3px_0_black] sm:hover:shadow-[4px_4px_0_black] inline-block"
                  >
                    {item === 'Menu' && (t?.nav?.menu || 'Menu')}
                    {item === 'Offers' && (t?.nav?.offers || 'Offers')}
                    {item === 'Contact' && (t?.nav?.contact || 'Contact')}
                    {item === 'About' && (t?.footer?.about || 'About')} →
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h4 className="font-['Fredoka'] text-xl sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 border-b-3 sm:border-b-4 border-black inline-block pb-1 sm:pb-2">
              {t?.footer?.contactUs || 'Contact Us'}
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 lg:space-y-3">
              <li className="font-['Fredoka'] text-base sm:text-base lg:text-lg flex items-center justify-center sm:justify-start gap-2">
                <span className="text-xl sm:text-xl lg:text-2xl shrink-0">📍</span> 
                <span className="truncate">123 Food Street, NYC</span>
              </li>
              <li className="font-['Fredoka'] text-base sm:text-base lg:text-lg flex items-center justify-center sm:justify-start gap-2">
                <span className="text-xl sm:text-xl lg:text-2xl shrink-0">📞</span> 
                <span>+1 234 567 890</span>
              </li>
              <li className="font-['Fredoka'] text-base sm:text-base lg:text-lg flex items-center justify-center sm:justify-start gap-2">
                <span className="text-xl sm:text-xl lg:text-2xl shrink-0">✉️</span> 
                <span className="truncate">hello@foodies.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="text-center sm:text-left">
            <h4 className="font-['Fredoka'] text-xl sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 border-b-3 sm:border-b-4 border-black inline-block pb-1 sm:pb-2">
              {t?.footer?.openingHours || 'Opening Hours'}
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 lg:space-y-3">
              <li className="font-['Fredoka'] text-base sm:text-base lg:text-lg flex items-center justify-center sm:justify-start gap-2">
                <span className="text-xl sm:text-xl lg:text-2xl shrink-0">🕐</span> 
                <span>{t?.footer?.monFri || 'Mon-Fri'}: 11am - 11pm</span>
              </li>
              <li className="font-['Fredoka'] text-base sm:text-base lg:text-lg flex items-center justify-center sm:justify-start gap-2">
                <span className="text-xl sm:text-xl lg:text-2xl shrink-0">🕐</span> 
                <span>{t?.footer?.satSun || 'Sat-Sun'}: 12pm - 12am</span>
              </li>
              <li className="mt-2 sm:mt-2.5 lg:mt-3">
                <span className="inline-block font-['Fredoka'] text-sm sm:text-sm lg:text-base bg-[#FFD966] px-3 sm:px-3.5 lg:px-4 py-1.5 sm:py-1.5 lg:py-2 rounded-full border-2 border-black animate-pulse-slow">
                  🚚 {t?.footer?.freeDelivery || 'Free Delivery'}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 sm:mt-10 lg:mt-12 pt-4 sm:pt-5 lg:pt-6 border-t-3 sm:border-t-4 border-black text-center">
          <p className="font-['Fredoka'] text-xs sm:text-sm lg:text-base text-gray-700">
            © 2024 Foodie's. {t?.footer?.madeWith || 'Made with'} <span className="animate-pulse-slow inline-block text-red-500">❤️</span> {t?.footer?.and || 'and'} 
            <span className="inline-block animate-wiggle mx-1">🍔</span>
          </p>
          <p className="font-['Fredoka'] text-xs text-gray-500 mt-1 sm:mt-2">
            {t?.footer?.rights || 'All rights reserved'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;