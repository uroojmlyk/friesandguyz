// 'use client';

// import React, { useState, useEffect } from 'react';
// // import MenuCard from './MenuCard';

// const Menu = () => {
//   const [cart, setCart] = useState([]);
//   const [showCart, setShowCart] = useState(false);
//   const [activeCategory, setActiveCategory] = useState('all');
//   const [isAnimating, setIsAnimating] = useState(false);

//   const menuItems = [
//     // Burgers
//     { id: 1, name: 'Classic Burger', emoji: '🍔', price: 12.99, rating: 4.9, category: 'Burgers', description: 'Beef patty, lettuce, tomato, cheese' },
//     { id: 2, name: 'Cheese Burger', emoji: '🧀', price: 14.99, rating: 5.0, category: 'Burgers', description: 'Double cheese, caramelized onions' },
//     { id: 3, name: 'Chicken Burger', emoji: '🍗', price: 13.99, rating: 4.8, category: 'Burgers', description: 'Crispy chicken, mayo, lettuce' },
    
//     // Pizza
//     { id: 4, name: 'Margherita', emoji: '🍕', price: 16.99, rating: 4.7, category: 'Pizza', description: 'Fresh basil, mozzarella, tomato sauce' },
//     { id: 5, name: 'Pepperoni', emoji: '🍕', price: 18.99, rating: 4.9, category: 'Pizza', description: 'Double pepperoni, extra cheese' },
    
//     // Fries & Sides
//     { id: 6, name: 'French Fries', emoji: '🍟', price: 5.99, rating: 4.6, category: 'Sides', description: 'Crispy golden fries, sea salt' },
//     { id: 7, name: 'Onion Rings', emoji: '🧅', price: 6.99, rating: 4.5, category: 'Sides', description: 'Beer battered, crispy' },
//     { id: 8, name: 'Chicken Nuggets', emoji: '🍗', price: 8.99, rating: 4.7, category: 'Sides', description: '6 pcs, honey mustard' },
    
//     // Drinks
//     { id: 9, name: 'Soft Drink', emoji: '🥤', price: 2.99, rating: 4.8, category: 'Drinks', description: 'Coca-Cola, Sprite, Fanta' },
//     { id: 10, name: 'Milkshake', emoji: '🥛', price: 4.99, rating: 4.9, category: 'Drinks', description: 'Vanilla, chocolate, strawberry' },
    
//     // Desserts
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
      
//       {/* Animated Background */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-[#FFB5B5]/20 rounded-full blur-3xl animate-pulse-slow"></div>
//         <div className="absolute bottom-[20%] right-[5%] w-80 h-80 bg-[#A0E7E5]/20 rounded-full blur-3xl animate-pulse-slower"></div>
//         <div className="absolute top-[40%] left-[50%] w-72 h-72 bg-[#FFD966]/20 rounded-full blur-3xl animate-float"></div>
        
//         {/* Floating Food Emojis */}
//         <span className="absolute top-[15%] left-[10%] text-6xl opacity-10 animate-float-super-slow">🍔</span>
//         <span className="absolute bottom-[25%] right-[15%] text-7xl opacity-10 animate-float-delay2">🍕</span>
//         <span className="absolute top-[60%] left-[20%] text-6xl opacity-10 animate-bounce-slow">🍟</span>
//         <span className="absolute bottom-[40%] left-[80%] text-7xl opacity-10 animate-spin-slow">🥤</span>
        
//         {/* Dotted Grid */}
//         <div className="absolute inset-0" style={{ 
//           backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)',
//           backgroundSize: '40px 40px'
//         }}></div>
//       </div>

//       <div className="relative max-w-7xl mx-auto">
//         {/* Header with Cart */}
//         <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12">
//           <div className="text-center sm:text-left animate-slide-down">
//             <h1 className="font-['Fredoka'] text-5xl sm:text-6xl lg:text-7xl font-black mb-4">
//               <span className="bg-[#FFD966] px-6 py-3 rounded-[60px_20px_60px_20px] border-5 border-black shadow-[12px_12px_0_black] inline-block">
//                 OUR MENU
//               </span>
//             </h1>
//             <p className="font-['Fredoka'] text-xl text-gray-600 mt-4">
//               <span className="inline-block animate-wiggle">🍔</span> Tasty food, fast delivery 
//               <span className="inline-block animate-bounce-slow ml-2">🛵</span>
//             </p>
//           </div>

//           {/* Cart Button with Animation */}
//           <button
//             onClick={() => setShowCart(!showCart)}
//             className="group relative animate-float-slow"
//           >
//             <div className="relative">
//               <div className="bg-[#FFB5B5] p-4 rounded-full border-4 border-black shadow-[8px_8px_0_black] hover:shadow-[4px_4px_0_black] hover:scale-95 transition-all duration-200">
//                 <span className="text-4xl">🛒</span>
//               </div>
              
//               {/* Cart Badge */}
//               {getTotalItems() > 0 && (
//                 <div className="absolute -top-2 -right-2 bg-[#FFD966] w-8 h-8 rounded-full border-3 border-black shadow-[4px_4px_0_black] flex items-center justify-center animate-bounce-slow">
//                   <span className="font-['Fredoka'] font-bold text-lg">
//                     {getTotalItems()}
//                   </span>
//                 </div>
//               )}
              
//               {/* Pulse Effect */}
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
//                 🛒 Your Cart
//                 <span className="bg-[#FFB5B5] px-3 py-1 rounded-full border-3 border-black text-lg">
//                   {getTotalItems()} items
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
//                 <p className="font-['Fredoka'] text-2xl font-bold text-gray-600">Cart is empty!</p>
//                 <p className="font-['Fredoka'] text-gray-500 mt-2">Add some yummy food 🍔</p>
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

//                 {/* Cart Total */}
//                 <div className="bg-[#FFD966] p-6 rounded-[40px] border-4 border-black shadow-[8px_8px_0_black] mb-6">
//                   <div className="flex justify-between items-center mb-4">
//                     <span className="font-['Fredoka'] text-xl font-bold">Total:</span>
//                     <span className="font-['Fredoka'] text-3xl font-black">${getTotalPrice()}</span>
//                   </div>
//                   <button className="w-full bg-black text-white font-['Fredoka'] text-xl font-bold py-4 px-6 rounded-[40px] border-4 border-black shadow-[6px_6px_0_white] hover:scale-95 transition-all duration-200 flex items-center justify-center gap-3">
//                     🛵 Checkout
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
//               {category === 'all' ? '🍽️ All Items' : category}
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

//         {/* No Items Found */}
//         {filteredItems.length === 0 && (
//           <div className="text-center py-20 animate-fade-in">
//             <span className="text-8xl mb-4 inline-block animate-float">😢</span>
//             <h3 className="font-['Fredoka'] text-3xl font-bold text-gray-600 mb-2">
//               No items found!
//             </h3>
//             <p className="font-['Fredoka'] text-xl text-gray-500">
//               Try another category 🍔
//             </p>
//           </div>
//         )}

//         {/* Special Offer Banner */}
//         <div className="mt-16 bg-gradient-to-r from-[#FFB5B5] to-[#FFD966] p-8 rounded-[60px] border-6 border-black shadow-[20px_20px_0_black] relative overflow-hidden animate-slide-up">
//           <div className="absolute inset-0 opacity-10">
//             <span className="absolute top-0 left-0 text-8xl rotate-12">🍔</span>
//             <span className="absolute bottom-0 right-0 text-8xl -rotate-12">🍕</span>
//           </div>
          
//           <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6">
//             <div>
//               <span className="inline-block bg-white px-4 py-2 rounded-full border-3 border-black text-sm font-bold mb-4 animate-pulse-slow">
//                 🔥 LIMITED OFFER
//               </span>
//               <h3 className="font-['Fredoka'] text-3xl sm:text-4xl lg:text-5xl font-black text-black mb-2">
//                 Free Delivery on $30+
//               </h3>
//               <p className="font-['Fredoka'] text-xl text-black/80">
//                 Use code: <span className="bg-white px-4 py-2 rounded-full border-2 border-black font-bold">CARTOON30</span>
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

// export default Menu  













'use client';

import React, { useState } from 'react';
import MenuCard from './MenuCard';

const Menu = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [isAnimating, setIsAnimating] = useState(false);

  const menuItems = [
    { id: 1, name: 'Classic Burger', emoji: '🍔', price: 12.99, rating: 4.9, category: 'Burgers', description: 'Beef patty, lettuce, tomato, cheese' },
    { id: 2, name: 'Cheese Burger', emoji: '🧀', price: 14.99, rating: 5.0, category: 'Burgers', description: 'Double cheese, caramelized onions' },
    { id: 3, name: 'Chicken Burger', emoji: '🍗', price: 13.99, rating: 4.8, category: 'Burgers', description: 'Crispy chicken, mayo, lettuce' },
    { id: 4, name: 'Margherita', emoji: '🍕', price: 16.99, rating: 4.7, category: 'Pizza', description: 'Fresh basil, mozzarella, tomato sauce' },
    { id: 5, name: 'Pepperoni', emoji: '🍕', price: 18.99, rating: 4.9, category: 'Pizza', description: 'Double pepperoni, extra cheese' },
    { id: 6, name: 'French Fries', emoji: '🍟', price: 5.99, rating: 4.6, category: 'Sides', description: 'Crispy golden fries, sea salt' },
    { id: 7, name: 'Onion Rings', emoji: '🧅', price: 6.99, rating: 4.5, category: 'Sides', description: 'Beer battered, crispy' },
    { id: 8, name: 'Chicken Nuggets', emoji: '🍗', price: 8.99, rating: 4.7, category: 'Sides', description: '6 pcs, honey mustard' },
    { id: 9, name: 'Soft Drink', emoji: '🥤', price: 2.99, rating: 4.8, category: 'Drinks', description: 'Coca-Cola, Sprite, Fanta' },
    { id: 10, name: 'Milkshake', emoji: '🥛', price: 4.99, rating: 4.9, category: 'Drinks', description: 'Vanilla, chocolate, strawberry' },
    { id: 11, name: 'Ice Cream', emoji: '🍦', price: 3.99, rating: 4.8, category: 'Desserts', description: 'Vanilla bean, chocolate fudge' },
    { id: 12, name: 'Brownie', emoji: '🍫', price: 4.99, rating: 4.9, category: 'Desserts', description: 'Warm chocolate brownie' },
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
    <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#FFE5D9] via-[#FFEED9] to-[#FFF5E6] min-h-screen overflow-hidden">
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-[#FFB5B5]/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-[20%] right-[5%] w-80 h-80 bg-[#A0E7E5]/20 rounded-full blur-3xl animate-pulse-slower"></div>
        <div className="absolute top-[40%] left-[50%] w-72 h-72 bg-[#FFD966]/20 rounded-full blur-3xl animate-float"></div>
        
        <span className="absolute top-[15%] left-[10%] text-6xl opacity-10 animate-float-super-slow">🍔</span>
        <span className="absolute bottom-[25%] right-[15%] text-7xl opacity-10 animate-float-delay2">🍕</span>
        <span className="absolute top-[60%] left-[20%] text-6xl opacity-10 animate-bounce-slow">🍟</span>
        <span className="absolute bottom-[40%] left-[80%] text-7xl opacity-10 animate-spin-slow">🥤</span>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12">
          <div className="text-center sm:text-left animate-slide-down">
            <h1 className="font-['Fredoka'] text-5xl sm:text-6xl lg:text-7xl font-black mb-4">
              <span className="bg-[#FFD966] px-6 py-3 rounded-[60px_20px_60px_20px] border-5 border-black shadow-[12px_12px_0_black] inline-block">
                OUR MENU
              </span>
            </h1>
            <p className="font-['Fredoka'] text-xl text-gray-600 mt-4">
              <span className="inline-block animate-wiggle">🍔</span> Tasty food, fast delivery 
              <span className="inline-block animate-bounce-slow ml-2">🛵</span>
            </p>
          </div>

          {/* Cart Button */}
          <button
            onClick={() => setShowCart(!showCart)}
            className="group relative animate-float-slow"
          >
            <div className="relative">
              <div className="bg-[#FFB5B5] p-4 rounded-full border-4 border-black shadow-[8px_8px_0_black] hover:shadow-[4px_4px_0_black] hover:scale-95 transition-all duration-200">
                <span className="text-4xl">🛒</span>
              </div>
              
              {getTotalItems() > 0 && (
                <div className="absolute -top-2 -right-2 bg-[#FFD966] w-8 h-8 rounded-full border-3 border-black shadow-[4px_4px_0_black] flex items-center justify-center animate-bounce-slow">
                  <span className="font-['Fredoka'] font-bold text-lg">
                    {getTotalItems()}
                  </span>
                </div>
              )}
              
              {isAnimating && (
                <div className="absolute -inset-4 bg-[#FFD966]/30 rounded-full animate-ping"></div>
              )}
            </div>
          </button>
        </div>

        {/* Cart Drawer */}
        {showCart && (
          <div className="fixed inset-y-0 right-0 w-full sm:w-96 bg-white/95 backdrop-blur-xl border-l-4 border-black shadow-[-20px_0_0_black] z-50 p-6 animate-slide-left overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-['Fredoka'] text-3xl font-black flex items-center gap-2">
                🛒 Your Cart
                <span className="bg-[#FFB5B5] px-3 py-1 rounded-full border-3 border-black text-lg">
                  {getTotalItems()} items
                </span>
              </h2>
              <button
                onClick={() => setShowCart(false)}
                className="text-3xl hover:scale-90 transition-transform"
              >
                ✕
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-64 text-center">
                <span className="text-8xl mb-4 animate-float">🛒</span>
                <p className="font-['Fredoka'] text-2xl font-bold text-gray-600">Cart is empty!</p>
                <p className="font-['Fredoka'] text-gray-500 mt-2">Add some yummy food 🍔</p>
              </div>
            ) : (
              <>
                <div className="space-y-4 mb-6">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 bg-[#FFE5D9] p-4 rounded-[30px] border-3 border-black shadow-[6px_6px_0_black] animate-slide-right">
                      <span className="text-4xl">{item.emoji}</span>
                      <div className="flex-1">
                        <h3 className="font-['Fredoka'] font-bold text-lg">{item.name}</h3>
                        <p className="font-['Fredoka'] text-sm text-gray-600">${item.price}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 bg-white rounded-full border-2 border-black text-xl font-bold hover:scale-90 transition-transform"
                        >
                          -
                        </button>
                        <span className="font-['Fredoka'] font-bold text-lg w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 bg-white rounded-full border-2 border-black text-xl font-bold hover:scale-90 transition-transform"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-[#FFD966] p-6 rounded-[40px] border-4 border-black shadow-[8px_8px_0_black] mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-['Fredoka'] text-xl font-bold">Total:</span>
                    <span className="font-['Fredoka'] text-3xl font-black">${getTotalPrice()}</span>
                  </div>
                  <button className="w-full bg-black text-white font-['Fredoka'] text-xl font-bold py-4 px-6 rounded-[40px] border-4 border-black shadow-[6px_6px_0_white] hover:scale-95 transition-all duration-200 flex items-center justify-center gap-3">
                    🛵 Checkout
                    <span className="animate-bounce-slow">→</span>
                  </button>
                </div>
              </>
            )}
          </div>
        )}

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12 animate-fade-in-up">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`font-['Fredoka'] text-sm sm:text-base lg:text-lg font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border-3 sm:border-4 border-black shadow-[6px_6px_0_black] hover:shadow-[3px_3px_0_black] hover:scale-95 transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-[#FFB5B5] text-black'
                  : 'bg-white text-black hover:bg-[#FFD966]'
              }`}
            >
              {category === 'all' ? '🍽️ All Items' : category}
              {category !== 'all' && (
                <span className="ml-2 text-sm opacity-75">
                  ({menuItems.filter(item => item.category === category).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {filteredItems.map((item, index) => (
            <div key={item.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <MenuCard item={item} onAddToCart={addToCart} />
            </div>
          ))}
        </div>

        {/* Special Offer Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#FFB5B5] to-[#FFD966] p-8 rounded-[60px] border-6 border-black shadow-[20px_20px_0_black] relative overflow-hidden animate-slide-up">
          <div className="absolute inset-0 opacity-10">
            <span className="absolute top-0 left-0 text-8xl rotate-12">🍔</span>
            <span className="absolute bottom-0 right-0 text-8xl -rotate-12">🍕</span>
          </div>
          
          <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="inline-block bg-white px-4 py-2 rounded-full border-3 border-black text-sm font-bold mb-4 animate-pulse-slow">
                🔥 LIMITED OFFER
              </span>
              <h3 className="font-['Fredoka'] text-3xl sm:text-4xl lg:text-5xl font-black text-black mb-2">
                Free Delivery on $30+
              </h3>
              <p className="font-['Fredoka'] text-xl text-black/80">
                Use code: <span className="bg-white px-4 py-2 rounded-full border-2 border-black font-bold">CARTOON30</span>
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-7xl animate-float-super-slow">🛵</span>
              <span className="text-7xl animate-bounce-slow">✨</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;