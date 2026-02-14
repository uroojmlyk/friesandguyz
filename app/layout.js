


// import { Fredoka } from 'next/font/google';
// import './globals.css';
// import EmailPopup from './components/EmailPopup';
// import { LanguageProvider } from './context/LanguageContext';
// import { ThemeProvider } from './context/ThemeContext';
// import { WishlistProvider } from './context/WishListContext';
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
//         <ThemeProvider>
//           <LanguageProvider>
//             <WishlistProvider>    {/* ✅ Provider ka naam bhi consistent rakhna */}
//               {children}
//               <EmailPopup />
//             </WishlistProvider>
//           </LanguageProvider>
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// } 







import { Fredoka } from 'next/font/google';
import './globals.css';
import EmailPopup from './components/EmailPopup';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { WishlistProvider } from './context/WishListContext';
import { AuthProvider } from './context/AuthContext';
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
        <ThemeProvider>
          <LanguageProvider>
            <AuthProvider>                {/* ✅ ADD THIS */}
              <WishlistProvider>           {/* ✅ small 'l' wala */}
                {children}
                <EmailPopup />
              </WishlistProvider>
            </AuthProvider>                {/* ✅ ADD THIS */}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}