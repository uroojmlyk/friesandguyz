


// 'use client';

// import React, { useEffect, useRef } from 'react';
// import Link from 'next/link';
// import { useLanguage } from '../context/LanguageContext'; // ✅ Added

// const Hero = () => {
//   const burgerRef = useRef(null);
//   const leafRef = useRef(null);
//   const cheeseRef = useRef(null);
//   const baconRef = useRef(null);
//   const { t } = useLanguage(); // ✅ Added

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       const x = (e.clientX / window.innerWidth - 0.5) * 20;
//       const y = (e.clientY / window.innerHeight - 0.5) * 20;
      
//       if (burgerRef.current) {
//         burgerRef.current.style.transform = `translate(${x}px, ${y}px) rotate(${x * 0.5}deg)`;
//       }
//       if (leafRef.current) {
//         leafRef.current.style.transform = `translate(${x * -1.5}px, ${y * -1.2}px) rotate(${x * -0.8}deg)`;
//       }
//       if (cheeseRef.current) {
//         cheeseRef.current.style.transform = `translate(${x * 1.2}px, ${y * -0.8}px) rotate(${x * 0.6}deg)`;
//       }
//       if (baconRef.current) {
//         baconRef.current.style.transform = `translate(${x * -0.8}px, ${y * 1.2}px) rotate(${x * -0.4}deg)`;
//       }
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   return (
//     <section className="relative min-h-screen bg-gradient-to-br from-[#FFE5D9] via-[#FFEED9] to-[#FFF5E6] overflow-hidden px-4 sm:px-6 lg:px-8">
      
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-[5%] left-[2%] w-32 h-32 sm:w-40 sm:h-40 lg:w-52 lg:h-52 bg-[#FFB5B5]/20 rounded-full blur-3xl animate-pulse-slow"></div>
//         <div className="absolute bottom-[10%] right-[5%] w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72 bg-[#A0E7E5]/20 rounded-full blur-3xl animate-pulse-slower"></div>
//         <div className="absolute top-[40%] right-[15%] w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-[#FFD966]/20 rounded-full blur-3xl animate-float"></div>
        
//         <div className="absolute top-20 left-10 opacity-20">
//           {[...Array(6)].map((_, i) => (
//             <div key={i} className="w-2 h-2 bg-black/30 rounded-full mb-4 animate-bounce-subtle" style={{ animationDelay: `${i * 0.2}s` }}></div>
//           ))}
//         </div>
//         <div className="absolute bottom-20 right-10 opacity-20">
//           {[...Array(6)].map((_, i) => (
//             <div key={i} className="w-2 h-2 bg-black/30 rounded-full mb-4 animate-bounce-subtle" style={{ animationDelay: `${i * 0.3}s` }}></div>
//           ))}
//         </div>

//         <span className="absolute top-[15%] right-[20%] text-4xl sm:text-5xl animate-twinkle">✨</span>
//         <span className="absolute top-[30%] left-[10%] text-3xl sm:text-4xl animate-twinkle-delay">⭐</span>
//         <span className="absolute bottom-[20%] left-[20%] text-4xl sm:text-5xl animate-twinkle">✨</span>
//         <span className="absolute bottom-[40%] right-[10%] text-3xl sm:text-4xl animate-twinkle-delay2">💫</span>
//       </div>

//       <div className="relative max-w-7xl mx-auto min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-12 py-12 sm:py-16 lg:py-20">
        
//         {/* Left Content */}
//         <div className="flex-1 w-full text-center lg:text-left z-10">
          
//           <div className="inline-flex items-center gap-2 bg-black/5 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-black/10 mb-6 sm:mb-8 animate-slide-down">
//             <span className="w-2 h-2 bg-[#FFB5B5] rounded-full animate-ping-slow"></span>
//             <span className="font-['Fredoka'] text-sm sm:text-base font-semibold text-gray-700">
//               🍕 {t?.hero?.hotDeals || 'HOT DEALS THIS WEEK'}
//             </span>
//           </div>

//           <h1 className="font-['Fredoka'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight mb-4 sm:mb-6">
//             <span className="bg-[#FFD966] px-4 sm:px-6 py-2 sm:py-3 rounded-[40px_20px_40px_20px] sm:rounded-[60px_20px_60px_20px] border-4 sm:border-5 border-black shadow-[8px_8px_0_black] sm:shadow-[12px_12px_0_black] inline-block my-1 sm:my-2 transform hover:scale-105 transition-transform duration-300 animate-slide-left">
//               {t?.hero?.tasty || 'TASTY'}
//             </span>
//             <br className="hidden sm:block" />
//             <span className="bg-[#FFB5B5] px-4 sm:px-6 py-2 sm:py-3 rounded-[20px_40px_20px_40px] sm:rounded-[20px_60px_20px_60px] border-4 sm:border-5 border-black shadow-[8px_8px_0_black] sm:shadow-[12px_12px_0_black] inline-block my-1 sm:my-2 text-5xl sm:text-6xl md:text-7xl lg:text-8xl transform hover:scale-105 transition-transform duration-300 animate-slide-right">
//               {t?.hero?.burger || 'BURGER'}
//             </span>
//             <br className="hidden sm:block" />
//             <span className="bg-[#FFD966] px-4 sm:px-6 py-2 sm:py-3 rounded-[40px_20px_40px_20px] sm:rounded-[60px_20px_60px_20px] border-4 sm:border-5 border-black shadow-[8px_8px_0_black] sm:shadow-[12px_12px_0_black] inline-block my-1 sm:my-2 transform hover:scale-105 transition-transform duration-300 animate-slide-left">
//               {t?.hero?.delivery || 'DELIVERY'}
//             </span>
//           </h1>

//           <p className="font-['Fredoka'] text-lg sm:text-xl md:text-2xl my-6 sm:my-8 px-4 sm:px-6 py-3 sm:py-4 bg-white/90 backdrop-blur-sm border-3 sm:border-4 border-black rounded-[40px] sm:rounded-[60px] inline-block shadow-[6px_6px_0_black] sm:shadow-[8px_8px_0_black] hover:shadow-[8px_8px_0_black] sm:hover:shadow-[12px_12px_0_black] hover:-translate-y-1 transition-all duration-300 animate-fade-in">
//             {t?.hero?.tagline || '🍟 Hot & Crispy • 30 Min Delivery • Free Fries'}
//           </p>

//           <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 my-6 sm:my-8">
//             <Link href="/order" className="group relative w-full sm:w-auto">
//               <button className="relative font-['Fredoka'] text-xl sm:text-2xl font-bold px-6 sm:px-8 lg:px-9 py-3 sm:py-4 border-4 sm:border-5 border-black rounded-[50px] sm:rounded-[60px] shadow-[6px_6px_0_black] sm:shadow-[8px_8px_0_black] lg:shadow-[10px_10px_0_black] bg-[#A0E7E5] text-black hover:scale-95 hover:shadow-[4px_4px_0_black] sm:hover:shadow-[6px_6px_0_black] transition-all duration-200 w-full animate-float-slow">
//                 <span className="relative z-10 flex items-center justify-center gap-2">
//                   {t?.hero?.orderNow || 'Order Now'} 
//                   <span className="text-2xl sm:text-3xl group-hover:rotate-12 transition-transform duration-300">🛵</span>
//                 </span>
//                 <span className="absolute inset-0 bg-[#7fd1cf] rounded-[50px] sm:rounded-[60px] translate-x-1 translate-y-1 -z-10"></span>
//               </button>
//             </Link>
            
//             <Link href="/menu" className="group relative w-full sm:w-auto">
//               <button className="relative font-['Fredoka'] text-xl sm:text-2xl font-bold px-6 sm:px-8 lg:px-9 py-3 sm:py-4 border-4 sm:border-5 border-black rounded-[50px] sm:rounded-[60px] shadow-[6px_6px_0_black] sm:shadow-[8px_8px_0_black] lg:shadow-[10px_10px_0_black] bg-white text-black hover:scale-95 hover:shadow-[4px_4px_0_black] sm:hover:shadow-[6px_6px_0_black] transition-all duration-200 w-full animate-float-slow-delay">
//                 <span className="relative z-10 flex items-center justify-center gap-2">
//                   {t?.hero?.viewMenu || 'View Menu'} 
//                   <span className="text-2xl sm:text-3xl group-hover:rotate-12 transition-transform duration-300">📋</span>
//                 </span>
//                 <span className="absolute inset-0 bg-gray-100 rounded-[50px] sm:rounded-[60px] translate-x-1 translate-y-1 -z-10"></span>
//               </button>
//             </Link>
//           </div>

//           <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-8 lg:gap-12 mt-8 sm:mt-10 animate-fade-in-up">
//             <div className="group flex flex-col items-center lg:items-start">
//               <div className="flex items-center gap-2">
//                 <span className="text-2xl sm:text-3xl group-hover:scale-125 transition-transform duration-300">😊</span>
//                 <span className="font-['Fredoka'] text-2xl sm:text-3xl lg:text-4xl font-black text-black">500+</span>
//               </div>
//               <span className="font-['Fredoka'] text-sm sm:text-base text-gray-600 mt-1">{t?.hero?.happyCustomers || 'Happy Customers'}</span>
//             </div>
            
//             <div className="group flex flex-col items-center lg:items-start">
//               <div className="flex items-center gap-2">
//                 <span className="text-2xl sm:text-3xl group-hover:scale-125 transition-transform duration-300">🍔</span>
//                 <span className="font-['Fredoka'] text-2xl sm:text-3xl lg:text-4xl font-black text-black">50+</span>
//               </div>
//               <span className="font-['Fredoka'] text-sm sm:text-base text-gray-600 mt-1">{t?.hero?.foodItems || 'Food Items'}</span>
//             </div>
            
//             <div className="group flex flex-col items-center lg:items-start">
//               <div className="flex items-center gap-2">
//                 <span className="text-2xl sm:text-3xl group-hover:scale-125 transition-transform duration-300">⭐</span>
//                 <span className="font-['Fredoka'] text-2xl sm:text-3xl lg:text-4xl font-black text-black">4.9</span>
//               </div>
//               <span className="font-['Fredoka'] text-sm sm:text-base text-gray-600 mt-1">{t?.hero?.rating || 'Rating'}</span>
//             </div>
//           </div>
//         </div>

//         {/* Right Content - Burger */}
//         <div className="flex-1 w-full flex justify-center items-center relative mt-8 lg:mt-0">
          
//           <div className="relative group" ref={burgerRef}>
//             <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-[80%] h-8 bg-black/10 rounded-full blur-xl animate-pulse-slow"></div>
            
//             <div className="relative text-[150px] sm:text-[200px] md:text-[220px] lg:text-[250px] xl:text-[280px] bg-gradient-to-br from-[#FFD966] to-[#FFC107] p-4 sm:p-5 rounded-[80px_80px_30px_30px] sm:rounded-[100px_100px_40px_40px] border-6 sm:border-8 border-black shadow-[15px_15px_0_black] sm:shadow-[20px_20px_0_black] lg:shadow-[25px_25px_0_black] transform group-hover:scale-105 group-hover:-rotate-2 transition-all duration-500 animate-float-slow">
//               🍔
              
//               <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 flex gap-1">
//                 <span className="text-4xl sm:text-5xl opacity-0 group-hover:opacity-100 animate-steam1">💨</span>
//                 <span className="text-4xl sm:text-5xl opacity-0 group-hover:opacity-100 animate-steam2">💨</span>
//                 <span className="text-4xl sm:text-5xl opacity-0 group-hover:opacity-100 animate-steam3">💨</span>
//               </div>
//             </div>
//           </div>

//           <div className="absolute inset-0 pointer-events-none">
//             <span ref={leafRef} className="absolute -top-8 sm:-top-12 -right-4 sm:-right-8 text-5xl sm:text-6xl lg:text-7xl animate-float-super-slow hover:animate-wiggle cursor-pointer transition-all duration-300">🥬</span>
//             <span ref={cheeseRef} className="absolute top-16 sm:top-24 -right-8 sm:-right-12 text-5xl sm:text-6xl lg:text-7xl animate-float-slow-delay hover:animate-wiggle cursor-pointer transition-all duration-300">🧀</span>
//             <span ref={baconRef} className="absolute top-32 sm:top-48 right-4 sm:right-8 text-5xl sm:text-6xl lg:text-7xl animate-float-delay2 hover:animate-wiggle cursor-pointer transition-all duration-300">🥓</span>
            
//             <span className="absolute -bottom-4 left-1/2 text-4xl sm:text-5xl animate-spin-slow opacity-50 hover:opacity-100 transition-opacity">🍅</span>
//             <span className="absolute top-1/2 -left-8 sm:-left-12 text-4xl sm:text-5xl animate-bounce-slow opacity-50 hover:opacity-100">🧅</span>
//             <span className="absolute bottom-12 -right-4 text-4xl sm:text-5xl animate-float opacity-50 hover:opacity-100">🥗</span>
//           </div>

//           <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white/90 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full border-3 sm:border-4 border-black shadow-[6px_6px_0_black] sm:shadow-[8px_8px_0_black] animate-slide-up">
//             <span className="font-['Fredoka'] text-sm sm:text-base font-bold flex items-center gap-1 sm:gap-2">
//               <span className="text-yellow-400">★</span> {t?.hero?.chefsSpecial || "Chef's Special"}
//             </span>
//           </div>
          
//           <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-[#FFB5B5]/90 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full border-3 sm:border-4 border-black shadow-[6px_6px_0_black] sm:shadow-[8px_8px_0_black] animate-slide-down">
//             <span className="font-['Fredoka'] text-sm sm:text-base font-bold flex items-center gap-1 sm:gap-2">
//               <span className="animate-ping-slow">🔥</span> -20%
//             </span>
//           </div>
//         </div>
//       </div>

//       <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
//         <div className="flex flex-col items-center gap-1 sm:gap-2">
//           <span className="text-xs sm:text-sm font-['Fredoka'] text-gray-600">{t?.hero?.scroll || 'Scroll'}</span>
//           <div className="w-4 sm:w-5 h-6 sm:h-8 border-2 border-black rounded-full flex justify-center">
//             <div className="w-1 sm:w-1.5 h-1.5 sm:h-2 bg-black rounded-full animate-scroll"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero; 








'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const burgerRef = useRef(null);
  const leafRef = useRef(null);
  const cheeseRef = useRef(null);
  const baconRef = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      
      if (burgerRef.current) {
        burgerRef.current.style.transform = `translate(${x}px, ${y}px) rotate(${x * 0.5}deg)`;
      }
      if (leafRef.current) {
        leafRef.current.style.transform = `translate(${x * -1.5}px, ${y * -1.2}px) rotate(${x * -0.8}deg)`;
      }
      if (cheeseRef.current) {
        cheeseRef.current.style.transform = `translate(${x * 1.2}px, ${y * -0.8}px) rotate(${x * 0.6}deg)`;
      }
      if (baconRef.current) {
        baconRef.current.style.transform = `translate(${x * -0.8}px, ${y * 1.2}px) rotate(${x * -0.4}deg)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#FFE5D9] via-[#FFEED9] to-[#FFF5E6] overflow-hidden px-4 sm:px-6 lg:px-8">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[5%] left-[2%] w-32 h-32 sm:w-40 sm:h-40 lg:w-52 lg:h-52 bg-[#FFB5B5]/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-[10%] right-[5%] w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72 bg-[#A0E7E5]/20 rounded-full blur-3xl animate-pulse-slower"></div>
        <div className="absolute top-[40%] right-[15%] w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-[#FFD966]/20 rounded-full blur-3xl animate-float"></div>
        
        <div className="absolute top-20 left-10 opacity-20 hidden sm:block">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-black/30 rounded-full mb-4 animate-bounce-subtle" style={{ animationDelay: `${i * 0.2}s` }}></div>
          ))}
        </div>
        <div className="absolute bottom-20 right-10 opacity-20 hidden sm:block">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-black/30 rounded-full mb-4 animate-bounce-subtle" style={{ animationDelay: `${i * 0.3}s` }}></div>
          ))}
        </div>

        <span className="absolute top-[15%] right-[20%] text-3xl sm:text-4xl lg:text-5xl animate-twinkle">✨</span>
        <span className="absolute top-[30%] left-[10%] text-2xl sm:text-3xl lg:text-4xl animate-twinkle-delay">⭐</span>
        <span className="absolute bottom-[20%] left-[20%] text-3xl sm:text-4xl lg:text-5xl animate-twinkle">✨</span>
        <span className="absolute bottom-[40%] right-[10%] text-2xl sm:text-3xl lg:text-4xl animate-twinkle-delay2">💫</span>
      </div>

      <div className="relative max-w-7xl mx-auto min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-6 lg:gap-12 py-8 sm:py-12 lg:py-16">
        
        {/* Left Content */}
        <div className="flex-1 w-full text-center lg:text-left z-10 px-2 sm:px-0">
          
          <div className="inline-flex items-center gap-2 bg-black/5 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border-2 border-black/10 mb-4 sm:mb-6 animate-slide-down">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#FFB5B5] rounded-full animate-ping-slow"></span>
            <span className="font-['Fredoka'] text-xs sm:text-sm lg:text-base font-semibold text-gray-700">
              🍕 {t?.hero?.hotDeals || 'HOT DEALS THIS WEEK'}
            </span>
          </div>

          <h1 className="font-['Fredoka'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl leading-tight mb-4 sm:mb-6">
            <span className="bg-[#FFD966] px-3 sm:px-4 lg:px-6 py-1 sm:py-2 lg:py-3 rounded-[30px_15px_30px_15px] sm:rounded-[40px_20px_40px_20px] lg:rounded-[60px_20px_60px_20px] border-3 sm:border-4 lg:border-5 border-black shadow-[4px_4px_0_black] sm:shadow-[8px_8px_0_black] lg:shadow-[12px_12px_0_black] inline-block my-1 transform hover:scale-105 transition-transform duration-300 animate-slide-left">
              {t?.hero?.tasty || 'TASTY'}
            </span>
            <br className="hidden sm:block" />
            <span className="bg-[#FFB5B5] px-3 sm:px-4 lg:px-6 py-1 sm:py-2 lg:py-3 rounded-[15px_30px_15px_30px] sm:rounded-[20px_40px_20px_40px] lg:rounded-[20px_60px_20px_60px] border-3 sm:border-4 lg:border-5 border-black shadow-[4px_4px_0_black] sm:shadow-[8px_8px_0_black] lg:shadow-[12px_12px_0_black] inline-block my-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl transform hover:scale-105 transition-transform duration-300 animate-slide-right">
              {t?.hero?.burger || 'BURGER'}
            </span>
            <br className="hidden sm:block" />
            <span className="bg-[#FFD966] px-3 sm:px-4 lg:px-6 py-1 sm:py-2 lg:py-3 rounded-[30px_15px_30px_15px] sm:rounded-[40px_20px_40px_20px] lg:rounded-[60px_20px_60px_20px] border-3 sm:border-4 lg:border-5 border-black shadow-[4px_4px_0_black] sm:shadow-[8px_8px_0_black] lg:shadow-[12px_12px_0_black] inline-block my-1 transform hover:scale-105 transition-transform duration-300 animate-slide-left">
              {t?.hero?.delivery || 'DELIVERY'}
            </span>
          </h1>

          <p className="font-['Fredoka'] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl my-4 sm:my-6 lg:my-8 px-3 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 bg-white/90 backdrop-blur-sm border-2 sm:border-3 lg:border-4 border-black rounded-[30px] sm:rounded-[40px] lg:rounded-[60px] inline-block shadow-[4px_4px_0_black] sm:shadow-[6px_6px_0_black] lg:shadow-[8px_8px_0_black] hover:shadow-[6px_6px_0_black] sm:hover:shadow-[8px_8px_0_black] lg:hover:shadow-[12px_12px_0_black] hover:-translate-y-1 transition-all duration-300 animate-fade-in">
            {t?.hero?.tagline || '🍟 Hot & Crispy • 30 Min Delivery • Free Fries'}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 lg:gap-6 my-4 sm:my-6 lg:my-8">
            <Link href="/order" className="group relative w-full sm:w-auto">
              <button className="relative font-['Fredoka'] text-base sm:text-lg lg:text-xl xl:text-2xl font-bold px-4 sm:px-6 lg:px-8 xl:px-9 py-2 sm:py-3 lg:py-4 border-3 sm:border-4 lg:border-5 border-black rounded-[40px] sm:rounded-[50px] lg:rounded-[60px] shadow-[4px_4px_0_black] sm:shadow-[6px_6px_0_black] lg:shadow-[8px_8px_0_black] xl:shadow-[10px_10px_0_black] bg-[#A0E7E5] text-black hover:scale-95 hover:shadow-[2px_2px_0_black] sm:hover:shadow-[4px_4px_0_black] lg:hover:shadow-[6px_6px_0_black] transition-all duration-200 w-full animate-float-slow">
                <span className="relative z-10 flex items-center justify-center gap-1 sm:gap-2">
                  {t?.hero?.orderNow || 'Order Now'} 
                  <span className="text-xl sm:text-2xl lg:text-3xl group-hover:rotate-12 transition-transform duration-300">🛵</span>
                </span>
                <span className="absolute inset-0 bg-[#7fd1cf] rounded-[40px] sm:rounded-[50px] lg:rounded-[60px] translate-x-1 translate-y-1 -z-10"></span>
              </button>
            </Link>
            
            <Link href="/menu" className="group relative w-full sm:w-auto">
              <button className="relative font-['Fredoka'] text-base sm:text-lg lg:text-xl xl:text-2xl font-bold px-4 sm:px-6 lg:px-8 xl:px-9 py-2 sm:py-3 lg:py-4 border-3 sm:border-4 lg:border-5 border-black rounded-[40px] sm:rounded-[50px] lg:rounded-[60px] shadow-[4px_4px_0_black] sm:shadow-[6px_6px_0_black] lg:shadow-[8px_8px_0_black] xl:shadow-[10px_10px_0_black] bg-white text-black hover:scale-95 hover:shadow-[2px_2px_0_black] sm:hover:shadow-[4px_4px_0_black] lg:hover:shadow-[6px_6px_0_black] transition-all duration-200 w-full animate-float-slow-delay">
                <span className="relative z-10 flex items-center justify-center gap-1 sm:gap-2">
                  {t?.hero?.viewMenu || 'View Menu'} 
                  <span className="text-xl sm:text-2xl lg:text-3xl group-hover:rotate-12 transition-transform duration-300">📋</span>
                </span>
                <span className="absolute inset-0 bg-gray-100 rounded-[40px] sm:rounded-[50px] lg:rounded-[60px] translate-x-1 translate-y-1 -z-10"></span>
              </button>
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 xl:gap-12 mt-6 sm:mt-8 lg:mt-10 animate-fade-in-up">
            <div className="group flex flex-col items-center lg:items-start">
              <div className="flex items-center gap-1 sm:gap-2">
                <span className="text-xl sm:text-2xl lg:text-3xl group-hover:scale-125 transition-transform duration-300">😊</span>
                <span className="font-['Fredoka'] text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-black text-black">500+</span>
              </div>
              <span className="font-['Fredoka'] text-xs sm:text-sm lg:text-base text-gray-600 mt-0.5 sm:mt-1">{t?.hero?.happyCustomers || 'Happy Customers'}</span>
            </div>
            
            <div className="group flex flex-col items-center lg:items-start">
              <div className="flex items-center gap-1 sm:gap-2">
                <span className="text-xl sm:text-2xl lg:text-3xl group-hover:scale-125 transition-transform duration-300">🍔</span>
                <span className="font-['Fredoka'] text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-black text-black">50+</span>
              </div>
              <span className="font-['Fredoka'] text-xs sm:text-sm lg:text-base text-gray-600 mt-0.5 sm:mt-1">{t?.hero?.foodItems || 'Food Items'}</span>
            </div>
            
            <div className="group flex flex-col items-center lg:items-start">
              <div className="flex items-center gap-1 sm:gap-2">
                <span className="text-xl sm:text-2xl lg:text-3xl group-hover:scale-125 transition-transform duration-300">⭐</span>
                <span className="font-['Fredoka'] text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-black text-black">4.9</span>
              </div>
              <span className="font-['Fredoka'] text-xs sm:text-sm lg:text-base text-gray-600 mt-0.5 sm:mt-1">{t?.hero?.rating || 'Rating'}</span>
            </div>
          </div>
        </div>

        {/* Right Content - Burger */}
        <div className="flex-1 w-full flex justify-center items-center relative mt-6 lg:mt-0">
          
          <div className="relative group" ref={burgerRef}>
            <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 w-[70%] sm:w-[80%] h-5 sm:h-8 bg-black/10 rounded-full blur-md sm:blur-xl animate-pulse-slow"></div>
            
            <div className="relative text-[120px] sm:text-[150px] md:text-[180px] lg:text-[220px] xl:text-[250px] 2xl:text-[280px] bg-gradient-to-br from-[#FFD966] to-[#FFC107] p-3 sm:p-4 lg:p-5 rounded-[60px_60px_25px_25px] sm:rounded-[80px_80px_30px_30px] lg:rounded-[100px_100px_40px_40px] border-4 sm:border-6 lg:border-8 border-black shadow-[10px_10px_0_black] sm:shadow-[15px_15px_0_black] lg:shadow-[20px_20px_0_black] xl:shadow-[25px_25px_0_black] transform group-hover:scale-105 group-hover:-rotate-2 transition-all duration-500 animate-float-slow">
              🍔
              
              <div className="absolute -top-6 sm:-top-8 lg:-top-10 left-1/2 transform -translate-x-1/2 flex gap-0.5 sm:gap-1">
                <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl opacity-0 group-hover:opacity-100 animate-steam1">💨</span>
                <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl opacity-0 group-hover:opacity-100 animate-steam2">💨</span>
                <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl opacity-0 group-hover:opacity-100 animate-steam3">💨</span>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 pointer-events-none">
            <span ref={leafRef} className="absolute -top-6 sm:-top-8 lg:-top-12 -right-2 sm:-right-4 lg:-right-8 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl animate-float-super-slow hover:animate-wiggle cursor-pointer transition-all duration-300">🥬</span>
            <span ref={cheeseRef} className="absolute top-12 sm:top-16 lg:top-24 -right-4 sm:-right-6 lg:-right-12 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl animate-float-slow-delay hover:animate-wiggle cursor-pointer transition-all duration-300">🧀</span>
            <span ref={baconRef} className="absolute top-24 sm:top-32 lg:top-48 right-2 sm:right-4 lg:right-8 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl animate-float-delay2 hover:animate-wiggle cursor-pointer transition-all duration-300">🥓</span>
            
            <span className="absolute -bottom-3 sm:-bottom-4 left-1/2 text-3xl sm:text-4xl lg:text-5xl animate-spin-slow opacity-30 sm:opacity-50 hover:opacity-100 transition-opacity">🍅</span>
            <span className="absolute top-1/2 -left-4 sm:-left-6 lg:-left-12 text-3xl sm:text-4xl lg:text-5xl animate-bounce-slow opacity-30 sm:opacity-50 hover:opacity-100 hidden sm:block">🧅</span>
            <span className="absolute bottom-8 sm:bottom-12 -right-2 sm:-right-4 text-3xl sm:text-4xl lg:text-5xl animate-float opacity-30 sm:opacity-50 hover:opacity-100 hidden sm:block">🥗</span>
          </div>

          <div className="absolute -bottom-3 sm:-bottom-4 lg:-bottom-6 -left-2 sm:-left-4 lg:-left-6 bg-white/90 backdrop-blur-sm px-2 sm:px-3 lg:px-4 xl:px-6 py-1 sm:py-2 lg:py-3 rounded-full border-2 sm:border-3 lg:border-4 border-black shadow-[3px_3px_0_black] sm:shadow-[4px_4px_0_black] lg:shadow-[6px_6px_0_black] xl:shadow-[8px_8px_0_black] animate-slide-up">
            <span className="font-['Fredoka'] text-xs sm:text-sm lg:text-base xl:text-lg font-bold flex items-center gap-0.5 sm:gap-1">
              <span className="text-yellow-400 text-sm sm:text-base lg:text-lg">★</span> {t?.hero?.chefsSpecial || "Chef's Special"}
            </span>
          </div>
          
          <div className="absolute -top-3 sm:-top-4 lg:-top-6 -right-2 sm:-right-4 lg:-right-6 bg-[#FFB5B5]/90 backdrop-blur-sm px-2 sm:px-3 lg:px-4 xl:px-6 py-1 sm:py-2 lg:py-3 rounded-full border-2 sm:border-3 lg:border-4 border-black shadow-[3px_3px_0_black] sm:shadow-[4px_4px_0_black] lg:shadow-[6px_6px_0_black] xl:shadow-[8px_8px_0_black] animate-slide-down">
            <span className="font-['Fredoka'] text-xs sm:text-sm lg:text-base xl:text-lg font-bold flex items-center gap-0.5 sm:gap-1">
              <span className="animate-ping-slow text-sm sm:text-base lg:text-lg">🔥</span> -20%
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <div className="flex flex-col items-center gap-0.5 sm:gap-1 lg:gap-2">
          <span className="text-[10px] sm:text-xs lg:text-sm font-['Fredoka'] text-gray-600">{t?.hero?.scroll || 'Scroll'}</span>
          <div className="w-3 sm:w-4 lg:w-5 h-4 sm:h-6 lg:h-8 border-1.5 sm:border-2 border-black rounded-full flex justify-center">
            <div className="w-0.5 sm:w-1 lg:w-1.5 h-1 sm:h-1.5 lg:h-2 bg-black rounded-full animate-scroll"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;