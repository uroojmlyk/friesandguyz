// 'use client';

// import React, { useState } from 'react';
// import Link from 'next/link';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="flex justify-between items-center py-4 sm:py-6 px-6 sm:px-8 lg:px-16 bg-[#FFE5D9] border-b-4 sm:border-b-6 border-black relative z-50">
//       {/* Logo */}
//       <Link href="/" className="font-['Fredoka'] text-2xl sm:text-3xl font-black bg-[#FFB5B5] px-4 sm:px-5 py-2 sm:py-2.5 rounded-[40px_20px_40px_20px] sm:rounded-[60px_20px_60px_20px] border-3 sm:border-4 border-black shadow-[6px_6px_0_black] sm:shadow-[8px_8px_0_black] hover:scale-105 transition-transform duration-300">
//         🍔 FOODIE'S
//       </Link>

//       {/* Desktop Navigation */}
//       <ul className="hidden md:flex gap-6 lg:gap-12 list-none">
//         {['Home', 'Menu', 'Offers', 'Contact'].map((item) => (
//           <li key={item}>
//             <Link 
//               href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
//               className="font-['Fredoka'] text-lg lg:text-xl font-semibold no-underline text-black px-3 lg:px-4 py-2 rounded-[30px] border-3 border-transparent hover:bg-[#FFD966] hover:border-3 hover:border-black hover:shadow-[4px_4px_0_black] lg:hover:shadow-[6px_6px_0_black] transition-all"
//             >
//               {item}
//             </Link>
//           </li>
//         ))}
//       </ul>

//       {/* Order Button - Desktop */}
//       <button className="hidden md:block font-['Fredoka'] text-xl lg:text-2xl font-bold bg-[#A0E7E5] text-black px-5 lg:px-7 py-2.5 lg:py-3 border-3 lg:border-4 border-black rounded-[50px] lg:rounded-[60px] shadow-[6px_6px_0_black] lg:shadow-[8px_8px_0_black] hover:scale-95 hover:shadow-[4px_4px_0_black] lg:hover:shadow-[6px_6px_0_black] transition-all duration-200">
//         Order Now 🛵
//       </button>

//       {/* Mobile Menu Button */}
//       <button 
//         onClick={() => setIsOpen(!isOpen)}
//         className="md:hidden text-3xl font-bold p-2"
//       >
//         {isOpen ? '✕' : '☰'}
//       </button>

//       {/* Mobile Navigation */}
//       {isOpen && (
//         <div className="absolute top-full left-0 w-full bg-[#FFE5D9] border-y-4 border-black py-6 px-6 md:hidden animate-slide-down">
//           <ul className="flex flex-col gap-4">
//             {['Home', 'Menu', 'Offers', 'Contact'].map((item) => (
//               <li key={item}>
//                 <Link 
//                   href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
//                   className="block font-['Fredoka'] text-xl font-semibold text-black px-4 py-3 rounded-[30px] hover:bg-[#FFD966] hover:border-3 hover:border-black hover:shadow-[4px_4px_0_black] transition-all"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   {item}
//                 </Link>
//               </li>
//             ))}
//             <li>
//               <button className="w-full font-['Fredoka'] text-xl font-bold bg-[#A0E7E5] text-black px-5 py-3 border-3 border-black rounded-[50px] shadow-[6px_6px_0_black] hover:scale-95 hover:shadow-[4px_4px_0_black] transition-all">
//                 Order Now 🛵
//               </button>
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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center py-4 sm:py-6 px-6 sm:px-8 lg:px-16 bg-[#FFE5D9] border-b-4 sm:border-b-6 border-black relative z-50">
      {/* Logo */}
      <Link href="/" className="font-['Fredoka'] text-2xl sm:text-3xl font-black bg-[#FFB5B5] px-4 sm:px-5 py-2 sm:py-2.5 rounded-[40px_20px_40px_20px] sm:rounded-[60px_20px_60px_20px] border-3 sm:border-4 border-black shadow-[6px_6px_0_black] sm:shadow-[8px_8px_0_black] hover:scale-105 transition-transform duration-300">
        🍔 FOODIE'S
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-6 lg:gap-12 list-none">
        <li>
          <Link href="/" className="font-['Fredoka'] text-lg lg:text-xl font-semibold no-underline text-black px-3 lg:px-4 py-2 rounded-[30px] border-3 border-transparent hover:bg-[#FFD966] hover:border-3 hover:border-black hover:shadow-[4px_4px_0_black] lg:hover:shadow-[6px_6px_0_black] transition-all">
            Home
          </Link>
        </li>
        <li>
          <Link href="/menu" className="font-['Fredoka'] text-lg lg:text-xl font-semibold no-underline text-black px-3 lg:px-4 py-2 rounded-[30px] border-3 border-transparent hover:bg-[#FFD966] hover:border-3 hover:border-black hover:shadow-[4px_4px_0_black] lg:hover:shadow-[6px_6px_0_black] transition-all">
            Menu
          </Link>
        </li>
        <li>
          <Link href="/offers" className="font-['Fredoka'] text-lg lg:text-xl font-semibold no-underline text-black px-3 lg:px-4 py-2 rounded-[30px] border-3 border-transparent hover:bg-[#FFD966] hover:border-3 hover:border-black hover:shadow-[4px_4px_0_black] lg:hover:shadow-[6px_6px_0_black] transition-all">
            Offers
          </Link>
        </li>
        <li>
          <Link href="/contact" className="font-['Fredoka'] text-lg lg:text-xl font-semibold no-underline text-black px-3 lg:px-4 py-2 rounded-[30px] border-3 border-transparent hover:bg-[#FFD966] hover:border-3 hover:border-black hover:shadow-[4px_4px_0_black] lg:hover:shadow-[6px_6px_0_black] transition-all">
            Contact
          </Link>
        </li>
      </ul>

      {/* Order Button - Desktop */}
      <Link href="/order">
        <button className="hidden md:block font-['Fredoka'] text-xl lg:text-2xl font-bold bg-[#A0E7E5] text-black px-5 lg:px-7 py-2.5 lg:py-3 border-3 lg:border-4 border-black rounded-[50px] lg:rounded-[60px] shadow-[6px_6px_0_black] lg:shadow-[8px_8px_0_black] hover:scale-95 hover:shadow-[4px_4px_0_black] lg:hover:shadow-[6px_6px_0_black] transition-all duration-200">
          Order Now 🛵
        </button>
      </Link>

      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-3xl font-bold p-2"
      >
        {isOpen ? '✕' : '☰'}
      </button>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#FFE5D9] border-y-4 border-black py-6 px-6 md:hidden animate-slide-down">
          <ul className="flex flex-col gap-4">
            <li>
              <Link href="/" className="block font-['Fredoka'] text-xl font-semibold text-black px-4 py-3 rounded-[30px] hover:bg-[#FFD966] hover:border-3 hover:border-black hover:shadow-[4px_4px_0_black] transition-all" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/menu" className="block font-['Fredoka'] text-xl font-semibold text-black px-4 py-3 rounded-[30px] hover:bg-[#FFD966] hover:border-3 hover:border-black hover:shadow-[4px_4px_0_black] transition-all" onClick={() => setIsOpen(false)}>
                Menu
              </Link>
            </li>
            <li>
              <Link href="/offers" className="block font-['Fredoka'] text-xl font-semibold text-black px-4 py-3 rounded-[30px] hover:bg-[#FFD966] hover:border-3 hover:border-black hover:shadow-[4px_4px_0_black] transition-all" onClick={() => setIsOpen(false)}>
                Offers
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block font-['Fredoka'] text-xl font-semibold text-black px-4 py-3 rounded-[30px] hover:bg-[#FFD966] hover:border-3 hover:border-black hover:shadow-[4px_4px_0_black] transition-all" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>
            <li>
              <Link href="/order" onClick={() => setIsOpen(false)}>
                <button className="w-full font-['Fredoka'] text-xl font-bold bg-[#A0E7E5] text-black px-5 py-3 border-3 border-black rounded-[50px] shadow-[6px_6px_0_black] hover:scale-95 hover:shadow-[4px_4px_0_black] transition-all">
                  Order Now 🛵
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