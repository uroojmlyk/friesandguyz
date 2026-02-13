import { Fredoka } from 'next/font/google';
import './globals.css';

// Fix: Use variable font instead of specific weights
const fredoka = Fredoka({ 
  subsets: ['latin'],
  variable: '--font-fredoka', // Variable font supports all weights
  display: 'swap',
});

export const metadata = {
  title: 'Foodie\'s - Tasty Burger Delivery',
  description: 'Hot & Crispy Burgers with 30 Min Delivery',
  icons: {
    icon: '🍔',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fredoka.variable} style={{ fontFamily: 'var(--font-fredoka), sans-serif' }}>
        {children}
      </body>
    </html>
  );
}