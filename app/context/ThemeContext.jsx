// 'use client';

// import React, { createContext, useContext, useState, useEffect } from 'react';

// const ThemeContext = createContext();

// export function ThemeProvider({ children }) {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme');
//     setIsDarkMode(savedTheme === 'dark');
    
//     if (savedTheme === 'dark') {
//       document.documentElement.classList.add('dark');
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

//   return (
//     <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }

// export function useTheme() {
//   return useContext(ThemeContext);
// }






'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      }
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDark);
      if (prefersDark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}