


// 'use client';

// import React from 'react';
// import Link from 'next/link';

// const OrderSuccessPopup = ({ orderId, totalAmount, onClose }) => {
//   console.log('✅ SUCCESS POPUP RENDERED');
  
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
//           <div className="text-7xl mb-4">✅</div>
//           <h2 className="font-['Fredoka'] text-3xl font-black">Order Placed!</h2>
//           <p className="text-gray-600">Your food will arrive in 30 mins 🛵</p>
//         </div>

//         <div className="bg-white rounded-[30px] border-4 border-black shadow-[4px_4px_0_black] p-4 mb-6">
//           <p className="text-sm text-gray-600 mb-2">Order ID:</p>
//           <p className="font-bold text-lg mb-3">{orderId}</p>
//           <div className="flex justify-between pt-3 border-t-4 border-black">
//             <span className="font-bold">Total Paid:</span>
//             <span className="text-2xl font-black text-green-600">${totalAmount.toFixed(2)}</span>
//           </div>
//         </div>

//         <div className="flex gap-4">
//           <Link href="/orders" className="flex-1">
//             <button className="w-full font-bold bg-white py-3 rounded-[40px] border-4 border-black shadow-[4px_4px_0_black] hover:scale-95 transition-all">
//               Track Order 🛵
//             </button>
//           </Link>
//           <Link href="/menu" className="flex-1">
//             <button className="w-full font-bold bg-[#FFD966] py-3 rounded-[40px] border-4 border-black shadow-[4px_4px_0_black] hover:scale-95 transition-all">
//               Order More 🍔
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrderSuccessPopup; 









'use client';

import React from 'react';
import Link from 'next/link';

const OrderSuccessPopup = ({ orderId, totalAmount, onClose }) => {
  console.log('✅ SUCCESS POPUP RENDERED');
  
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
          <div className="text-7xl mb-4">✅</div>
          <h2 className="font-['Fredoka'] text-3xl font-black">Order Placed!</h2>
          <p className="text-gray-600">Your food will arrive in 30 mins 🛵</p>
        </div>

        <div className="bg-white rounded-[30px] border-4 border-black shadow-[4px_4px_0_black] p-4 mb-6">
          <p className="text-sm text-gray-600 mb-2">Order ID:</p>
          <p className="font-bold text-lg mb-3">{orderId}</p>
          <div className="flex justify-between pt-3 border-t-4 border-black">
            <span className="font-bold">Total Paid:</span>
            <span className="text-2xl font-black text-green-600">${totalAmount.toFixed(2)}</span>
          </div>
        </div>

        <div className="flex gap-4">
          <Link href="/orders" className="flex-1">
            <button className="w-full font-bold bg-white py-3 rounded-[40px] border-4 border-black shadow-[4px_4px_0_black] hover:scale-95 transition-all">
              Track Order 🛵
            </button>
          </Link>
          <Link href="/menu" className="flex-1">
            <button className="w-full font-bold bg-[#FFD966] py-3 rounded-[40px] border-4 border-black shadow-[4px_4px_0_black] hover:scale-95 transition-all">
              Order More 🍔
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessPopup;