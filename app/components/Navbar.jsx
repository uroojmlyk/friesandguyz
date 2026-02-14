

// 'use client';

// import React, { useState } from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import CountrySelector from './CountrySelector';
// import SpinWheel from './SpinWheel';
// import ThemeToggle from './ThemeToggle';
// import { useLanguage } from '../context/LanguageContext';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showSpinWheel, setShowSpinWheel] = useState(false);
//   const pathname = usePathname();
//   const { t } = useLanguage();

//   const isActive = (path) => pathname === path;

//   const handleWin = (prize) => {
//     alert(`🎉 You won ${prize.text}! Use code SPIN${prize.value || ''} at checkout.`);
//   };

//   return (
//     <>
//       <nav className="flex justify-between items-center py-3 sm:py-4 px-4 sm:px-6 lg:px-8 bg-[#FFE5D9] border-b-4 border-black relative z-50 dark:bg-gray-800 dark:border-gray-600">
        
//         {/* Logo - Left Side */}
//         <Link href="/" className="font-['Fredoka'] text-xl sm:text-2xl lg:text-3xl font-black bg-[#FFB5B5] px-3 sm:px-4 py-1.5 sm:py-2 rounded-[30px_15px_30px_15px] sm:rounded-[40px_20px_40px_20px] border-3 border-black shadow-[4px_4px_0_black] sm:shadow-[6px_6px_0_black] hover:scale-105 transition-transform duration-300 whitespace-nowrap dark:bg-gray-700 dark:border-gray-600 dark:shadow-[4px_4px_0_#4B5563]">
//           🍔 FOODIE'S
//         </Link>

//         {/* Desktop Navigation - Center */}
//         <ul className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8 list-none">
//           <li>
//             <Link href="/" className={`font-['Fredoka'] text-sm lg:text-base xl:text-lg font-semibold px-3 py-1.5 rounded-[25px] border-2 transition-all ${
//               isActive('/') 
//                 ? 'bg-[#FFD966] border-black shadow-[3px_3px_0_black] dark:bg-gray-600 dark:border-gray-500 dark:shadow-[3px_3px_0_#4B5563]' 
//                 : 'border-transparent hover:bg-[#FFD966] hover:border-black hover:shadow-[3px_3px_0_black] dark:hover:bg-gray-700 dark:hover:border-gray-500 dark:hover:shadow-[3px_3px_0_#4B5563]'
//             }`}>
//               {t?.nav?.home || 'Home'}
//             </Link>
//           </li>
//           <li>
//             <Link href="/menu" className={`font-['Fredoka'] text-sm lg:text-base xl:text-lg font-semibold px-3 py-1.5 rounded-[25px] border-2 transition-all ${
//               isActive('/menu') 
//                 ? 'bg-[#FFD966] border-black shadow-[3px_3px_0_black] dark:bg-gray-600 dark:border-gray-500 dark:shadow-[3px_3px_0_#4B5563]' 
//                 : 'border-transparent hover:bg-[#FFD966] hover:border-black hover:shadow-[3px_3px_0_black] dark:hover:bg-gray-700 dark:hover:border-gray-500 dark:hover:shadow-[3px_3px_0_#4B5563]'
//             }`}>
//               {t?.nav?.menu || 'Menu'}
//             </Link>
//           </li>
//           <li>
//             <Link href="/offers" className={`font-['Fredoka'] text-sm lg:text-base xl:text-lg font-semibold px-3 py-1.5 rounded-[25px] border-2 transition-all ${
//               isActive('/offers') 
//                 ? 'bg-[#FFD966] border-black shadow-[3px_3px_0_black] dark:bg-gray-600 dark:border-gray-500 dark:shadow-[3px_3px_0_#4B5563]' 
//                 : 'border-transparent hover:bg-[#FFD966] hover:border-black hover:shadow-[3px_3px_0_black] dark:hover:bg-gray-700 dark:hover:border-gray-500 dark:hover:shadow-[3px_3px_0_#4B5563]'
//             }`}>
//               {t?.nav?.offers || 'Offers'}
//             </Link>
//           </li>
//           <li>
//             <Link href="/contact" className={`font-['Fredoka'] text-sm lg:text-base xl:text-lg font-semibold px-3 py-1.5 rounded-[25px] border-2 transition-all ${
//               isActive('/contact') 
//                 ? 'bg-[#FFD966] border-black shadow-[3px_3px_0_black] dark:bg-gray-600 dark:border-gray-500 dark:shadow-[3px_3px_0_#4B5563]' 
//                 : 'border-transparent hover:bg-[#FFD966] hover:border-black hover:shadow-[3px_3px_0_black] dark:hover:bg-gray-700 dark:hover:border-gray-500 dark:hover:shadow-[3px_3px_0_#4B5563]'
//             }`}>
//               {t?.nav?.contact || 'Contact'}
//             </Link>
//           </li>
//         </ul>

//         {/* Right Section - All buttons */}
//         <div className="flex items-center gap-2 sm:gap-3">
          
//           {/* 1. SPIN WHEEL BUTTON */}
//           <button
//             onClick={() => setShowSpinWheel(true)}
//             className="hidden sm:block font-['Fredoka'] text-sm lg:text-base xl:text-lg font-bold bg-[#FFD966] text-black px-3 lg:px-4 py-1.5 lg:py-2 border-3 border-black rounded-[40px] shadow-[4px_4px_0_black] hover:scale-95 hover:shadow-[2px_2px_0_black] transition-all duration-200 whitespace-nowrap dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:shadow-[4px_4px_0_#4B5563]"
//           >
//             🎡 <span className="hidden lg:inline">Spin & Win</span>
//           </button>

//           {/* 2. THEME TOGGLE BUTTON - DARK MODE */}
//           <ThemeToggle />

//           {/* 3. COUNTRY SELECTOR */}
//           <CountrySelector />
          
//           {/* 4. ORDER BUTTON */}
//           <Link href="/order">
//             <button className="hidden sm:block font-['Fredoka'] text-sm lg:text-base xl:text-lg font-bold bg-[#A0E7E5] text-black px-4 lg:px-5 py-1.5 lg:py-2 border-3 border-black rounded-[40px] shadow-[4px_4px_0_black] hover:scale-95 hover:shadow-[2px_2px_0_black] transition-all duration-200 whitespace-nowrap dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:shadow-[4px_4px_0_#4B5563]">
//               {t?.nav?.order || 'Order'} <span className="hidden lg:inline">Now</span> 🛵
//             </button>
//           </Link>

//           {/* Mobile Menu Button */}
//           <button 
//             onClick={() => setIsOpen(!isOpen)}
//             className="md:hidden text-2xl font-bold p-1.5 dark:text-white"
//           >
//             {isOpen ? '✕' : '☰'}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="absolute top-full left-0 w-full bg-[#FFE5D9] border-y-4 border-black py-4 px-4 md:hidden animate-slide-down z-50 dark:bg-gray-800 dark:border-gray-600">
//             <ul className="flex flex-col gap-2">
//               <li>
//                 <Link href="/" className="block font-['Fredoka'] text-lg font-semibold px-4 py-2.5 rounded-[25px] hover:bg-[#FFD966] hover:border-2 hover:border-black hover:shadow-[3px_3px_0_black] transition-all dark:text-white dark:hover:bg-gray-700 dark:hover:border-gray-500 dark:hover:shadow-[3px_3px_0_#4B5563]" onClick={() => setIsOpen(false)}>
//                   {t?.nav?.home || 'Home'}
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/menu" className="block font-['Fredoka'] text-lg font-semibold px-4 py-2.5 rounded-[25px] hover:bg-[#FFD966] hover:border-2 hover:border-black hover:shadow-[3px_3px_0_black] transition-all dark:text-white dark:hover:bg-gray-700 dark:hover:border-gray-500 dark:hover:shadow-[3px_3px_0_#4B5563]" onClick={() => setIsOpen(false)}>
//                   {t?.nav?.menu || 'Menu'}
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/offers" className="block font-['Fredoka'] text-lg font-semibold px-4 py-2.5 rounded-[25px] hover:bg-[#FFD966] hover:border-2 hover:border-black hover:shadow-[3px_3px_0_black] transition-all dark:text-white dark:hover:bg-gray-700 dark:hover:border-gray-500 dark:hover:shadow-[3px_3px_0_#4B5563]" onClick={() => setIsOpen(false)}>
//                   {t?.nav?.offers || 'Offers'}
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/contact" className="block font-['Fredoka'] text-lg font-semibold px-4 py-2.5 rounded-[25px] hover:bg-[#FFD966] hover:border-2 hover:border-black hover:shadow-[3px_3px_0_black] transition-all dark:text-white dark:hover:bg-gray-700 dark:hover:border-gray-500 dark:hover:shadow-[3px_3px_0_#4B5563]" onClick={() => setIsOpen(false)}>
//                   {t?.nav?.contact || 'Contact'}
//                 </Link>
//               </li>
              
//               {/* Mobile Spin Wheel Button */}
//               <li>
//                 <button
//                   onClick={() => {
//                     setShowSpinWheel(true);
//                     setIsOpen(false);
//                   }}
//                   className="w-full text-left font-['Fredoka'] text-lg font-semibold px-4 py-2.5 rounded-[25px] hover:bg-[#FFD966] hover:border-2 hover:border-black hover:shadow-[3px_3px_0_black] transition-all dark:text-white dark:hover:bg-gray-700 dark:hover:border-gray-500 dark:hover:shadow-[3px_3px_0_#4B5563]"
//                 >
//                   🎡 Spin & Win
//                 </button>
//               </li>

//               {/* Mobile Theme Toggle - DARK MODE */}
//               <li className="px-4 py-2">
//                 <ThemeToggle />
//               </li>
              
//               <li className="mt-2 pt-2 border-t-2 border-black/20 dark:border-gray-600">
//                 <Link href="/order" onClick={() => setIsOpen(false)}>
//                   <button className="w-full font-['Fredoka'] text-lg font-bold bg-[#A0E7E5] text-black px-4 py-3 border-3 border-black rounded-[40px] shadow-[4px_4px_0_black] hover:scale-95 hover:shadow-[2px_2px_0_black] transition-all dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:shadow-[4px_4px_0_#4B5563]">
//                     {t?.nav?.order || 'Order Now'} 🛵
//                   </button>
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         )}
//       </nav>

//       {/* Spin Wheel Popup */}
//       {showSpinWheel && (
//         <SpinWheel
//           onClose={() => setShowSpinWheel(false)}
//           onWin={handleWin}
//         />
//       )}
//     </>
//   );
// };

// export default Navbar;






'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CountrySelector from './CountrySelector';
import SpinWheel from './SpinWheel';
import ThemeToggle from './ThemeToggle';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSpinWheel, setShowSpinWheel] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  const isActive = (path) => pathname === path;

  const handleWin = (prize) => {
    alert(`🎉 You won ${prize.text}! Use code SPIN${prize.value || ''} at checkout.`);
  };

  return (
    <>
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

        {/* Right Section - All buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* 1. SPIN WHEEL BUTTON */}
          <button
            onClick={() => setShowSpinWheel(true)}
            className="hidden sm:block font-['Fredoka'] text-sm lg:text-base xl:text-lg font-bold bg-[#FFD966] text-black px-3 lg:px-4 py-1.5 lg:py-2 border-3 border-black rounded-[40px] shadow-[4px_4px_0_black] hover:scale-95 hover:shadow-[2px_2px_0_black] transition-all duration-200 whitespace-nowrap"
          >
            🎡 <span className="hidden lg:inline">Spin & Win</span>
          </button>

          {/* 2. THEME TOGGLE BUTTON - DARK MODE */}
          <ThemeToggle />

          {/* 3. COUNTRY SELECTOR */}
          <CountrySelector />
          
          {/* 4. ORDER BUTTON */}
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
              
              {/* Mobile Spin Wheel Button */}
              <li>
                <button
                  onClick={() => {
                    setShowSpinWheel(true);
                    setIsOpen(false);
                  }}
                  className="w-full text-left font-['Fredoka'] text-lg font-semibold px-4 py-2.5 rounded-[25px] hover:bg-[#FFD966] hover:border-2 hover:border-black hover:shadow-[3px_3px_0_black] transition-all"
                >
                  🎡 Spin & Win
                </button>
              </li>

              {/* Mobile Theme Toggle - DARK MODE */}
              <li className="px-4 py-2">
                <ThemeToggle />
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

      {/* Spin Wheel Popup */}
      {showSpinWheel && (
        <SpinWheel
          onClose={() => setShowSpinWheel(false)}
          onWin={handleWin}
        />
      )}
    </>
  );
};

export default Navbar;