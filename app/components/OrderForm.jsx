
// 'use client';

// import React, { useState } from 'react';
// import { useLanguage } from '../context/LanguageContext';
// import PaymentMethodsPopup from './PaymentMethodsPopup';
// import OrderSuccessPopup from './OrderSuccessPopup';

// const OrderForm = () => {
//   console.log('🔴 OrderForm Rendered');

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     address: '',
//     item: '',
//     quantity: '1',
//     instructions: ''
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [showPayment, setShowPayment] = useState(false);
//   const [showSuccess, setShowSuccess] = useState(false);
//   const { t } = useLanguage();

//   const menuItems = [
//     'Classic Burger', 'Cheese Burger', 'Chicken Burger',
//     'Margherita', 'Pepperoni', 'French Fries',
//     'Onion Rings', 'Chicken Nuggets', 'Soft Drink',
//     'Milkshake', 'Ice Cream', 'Brownie'
//   ];

//   const itemPrices = {
//     'Classic Burger': 12.99,
//     'Cheese Burger': 14.99,
//     'Chicken Burger': 13.99,
//     'Margherita': 16.99,
//     'Pepperoni': 18.99,
//     'French Fries': 5.99,
//     'Onion Rings': 6.99,
//     'Chicken Nuggets': 8.99,
//     'Soft Drink': 2.99,
//     'Milkshake': 4.99,
//     'Ice Cream': 3.99,
//     'Brownie': 4.99
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleProceedToPayment = () => {
//     console.log('🟢 Proceed to Payment clicked');
    
//     if (!formData.name || !formData.email || !formData.phone || !formData.address || !formData.item) {
//       alert('Please fill all required fields');
//       return;
//     }
    
//     console.log('🟢 Setting showPayment to TRUE');
//     setShowPayment(true);
//   };

//   const handlePaymentComplete = () => {
//     console.log('🟢 Payment Complete');
//     setShowPayment(false);
//     setIsSubmitting(true);
    
//     setTimeout(() => {
//       setIsSubmitting(false);
//       setShowSuccess(true);
      
//       setTimeout(() => {
//         setShowSuccess(false);
//         setFormData({
//           name: '', email: '', phone: '', address: '',
//           item: '', quantity: '1', instructions: ''
//         });
//       }, 5000);
//     }, 1500);
//   };

//   const calculateTotal = () => {
//     if (!formData.item) return 0;
//     const price = itemPrices[formData.item] || 12.99;
//     return price * parseInt(formData.quantity);
//   };

//   const orderId = 'ORD' + Math.floor(Math.random() * 10000).toString().padStart(4, '0');
//   const totalAmount = calculateTotal();

//   return (
//     <section className="relative py-8 sm:py-12 lg:py-16 xl:py-20 px-3 sm:px-4 lg:px-6 xl:px-8 bg-gradient-to-br from-[#FFE5D9] via-[#FFEED9] to-[#FFF5E6] min-h-screen overflow-hidden">
      
//       {/* Animated Background */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-[5%] left-[5%] w-48 sm:w-56 lg:w-64 xl:w-72 h-48 sm:h-56 lg:h-64 xl:h-72 bg-[#FFB5B5]/20 rounded-full blur-3xl animate-pulse-slow"></div>
//         <div className="absolute bottom-[15%] right-[5%] w-56 sm:w-64 lg:w-72 xl:w-80 h-56 sm:h-64 lg:h-72 xl:h-80 bg-[#A0E7E5]/20 rounded-full blur-3xl animate-pulse-slower"></div>
//         <div className="absolute top-[40%] left-[50%] w-52 sm:w-60 lg:w-64 xl:w-72 h-52 sm:h-60 lg:h-64 xl:h-72 bg-[#FFD966]/20 rounded-full blur-3xl animate-float"></div>
//       </div>

//       <div className="relative max-w-4xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-6 sm:mb-8 lg:mb-10 animate-slide-down">
//           <h1 className="font-['Fredoka'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-2 sm:mb-3 lg:mb-4">
//             <span className="bg-[#A0E7E5] px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-[50px_15px_50px_15px] sm:rounded-[60px_20px_60px_20px] lg:rounded-[80px_20px_80px_20px] border-4 sm:border-5 border-black shadow-[10px_10px_0_black] sm:shadow-[12px_12px_0_black] lg:shadow-[15px_15px_0_black] inline-block transform hover:scale-105 transition-transform">
//               🛵 {t?.order?.orderNow || 'ORDER NOW'}
//             </span>
//           </h1>
//           <p className="font-['Fredoka'] text-lg sm:text-xl lg:text-2xl text-gray-700 mt-4 sm:mt-6">
//             <span className="inline-block animate-wiggle">🔥</span> {t?.order?.fastDelivery || 'Fast delivery • 30 min or free'}
//           </p>
//         </div>

//         {/* Success Message */}
//         {showSuccess && (
//           <div className="mb-6 sm:mb-8 bg-green-400 p-4 sm:p-5 lg:p-6 rounded-[30px] sm:rounded-[40px] lg:rounded-[50px] border-3 sm:border-4 border-black shadow-[8px_8px_0_black] sm:shadow-[10px_10px_0_black] lg:shadow-[12px_12px_0_black] animate-slide-down">
//             <div className="flex items-center gap-3 sm:gap-4">
//               <span className="text-4xl sm:text-5xl animate-bounce-slow">✅</span>
//               <div>
//                 <h3 className="font-['Fredoka'] text-xl sm:text-2xl font-bold text-black">{t?.order?.orderPlaced || 'Order Placed Successfully!'}</h3>
//                 <p className="font-['Fredoka'] text-base sm:text-lg text-black/80">{t?.order?.preparing || 'Your food is being prepared'} 🍔</p>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* TEST BUTTON - Ye directly popup open karega */}
//         <div className="mb-4 text-center">
//           <button
//             type="button"
//             onClick={() => {
//               console.log('🔵 TEST BUTTON CLICKED');
//               setShowPayment(true);
//             }}
//             className="bg-purple-600 text-white px-8 py-4 rounded-full text-xl font-bold"
//           >
//             🧪 TEST POPUP (Click to Test)
//           </button>
//         </div>

//         {/* Order Form */}
//         <div className="bg-white/90 backdrop-blur-sm p-4 sm:p-6 lg:p-8 xl:p-10 rounded-[40px] sm:rounded-[50px] lg:rounded-[60px] xl:rounded-[70px] border-4 sm:border-5 lg:border-6 border-black shadow-[15px_15px_0_black] sm:shadow-[18px_18px_0_black] lg:shadow-[20px_20px_0_black] xl:shadow-[25px_25px_0_black] animate-fade-in-up">
          
//           {/* Form Fields */}
//           <div className="mb-4">
//             <label className="font-['Fredoka'] text-sm sm:text-base lg:text-lg font-bold mb-1 sm:mb-2 block">
//               {t?.order?.yourName || 'Your Name'} <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               placeholder="John Doe"
//               className="w-full font-['Fredoka'] px-4 py-2 border-4 border-black rounded-[40px]"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="font-['Fredoka'] text-sm sm:text-base lg:text-lg font-bold mb-1 sm:mb-2 block">
//               {t?.order?.email || 'Email'} <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               placeholder="john@example.com"
//               className="w-full font-['Fredoka'] px-4 py-2 border-4 border-black rounded-[40px]"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="font-['Fredoka'] text-sm sm:text-base lg:text-lg font-bold mb-1 sm:mb-2 block">
//               {t?.order?.phone || 'Phone'} <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="tel"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               required
//               placeholder="+1 234 567 890"
//               className="w-full font-['Fredoka'] px-4 py-2 border-4 border-black rounded-[40px]"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="font-['Fredoka'] text-sm sm:text-base lg:text-lg font-bold mb-1 sm:mb-2 block">
//               {t?.order?.selectItem || 'Select Item'} <span className="text-red-500">*</span>
//             </label>
//             <select
//               name="item"
//               value={formData.item}
//               onChange={handleChange}
//               required
//               className="w-full font-['Fredoka'] px-4 py-2 border-4 border-black rounded-[40px]"
//             >
//               <option value="">Choose your food</option>
//               {menuItems.map(item => (
//                 <option key={item} value={item}>{item}</option>
//               ))}
//             </select>
//           </div>

//           <div className="mb-4">
//             <label className="font-['Fredoka'] text-sm sm:text-base lg:text-lg font-bold mb-1 sm:mb-2 block">
//               {t?.order?.deliveryAddress || 'Delivery Address'} <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="text"
//               name="address"
//               value={formData.address}
//               onChange={handleChange}
//               required
//               placeholder="House #, Street, City"
//               className="w-full font-['Fredoka'] px-4 py-2 border-4 border-black rounded-[40px]"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="font-['Fredoka'] text-sm sm:text-base lg:text-lg font-bold mb-1 sm:mb-2 block">
//               {t?.order?.quantity || 'Quantity'}
//             </label>
//             <select
//               name="quantity"
//               value={formData.quantity}
//               onChange={handleChange}
//               className="w-full font-['Fredoka'] px-4 py-2 border-4 border-black rounded-[40px]"
//             >
//               {[1,2,3,4,5,6,7,8,9,10].map(num => (
//                 <option key={num} value={num}>{num}</option>
//               ))}
//             </select>
//           </div>

//           <div className="mb-4">
//             <label className="font-['Fredoka'] text-sm sm:text-base lg:text-lg font-bold mb-1 sm:mb-2 block">
//               {t?.order?.specialInstructions || 'Special Instructions'}
//             </label>
//             <textarea
//               name="instructions"
//               value={formData.instructions}
//               onChange={handleChange}
//               rows="3"
//               placeholder="Extra cheese? No onions? Let us know..."
//               className="w-full font-['Fredoka'] px-4 py-2 border-4 border-black rounded-[40px]"
//             />
//           </div>

//           {/* Total Amount */}
//           <div className="mb-6 text-center">
//             <div className="inline-block bg-[#FFD966] px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-[40px] border-4 border-black shadow-[6px_6px_0_black]">
//               <span className="font-['Fredoka'] text-lg sm:text-xl lg:text-2xl font-bold">Total: </span>
//               <span className="font-['Fredoka'] text-2xl sm:text-3xl lg:text-4xl font-black">${totalAmount.toFixed(2)}</span>
//             </div>
//           </div>

//           {/* PROCEED TO PAYMENT BUTTON */}
//           <div className="text-center">
//             <button
//               type="button"
//               onClick={handleProceedToPayment}
//               disabled={isSubmitting}
//               className="group relative font-['Fredoka'] text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold px-6 sm:px-8 lg:px-10 xl:px-12 py-3 sm:py-4 lg:py-5 border-4 sm:border-5 lg:border-6 border-black rounded-[50px] sm:rounded-[60px] lg:rounded-[70px] xl:rounded-[80px] shadow-[8px_8px_0_black] sm:shadow-[10px_10px_0_black] lg:shadow-[12px_12px_0_black] xl:shadow-[15px_15px_0_black] hover:shadow-[4px_4px_0_black] sm:hover:shadow-[5px_5px_0_black] lg:hover:shadow-[6px_6px_0_black] xl:hover:shadow-[8px_8px_0_black] hover:scale-95 transition-all duration-200 bg-gradient-to-r from-[#FFB5B5] to-[#A0E7E5] disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
//             >
//               <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
//                 {isSubmitting ? (
//                   <>
//                     <span className="text-2xl sm:text-3xl animate-spin">⏳</span>
//                     {t?.order?.placingOrder || 'Placing Order...'}
//                   </>
//                 ) : (
//                   <>
//                     💰 Proceed to Payment
//                     <span className="text-2xl sm:text-3xl group-hover:translate-x-2 transition-transform">→</span>
//                   </>
//                 )}
//               </span>
//               <span className="absolute inset-0 bg-gradient-to-r from-[#FF8A8A] to-[#7fd1cf] rounded-[50px] sm:rounded-[60px] lg:rounded-[70px] xl:rounded-[80px] translate-x-1 sm:translate-x-1.5 lg:translate-x-2 translate-y-1 sm:translate-y-1.5 lg:translate-y-2 -z-10"></span>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* PAYMENT POPUP */}
//       {showPayment && (
//         <div className="fixed inset-0 z-[9999]">
//           <PaymentMethodsPopup
//             onClose={() => {
//               console.log('🟢 Closing payment popup');
//               setShowPayment(false);
//             }}
//             onPaymentComplete={handlePaymentComplete}
//             totalAmount={totalAmount}
//           />
//         </div>
//       )}

//       {/* SUCCESS POPUP */}
//       {showSuccess && (
//         <div className="fixed inset-0 z-[9999]">
//           <OrderSuccessPopup
//             orderId={orderId}
//             totalAmount={totalAmount}
//             onClose={() => setShowSuccess(false)}
//           />
//         </div>
//       )}
//     </section>
//   );
// };

// export default OrderForm; 






'use client';

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import PaymentMethodsPopup from './PaymentMethodsPopup';
import OrderSuccessPopup from './OrderSuccessPopup';

const OrderForm = () => {
  console.log('🔴 OrderForm Rendered');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    item: '',
    quantity: '1',
    instructions: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const { t } = useLanguage();

  const menuItems = [
    'Classic Burger', 'Cheese Burger', 'Chicken Burger',
    'Margherita', 'Pepperoni', 'French Fries',
    'Onion Rings', 'Chicken Nuggets', 'Soft Drink',
    'Milkshake', 'Ice Cream', 'Brownie'
  ];

  const itemPrices = {
    'Classic Burger': 12.99,
    'Cheese Burger': 14.99,
    'Chicken Burger': 13.99,
    'Margherita': 16.99,
    'Pepperoni': 18.99,
    'French Fries': 5.99,
    'Onion Rings': 6.99,
    'Chicken Nuggets': 8.99,
    'Soft Drink': 2.99,
    'Milkshake': 4.99,
    'Ice Cream': 3.99,
    'Brownie': 4.99
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleProceedToPayment = () => {
    console.log('🟢 Proceed to Payment clicked');
    
    if (!formData.name || !formData.email || !formData.phone || !formData.address || !formData.item) {
      alert('Please fill all required fields');
      return;
    }
    
    console.log('🟢 Setting showPayment to TRUE');
    setShowPayment(true);
  };

  const handlePaymentComplete = () => {
    console.log('🟢 Payment Complete');
    setShowPayment(false);
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      
      setTimeout(() => {
        setShowSuccess(false);
        setFormData({
          name: '', email: '', phone: '', address: '',
          item: '', quantity: '1', instructions: ''
        });
      }, 5000);
    }, 1500);
  };

  const calculateTotal = () => {
    if (!formData.item) return 0;
    const price = itemPrices[formData.item] || 12.99;
    return price * parseInt(formData.quantity);
  };

  const orderId = 'ORD' + Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  const totalAmount = calculateTotal();

  return (
    <section className="relative py-8 sm:py-12 lg:py-16 xl:py-20 px-3 sm:px-4 lg:px-6 xl:px-8 bg-gradient-to-br from-[#FFE5D9] via-[#FFEED9] to-[#FFF5E6] min-h-screen overflow-hidden">
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[5%] left-[5%] w-48 sm:w-56 lg:w-64 xl:w-72 h-48 sm:h-56 lg:h-64 xl:h-72 bg-[#FFB5B5]/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-[15%] right-[5%] w-56 sm:w-64 lg:w-72 xl:w-80 h-56 sm:h-64 lg:h-72 xl:h-80 bg-[#A0E7E5]/20 rounded-full blur-3xl animate-pulse-slower"></div>
        <div className="absolute top-[40%] left-[50%] w-52 sm:w-60 lg:w-64 xl:w-72 h-52 sm:h-60 lg:h-64 xl:h-72 bg-[#FFD966]/20 rounded-full blur-3xl animate-float"></div>
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
        {showSuccess && (
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

        {/* ⚠️ TEST BUTTON HATAYA - AB NAHI DIKHEGA */}

        {/* Order Form */}
        <div className="bg-white/90 backdrop-blur-sm p-4 sm:p-6 lg:p-8 xl:p-10 rounded-[40px] sm:rounded-[50px] lg:rounded-[60px] xl:rounded-[70px] border-4 sm:border-5 lg:border-6 border-black shadow-[15px_15px_0_black] sm:shadow-[18px_18px_0_black] lg:shadow-[20px_20px_0_black] xl:shadow-[25px_25px_0_black] animate-fade-in-up">
          
          {/* Form Fields */}
          <div className="mb-4">
            <label className="font-['Fredoka'] text-sm sm:text-base lg:text-lg font-bold mb-1 sm:mb-2 block">
              {t?.order?.yourName || 'Your Name'} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
              className="w-full font-['Fredoka'] px-4 py-2 border-4 border-black rounded-[40px]"
            />
          </div>

          <div className="mb-4">
            <label className="font-['Fredoka'] text-sm sm:text-base lg:text-lg font-bold mb-1 sm:mb-2 block">
              {t?.order?.email || 'Email'} <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="john@example.com"
              className="w-full font-['Fredoka'] px-4 py-2 border-4 border-black rounded-[40px]"
            />
          </div>

          <div className="mb-4">
            <label className="font-['Fredoka'] text-sm sm:text-base lg:text-lg font-bold mb-1 sm:mb-2 block">
              {t?.order?.phone || 'Phone'} <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="+1 234 567 890"
              className="w-full font-['Fredoka'] px-4 py-2 border-4 border-black rounded-[40px]"
            />
          </div>

          <div className="mb-4">
            <label className="font-['Fredoka'] text-sm sm:text-base lg:text-lg font-bold mb-1 sm:mb-2 block">
              {t?.order?.selectItem || 'Select Item'} <span className="text-red-500">*</span>
            </label>
            <select
              name="item"
              value={formData.item}
              onChange={handleChange}
              required
              className="w-full font-['Fredoka'] px-4 py-2 border-4 border-black rounded-[40px]"
            >
              <option value="">Choose your food</option>
              {menuItems.map(item => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="font-['Fredoka'] text-sm sm:text-base lg:text-lg font-bold mb-1 sm:mb-2 block">
              {t?.order?.deliveryAddress || 'Delivery Address'} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              placeholder="House #, Street, City"
              className="w-full font-['Fredoka'] px-4 py-2 border-4 border-black rounded-[40px]"
            />
          </div>

          <div className="mb-4">
            <label className="font-['Fredoka'] text-sm sm:text-base lg:text-lg font-bold mb-1 sm:mb-2 block">
              {t?.order?.quantity || 'Quantity'}
            </label>
            <select
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="w-full font-['Fredoka'] px-4 py-2 border-4 border-black rounded-[40px]"
            >
              {[1,2,3,4,5,6,7,8,9,10].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="font-['Fredoka'] text-sm sm:text-base lg:text-lg font-bold mb-1 sm:mb-2 block">
              {t?.order?.specialInstructions || 'Special Instructions'}
            </label>
            <textarea
              name="instructions"
              value={formData.instructions}
              onChange={handleChange}
              rows="3"
              placeholder="Extra cheese? No onions? Let us know..."
              className="w-full font-['Fredoka'] px-4 py-2 border-4 border-black rounded-[40px]"
            />
          </div>

          {/* Total Amount */}
          <div className="mb-6 text-center">
            <div className="inline-block bg-[#FFD966] px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-[40px] border-4 border-black shadow-[6px_6px_0_black]">
              <span className="font-['Fredoka'] text-lg sm:text-xl lg:text-2xl font-bold">Total: </span>
              <span className="font-['Fredoka'] text-2xl sm:text-3xl lg:text-4xl font-black">${totalAmount.toFixed(2)}</span>
            </div>
          </div>

          {/* PROCEED TO PAYMENT BUTTON */}
          <div className="text-center">
            <button
              type="button"
              onClick={handleProceedToPayment}
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
                    💰 Proceed to Payment
                    <span className="text-2xl sm:text-3xl group-hover:translate-x-2 transition-transform">→</span>
                  </>
                )}
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#FF8A8A] to-[#7fd1cf] rounded-[50px] sm:rounded-[60px] lg:rounded-[70px] xl:rounded-[80px] translate-x-1 sm:translate-x-1.5 lg:translate-x-2 translate-y-1 sm:translate-y-1.5 lg:translate-y-2 -z-10"></span>
            </button>
          </div>
        </div>
      </div>

      {/* PAYMENT POPUP */}
      {showPayment && (
        <div className="fixed inset-0 z-[9999]">
          <PaymentMethodsPopup
            onClose={() => {
              console.log('🟢 Closing payment popup');
              setShowPayment(false);
            }}
            onPaymentComplete={handlePaymentComplete}
            totalAmount={totalAmount}
          />
        </div>
      )}

      {/* SUCCESS POPUP */}
      {showSuccess && (
        <div className="fixed inset-0 z-[9999]">
          <OrderSuccessPopup
            orderId={orderId}
            totalAmount={totalAmount}
            onClose={() => setShowSuccess(false)}
          />
        </div>
      )}
    </section>
  );
};

export default OrderForm;