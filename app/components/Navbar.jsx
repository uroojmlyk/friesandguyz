

// 'use client';

// import React, { useState } from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import CountrySelector from './CountrySelector';
// import { useLanguage } from '../context/LanguageContext'; // ✅ Added

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const pathname = usePathname();
//   const { t } = useLanguage(); // ✅ Added

//   const isActive = (path) => pathname === path;

//   return (
//     <nav className="flex justify-between items-center py-4 sm:py-6 px-6 sm:px-8 lg:px-16 bg-[#FFE5D9] border-b-4 sm:border-b-6 border-black relative z-50">
      
//       <div className="flex items-center gap-3 sm:gap-6">
//         <Link href="/" className="font-['Fredoka'] text-2xl sm:text-3xl font-black bg-[#FFB5B5] px-4 sm:px-5 py-2 sm:py-2.5 rounded-[40px_20px_40px_20px] sm:rounded-[60px_20px_60px_20px] border-3 sm:border-4 border-black shadow-[6px_6px_0_black] sm:shadow-[8px_8px_0_black] hover:scale-105 transition-transform duration-300">
//           🍔 FOODIE'S
//         </Link>
//         <CountrySelector />
//       </div>

//       <ul className="hidden md:flex gap-6 lg:gap-12 list-none">
//         <li>
//           <Link href="/" className={`font-['Fredoka'] text-lg lg:text-xl font-semibold px-3 lg:px-4 py-2 rounded-[30px] border-3 transition-all ${
//             isActive('/') ? 'bg-[#FFD966] border-black shadow-[4px_4px_0_black]' : 'border-transparent hover:bg-[#FFD966] hover:border-black hover:shadow-[4px_4px_0_black]'
//           }`}>
//             {t?.nav?.home || 'Home'} {/* ✅ Translated */}
//           </Link>
//         </li>
//         <li>
//           <Link href="/menu" className={`font-['Fredoka'] text-lg lg:text-xl font-semibold px-3 lg:px-4 py-2 rounded-[30px] border-3 transition-all ${
//             isActive('/menu') ? 'bg-[#FFD966] border-black shadow-[4px_4px_0_black]' : 'border-transparent hover:bg-[#FFD966] hover:border-black hover:shadow-[4px_4px_0_black]'
//           }`}>
//             {t?.nav?.menu || 'Menu'} {/* ✅ Translated */}
//           </Link>
//         </li>
//         <li>
//           <Link href="/offers" className={`font-['Fredoka'] text-lg lg:text-xl font-semibold px-3 lg:px-4 py-2 rounded-[30px] border-3 transition-all ${
//             isActive('/offers') ? 'bg-[#FFD966] border-black shadow-[4px_4px_0_black]' : 'border-transparent hover:bg-[#FFD966] hover:border-black hover:shadow-[4px_4px_0_black]'
//           }`}>
//             {t?.nav?.offers || 'Offers'} {/* ✅ Translated */}
//           </Link>
//         </li>
//         <li>
//           <Link href="/contact" className={`font-['Fredoka'] text-lg lg:text-xl font-semibold px-3 lg:px-4 py-2 rounded-[30px] border-3 transition-all ${
//             isActive('/contact') ? 'bg-[#FFD966] border-black shadow-[4px_4px_0_black]' : 'border-transparent hover:bg-[#FFD966] hover:border-black hover:shadow-[4px_4px_0_black]'
//           }`}>
//             {t?.nav?.contact || 'Contact'} {/* ✅ Translated */}
//           </Link>
//         </li>
//       </ul>

//       <div className="flex items-center gap-3">
//         <Link href="/order">
//           <button className="hidden md:block font-['Fredoka'] text-xl lg:text-2xl font-bold bg-[#A0E7E5] text-black px-5 lg:px-7 py-2.5 lg:py-3 border-3 lg:border-4 border-black rounded-[50px] lg:rounded-[60px] shadow-[6px_6px_0_black] lg:shadow-[8px_8px_0_black] hover:scale-95 hover:shadow-[4px_4px_0_black] lg:hover:shadow-[6px_6px_0_black] transition-all duration-200">
//             {t?.nav?.order || 'Order Now'} 🛵 {/* ✅ Translated */}
//           </button>
//         </Link>

//         <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-3xl font-bold p-2">
//           {isOpen ? '✕' : '☰'}
//         </button>
//       </div>

//       {/* Mobile Navigation */}
//       {isOpen && (
//         <div className="absolute top-full left-0 w-full bg-[#FFE5D9] border-y-4 border-black py-6 px-6 md:hidden animate-slide-down">
//           <ul className="flex flex-col gap-4">
//             <li>
//               <Link href="/" className="block font-['Fredoka'] text-xl font-semibold px-4 py-3 rounded-[30px] hover:bg-[#FFD966] hover:border-3 hover:border-black hover:shadow-[4px_4px_0_black]" onClick={() => setIsOpen(false)}>
//                 {t?.nav?.home || 'Home'}
//               </Link>
//             </li>
//             <li>
//               <Link href="/menu" className="block font-['Fredoka'] text-xl font-semibold px-4 py-3 rounded-[30px] hover:bg-[#FFD966] hover:border-3 hover:border-black hover:shadow-[4px_4px_0_black]" onClick={() => setIsOpen(false)}>
//                 {t?.nav?.menu || 'Menu'}
//               </Link>
//             </li>
//             <li>
//               <Link href="/offers" className="block font-['Fredoka'] text-xl font-semibold px-4 py-3 rounded-[30px] hover:bg-[#FFD966] hover:border-3 hover:border-black hover:shadow-[4px_4px_0_black]" onClick={() => setIsOpen(false)}>
//                 {t?.nav?.offers || 'Offers'}
//               </Link>
//             </li>
//             <li>
//               <Link href="/contact" className="block font-['Fredoka'] text-xl font-semibold px-4 py-3 rounded-[30px] hover:bg-[#FFD966] hover:border-3 hover:border-black hover:shadow-[4px_4px_0_black]" onClick={() => setIsOpen(false)}>
//                 {t?.nav?.contact || 'Contact'}
//               </Link>
//             </li>
//             <li>
//               <Link href="/order" onClick={() => setIsOpen(false)}>
//                 <button className="w-full font-['Fredoka'] text-xl font-bold bg-[#A0E7E5] text-black px-5 py-3 border-3 border-black rounded-[50px] shadow-[6px_6px_0_black] hover:scale-95 hover:shadow-[4px_4px_0_black] transition-all">
//                   {t?.nav?.order || 'Order Now'} 🛵
//                 </button>
//               </Link>
//             </li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar; 







'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CountrySelector from './CountrySelector';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  const isActive = (path) => pathname === path;

  return (
    <nav className="flex justify-between items-center py-3 sm:py-4 px-4 sm:px-6 lg:px-8 bg-[#FFE5D9] border-b-4 border-black relative z-50">
      
      {/* Logo - Left Side */}
      <Link href="/" className="font-['Fredoka'] text-xl sm:text-2xl lg:text-3xl font-black bg-[#FFB5B5] px-3 sm:px-4 py-1.5 sm:py-2 rounded-[30px_15px_30px_15px] sm:rounded-[40px_20px_40px_20px] border-3 border-black shadow-[4px_4px_0_black] sm:shadow-[6px_6px_0_black] hover:scale-105 transition-transform duration-300 whitespace-nowrap">
        🍔 FOODIE'S
      </Link>

      {/* Desktop Navigation - Center */}
      <ul className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8 list-none">
        <li>
          <Link href="/" className={`font-['Fredoka'] text-sm lg:text-base xl:text-lg font-semibold px-3 py-1.5 rounded-[25px] border-2 transition-all ${
            isActive('/') ? 'bg-[#FFD966] border-black shadow-[3px_3px_0_black]' : 'border-transparent hover:bg-[#FFD966] hover:border-black hover:shadow-[3px_3px_0_black]'
          }`}>
            {t?.nav?.home || 'Home'}
          </Link>
        </li>
        <li>
          <Link href="/menu" className={`font-['Fredoka'] text-sm lg:text-base xl:text-lg font-semibold px-3 py-1.5 rounded-[25px] border-2 transition-all ${
            isActive('/menu') ? 'bg-[#FFD966] border-black shadow-[3px_3px_0_black]' : 'border-transparent hover:bg-[#FFD966] hover:border-black hover:shadow-[3px_3px_0_black]'
          }`}>
            {t?.nav?.menu || 'Menu'}
          </Link>
        </li>
        <li>
          <Link href="/offers" className={`font-['Fredoka'] text-sm lg:text-base xl:text-lg font-semibold px-3 py-1.5 rounded-[25px] border-2 transition-all ${
            isActive('/offers') ? 'bg-[#FFD966] border-black shadow-[3px_3px_0_black]' : 'border-transparent hover:bg-[#FFD966] hover:border-black hover:shadow-[3px_3px_0_black]'
          }`}>
            {t?.nav?.offers || 'Offers'}
          </Link>
        </li>
        <li>
          <Link href="/contact" className={`font-['Fredoka'] text-sm lg:text-base xl:text-lg font-semibold px-3 py-1.5 rounded-[25px] border-2 transition-all ${
            isActive('/contact') ? 'bg-[#FFD966] border-black shadow-[3px_3px_0_black]' : 'border-transparent hover:bg-[#FFD966] hover:border-black hover:shadow-[3px_3px_0_black]'
          }`}>
            {t?.nav?.contact || 'Contact'}
          </Link>
        </li>
      </ul>

      {/* Right Section - Country Selector + Order Button */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Country Selector with Flags - RIGHT SIDE */}
        <CountrySelector />
        
        {/* Order Button */}
        <Link href="/order">
          <button className="hidden sm:block font-['Fredoka'] text-sm lg:text-base xl:text-lg font-bold bg-[#A0E7E5] text-black px-4 lg:px-5 py-1.5 lg:py-2 border-3 border-black rounded-[40px] shadow-[4px_4px_0_black] hover:scale-95 hover:shadow-[2px_2px_0_black] transition-all duration-200 whitespace-nowrap">
            {t?.nav?.order || 'Order'} <span className="hidden lg:inline">Now</span> 🛵
          </button>
        </Link>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl font-bold p-1.5"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#FFE5D9] border-y-4 border-black py-4 px-4 md:hidden animate-slide-down z-50">
          <ul className="flex flex-col gap-2">
            <li>
              <Link href="/" className="block font-['Fredoka'] text-lg font-semibold px-4 py-2.5 rounded-[25px] hover:bg-[#FFD966] hover:border-2 hover:border-black hover:shadow-[3px_3px_0_black] transition-all" onClick={() => setIsOpen(false)}>
                {t?.nav?.home || 'Home'}
              </Link>
            </li>
            <li>
              <Link href="/menu" className="block font-['Fredoka'] text-lg font-semibold px-4 py-2.5 rounded-[25px] hover:bg-[#FFD966] hover:border-2 hover:border-black hover:shadow-[3px_3px_0_black] transition-all" onClick={() => setIsOpen(false)}>
                {t?.nav?.menu || 'Menu'}
              </Link>
            </li>
            <li>
              <Link href="/offers" className="block font-['Fredoka'] text-lg font-semibold px-4 py-2.5 rounded-[25px] hover:bg-[#FFD966] hover:border-2 hover:border-black hover:shadow-[3px_3px_0_black] transition-all" onClick={() => setIsOpen(false)}>
                {t?.nav?.offers || 'Offers'}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block font-['Fredoka'] text-lg font-semibold px-4 py-2.5 rounded-[25px] hover:bg-[#FFD966] hover:border-2 hover:border-black hover:shadow-[3px_3px_0_black] transition-all" onClick={() => setIsOpen(false)}>
                {t?.nav?.contact || 'Contact'}
              </Link>
            </li>
            <li className="mt-2 pt-2 border-t-2 border-black/20">
              <Link href="/order" onClick={() => setIsOpen(false)}>
                <button className="w-full font-['Fredoka'] text-lg font-bold bg-[#A0E7E5] text-black px-4 py-3 border-3 border-black rounded-[40px] shadow-[4px_4px_0_black] hover:scale-95 hover:shadow-[2px_2px_0_black] transition-all">
                  {t?.nav?.order || 'Order Now'} 🛵
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;