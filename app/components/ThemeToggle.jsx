

// 'use client';

// import React, { createContext, useContext, useState, useEffect } from 'react';

// const ThemeContext = createContext();

// export function ThemeProvider({ children }) {
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
    
//     // Check localStorage first
//     const savedTheme = localStorage.getItem('theme');
    
//     if (savedTheme) {
//       setIsDarkMode(savedTheme === 'dark');
//       if (savedTheme === 'dark') {
//         document.documentElement.classList.add('dark');
//       }
//     } else {
//       // Check system preference
//       const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
//       setIsDarkMode(prefersDark);
//       if (prefersDark) {
//         document.documentElement.classList.add('dark');
//         localStorage.setItem('theme', 'dark');
//       } else {
//         localStorage.setItem('theme', 'light');
//       }
//     }
//   }, []);

//   const toggleDarkMode = () => {
//     setIsDarkMode(!isDarkMode);
//     if (!isDarkMode) {
//       document.documentElement.classList.add('dark');
//       localStorage.setItem('theme', 'dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//       localStorage.setItem('theme', 'light');
//     }
//   };

//   // Prevent hydration mismatch
//   if (!mounted) {
//     return null;
//   }

//   return (
//     <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }

// export function useTheme() {
//   const context = useContext(ThemeContext);
//   if (context === undefined) {
//     throw new Error('useTheme must be used within a ThemeProvider');
//   }
//   return context;
// } 







'use client';

import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <button
      onClick={toggleDarkMode}
      className={`
        relative group font-['Fredoka'] text-sm lg:text-base xl:text-lg font-bold 
        px-3 lg:px-4 py-1.5 lg:py-2 
        border-3 border-black rounded-[40px] 
        shadow-[4px_4px_0_black] hover:shadow-[2px_2px_0_black] 
        hover:scale-95 transition-all duration-200 
        whitespace-nowrap
        ${isDarkMode 
          ? 'bg-gray-800 text-white border-gray-600' 
          : 'bg-[#FFD966] text-black'
        }
      `}
      aria-label="Toggle dark mode"
    >
      <span className="relative z-10 flex items-center gap-2">
        {isDarkMode ? (
          <>
            <span className="text-xl">🌙</span>
            <span className="hidden sm:inline">Dark</span>
          </>
        ) : (
          <>
            <span className="text-xl">☀️</span>
            <span className="hidden sm:inline">Light</span>
          </>
        )}
      </span>
    </button>
  );
};

// ✅ YEH LINE IMPORTANT HAI
export default ThemeToggle;