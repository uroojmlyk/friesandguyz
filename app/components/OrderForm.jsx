// 'use client';

// import React, { useState } from 'react';
// import Link from 'next/link';

// const OrderForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     address: '',
//     item: '',
//     quantity: '1',
//     paymentMethod: 'cash',
//     instructions: ''
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const menuItems = [
//     'Classic Burger', 'Cheese Burger', 'Chicken Burger',
//     'Margherita', 'Pepperoni', 'French Fries',
//     'Onion Rings', 'Chicken Nuggets', 'Soft Drink',
//     'Milkshake', 'Ice Cream', 'Brownie'
//   ];

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     // Simulate API call
//     setTimeout(() => {
//       setIsSubmitting(false);
//       setIsSubmitted(true);
      
//       // Reset form after 3 seconds
//       setTimeout(() => {
//         setIsSubmitted(false);
//         setFormData({
//           name: '', email: '', phone: '', address: '',
//           item: '', quantity: '1', paymentMethod: 'cash', instructions: ''
//         });
//       }, 3000);
//     }, 1500);
//   };

//   return (
//     <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#FFE5D9] via-[#FFEED9] to-[#FFF5E6] min-h-screen overflow-hidden">
      
//       {/* Animated Background */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-[5%] left-[5%] w-72 h-72 bg-[#FFB5B5]/20 rounded-full blur-3xl animate-pulse-slow"></div>
//         <div className="absolute bottom-[15%] right-[5%] w-80 h-80 bg-[#A0E7E5]/20 rounded-full blur-3xl animate-pulse-slower"></div>
//         <div className="absolute top-[40%] left-[50%] w-64 h-64 bg-[#FFD966]/20 rounded-full blur-3xl animate-float"></div>
        
//         {/* Floating Food Emojis */}
//         <span className="absolute top-[20%] right-[15%] text-7xl opacity-10 animate-float-super-slow">🛵</span>
//         <span className="absolute bottom-[30%] left-[20%] text-8xl opacity-10 animate-float-delay2">🍔</span>
//         <span className="absolute top-[60%] right-[30%] text-7xl opacity-10 animate-bounce-slow">🍕</span>
//       </div>

//       <div className="relative max-w-4xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-10 animate-slide-down">
//           <h1 className="font-['Fredoka'] text-5xl sm:text-6xl lg:text-7xl font-black mb-4">
//             <span className="bg-[#A0E7E5] px-8 py-4 rounded-[80px_20px_80px_20px] border-5 border-black shadow-[15px_15px_0_black] inline-block transform hover:scale-105 transition-transform">
//               🛵 ORDER NOW
//             </span>
//           </h1>
//           <p className="font-['Fredoka'] text-2xl text-gray-700 mt-6">
//             <span className="inline-block animate-wiggle">🔥</span> Fast delivery • 30 min or free
//           </p>
//         </div>

//         {/* Success Message */}
//         {isSubmitted && (
//           <div className="mb-8 bg-green-400 p-6 rounded-[50px] border-4 border-black shadow-[12px_12px_0_black] animate-slide-down">
//             <div className="flex items-center gap-4">
//               <span className="text-5xl animate-bounce-slow">✅</span>
//               <div>
//                 <h3 className="font-['Fredoka'] text-2xl font-bold text-black">Order Placed Successfully!</h3>
//                 <p className="font-['Fredoka'] text-lg text-black/80">Your food is being prepared 🍔</p>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Order Form */}
//         <form onSubmit={handleSubmit} className="bg-white/90 backdrop-blur-sm p-8 sm:p-10 rounded-[70px] border-6 border-black shadow-[25px_25px_0_black] animate-fade-in-up">
          
//           {/* Personal Info Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//             {/* Name Field */}
//             <div className="relative group">
//               <label className="font-['Fredoka'] text-lg font-bold mb-2 block">
//                 Your Name <span className="text-red-500">*</span>
//               </label>
//               <div className="relative">
//                 <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl">👤</span>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   placeholder="John Doe"
//                   className="w-full font-['Fredoka'] pl-14 pr-4 py-3 border-4 border-black rounded-[40px] shadow-[6px_6px_0_black] focus:shadow-[10px_10px_0_#FFB5B5] focus:outline-none transition-all"
//                 />
//               </div>
//             </div>

//             {/* Email Field */}
//             <div className="relative group">
//               <label className="font-['Fredoka'] text-lg font-bold mb-2 block">
//                 Email <span className="text-red-500">*</span>
//               </label>
//               <div className="relative">
//                 <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl">📧</span>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   placeholder="john@example.com"
//                   className="w-full font-['Fredoka'] pl-14 pr-4 py-3 border-4 border-black rounded-[40px] shadow-[6px_6px_0_black] focus:shadow-[10px_10px_0_#A0E7E5] focus:outline-none transition-all"
//                 />
//               </div>
//             </div>

//             {/* Phone Field */}
//             <div className="relative group">
//               <label className="font-['Fredoka'] text-lg font-bold mb-2 block">
//                 Phone <span className="text-red-500">*</span>
//               </label>
//               <div className="relative">
//                 <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl">📱</span>
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   required
//                   placeholder="+1 234 567 890"
//                   className="w-full font-['Fredoka'] pl-14 pr-4 py-3 border-4 border-black rounded-[40px] shadow-[6px_6px_0_black] focus:shadow-[10px_10px_0_#FFD966] focus:outline-none transition-all"
//                 />
//               </div>
//             </div>

//             {/* Item Selection */}
//             <div className="relative group">
//               <label className="font-['Fredoka'] text-lg font-bold mb-2 block">
//                 Select Item <span className="text-red-500">*</span>
//               </label>
//               <div className="relative">
//                 <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl">🍔</span>
//                 <select
//                   name="item"
//                   value={formData.item}
//                   onChange={handleChange}
//                   required
//                   className="w-full font-['Fredoka'] pl-14 pr-10 py-3 border-4 border-black rounded-[40px] shadow-[6px_6px_0_black] focus:shadow-[10px_10px_0_#FFB5B5] focus:outline-none transition-all appearance-none"
//                 >
//                   <option value="">Choose your food</option>
//                   {menuItems.map(item => (
//                     <option key={item} value={item}>{item}</option>
//                   ))}
//                 </select>
//                 <span className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl">▼</span>
//               </div>
//             </div>
//           </div>

//           {/* Address Field - Full Width */}
//           <div className="mb-6">
//             <label className="font-['Fredoka'] text-lg font-bold mb-2 block">
//               Delivery Address <span className="text-red-500">*</span>
//             </label>
//             <div className="relative">
//               <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl">📍</span>
//               <input
//                 type="text"
//                 name="address"
//                 value={formData.address}
//                 onChange={handleChange}
//                 required
//                 placeholder="House #, Street, City"
//                 className="w-full font-['Fredoka'] pl-14 pr-4 py-3 border-4 border-black rounded-[40px] shadow-[6px_6px_0_black] focus:shadow-[10px_10px_0_#A0E7E5] focus:outline-none transition-all"
//               />
//             </div>
//           </div>

//           {/* Quantity & Payment Row */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//             {/* Quantity */}
//             <div className="relative group">
//               <label className="font-['Fredoka'] text-lg font-bold mb-2 block">
//                 Quantity
//               </label>
//               <div className="relative">
//                 <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl">🔢</span>
//                 <select
//                   name="quantity"
//                   value={formData.quantity}
//                   onChange={handleChange}
//                   className="w-full font-['Fredoka'] pl-14 pr-10 py-3 border-4 border-black rounded-[40px] shadow-[6px_6px_0_black] focus:shadow-[10px_10px_0_#FFD966] focus:outline-none transition-all appearance-none"
//                 >
//                   {[1,2,3,4,5,6,7,8,9,10].map(num => (
//                     <option key={num} value={num}>{num}</option>
//                   ))}
//                 </select>
//                 <span className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl">▼</span>
//               </div>
//             </div>

//             {/* Payment Method */}
//             <div className="relative group">
//               <label className="font-['Fredoka'] text-lg font-bold mb-2 block">
//                 Payment Method
//               </label>
//               <div className="relative">
//                 <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl">💳</span>
//                 <select
//                   name="paymentMethod"
//                   value={formData.paymentMethod}
//                   onChange={handleChange}
//                   className="w-full font-['Fredoka'] pl-14 pr-10 py-3 border-4 border-black rounded-[40px] shadow-[6px_6px_0_black] focus:shadow-[10px_10px_0_#FFB5B5] focus:outline-none transition-all appearance-none"
//                 >
//                   <option value="cash">Cash on Delivery</option>
//                   <option value="card">Credit/Debit Card</option>
//                   <option value="paypal">PayPal</option>
//                 </select>
//                 <span className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl">▼</span>
//               </div>
//             </div>
//           </div>

//           {/* Special Instructions */}
//           <div className="mb-8">
//             <label className="font-['Fredoka'] text-lg font-bold mb-2 block">
//               Special Instructions
//             </label>
//             <div className="relative">
//               <span className="absolute left-4 top-6 text-2xl">📝</span>
//               <textarea
//                 name="instructions"
//                 value={formData.instructions}
//                 onChange={handleChange}
//                 rows="3"
//                 placeholder="Extra cheese? No onions? Let us know..."
//                 className="w-full font-['Fredoka'] pl-14 pr-4 py-3 border-4 border-black rounded-[40px] shadow-[6px_6px_0_black] focus:shadow-[10px_10px_0_#A0E7E5] focus:outline-none transition-all resize-none"
//               ></textarea>
//             </div>
//           </div>

//           {/* Submit Button */}
//           <div className="text-center">
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className="group relative font-['Fredoka'] text-2xl sm:text-3xl font-bold px-12 py-5 border-6 border-black rounded-[80px] shadow-[15px_15px_0_black] hover:shadow-[8px_8px_0_black] hover:scale-95 transition-all duration-200 bg-gradient-to-r from-[#FFB5B5] to-[#A0E7E5] disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
//             >
//               <span className="relative z-10 flex items-center justify-center gap-3">
//                 {isSubmitting ? (
//                   <>
//                     <span className="text-3xl animate-spin">⏳</span>
//                     Placing Order...
//                   </>
//                 ) : (
//                   <>
//                     🛵 Place Order
//                     <span className="text-3xl group-hover:translate-x-2 transition-transform">→</span>
//                   </>
//                 )}
//               </span>
//               <span className="absolute inset-0 bg-gradient-to-r from-[#FF8A8A] to-[#7fd1cf] rounded-[80px] translate-x-2 translate-y-2 -z-10"></span>
//             </button>
//           </div>

//           {/* Trust Badges */}
//           <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
//             <div className="flex items-center gap-2">
//               <span className="text-2xl">🔒</span>
//               <span className="font-['Fredoka'] text-sm">Secure Payment</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <span className="text-2xl">🛵</span>
//               <span className="font-['Fredoka'] text-sm">30 Min Delivery</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <span className="text-2xl">✅</span>
//               <span className="font-['Fredoka'] text-sm">Fresh Food</span>
//             </div>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default OrderForm; 









'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    item: '',
    quantity: '1',
    paymentMethod: 'cash',
    instructions: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { t } = useLanguage();

  const menuItems = [
    'Classic Burger', 'Cheese Burger', 'Chicken Burger',
    'Margherita', 'Pepperoni', 'French Fries',
    'Onion Rings', 'Chicken Nuggets', 'Soft Drink',
    'Milkshake', 'Ice Cream', 'Brownie'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '', email: '', phone: '', address: '',
          item: '', quantity: '1', paymentMethod: 'cash', instructions: ''
        });
      }, 3000);
    }, 1500);
  };

  return (
    <section className="relative py-8 sm:py-12 lg:py-16 xl:py-20 px-3 sm:px-4 lg:px-6 xl:px-8 bg-gradient-to-br from-[#FFE5D9] via-[#FFEED9] to-[#FFF5E6] min-h-screen overflow-hidden">
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[5%] left-[5%] w-48 sm:w-56 lg:w-64 xl:w-72 h-48 sm:h-56 lg:h-64 xl:h-72 bg-[#FFB5B5]/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-[15%] right-[5%] w-56 sm:w-64 lg:w-72 xl:w-80 h-56 sm:h-64 lg:h-72 xl:h-80 bg-[#A0E7E5]/20 rounded-full blur-3xl animate-pulse-slower"></div>
        <div className="absolute top-[40%] left-[50%] w-52 sm:w-60 lg:w-64 xl:w-72 h-52 sm:h-60 lg:h-64 xl:h-72 bg-[#FFD966]/20 rounded-full blur-3xl animate-float"></div>
        
        {/* Floating Food Emojis */}
        <span className="absolute top-[20%] right-[15%] text-5xl sm:text-6xl lg:text-7xl opacity-5 animate-float-super-slow">🛵</span>
        <span className="absolute bottom-[30%] left-[20%] text-6xl sm:text-7xl lg:text-8xl opacity-5 animate-float-delay2">🍔</span>
        <span className="absolute top-[60%] right-[30%] text-5xl sm:text-6xl lg:text-7xl opacity-5 animate-bounce-slow">🍕</span>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-10 animate-slide-down">
          <h1 className="font-['Fredoka'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-2 sm:mb-3 lg:mb-4">
            <span className="bg-[#A0E7E5] px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-[50px_15px_50px_15px] sm:rounded-[60px_20px_60px_20px] lg:rounded-[80px_20px_80px_20px] border-4 sm:border-5 border-black shadow-[10px_10px_0_black] sm:shadow-[12px_12px_0_black] lg:shadow-[15px_15px_0_black] inline-block transform hover:scale-105 transition-transform">
              🛵 {t?.order?.orderNow || 'ORDER NOW'}
            </span>
          </h1>
          <p className="font-['Fredoka'] text-lg sm:text-xl lg:text-2xl text-gray-700 mt-4 sm:mt-6">
            <span className="inline-block animate-wiggle">🔥</span> {t?.order?.fastDelivery || 'Fast delivery • 30 min or free'}
          </p>
        </div>

        {/* Success Message */}
        {isSubmitted && (
          <div className="mb-6 sm:mb-8 bg-green-400 p-4 sm:p-5 lg:p-6 rounded-[30px] sm:rounded-[40px] lg:rounded-[50px] border-3 sm:border-4 border-black shadow-[8px_8px_0_black] sm:shadow-[10px_10px_0_black] lg:shadow-[12px_12px_0_black] animate-slide-down">
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="text-4xl sm:text-5xl animate-bounce-slow">✅</span>
              <div>
                <h3 className="font-['Fredoka'] text-xl sm:text-2xl font-bold text-black">{t?.order?.orderPlaced || 'Order Placed Successfully!'}</h3>
                <p className="font-['Fredoka'] text-base sm:text-lg text-black/80">{t?.order?.preparing || 'Your food is being prepared'} 🍔</p>
              </div>
            </div>
          </div>
        )}

        {/* Order Form */}
        <form onSubmit={handleSubmit} className="bg-white/90 backdrop-blur-sm p-4 sm:p-6 lg:p-8 xl:p-10 rounded-[40px] sm:rounded-[50px] lg:rounded-[60px] xl:rounded-[70px] border-4 sm:border-5 lg:border-6 border-black shadow-[15px_15px_0_black] sm:shadow-[18px_18px_0_black] lg:shadow-[20px_20px_0_black] xl:shadow-[25px_25px_0_black] animate-fade-in-up">
          
          {/* Personal Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 mb-6 sm:mb-7 lg:mb-8">
            {/* Name Field */}
            <div className="relative group">
              <label className="font-['Fredoka'] text-sm sm:text-base lg:text-lg font-bold mb-1 sm:mb-2 block">
                {t?.order?.yourName || 'Your Name'} <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-xl sm:text-2xl">👤</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={t?.order?.namePlaceholder || "John Doe"}
                  className="w-full font-['Fredoka'] pl-10 sm:pl-12 lg:pl-14 pr-3 sm:pr-4 py-2 sm:py-2.5 lg:py-3 border-3 sm:border-4 border-black rounded-[30px] sm:rounded-[35px] lg:rounded-[40px] shadow-[4px_4px_0_black] sm:shadow-[5px_5px_0_black] lg:shadow-[6px_6px_0_black] focus:shadow-[6px_6px_0_#FFB5B5] sm:focus:shadow-[8px_8px_0_#FFB5B5] lg:focus:shadow-[10px_10px_0_#FFB5B5] focus:outline-none transition-all text-sm sm:text-base"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="relative group">
              <label className="font-['Fredoka'] text-sm sm:text-base lg:text-lg font-bold mb-1 sm:mb-2 block">
                {t?.order?.email || 'Email'} <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-xl sm:text-2xl">📧</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder={t?.order?.emailPlaceholder || "john@example.com"}
                  className="w-full font-['Fredoka'] pl-10 sm:pl-12 lg:pl-14 pr-3 sm:pr-4 py-2 sm:py-2.5 lg:py-3 border-3 sm:border-4 border-black rounded-[30px] sm:rounded-[35px] lg:rounded-[40px] shadow-[4px_4px_0_black] sm:shadow-[5px_5px_0_black] lg:shadow-[6px_6px_0_black] focus:shadow-[6px_6px_0_#A0E7E5] sm:focus:shadow-[8px_8px_0_#A0E7E5] lg:focus:shadow-[10px_10px_0_#A0E7E5] focus:outline-none transition-all text-sm sm:text-base"
                />
              </div>
            </div>

            {/* Phone Field */}
            <div className="relative group">
              <label className="font-['Fredoka'] text-sm sm:text-base lg:text-lg font-bold mb-1 sm:mb-2 block">
                {t?.order?.phone || 'Phone'} <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-xl sm:text-2xl">📱</span>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder={t?.order?.phonePlaceholder || "+1 234 567 890"}
                  className="w-full font-['Fredoka'] pl-10 sm:pl-12 lg:pl-14 pr-3 sm:pr-4 py-2 sm:py-2.5 lg:py-3 border-3 sm:border-4 border-black rounded-[30px] sm:rounded-[35px] lg:rounded-[40px] shadow-[4px_4px_0_black] sm:shadow-[5px_5px_0_black] lg:shadow-[6px_6px_0_black] focus:shadow-[6px_6px_0_#FFD966] sm:focus:shadow-[8px_8px_0_#FFD966] lg:focus:shadow-[10px_10px_0_#FFD966] focus:outline-none transition-all text-sm sm:text-base"
                />
              </div>
            </div>

            {/* Item Selection */}
            <div className="relative group">
              <label className="font-['Fredoka'] text-sm sm:text-base lg:text-lg font-bold mb-1 sm:mb-2 block">
                {t?.order?.selectItem || 'Select Item'} <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-xl sm:text-2xl">🍔</span>
                <select
                  name="item"
                  value={formData.item}
                  onChange={handleChange}
                  required
                  className="w-full font-['Fredoka'] pl-10 sm:pl-12 lg:pl-14 pr-8 sm:pr-10 py-2 sm:py-2.5 lg:py-3 border-3 sm:border-4 border-black rounded-[30px] sm:rounded-[35px] lg:rounded-[40px] shadow-[4px_4px_0_black] sm:shadow-[5px_5px_0_black] lg:shadow-[6px_6px_0_black] focus:shadow-[6px_6px_0_#FFB5B5] sm:focus:shadow-[8px_8px_0_#FFB5B5] lg:focus:shadow-[10px_10px_0_#FFB5B5] focus:outline-none transition-all appearance-none text-sm sm:text-base"
                >
                  <option value="">{t?.order?.chooseFood || "Choose your food"}</option>
                  {menuItems.map(item => (
                    <option key={item} value={item}>{item}</option>
                  ))}
                </select>
                <span className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-lg sm:text-xl lg:text-2xl">▼</span>
              </div>
            </div>
          </div>

          {/* Address Field - Full Width */}
          <div className="mb-4 sm:mb-5 lg:mb-6">
            <label className="font-['Fredoka'] text-sm sm:text-base lg:text-lg font-bold mb-1 sm:mb-2 block">
              {t?.order?.deliveryAddress || 'Delivery Address'} <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-xl sm:text-2xl">📍</span>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                placeholder={t?.order?.addressPlaceholder || "House #, Street, City"}
                className="w-full font-['Fredoka'] pl-10 sm:pl-12 lg:pl-14 pr-3 sm:pr-4 py-2 sm:py-2.5 lg:py-3 border-3 sm:border-4 border-black rounded-[30px] sm:rounded-[35px] lg:rounded-[40px] shadow-[4px_4px_0_black] sm:shadow-[5px_5px_0_black] lg:shadow-[6px_6px_0_black] focus:shadow-[6px_6px_0_#A0E7E5] sm:focus:shadow-[8px_8px_0_#A0E7E5] lg:focus:shadow-[10px_10px_0_#A0E7E5] focus:outline-none transition-all text-sm sm:text-base"
              />
            </div>
          </div>

          {/* Quantity & Payment Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 mb-6 sm:mb-7 lg:mb-8">
            {/* Quantity */}
            <div className="relative group">
              <label className="font-['Fredoka'] text-sm sm:text-base lg:text-lg font-bold mb-1 sm:mb-2 block">
                {t?.order?.quantity || 'Quantity'}
              </label>
              <div className="relative">
                <span className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-xl sm:text-2xl">🔢</span>
                <select
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="w-full font-['Fredoka'] pl-10 sm:pl-12 lg:pl-14 pr-8 sm:pr-10 py-2 sm:py-2.5 lg:py-3 border-3 sm:border-4 border-black rounded-[30px] sm:rounded-[35px] lg:rounded-[40px] shadow-[4px_4px_0_black] sm:shadow-[5px_5px_0_black] lg:shadow-[6px_6px_0_black] focus:shadow-[6px_6px_0_#FFD966] sm:focus:shadow-[8px_8px_0_#FFD966] lg:focus:shadow-[10px_10px_0_#FFD966] focus:outline-none transition-all appearance-none text-sm sm:text-base"
                >
                  {[1,2,3,4,5,6,7,8,9,10].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
                <span className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-lg sm:text-xl lg:text-2xl">▼</span>
              </div>
            </div>

            {/* Payment Method */}
            <div className="relative group">
              <label className="font-['Fredoka'] text-sm sm:text-base lg:text-lg font-bold mb-1 sm:mb-2 block">
                {t?.order?.paymentMethod || 'Payment Method'}
              </label>
              <div className="relative">
                <span className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-xl sm:text-2xl">💳</span>
                <select
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleChange}
                  className="w-full font-['Fredoka'] pl-10 sm:pl-12 lg:pl-14 pr-8 sm:pr-10 py-2 sm:py-2.5 lg:py-3 border-3 sm:border-4 border-black rounded-[30px] sm:rounded-[35px] lg:rounded-[40px] shadow-[4px_4px_0_black] sm:shadow-[5px_5px_0_black] lg:shadow-[6px_6px_0_black] focus:shadow-[6px_6px_0_#FFB5B5] sm:focus:shadow-[8px_8px_0_#FFB5B5] lg:focus:shadow-[10px_10px_0_#FFB5B5] focus:outline-none transition-all appearance-none text-sm sm:text-base"
                >
                  <option value="cash">{t?.order?.cashOnDelivery || 'Cash on Delivery'}</option>
                  <option value="card">{t?.order?.creditCard || 'Credit/Debit Card'}</option>
                  <option value="paypal">PayPal</option>
                </select>
                <span className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-lg sm:text-xl lg:text-2xl">▼</span>
              </div>
            </div>
          </div>

          {/* Special Instructions */}
          <div className="mb-6 sm:mb-7 lg:mb-8">
            <label className="font-['Fredoka'] text-sm sm:text-base lg:text-lg font-bold mb-1 sm:mb-2 block">
              {t?.order?.specialInstructions || 'Special Instructions'}
            </label>
            <div className="relative">
              <span className="absolute left-3 sm:left-4 top-4 sm:top-5 lg:top-6 text-xl sm:text-2xl">📝</span>
              <textarea
                name="instructions"
                value={formData.instructions}
                onChange={handleChange}
                rows="3"
                placeholder={t?.order?.instructionsPlaceholder || "Extra cheese? No onions? Let us know..."}
                className="w-full font-['Fredoka'] pl-10 sm:pl-12 lg:pl-14 pr-3 sm:pr-4 py-2 sm:py-3 border-3 sm:border-4 border-black rounded-[30px] sm:rounded-[35px] lg:rounded-[40px] shadow-[4px_4px_0_black] sm:shadow-[5px_5px_0_black] lg:shadow-[6px_6px_0_black] focus:shadow-[6px_6px_0_#A0E7E5] sm:focus:shadow-[8px_8px_0_#A0E7E5] lg:focus:shadow-[10px_10px_0_#A0E7E5] focus:outline-none transition-all resize-none text-sm sm:text-base"
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative font-['Fredoka'] text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold px-6 sm:px-8 lg:px-10 xl:px-12 py-3 sm:py-4 lg:py-5 border-4 sm:border-5 lg:border-6 border-black rounded-[50px] sm:rounded-[60px] lg:rounded-[70px] xl:rounded-[80px] shadow-[8px_8px_0_black] sm:shadow-[10px_10px_0_black] lg:shadow-[12px_12px_0_black] xl:shadow-[15px_15px_0_black] hover:shadow-[4px_4px_0_black] sm:hover:shadow-[5px_5px_0_black] lg:hover:shadow-[6px_6px_0_black] xl:hover:shadow-[8px_8px_0_black] hover:scale-95 transition-all duration-200 bg-gradient-to-r from-[#FFB5B5] to-[#A0E7E5] disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                {isSubmitting ? (
                  <>
                    <span className="text-2xl sm:text-3xl animate-spin">⏳</span>
                    {t?.order?.placingOrder || 'Placing Order...'}
                  </>
                ) : (
                  <>
                    🛵 {t?.order?.placeOrder || 'Place Order'}
                    <span className="text-2xl sm:text-3xl group-hover:translate-x-2 transition-transform">→</span>
                  </>
                )}
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#FF8A8A] to-[#7fd1cf] rounded-[50px] sm:rounded-[60px] lg:rounded-[70px] xl:rounded-[80px] translate-x-1 sm:translate-x-1.5 lg:translate-x-2 translate-y-1 sm:translate-y-1.5 lg:translate-y-2 -z-10"></span>
            </button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 lg:gap-6 mt-6 sm:mt-7 lg:mt-8">
            <div className="flex items-center gap-1 sm:gap-2">
              <span className="text-xl sm:text-2xl">🔒</span>
              <span className="font-['Fredoka'] text-xs sm:text-sm">{t?.order?.securePayment || 'Secure Payment'}</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <span className="text-xl sm:text-2xl">🛵</span>
              <span className="font-['Fredoka'] text-xs sm:text-sm">{t?.order?.fastDelivery || '30 Min Delivery'}</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <span className="text-xl sm:text-2xl">✅</span>
              <span className="font-['Fredoka'] text-xs sm:text-sm">{t?.order?.freshFood || 'Fresh Food'}</span>
            </div>
          </div>
        </form>

        {/* Footer Note */}
        <div className="text-center mt-6 sm:mt-8 lg:mt-10">
          <p className="font-['Fredoka'] text-xs sm:text-sm lg:text-base text-gray-600">
            ⚡ {t?.order?.guarantee || '100% freshness guaranteed'} • 🎁 {t?.order?.freeDelivery || 'Free delivery on $30+'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;