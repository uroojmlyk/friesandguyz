

// 'use client';

// import React from 'react';
// import Link from 'next/link';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import { useWishlist } from '../context/WishListContext';
// export default function WishlistPage() {
//   const { wishlist, removeFromWishlist } = useWishlist();

//   const totalPrice = wishlist.reduce((sum, item) => sum + item.price, 0).toFixed(2);

//   return (
//     <main className="relative max-w-[1440px] mx-auto bg-[#FFE5D9] dark:bg-gray-900 overflow-hidden min-h-screen">
//       <Navbar />
      
//       <section className="py-12 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
          
//           {/* Header */}
//           <div className="text-center mb-10 animate-slide-down">
//             <h1 className="font-['Fredoka'] text-5xl sm:text-6xl lg:text-7xl font-black mb-4">
//               <span className="bg-[#FFB5B5] px-8 py-4 rounded-[80px_20px_80px_20px] border-5 border-black shadow-[15px_15px_0_black] inline-block transform hover:scale-105 transition-transform dark:bg-gray-700 dark:border-gray-600">
//                 ❤️ MY WISHLIST
//               </span>
//             </h1>
//             <p className="font-['Fredoka'] text-xl text-gray-600 mt-4 dark:text-gray-400">
//               <span className="inline-block animate-ping-slow">✨</span> Save your favorite items for later
//             </p>
//           </div>

//           {/* Empty Wishlist */}
//           {wishlist.length === 0 ? (
//             <div className="text-center py-20 animate-fade-in">
//               <div className="text-8xl mb-6 animate-float">❤️</div>
//               <h2 className="font-['Fredoka'] text-3xl font-bold text-gray-700 dark:text-gray-300 mb-4">
//                 Your wishlist is empty
//               </h2>
//               <p className="font-['Fredoka'] text-lg text-gray-600 dark:text-gray-400 mb-8">
//                 Save items you love and order them later!
//               </p>
//               <Link href="/menu">
//                 <button className="group relative font-['Fredoka'] text-xl font-bold px-8 py-4 border-5 border-black rounded-[60px] shadow-[10px_10px_0_black] hover:scale-95 hover:shadow-[5px_5px_0_black] transition-all duration-200 bg-gradient-to-r from-[#FFB5B5] to-[#A0E7E5] dark:from-gray-700 dark:to-gray-600 dark:text-white">
//                   <span className="relative z-10 flex items-center gap-3">
//                     Browse Menu 🍔
//                     <span className="text-2xl group-hover:translate-x-2 transition-transform">→</span>
//                   </span>
//                   <span className="absolute inset-0 bg-gradient-to-r from-[#FF8A8A] to-[#7fd1cf] rounded-[60px] translate-x-2 translate-y-2 -z-10 dark:from-gray-800 dark:to-gray-700"></span>
//                 </button>
//               </Link>
//             </div>
//           ) : (
//             <>
//               {/* Stats */}
//               <div className="flex flex-wrap justify-between items-center mb-8 bg-white/90 backdrop-blur-sm p-4 rounded-[40px] border-4 border-black shadow-[8px_8px_0_black] dark:bg-gray-800 dark:border-gray-600">
//                 <div className="flex items-center gap-3">
//                   <span className="text-3xl">📦</span>
//                   <span className="font-['Fredoka'] text-lg dark:text-white">
//                     {wishlist.length} {wishlist.length === 1 ? 'item' : 'items'} saved
//                   </span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <span className="text-3xl">💰</span>
//                   <span className="font-['Fredoka'] text-xl font-bold dark:text-white">
//                     Total: ${totalPrice}
//                   </span>
//                 </div>
//               </div>

//               {/* Grid */}
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//                 {wishlist.map((item, index) => (
//                   <div 
//                     key={item.id} 
//                     className="relative group bg-white/90 backdrop-blur-sm rounded-[40px] border-4 border-black shadow-[8px_8px_0_black] hover:shadow-[12px_12px_0_black] transition-all duration-300 hover:-translate-y-2 p-6 animate-fade-in-up dark:bg-gray-800 dark:border-gray-600"
//                     style={{ animationDelay: `${index * 0.1}s` }}
//                   >
//                     {/* Remove Button */}
//                     <button
//                       onClick={() => removeFromWishlist(item.id)}
//                       className="absolute -top-3 -right-3 w-10 h-10 bg-[#FFB5B5] rounded-full border-3 border-black shadow-[4px_4px_0_black] hover:scale-95 hover:shadow-[2px_2px_0_black] transition-all flex items-center justify-center text-xl font-bold z-10 dark:bg-gray-600"
//                     >
//                       ✕
//                     </button>

//                     {/* Emoji - Tumhare menu items mein emoji hoga */}
//                     <div className="text-7xl mb-4 text-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
//                       {item.emoji || '🍔'}
//                     </div>

//                     {/* Info */}
//                     <h3 className="font-['Fredoka'] text-xl font-bold text-center mb-2 dark:text-white">
//                       {item.name}
//                     </h3>
                    
//                     <p className="font-['Fredoka'] text-gray-600 text-sm text-center mb-4 dark:text-gray-400">
//                       {item.description || 'Delicious food item'}
//                     </p>

//                     {/* Price */}
//                     <div className="text-center mb-4">
//                       <span className="font-['Fredoka'] text-2xl font-bold bg-[#FFD966] px-4 py-2 rounded-full border-3 border-black shadow-[4px_4px_0_black] dark:bg-gray-600 dark:text-white">
//                         ${item.price}
//                       </span>
//                     </div>

//                     {/* Buttons */}
//                     <div className="flex gap-2">
//                       <Link href={`/product/${item.id}`} className="flex-1">
//                         <button className="w-full font-['Fredoka'] text-sm font-bold bg-white py-2 rounded-[30px] border-3 border-black shadow-[4px_4px_0_black] hover:scale-95 hover:shadow-[2px_2px_0_black] transition-all dark:bg-gray-700 dark:text-white">
//                           View
//                         </button>
//                       </Link>
//                       <Link href="/order" className="flex-1">
//                         <button className="w-full font-['Fredoka'] text-sm font-bold bg-[#A0E7E5] py-2 rounded-[30px] border-3 border-black shadow-[4px_4px_0_black] hover:scale-95 hover:shadow-[2px_2px_0_black] transition-all dark:bg-gray-600 dark:text-white">
//                           Order 🛵
//                         </button>
//                       </Link>
//                     </div>

//                     {/* Decoration */}
//                     <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-[#FFD966] rounded-full border-2 border-black animate-float-slow dark:bg-gray-500"></div>
//                   </div>
//                 ))}
//               </div>

//               {/* Bottom Buttons */}
//               <div className="mt-12 flex flex-wrap justify-center gap-4">
//                 <Link href="/menu">
//                   <button className="group relative font-['Fredoka'] text-lg font-bold px-6 py-3 border-4 border-black rounded-[50px] shadow-[8px_8px_0_black] hover:scale-95 hover:shadow-[4px_4px_0_black] transition-all duration-200 bg-[#FFD966] dark:bg-gray-700 dark:text-white">
//                     <span className="relative z-10 flex items-center gap-2">
//                       🛍️ Continue Shopping
//                     </span>
//                     <span className="absolute inset-0 bg-[#e6b800] rounded-[50px] translate-x-1 translate-y-1 -z-10 dark:bg-gray-800"></span>
//                   </button>
//                 </Link>
                
//                 {wishlist.length > 0 && (
//                   <Link href="/order">
//                     <button className="group relative font-['Fredoka'] text-lg font-bold px-6 py-3 border-4 border-black rounded-[50px] shadow-[8px_8px_0_black] hover:scale-95 hover:shadow-[4px_4px_0_black] transition-all duration-200 bg-[#A0E7E5] dark:bg-gray-600 dark:text-white">
//                       <span className="relative z-10 flex items-center gap-2">
//                         🛵 Order All
//                       </span>
//                       <span className="absolute inset-0 bg-[#7fd1cf] rounded-[50px] translate-x-1 translate-y-1 -z-10 dark:bg-gray-700"></span>
//                     </button>
//                   </Link>
//                 )}
//               </div>
//             </>
//           )}
//         </div>
//       </section>

//       <Footer />
//     </main>
//   );
// } 






'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useWishlist } from '../context/WishListContext';
import { useLanguage } from '../context/LanguageContext';
export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { t } = useLanguage();

  const totalPrice = wishlist.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  // Get translation or fallback
  const text = {
    title: t?.wishlist?.title || 'MY WISHLIST',
    subtitle: t?.wishlist?.subtitle || 'Save your favorite items for later',
    empty: t?.wishlist?.empty || 'Your wishlist is empty',
    emptyDesc: t?.wishlist?.emptyDesc || 'Save items you love and order them later!',
    browseMenu: t?.wishlist?.browseMenu || 'Browse Menu',
    itemsSaved: t?.wishlist?.itemsSaved || 'items saved',
    itemSaved: t?.wishlist?.itemSaved || 'item saved',
    total: t?.wishlist?.total || 'Total',
    remove: t?.wishlist?.remove || 'Remove',
    view: t?.wishlist?.view || 'View',
    order: t?.wishlist?.order || 'Order',
    continueShopping: t?.wishlist?.continueShopping || 'Continue Shopping',
    orderAll: t?.wishlist?.orderAll || 'Order All',
    loginPrompt: t?.wishlist?.loginPrompt || 'Login to save your wishlist across devices!'
  };

  return (
    <main className="relative max-w-[1440px] mx-auto bg-gradient-to-br from-[#FFE5D9] via-[#FFEED9] to-[#FFF5E6] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden min-h-screen">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[5%] left-[2%] w-64 h-64 bg-[#FFB5B5]/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-[10%] right-[5%] w-80 h-80 bg-[#A0E7E5]/20 rounded-full blur-3xl animate-pulse-slower"></div>
        <div className="absolute top-[40%] right-[15%] w-72 h-72 bg-[#FFD966]/20 rounded-full blur-3xl animate-float"></div>
        
        {/* Floating Hearts */}
        <span className="absolute top-[15%] left-[10%] text-7xl opacity-10 animate-float-super-slow">❤️</span>
        <span className="absolute bottom-[25%] right-[15%] text-8xl opacity-10 animate-float-delay2">💖</span>
        <span className="absolute top-[60%] left-[20%] text-6xl opacity-10 animate-bounce-slow">💕</span>
        <span className="absolute bottom-[40%] left-[80%] text-7xl opacity-10 animate-spin-slow">✨</span>
      </div>

      <Navbar />
      
      <section className="relative py-8 sm:py-12 lg:py-16 xl:py-20 px-3 sm:px-4 lg:px-6 xl:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Header with Animation */}
          <div className="text-center mb-8 sm:mb-10 lg:mb-12 animate-slide-down">
            <h1 className="font-['Fredoka'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-3 sm:mb-4">
              <span className="bg-gradient-to-r from-[#FFB5B5] to-[#FF8A8A] px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-[50px_15px_50px_15px] sm:rounded-[60px_20px_60px_20px] lg:rounded-[80px_20px_80px_20px] border-4 sm:border-5 border-black shadow-[10px_10px_0_black] sm:shadow-[12px_12px_0_black] lg:shadow-[15px_15px_0_black] inline-block transform hover:scale-105 transition-transform dark:bg-gray-700 dark:border-gray-600">
                ❤️ {text.title}
              </span>
            </h1>
            <p className="font-['Fredoka'] text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-700 dark:text-gray-300 mt-3 sm:mt-4">
              <span className="inline-block animate-ping-slow mr-2">✨</span>
              {text.subtitle}
            </p>
          </div>

          {/* Login Prompt for Guests (if wishlist not empty) */}
          {wishlist.length > 0 && (
            <div className="mb-6 sm:mb-8 bg-gradient-to-r from-[#FFD966] to-[#FFC107] p-3 sm:p-4 rounded-[30px] sm:rounded-[40px] border-3 sm:border-4 border-black shadow-[6px_6px_0_black] sm:shadow-[8px_8px_0_black] text-center animate-bounce-slow dark:from-gray-700 dark:to-gray-600 dark:border-gray-500">
              <p className="font-['Fredoka'] text-sm sm:text-base dark:text-white">
                🔐 {text.loginPrompt}
              </p>
            </div>
          )}

          {/* Empty Wishlist */}
          {wishlist.length === 0 ? (
            <div className="text-center py-16 sm:py-20 lg:py-24 animate-fade-in">
              <div className="relative inline-block">
                <div className="text-8xl sm:text-9xl mb-4 sm:mb-6 animate-float">❤️</div>
                <span className="absolute -top-2 -right-2 text-4xl animate-bounce-slow">✨</span>
                <span className="absolute -bottom-2 -left-2 text-4xl animate-ping-slow">💫</span>
              </div>
              
              <h2 className="font-['Fredoka'] text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-700 dark:text-gray-300 mb-2 sm:mb-3">
                {text.empty}
              </h2>
              <p className="font-['Fredoka'] text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-6 sm:mb-8">
                {text.emptyDesc}
              </p>
              
              <Link href="/menu">
                <button className="group relative font-['Fredoka'] text-base sm:text-lg lg:text-xl font-bold px-6 sm:px-8 lg:px-10 py-3 sm:py-4 border-4 sm:border-5 border-black rounded-[40px] sm:rounded-[50px] lg:rounded-[60px] shadow-[8px_8px_0_black] sm:shadow-[10px_10px_0_black] lg:shadow-[12px_12px_0_black] hover:scale-95 hover:shadow-[4px_4px_0_black] sm:hover:shadow-[5px_5px_0_black] lg:hover:shadow-[6px_6px_0_black] transition-all duration-200 bg-gradient-to-r from-[#FFB5B5] to-[#A0E7E5] dark:from-gray-700 dark:to-gray-600 dark:text-white">
                  <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                    🍔 {text.browseMenu}
                    <span className="text-xl sm:text-2xl group-hover:translate-x-2 transition-transform">→</span>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#FF8A8A] to-[#7fd1cf] rounded-[40px] sm:rounded-[50px] lg:rounded-[60px] translate-x-1 sm:translate-x-1.5 lg:translate-x-2 translate-y-1 sm:translate-y-1.5 lg:translate-y-2 -z-10 dark:from-gray-800 dark:to-gray-700"></span>
                </button>
              </Link>
            </div>
          ) : (
            <>
              {/* Wishlist Stats Card */}
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 mb-6 sm:mb-8 bg-white/90 backdrop-blur-sm p-4 sm:p-5 lg:p-6 rounded-[30px] sm:rounded-[35px] lg:rounded-[40px] border-4 sm:border-5 border-black shadow-[8px_8px_0_black] sm:shadow-[10px_10px_0_black] lg:shadow-[12px_12px_0_black] dark:bg-gray-800 dark:border-gray-600">
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-2xl sm:text-3xl animate-bounce-slow">📦</span>
                  <span className="font-['Fredoka'] text-sm sm:text-base lg:text-lg dark:text-white">
                    {wishlist.length} {wishlist.length === 1 ? text.itemSaved : text.itemsSaved}
                  </span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-2xl sm:text-3xl animate-spin-slow">💰</span>
                  <span className="font-['Fredoka'] text-base sm:text-lg lg:text-xl font-bold dark:text-white">
                    {text.total}: ${totalPrice}
                  </span>
                </div>
              </div>

              {/* Wishlist Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
                {wishlist.map((item, index) => (
                  <div 
                    key={item.id} 
                    className="relative group bg-white/90 backdrop-blur-sm rounded-[30px] sm:rounded-[35px] lg:rounded-[40px] border-4 sm:border-5 border-black shadow-[8px_8px_0_black] sm:shadow-[10px_10px_0_black] lg:shadow-[12px_12px_0_black] hover:shadow-[12px_12px_0_black] sm:hover:shadow-[14px_14px_0_black] lg:hover:shadow-[16px_16px_0_black] transition-all duration-300 hover:-translate-y-2 p-4 sm:p-5 lg:p-6 animate-fade-in-up dark:bg-gray-800 dark:border-gray-600"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="absolute -top-3 -right-3 w-8 h-8 sm:w-10 sm:h-10 bg-[#FFB5B5] rounded-full border-3 border-black shadow-[4px_4px_0_black] hover:scale-95 hover:shadow-[2px_2px_0_black] transition-all flex items-center justify-center text-lg sm:text-xl font-bold z-10 dark:bg-gray-600 dark:border-gray-500 group/remove"
                      aria-label={text.remove}
                    >
                      <span className="group-hover/remove:rotate-90 transition-transform duration-300">✕</span>
                    </button>

                    {/* Product Emoji with Animation */}
                    <div className="relative mb-3 sm:mb-4 text-center">
                      <div className="text-6xl sm:text-7xl lg:text-8xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        {item.emoji || '🛍️'}
                      </div>
                      
                      {/* Floating hearts on hover */}
                      <span className="absolute -top-2 -right-2 text-xl opacity-0 group-hover:opacity-100 animate-float-slow transition-opacity">❤️</span>
                      <span className="absolute -bottom-2 -left-2 text-xl opacity-0 group-hover:opacity-100 animate-float-delay2 transition-opacity">💕</span>
                    </div>

                    {/* Product Info */}
                    <h3 className="font-['Fredoka'] text-lg sm:text-xl lg:text-2xl font-bold text-center mb-1 sm:mb-2 dark:text-white line-clamp-1">
                      {item.name}
                    </h3>
                    
                    <p className="font-['Fredoka'] text-gray-600 dark:text-gray-400 text-xs sm:text-sm text-center mb-3 sm:mb-4 line-clamp-2 px-1">
                      {item.description || 'Delicious food item'}
                    </p>

                    {/* Price Tag */}
                    <div className="text-center mb-4 sm:mb-5">
                      <span className="font-['Fredoka'] text-lg sm:text-xl lg:text-2xl font-bold bg-[#FFD966] dark:bg-gray-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border-3 border-black shadow-[4px_4px_0_black] dark:border-gray-500 dark:text-white inline-block">
                        ${item.price}
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 sm:gap-3">
                      <Link href={`/product/${item.id}`} className="flex-1">
                        <button className="w-full font-['Fredoka'] text-xs sm:text-sm font-bold bg-white dark:bg-gray-700 py-2 sm:py-2.5 rounded-[25px] sm:rounded-[30px] border-3 border-black shadow-[4px_4px_0_black] hover:scale-95 hover:shadow-[2px_2px_0_black] transition-all dark:text-white dark:border-gray-500">
                          {text.view}
                        </button>
                      </Link>
                      <Link href="/order" className="flex-1">
                        <button className="w-full font-['Fredoka'] text-xs sm:text-sm font-bold bg-[#A0E7E5] dark:bg-gray-600 py-2 sm:py-2.5 rounded-[25px] sm:rounded-[30px] border-3 border-black shadow-[4px_4px_0_black] hover:scale-95 hover:shadow-[2px_2px_0_black] transition-all dark:text-white dark:border-gray-500">
                          {text.order} 🛵
                        </button>
                      </Link>
                    </div>

                    {/* Cute Corner Decorations */}
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 sm:w-5 sm:h-5 bg-[#FFD966] dark:bg-gray-500 rounded-full border-2 border-black animate-float-slow"></div>
                    <div className="absolute -top-2 -left-2 w-3 h-3 sm:w-4 sm:h-4 bg-[#FFB5B5] dark:bg-gray-600 rounded-full border-2 border-black animate-bounce-slow"></div>
                  </div>
                ))}
              </div>

              {/* Bottom Actions */}
              <div className="mt-10 sm:mt-12 lg:mt-16 flex flex-wrap justify-center gap-3 sm:gap-4">
                <Link href="/menu">
                  <button className="group relative font-['Fredoka'] text-sm sm:text-base lg:text-lg font-bold px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 border-4 border-black rounded-[40px] sm:rounded-[45px] lg:rounded-[50px] shadow-[6px_6px_0_black] sm:shadow-[8px_8px_0_black] lg:shadow-[10px_10px_0_black] hover:scale-95 hover:shadow-[3px_3px_0_black] sm:hover:shadow-[4px_4px_0_black] lg:hover:shadow-[5px_5px_0_black] transition-all duration-200 bg-[#FFD966] dark:bg-gray-700 dark:text-white">
                    <span className="relative z-10 flex items-center gap-2">
                      🛍️ {text.continueShopping}
                    </span>
                    <span className="absolute inset-0 bg-[#e6b800] dark:bg-gray-800 rounded-[40px] sm:rounded-[45px] lg:rounded-[50px] translate-x-1 sm:translate-x-1.5 lg:translate-x-2 translate-y-1 sm:translate-y-1.5 lg:translate-y-2 -z-10"></span>
                  </button>
                </Link>
                
                {wishlist.length > 0 && (
                  <Link href="/order">
                    <button className="group relative font-['Fredoka'] text-sm sm:text-base lg:text-lg font-bold px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 border-4 border-black rounded-[40px] sm:rounded-[45px] lg:rounded-[50px] shadow-[6px_6px_0_black] sm:shadow-[8px_8px_0_black] lg:shadow-[10px_10px_0_black] hover:scale-95 hover:shadow-[3px_3px_0_black] sm:hover:shadow-[4px_4px_0_black] lg:hover:shadow-[5px_5px_0_black] transition-all duration-200 bg-[#A0E7E5] dark:bg-gray-600 dark:text-white">
                      <span className="relative z-10 flex items-center gap-2">
                        🛵 {text.orderAll}
                      </span>
                      <span className="absolute inset-0 bg-[#7fd1cf] dark:bg-gray-700 rounded-[40px] sm:rounded-[45px] lg:rounded-[50px] translate-x-1 sm:translate-x-1.5 lg:translate-x-2 translate-y-1 sm:translate-y-1.5 lg:translate-y-2 -z-10"></span>
                    </button>
                  </Link>
                )}
              </div>

              {/* Fun Footer Message */}
              <div className="text-center mt-8 sm:mt-10 lg:mt-12">
                <p className="font-['Fredoka'] text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-400">
                  ⭐ {wishlist.length} {wishlist.length === 1 ? 'item' : 'items'} • 💖 {text.subtitle}
                </p>
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}