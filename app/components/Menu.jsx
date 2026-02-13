

// 'use client';

// import React, { useState } from 'react';
// import MenuCard from './MenuCard';
// import { useLanguage } from '../context/LanguageContext'; // ✅ Added

// const Menu = () => {
//   const [cart, setCart] = useState([]);
//   const [showCart, setShowCart] = useState(false);
//   const [activeCategory, setActiveCategory] = useState('all');
//   const [isAnimating, setIsAnimating] = useState(false);
//   const { t } = useLanguage(); // ✅ Added

//   const menuItems = [
//     { id: 1, name: 'Classic Burger', emoji: '🍔', price: 12.99, rating: 4.9, category: 'Burgers', description: 'Beef patty, lettuce, tomato, cheese' },
//     { id: 2, name: 'Cheese Burger', emoji: '🧀', price: 14.99, rating: 5.0, category: 'Burgers', description: 'Double cheese, caramelized onions' },
//     { id: 3, name: 'Chicken Burger', emoji: '🍗', price: 13.99, rating: 4.8, category: 'Burgers', description: 'Crispy chicken, mayo, lettuce' },
//     { id: 4, name: 'Margherita', emoji: '🍕', price: 16.99, rating: 4.7, category: 'Pizza', description: 'Fresh basil, mozzarella, tomato sauce' },
//     { id: 5, name: 'Pepperoni', emoji: '🍕', price: 18.99, rating: 4.9, category: 'Pizza', description: 'Double pepperoni, extra cheese' },
//     { id: 6, name: 'French Fries', emoji: '🍟', price: 5.99, rating: 4.6, category: 'Sides', description: 'Crispy golden fries, sea salt' },
//     { id: 7, name: 'Onion Rings', emoji: '🧅', price: 6.99, rating: 4.5, category: 'Sides', description: 'Beer battered, crispy' },
//     { id: 8, name: 'Chicken Nuggets', emoji: '🍗', price: 8.99, rating: 4.7, category: 'Sides', description: '6 pcs, honey mustard' },
//     { id: 9, name: 'Soft Drink', emoji: '🥤', price: 2.99, rating: 4.8, category: 'Drinks', description: 'Coca-Cola, Sprite, Fanta' },
//     { id: 10, name: 'Milkshake', emoji: '🥛', price: 4.99, rating: 4.9, category: 'Drinks', description: 'Vanilla, chocolate, strawberry' },
//     { id: 11, name: 'Ice Cream', emoji: '🍦', price: 3.99, rating: 4.8, category: 'Desserts', description: 'Vanilla bean, chocolate fudge' },
//     { id: 12, name: 'Brownie', emoji: '🍫', price: 4.99, rating: 4.9, category: 'Desserts', description: 'Warm chocolate brownie' },
//   ];

//   const categories = ['all', ...new Set(menuItems.map(item => item.category))];

//   const filteredItems = activeCategory === 'all' 
//     ? menuItems 
//     : menuItems.filter(item => item.category === activeCategory);

//   const addToCart = (item) => {
//     setCart(prevCart => {
//       const existingItem = prevCart.find(i => i.id === item.id);
//       if (existingItem) {
//         return prevCart.map(i => 
//           i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
//         );
//       }
//       return [...prevCart, { ...item, quantity: 1 }];
//     });
    
//     setIsAnimating(true);
//     setTimeout(() => setIsAnimating(false), 1000);
//   };

//   const removeFromCart = (itemId) => {
//     setCart(prevCart => prevCart.filter(item => item.id !== itemId));
//   };

//   const updateQuantity = (itemId, newQuantity) => {
//     if (newQuantity === 0) {
//       removeFromCart(itemId);
//     } else {
//       setCart(prevCart =>
//         prevCart.map(item =>
//           item.id === itemId ? { ...item, quantity: newQuantity } : item
//         )
//       );
//     }
//   };

//   const getTotalPrice = () => {
//     return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
//   };

//   const getTotalItems = () => {
//     return cart.reduce((total, item) => total + item.quantity, 0);
//   };

//   return (
//     <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#FFE5D9] via-[#FFEED9] to-[#FFF5E6] min-h-screen overflow-hidden">
      
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-[#FFB5B5]/20 rounded-full blur-3xl animate-pulse-slow"></div>
//         <div className="absolute bottom-[20%] right-[5%] w-80 h-80 bg-[#A0E7E5]/20 rounded-full blur-3xl animate-pulse-slower"></div>
//         <div className="absolute top-[40%] left-[50%] w-72 h-72 bg-[#FFD966]/20 rounded-full blur-3xl animate-float"></div>
        
//         <span className="absolute top-[15%] left-[10%] text-6xl opacity-10 animate-float-super-slow">🍔</span>
//         <span className="absolute bottom-[25%] right-[15%] text-7xl opacity-10 animate-float-delay2">🍕</span>
//         <span className="absolute top-[60%] left-[20%] text-6xl opacity-10 animate-bounce-slow">🍟</span>
//         <span className="absolute bottom-[40%] left-[80%] text-7xl opacity-10 animate-spin-slow">🥤</span>
//       </div>

//       <div className="relative max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12">
//           <div className="text-center sm:text-left animate-slide-down">
//             <h1 className="font-['Fredoka'] text-5xl sm:text-6xl lg:text-7xl font-black mb-4">
//               <span className="bg-[#FFD966] px-6 py-3 rounded-[60px_20px_60px_20px] border-5 border-black shadow-[12px_12px_0_black] inline-block">
//                 {t?.menu?.ourMenu || 'OUR MENU'}
//               </span>
//             </h1>
//             <p className="font-['Fredoka'] text-xl text-gray-600 mt-4">
//               <span className="inline-block animate-wiggle">🍔</span> {t?.menu?.tastyFood || 'Tasty food, fast delivery'} 
//               <span className="inline-block animate-bounce-slow ml-2">🛵</span>
//             </p>
//           </div>

//           {/* Cart Button */}
//           <button
//             onClick={() => setShowCart(!showCart)}
//             className="group relative animate-float-slow"
//           >
//             <div className="relative">
//               <div className="bg-[#FFB5B5] p-4 rounded-full border-4 border-black shadow-[8px_8px_0_black] hover:shadow-[4px_4px_0_black] hover:scale-95 transition-all duration-200">
//                 <span className="text-4xl">🛒</span>
//               </div>
              
//               {getTotalItems() > 0 && (
//                 <div className="absolute -top-2 -right-2 bg-[#FFD966] w-8 h-8 rounded-full border-3 border-black shadow-[4px_4px_0_black] flex items-center justify-center animate-bounce-slow">
//                   <span className="font-['Fredoka'] font-bold text-lg">
//                     {getTotalItems()}
//                   </span>
//                 </div>
//               )}
              
//               {isAnimating && (
//                 <div className="absolute -inset-4 bg-[#FFD966]/30 rounded-full animate-ping"></div>
//               )}
//             </div>
//           </button>
//         </div>

//         {/* Cart Drawer */}
//         {showCart && (
//           <div className="fixed inset-y-0 right-0 w-full sm:w-96 bg-white/95 backdrop-blur-xl border-l-4 border-black shadow-[-20px_0_0_black] z-50 p-6 animate-slide-left overflow-y-auto">
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="font-['Fredoka'] text-3xl font-black flex items-center gap-2">
//                 🛒 {t?.menu?.cart || 'Your Cart'}
//                 <span className="bg-[#FFB5B5] px-3 py-1 rounded-full border-3 border-black text-lg">
//                   {getTotalItems()} {t?.menu?.items || 'items'}
//                 </span>
//               </h2>
//               <button
//                 onClick={() => setShowCart(false)}
//                 className="text-3xl hover:scale-90 transition-transform"
//               >
//                 ✕
//               </button>
//             </div>

//             {cart.length === 0 ? (
//               <div className="flex flex-col items-center justify-center h-64 text-center">
//                 <span className="text-8xl mb-4 animate-float">🛒</span>
//                 <p className="font-['Fredoka'] text-2xl font-bold text-gray-600">{t?.menu?.emptyCart || 'Cart is empty!'}</p>
//                 <p className="font-['Fredoka'] text-gray-500 mt-2">{t?.menu?.addFood || 'Add some yummy food'} 🍔</p>
//               </div>
//             ) : (
//               <>
//                 <div className="space-y-4 mb-6">
//                   {cart.map((item) => (
//                     <div key={item.id} className="flex items-center gap-4 bg-[#FFE5D9] p-4 rounded-[30px] border-3 border-black shadow-[6px_6px_0_black] animate-slide-right">
//                       <span className="text-4xl">{item.emoji}</span>
//                       <div className="flex-1">
//                         <h3 className="font-['Fredoka'] font-bold text-lg">{item.name}</h3>
//                         <p className="font-['Fredoka'] text-sm text-gray-600">${item.price}</p>
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <button
//                           onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                           className="w-8 h-8 bg-white rounded-full border-2 border-black text-xl font-bold hover:scale-90 transition-transform"
//                         >
//                           -
//                         </button>
//                         <span className="font-['Fredoka'] font-bold text-lg w-6 text-center">
//                           {item.quantity}
//                         </span>
//                         <button
//                           onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                           className="w-8 h-8 bg-white rounded-full border-2 border-black text-xl font-bold hover:scale-90 transition-transform"
//                         >
//                           +
//                         </button>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="bg-[#FFD966] p-6 rounded-[40px] border-4 border-black shadow-[8px_8px_0_black] mb-6">
//                   <div className="flex justify-between items-center mb-4">
//                     <span className="font-['Fredoka'] text-xl font-bold">{t?.menu?.total || 'Total'}:</span>
//                     <span className="font-['Fredoka'] text-3xl font-black">${getTotalPrice()}</span>
//                   </div>
//                   <button className="w-full bg-black text-white font-['Fredoka'] text-xl font-bold py-4 px-6 rounded-[40px] border-4 border-black shadow-[6px_6px_0_white] hover:scale-95 transition-all duration-200 flex items-center justify-center gap-3">
//                     🛵 {t?.menu?.checkout || 'Checkout'}
//                     <span className="animate-bounce-slow">→</span>
//                   </button>
//                 </div>
//               </>
//             )}
//           </div>
//         )}

//         {/* Category Filter */}
//         <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12 animate-fade-in-up">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setActiveCategory(category)}
//               className={`font-['Fredoka'] text-sm sm:text-base lg:text-lg font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border-3 sm:border-4 border-black shadow-[6px_6px_0_black] hover:shadow-[3px_3px_0_black] hover:scale-95 transition-all duration-200 ${
//                 activeCategory === category
//                   ? 'bg-[#FFB5B5] text-black'
//                   : 'bg-white text-black hover:bg-[#FFD966]'
//               }`}
//             >
//               {category === 'all' ? `🍽️ ${t?.menu?.allItems || 'All Items'}` : category}
//               {category !== 'all' && (
//                 <span className="ml-2 text-sm opacity-75">
//                   ({menuItems.filter(item => item.category === category).length})
//                 </span>
//               )}
//             </button>
//           ))}
//         </div>

//         {/* Menu Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
//           {filteredItems.map((item, index) => (
//             <div key={item.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
//               <MenuCard item={item} onAddToCart={addToCart} />
//             </div>
//           ))}
//         </div>

//         {/* Special Offer Banner */}
//         <div className="mt-16 bg-gradient-to-r from-[#FFB5B5] to-[#FFD966] p-8 rounded-[60px] border-6 border-black shadow-[20px_20px_0_black] relative overflow-hidden animate-slide-up">
//           <div className="absolute inset-0 opacity-10">
//             <span className="absolute top-0 left-0 text-8xl rotate-12">🍔</span>
//             <span className="absolute bottom-0 right-0 text-8xl -rotate-12">🍕</span>
//           </div>
          
//           <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6">
//             <div>
//               <span className="inline-block bg-white px-4 py-2 rounded-full border-3 border-black text-sm font-bold mb-4 animate-pulse-slow">
//                 🔥 {t?.menu?.limitedOffer || 'LIMITED OFFER'}
//               </span>
//               <h3 className="font-['Fredoka'] text-3xl sm:text-4xl lg:text-5xl font-black text-black mb-2">
//                 {t?.menu?.freeDelivery || 'Free Delivery on $30+'}
//               </h3>
//               <p className="font-['Fredoka'] text-xl text-black/80">
//                 {t?.menu?.useCode || 'Use code'}: <span className="bg-white px-4 py-2 rounded-full border-2 border-black font-bold">CARTOON30</span>
//               </p>
//             </div>
//             <div className="flex items-center gap-4">
//               <span className="text-7xl animate-float-super-slow">🛵</span>
//               <span className="text-7xl animate-bounce-slow">✨</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Menu; 








'use client';

import React, { useState } from 'react';
import MenuCard from './MenuCard';
import { useLanguage } from '../context/LanguageContext';

const Menu = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [isAnimating, setIsAnimating] = useState(false);
  const { t } = useLanguage();

  // 24 Menu Items with proper icons - Professional Restaurant Style
  const menuItems = [
    // BURGERS (6 items)
    { id: 1, name: 'Classic Beef Burger', emoji: '🍔', price: 12.99, rating: 4.9, category: 'Burgers', description: 'Juicy beef patty, lettuce, tomato, cheese, special sauce' },
    { id: 2, name: 'Double Cheese Burger', emoji: '🧀', price: 15.99, rating: 5.0, category: 'Burgers', description: 'Double beef, double cheese, caramelized onions, bacon' },
    { id: 3, name: 'Crispy Chicken Burger', emoji: '🍗', price: 13.99, rating: 4.8, category: 'Burgers', description: 'Crispy chicken fillet, mayo, lettuce, pickles' },
    { id: 4, name: 'Mushroom Swiss Burger', emoji: '🍄', price: 14.99, rating: 4.7, category: 'Burgers', description: 'Beef patty, sautéed mushrooms, Swiss cheese' },
    { id: 5, name: 'BBQ Bacon Burger', emoji: '🥓', price: 16.99, rating: 4.9, category: 'Burgers', description: 'Beef patty, crispy bacon, BBQ sauce, onion rings' },
    { id: 6, name: 'Veggie Delight Burger', emoji: '🥬', price: 11.99, rating: 4.6, category: 'Burgers', description: 'Plant-based patty, avocado, lettuce, tomato' },

    // PIZZA (5 items)
    { id: 7, name: 'Margherita Pizza', emoji: '🍕', price: 16.99, rating: 4.7, category: 'Pizza', description: 'Fresh basil, mozzarella, tomato sauce, olive oil' },
    { id: 8, name: 'Pepperoni Feast', emoji: '🍕', price: 18.99, rating: 4.9, category: 'Pizza', description: 'Double pepperoni, extra cheese, oregano' },
    { id: 9, name: 'BBQ Chicken Pizza', emoji: '🍗', price: 19.99, rating: 4.8, category: 'Pizza', description: 'Grilled chicken, BBQ sauce, red onions, cilantro' },
    { id: 10, name: 'Four Cheese Pizza', emoji: '🧀', price: 17.99, rating: 4.8, category: 'Pizza', description: 'Mozzarella, cheddar, parmesan, gorgonzola' },
    { id: 11, name: 'Veggie Supreme', emoji: '🥗', price: 15.99, rating: 4.6, category: 'Pizza', description: 'Bell peppers, mushrooms, olives, onions, tomatoes' },

    // SIDES (5 items)
    { id: 12, name: 'French Fries', emoji: '🍟', price: 4.99, rating: 4.6, category: 'Sides', description: 'Crispy golden fries, sea salt, choice of dip' },
    { id: 13, name: 'Onion Rings', emoji: '🧅', price: 5.99, rating: 4.5, category: 'Sides', description: 'Beer battered, crispy, served with ranch' },
    { id: 14, name: 'Chicken Nuggets', emoji: '🍗', price: 6.99, rating: 4.7, category: 'Sides', description: '8 pcs, honey mustard, BBQ sauce' },
    { id: 15, name: 'Mozzarella Sticks', emoji: '🧀', price: 6.99, rating: 4.8, category: 'Sides', description: '6 pcs, marinara sauce, parmesan' },
    { id: 16, name: 'Sweet Potato Fries', emoji: '🍠', price: 5.99, rating: 4.7, category: 'Sides', description: 'Crispy sweet potato, cinnamon salt, aioli' },

    // DRINKS (4 items)
    { id: 17, name: 'Soft Drink', emoji: '🥤', price: 2.99, rating: 4.8, category: 'Drinks', description: 'Coca-Cola, Sprite, Fanta, Diet Coke' },
    { id: 18, name: 'Milkshake', emoji: '🥛', price: 4.99, rating: 4.9, category: 'Drinks', description: 'Vanilla, chocolate, strawberry, oreo' },
    { id: 19, name: 'Fresh Lemonade', emoji: '🍋', price: 3.99, rating: 4.7, category: 'Drinks', description: 'Fresh squeezed, mint, sparkling water' },
    { id: 20, name: 'Iced Coffee', emoji: '☕', price: 3.99, rating: 4.8, category: 'Drinks', description: 'Cold brew, vanilla syrup, milk' },

    // DESSERTS (4 items)
    { id: 21, name: 'Chocolate Brownie', emoji: '🍫', price: 4.99, rating: 4.9, category: 'Desserts', description: 'Warm chocolate brownie, vanilla ice cream' },
    { id: 22, name: 'Ice Cream Sundae', emoji: '🍦', price: 4.99, rating: 4.8, category: 'Desserts', description: 'Vanilla bean, chocolate sauce, cherry' },
    { id: 23, name: 'Apple Pie', emoji: '🥧', price: 3.99, rating: 4.7, category: 'Desserts', description: 'Homemade apple pie, cinnamon, caramel' },
    { id: 24, name: 'Cheesecake', emoji: '🍰', price: 5.99, rating: 4.9, category: 'Desserts', description: 'New York style, strawberry topping' },
  ];

  const categories = ['all', ...new Set(menuItems.map(item => item.category))];

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  const addToCart = (item) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(i => i.id === item.id);
      if (existingItem) {
        return prevCart.map(i => 
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
    
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const removeFromCart = (itemId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(itemId);
    } else {
      setCart(prevCart =>
        prevCart.map(item =>
          item.id === itemId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <section className="relative py-8 sm:py-12 lg:py-16 xl:py-20 px-3 sm:px-4 lg:px-6 xl:px-8 bg-gradient-to-br from-[#FFE5D9] via-[#FFEED9] to-[#FFF5E6] min-h-screen overflow-hidden">
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-48 sm:w-56 lg:w-64 xl:w-72 h-48 sm:h-56 lg:h-64 xl:h-72 bg-[#FFB5B5]/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-[20%] right-[5%] w-56 sm:w-64 lg:w-72 xl:w-80 h-56 sm:h-64 lg:h-72 xl:h-80 bg-[#A0E7E5]/20 rounded-full blur-3xl animate-pulse-slower"></div>
        <div className="absolute top-[40%] left-[50%] w-52 sm:w-60 lg:w-72 xl:w-80 h-52 sm:h-60 lg:h-72 xl:h-80 bg-[#FFD966]/20 rounded-full blur-3xl animate-float"></div>
        
        {/* Floating Food Emojis */}
        <span className="absolute top-[15%] left-[10%] text-5xl sm:text-6xl opacity-5 animate-float-super-slow">🍔</span>
        <span className="absolute bottom-[25%] right-[15%] text-6xl sm:text-7xl opacity-5 animate-float-delay2">🍕</span>
        <span className="absolute top-[60%] left-[20%] text-5xl sm:text-6xl opacity-5 animate-bounce-slow">🍟</span>
        <span className="absolute bottom-[40%] left-[80%] text-6xl sm:text-7xl opacity-5 animate-spin-slow">🥤</span>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 mb-8 sm:mb-10 lg:mb-12">
          <div className="text-center sm:text-left animate-slide-down">
            <h1 className="font-['Fredoka'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-2 sm:mb-3 lg:mb-4">
              <span className="bg-[#FFD966] px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-[40px_15px_40px_15px] sm:rounded-[50px_20px_50px_20px] lg:rounded-[60px_20px_60px_20px] border-4 sm:border-5 border-black shadow-[8px_8px_0_black] sm:shadow-[10px_10px_0_black] lg:shadow-[12px_12px_0_black] inline-block">
                {t?.menu?.ourMenu || 'OUR MENU'}
              </span>
            </h1>
            <p className="font-['Fredoka'] text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 mt-2 sm:mt-3 lg:mt-4">
              <span className="inline-block animate-wiggle">🍔</span> {t?.menu?.tastyFood || 'Tasty food, fast delivery'} 
              <span className="inline-block animate-bounce-slow ml-1 sm:ml-2">🛵</span>
            </p>
          </div>

          {/* Cart Button */}
          <button
            onClick={() => setShowCart(!showCart)}
            className="group relative animate-float-slow"
          >
            <div className="relative">
              <div className="bg-[#FFB5B5] p-3 sm:p-3.5 lg:p-4 rounded-full border-3 sm:border-4 border-black shadow-[5px_5px_0_black] sm:shadow-[6px_6px_0_black] lg:shadow-[8px_8px_0_black] hover:shadow-[3px_3px_0_black] sm:hover:shadow-[4px_4px_0_black] lg:hover:shadow-[5px_5px_0_black] hover:scale-95 transition-all duration-200">
                <span className="text-2xl sm:text-3xl lg:text-4xl">🛒</span>
              </div>
              
              {getTotalItems() > 0 && (
                <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 bg-[#FFD966] w-5 sm:w-6 lg:w-7 h-5 sm:h-6 lg:h-7 rounded-full border-2 sm:border-3 border-black shadow-[2px_2px_0_black] sm:shadow-[3px_3px_0_black] lg:shadow-[4px_4px_0_black] flex items-center justify-center animate-bounce-slow">
                  <span className="font-['Fredoka'] font-bold text-xs sm:text-sm lg:text-base">
                    {getTotalItems()}
                  </span>
                </div>
              )}
              
              {isAnimating && (
                <div className="absolute -inset-3 sm:-inset-4 bg-[#FFD966]/30 rounded-full animate-ping"></div>
              )}
            </div>
          </button>
        </div>

        {/* Cart Drawer */}
        {showCart && (
          <div className="fixed inset-y-0 right-0 w-full sm:w-80 md:w-96 bg-white/95 backdrop-blur-xl border-l-3 sm:border-l-4 border-black shadow-[-10px_0_0_black] sm:shadow-[-15px_0_0_black] lg:shadow-[-20px_0_0_black] z-50 p-4 sm:p-5 lg:p-6 animate-slide-left overflow-y-auto">
            <div className="flex justify-between items-center mb-4 sm:mb-5 lg:mb-6">
              <h2 className="font-['Fredoka'] text-xl sm:text-2xl lg:text-3xl font-black flex items-center gap-1 sm:gap-2">
                🛒 {t?.menu?.cart || 'Your Cart'}
                <span className="bg-[#FFB5B5] px-2 sm:px-2.5 lg:px-3 py-0.5 sm:py-1 rounded-full border-2 sm:border-3 border-black text-sm sm:text-base lg:text-lg">
                  {getTotalItems()} {t?.menu?.items || 'items'}
                </span>
              </h2>
              <button
                onClick={() => setShowCart(false)}
                className="text-2xl sm:text-3xl hover:scale-90 transition-transform"
              >
                ✕
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-48 sm:h-56 lg:h-64 text-center">
                <span className="text-6xl sm:text-7xl lg:text-8xl mb-2 sm:mb-3 lg:mb-4 animate-float">🛒</span>
                <p className="font-['Fredoka'] text-xl sm:text-2xl font-bold text-gray-600">{t?.menu?.emptyCart || 'Cart is empty!'}</p>
                <p className="font-['Fredoka'] text-sm sm:text-base text-gray-500 mt-1 sm:mt-2">{t?.menu?.addFood || 'Add some yummy food'} 🍔</p>
              </div>
            ) : (
              <>
                <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-5 lg:mb-6">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center gap-2 sm:gap-3 lg:gap-4 bg-[#FFE5D9] p-2 sm:p-3 lg:p-4 rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] border-2 sm:border-3 border-black shadow-[3px_3px_0_black] sm:shadow-[4px_4px_0_black] lg:shadow-[6px_6px_0_black] animate-slide-right">
                      <span className="text-2xl sm:text-3xl lg:text-4xl">{item.emoji}</span>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-['Fredoka'] font-bold text-sm sm:text-base lg:text-lg truncate">{item.name}</h3>
                        <p className="font-['Fredoka'] text-xs sm:text-sm text-gray-600">${item.price}</p>
                      </div>
                      <div className="flex items-center gap-1 sm:gap-1.5 lg:gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 bg-white rounded-full border-2 border-black text-base sm:text-lg lg:text-xl font-bold hover:scale-90 transition-transform"
                        >
                          -
                        </button>
                        <span className="font-['Fredoka'] font-bold text-sm sm:text-base lg:text-lg w-4 sm:w-5 lg:w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 bg-white rounded-full border-2 border-black text-base sm:text-lg lg:text-xl font-bold hover:scale-90 transition-transform"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-[#FFD966] p-4 sm:p-5 lg:p-6 rounded-[25px] sm:rounded-[30px] lg:rounded-[40px] border-3 sm:border-4 border-black shadow-[4px_4px_0_black] sm:shadow-[6px_6px_0_black] lg:shadow-[8px_8px_0_black] mb-4 sm:mb-5 lg:mb-6">
                  <div className="flex justify-between items-center mb-2 sm:mb-3 lg:mb-4">
                    <span className="font-['Fredoka'] text-base sm:text-lg lg:text-xl font-bold">{t?.menu?.total || 'Total'}:</span>
                    <span className="font-['Fredoka'] text-xl sm:text-2xl lg:text-3xl font-black">${getTotalPrice()}</span>
                  </div>
                  <button className="w-full bg-black text-white font-['Fredoka'] text-base sm:text-lg lg:text-xl font-bold py-2 sm:py-3 lg:py-4 px-4 sm:px-5 lg:px-6 rounded-[25px] sm:rounded-[30px] lg:rounded-[40px] border-3 sm:border-4 border-black shadow-[4px_4px_0_white] sm:shadow-[5px_5px_0_white] lg:shadow-[6px_6px_0_white] hover:scale-95 transition-all duration-200 flex items-center justify-center gap-2 sm:gap-3">
                    🛵 {t?.menu?.checkout || 'Checkout'}
                    <span className="animate-bounce-slow text-lg sm:text-xl lg:text-2xl">→</span>
                  </button>
                </div>
              </>
            )}
          </div>
        )}

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 lg:gap-4 mb-6 sm:mb-8 lg:mb-10 xl:mb-12 animate-fade-in-up">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`font-['Fredoka'] text-xs sm:text-sm lg:text-base xl:text-lg font-bold px-3 sm:px-4 lg:px-5 xl:px-6 py-1.5 sm:py-2 lg:py-2.5 xl:py-3 rounded-full border-2 sm:border-3 lg:border-4 border-black shadow-[3px_3px_0_black] sm:shadow-[4px_4px_0_black] lg:shadow-[5px_5px_0_black] xl:shadow-[6px_6px_0_black] hover:shadow-[2px_2px_0_black] sm:hover:shadow-[3px_3px_0_black] lg:hover:shadow-[4px_4px_0_black] hover:scale-95 transition-all duration-200 whitespace-nowrap ${
                activeCategory === category
                  ? 'bg-[#FFB5B5] text-black'
                  : 'bg-white text-black hover:bg-[#FFD966]'
              }`}
            >
              {category === 'all' ? (
                <>
                  <span className="inline-block sm:hidden">🍽️</span>
                  <span className="hidden sm:inline">🍽️ {t?.menu?.allItems || 'All Items'}</span>
                </>
              ) : (
                category
              )}
            </button>
          ))}
        </div>

        {/* Category Count Display */}
        <div className="text-center mb-4 sm:mb-6 lg:mb-8">
          <p className="font-['Fredoka'] text-sm sm:text-base lg:text-lg text-gray-600">
            {filteredItems.length} {t?.menu?.items || 'items'} {t?.menu?.available || 'available'} 
            {activeCategory !== 'all' && ` in ${activeCategory}`}
          </p>
        </div>

        {/* Menu Grid - 24 Items with proper icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 xl:gap-8">
          {filteredItems.map((item, index) => (
            <div key={item.id} className="animate-fade-in-up h-full" style={{ animationDelay: `${index * 0.05}s` }}>
              <MenuCard item={item} onAddToCart={addToCart} />
            </div>
          ))}
        </div>

        {/* No Items Found */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12 sm:py-16 lg:py-20 animate-fade-in">
            <span className="text-6xl sm:text-7xl lg:text-8xl mb-3 sm:mb-4 inline-block animate-float">😢</span>
            <h3 className="font-['Fredoka'] text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-600 mb-2">
              {t?.menu?.noItems || 'No items found!'}
            </h3>
            <p className="font-['Fredoka'] text-base sm:text-lg lg:text-xl text-gray-500">
              {t?.menu?.tryAnother || 'Try another category'} 🍔
            </p>
          </div>
        )}

        {/* Special Offer Banner */}
        <div className="mt-10 sm:mt-12 lg:mt-14 xl:mt-16 bg-gradient-to-r from-[#FFB5B5] to-[#FFD966] p-5 sm:p-6 lg:p-7 xl:p-8 rounded-[40px] sm:rounded-[45px] lg:rounded-[50px] xl:rounded-[60px] border-4 sm:border-5 lg:border-6 border-black shadow-[12px_12px_0_black] sm:shadow-[15px_15px_0_black] lg:shadow-[18px_18px_0_black] xl:shadow-[20px_20px_0_black] relative overflow-hidden animate-slide-up">
          <div className="absolute inset-0 opacity-5 sm:opacity-10">
            <span className="absolute top-0 left-0 text-6xl sm:text-7xl lg:text-8xl rotate-12">🍔</span>
            <span className="absolute bottom-0 right-0 text-6xl sm:text-7xl lg:text-8xl -rotate-12">🍕</span>
          </div>
          
          <div className="relative flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-5 lg:gap-6">
            <div className="text-center sm:text-left">
              <span className="inline-block bg-white px-3 sm:px-3.5 lg:px-4 py-1 sm:py-1.5 lg:py-2 rounded-full border-2 sm:border-3 border-black text-xs sm:text-sm font-bold mb-2 sm:mb-3 lg:mb-4 animate-pulse-slow">
                🔥 {t?.menu?.limitedOffer || 'LIMITED OFFER'}
              </span>
              <h3 className="font-['Fredoka'] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-black mb-1 sm:mb-2">
                {t?.menu?.freeDelivery || 'Free Delivery on $30+'}
              </h3>
              <p className="font-['Fredoka'] text-base sm:text-lg lg:text-xl xl:text-2xl text-black/80">
                {t?.menu?.useCode || 'Use code'}: <span className="bg-white px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border-2 border-black font-bold text-sm sm:text-base lg:text-lg xl:text-xl">CARTOON30</span>
              </p>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="text-5xl sm:text-6xl lg:text-7xl animate-float-super-slow">🛵</span>
              <span className="text-5xl sm:text-6xl lg:text-7xl animate-bounce-slow">✨</span>
            </div>
          </div>
        </div>

        {/* Footer Stats */}
        <div className="mt-8 sm:mt-10 lg:mt-12 text-center">
          <p className="font-['Fredoka'] text-sm sm:text-base lg:text-lg text-gray-600">
            🍔 {menuItems.length} {t?.menu?.items || 'items'} • ⭐ 4.8 {t?.menu?.averageRating || 'average rating'} • 🛵 {t?.menu?.fastDelivery || 'Fast delivery'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Menu;