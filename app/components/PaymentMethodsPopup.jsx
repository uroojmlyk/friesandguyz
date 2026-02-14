
// 'use client';

// import React, { useState } from 'react';

// const PaymentMethodsPopup = ({ onClose, onPaymentComplete, totalAmount }) => {
//   console.log('✅ POPUP RENDERED');
//   const [selectedMethod, setSelectedMethod] = useState(null);
//   const [isProcessing, setIsProcessing] = useState(false);

//   const paymentMethods = [
//     { id: 'card', name: 'Credit Card', icon: '💳' },
//     { id: 'cash', name: 'Cash on Delivery', icon: '💵' },
//     { id: 'paypal', name: 'PayPal', icon: '🅿️' },
//   ];

//   const handlePayment = () => {
//     if (!selectedMethod) return;
//     setIsProcessing(true);
//     setTimeout(() => {
//       setIsProcessing(false);
//       onPaymentComplete();
//     }, 1500);
//   };

//   return (
//     <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
//       <div className="relative bg-[#FFE5D9] max-w-md w-full rounded-[50px] border-6 border-black shadow-[20px_20px_0_black] p-6">
        
//         <button 
//           onClick={onClose} 
//           className="absolute -top-4 -right-4 w-12 h-12 bg-[#FFB5B5] rounded-full border-4 border-black shadow-[4px_4px_0_black] hover:scale-95 flex items-center justify-center text-2xl font-bold"
//         >
//           ✕
//         </button>

//         <div className="text-center mb-6">
//           <div className="text-6xl mb-4">💰</div>
//           <h2 className="font-['Fredoka'] text-3xl font-black">Payment Method</h2>
//         </div>

//         <div className="grid grid-cols-3 gap-4 mb-6">
//           {paymentMethods.map((method) => (
//             <button
//               key={method.id}
//               onClick={() => setSelectedMethod(method.id)}
//               className={`bg-[#FFB5B5] p-4 rounded-[30px] border-4 border-black shadow-[4px_4px_0_black] hover:scale-95 transition-all ${
//                 selectedMethod === method.id ? 'ring-4 ring-[#FFD966]' : ''
//               }`}
//             >
//               <div className="text-3xl mb-2">{method.icon}</div>
//               <p className="font-['Fredoka'] text-xs font-bold">{method.name}</p>
//             </button>
//           ))}
//         </div>

//         <div className="bg-white rounded-[30px] border-4 border-black shadow-[4px_4px_0_black] p-4 mb-6">
//           <div className="flex justify-between text-lg font-bold">
//             <span>Total:</span>
//             <span className="text-2xl">${totalAmount.toFixed(2)}</span>
//           </div>
//         </div>

//         <button
//           onClick={handlePayment}
//           disabled={!selectedMethod || isProcessing}
//           className="w-full font-['Fredoka'] text-xl font-bold py-4 border-5 border-black rounded-[50px] shadow-[8px_8px_0_black] hover:scale-95 transition-all bg-gradient-to-r from-[#FFB5B5] to-[#A0E7E5] disabled:opacity-50"
//         >
//           {isProcessing ? 'Processing...' : 'Pay Now'}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PaymentMethodsPopup; 








'use client';

import React, { useState } from 'react';

const PaymentMethodsPopup = ({ onClose, onPaymentComplete, totalAmount }) => {
  console.log('✅ POPUP RENDERED');
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const paymentMethods = [
    { id: 'card', name: 'Credit Card', icon: '💳', color: 'bg-[#FFB5B5]' },
    { id: 'cash', name: 'Cash on Delivery', icon: '💵', color: 'bg-[#A0E7E5]' },
    { id: 'paypal', name: 'PayPal', icon: '🅿️', color: 'bg-[#FFD966]' },
    { id: 'jazzcash', name: 'JazzCash', icon: '📱', color: 'bg-[#FF8A8A]' },
    { id: 'easypaisa', name: 'EasyPaisa', icon: '🇵🇰', color: 'bg-[#7fd1cf]' },
    { id: 'googlepay', name: 'Google Pay', icon: '📱', color: 'bg-[#FFB347]' },
  ];

  const handlePayment = () => {
    if (!selectedMethod) return;
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      onPaymentComplete();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <div className="relative bg-[#FFE5D9] max-w-md w-full rounded-[50px] border-6 border-black shadow-[20px_20px_0_black] p-6">
        
        <button 
          onClick={onClose} 
          className="absolute -top-4 -right-4 w-12 h-12 bg-[#FFB5B5] rounded-full border-4 border-black shadow-[4px_4px_0_black] hover:scale-95 flex items-center justify-center text-2xl font-bold"
        >
          ✕
        </button>

        <div className="text-center mb-6">
          <div className="text-6xl mb-4">💰</div>
          <h2 className="font-['Fredoka'] text-3xl font-black">Payment Method</h2>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          {paymentMethods.map((method) => (
            <button
              key={method.id}
              onClick={() => setSelectedMethod(method.id)}
              className={`${method.color} p-4 rounded-[30px] border-4 border-black shadow-[4px_4px_0_black] hover:scale-95 transition-all ${
                selectedMethod === method.id ? 'ring-4 ring-[#FFD966]' : ''
              }`}
            >
              <div className="text-3xl mb-2">{method.icon}</div>
              <p className="font-['Fredoka'] text-xs font-bold">{method.name}</p>
            </button>
          ))}
        </div>

        <div className="bg-white rounded-[30px] border-4 border-black shadow-[4px_4px_0_black] p-4 mb-6">
          <div className="flex justify-between text-lg font-bold">
            <span>Total:</span>
            <span className="text-2xl">${totalAmount.toFixed(2)}</span>
          </div>
        </div>

        <button
          onClick={handlePayment}
          disabled={!selectedMethod || isProcessing}
          className="w-full font-['Fredoka'] text-xl font-bold py-4 border-5 border-black rounded-[50px] shadow-[8px_8px_0_black] hover:scale-95 transition-all bg-gradient-to-r from-[#FFB5B5] to-[#A0E7E5] disabled:opacity-50"
        >
          {isProcessing ? 'Processing...' : 'Pay Now'}
        </button>
      </div>
    </div>
  );
};

export default PaymentMethodsPopup;