

// 'use client';

// import React, { useState } from 'react';
// import { useLanguage } from '../context/LanguageContext';

// const CountrySelector = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const { currentLanguage, changeLanguage, languages, t } = useLanguage();

//   const handleSelect = (countryCode) => {
//     changeLanguage(countryCode);
//     setIsOpen(false);
//   };

//   const getCurrentFlag = () => {
//     const lang = languages.find(l => l.code === currentLanguage);
//     return lang ? lang.flag : '🇺🇸';
//   };

//   return (
//     <div className="relative">
//       {/* Selector Button */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="flex items-center gap-2 font-['Fredoka'] text-lg font-semibold bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full border-3 border-black shadow-[4px_4px_0_black] hover:shadow-[2px_2px_0_black] hover:scale-95 transition-all duration-200"
//       >
//         <span className="text-2xl">{getCurrentFlag()}</span>
//         <span className="hidden sm:inline">{currentLanguage}</span>
//         <span className="text-sm opacity-50">▼</span>
//       </button>

//       {/* Dropdown Menu */}
//       {isOpen && (
//         <>
//           <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          
//           <div className="absolute top-full right-0 mt-2 w-64 bg-[#FFE5D9] rounded-[30px] border-4 border-black shadow-[10px_10px_0_black] z-50 py-2 animate-slide-down">
//             {/* Search Box */}
//             <div className="px-3 pb-2 border-b-3 border-black/20">
//               <div className="relative">
//                 <span className="absolute left-3 top-1/2 -translate-y-1/2 text-lg">🔍</span>
//                 <input
//                   type="text"
//                   placeholder={t?.countrySelector?.search || "Search country..."}
//                   className="w-full font-['Fredoka'] pl-10 pr-3 py-2 rounded-full border-3 border-black text-sm focus:shadow-[4px_4px_0_#FFB5B5] focus:outline-none transition-all"
//                 />
//               </div>
//             </div>

//             {/* Country List - All 7 Languages */}
//             <div className="max-h-64 overflow-y-auto">
//               {languages.map((lang) => (
//                 <button
//                   key={lang.code}
//                   onClick={() => handleSelect(lang.code)}
//                   className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-[#FFD966] transition-all ${
//                     currentLanguage === lang.code ? 'bg-[#FFB5B5]' : ''
//                   }`}
//                 >
//                   <span className="text-2xl">{lang.flag}</span>
//                   <div className="flex-1 text-left">
//                     <p className="font-['Fredoka'] font-bold text-sm">{lang.name}</p>
//                     <p className="font-['Fredoka'] text-xs text-gray-600">{lang.language}</p>
//                   </div>
//                   {currentLanguage === lang.code && (
//                     <span className="text-xl">✅</span>
//                   )}
//                 </button>
//               ))}
//             </div>

//             {/* Footer */}
//             <div className="px-3 pt-2 border-t-3 border-black/20 text-center">
//               <p className="font-['Fredoka'] text-xs text-gray-600">
//                 🌍 {languages.length} {t?.countrySelector?.countriesAvailable || 'countries available'}
//               </p>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default CountrySelector; 











'use client';

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const CountrySelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentLanguage, changeLanguage, languages, t } = useLanguage();

  const handleSelect = (countryCode) => {
    changeLanguage(countryCode);
    setIsOpen(false);
  };

  const getCurrentLanguage = () => {
    const lang = languages.find(l => l.code === currentLanguage);
    return lang;
  };

  const currentLang = getCurrentLanguage();

  return (
    <div className="relative">
      {/* Selector Button - Shows Flag + Country Code */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 sm:gap-2 font-['Fredoka'] text-sm sm:text-base bg-white/90 backdrop-blur-sm px-2 sm:px-3 py-1.5 sm:py-2 rounded-full border-2 sm:border-3 border-black shadow-[3px_3px_0_black] sm:shadow-[4px_4px_0_black] hover:shadow-[2px_2px_0_black] hover:scale-95 transition-all duration-200"
      >
        <span className="text-xl sm:text-2xl">{currentLang?.flag || '🇺🇸'}</span>
        <span className="hidden xs:inline font-semibold">{currentLang?.code || 'US'}</span>
        <span className="text-xs sm:text-sm opacity-50 ml-0.5">▼</span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          
          <div className="absolute top-full right-0 mt-2 w-56 sm:w-64 bg-[#FFE5D9] rounded-[25px] sm:rounded-[30px] border-4 border-black shadow-[8px_8px_0_black] sm:shadow-[10px_10px_0_black] z-50 py-2 animate-slide-down">
            
            {/* Header */}
            <div className="px-3 pb-2 border-b-3 border-black/20">
              <p className="font-['Fredoka'] text-xs sm:text-sm font-bold text-center">
                🌍 {t?.countrySelector?.search || 'Select Language'}
              </p>
            </div>

            {/* Country List - All Languages with Flags and Names */}
            <div className="max-h-60 overflow-y-auto">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleSelect(lang.code)}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 hover:bg-[#FFD966] transition-all ${
                    currentLanguage === lang.code ? 'bg-[#FFB5B5]' : ''
                  }`}
                >
                  <span className="text-2xl">{lang.flag}</span>
                  <div className="flex-1 text-left">
                    <p className="font-['Fredoka'] font-bold text-sm">{lang.name}</p>
                    <p className="font-['Fredoka'] text-xs text-gray-600">{lang.language}</p>
                  </div>
                  {currentLanguage === lang.code && (
                    <span className="text-lg">✅</span>
                  )}
                </button>
              ))}
            </div>

            {/* Footer */}
            <div className="px-3 pt-2 border-t-3 border-black/20 text-center">
              <p className="font-['Fredoka'] text-xs text-gray-600">
                {languages.length} {t?.countrySelector?.countriesAvailable || 'languages'}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CountrySelector;