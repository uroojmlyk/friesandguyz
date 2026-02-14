






// import { Fredoka } from 'next/font/google';
// import './globals.css';
// import EmailPopup from './components/EmailPopup'; // ✅
// import { LanguageProvider } from './context/LanguageContext';
// import { ThemeProvider } from './context/ThemeContext';
// const fredoka = Fredoka({ 
//   subsets: ['latin'],
//   variable: '--font-fredoka',
//   display: 'swap',
// });

// export const metadata = {
//   title: 'Foodie\'s - Tasty Burger Delivery',
//   description: 'Hot & Crispy Burgers with 30 Min Delivery',
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={fredoka.variable} style={{ fontFamily: 'var(--font-fredoka), sans-serif' }}>
//         <LanguageProvider>  {/* ✅ Provider yahan hona chahiye */}
//           {children}
//           <EmailPopup />
//         </LanguageProvider>
//       </body>
//     </html>
//   );
// } 






import { Fredoka } from 'next/font/google';
import './globals.css';
import EmailPopup from './components/EmailPopup';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext'; // ✅ Imported

const fredoka = Fredoka({ 
  subsets: ['latin'],
  variable: '--font-fredoka',
  display: 'swap',
});

export const metadata = {
  title: 'Foodie\'s - Tasty Burger Delivery',
  description: 'Hot & Crispy Burgers with 30 Min Delivery',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fredoka.variable} style={{ fontFamily: 'var(--font-fredoka), sans-serif' }}>
        <ThemeProvider>      {/* ✅ ADD THIS - Must wrap everything */}
          <LanguageProvider>
            {children}
            <EmailPopup />
          </LanguageProvider>
        </ThemeProvider>      {/* ✅ ADD THIS */}
      </body>
    </html>
  );
}