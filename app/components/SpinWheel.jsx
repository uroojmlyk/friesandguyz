// 'use client';

// import React, { useState } from 'react';

// const SpinWheel = ({ onClose, onWin }) => {
//   const [isSpinning, setIsSpinning] = useState(false);
//   const [rotation, setRotation] = useState(0);
//   const [result, setResult] = useState(null);
//   const [spinsLeft, setSpinsLeft] = useState(1); // Daily 1 spin

//   const prizes = [
//     { text: '10% OFF', value: 10, color: '#FFB5B5' },
//     { text: '20% OFF', value: 20, color: '#A0E7E5' },
//     { text: 'FREE FRIES', value: 'fries', color: '#FFD966' },
//     { text: 'TRY AGAIN', value: 0, color: '#FF8A8A' },
//     { text: '15% OFF', value: 15, color: '#7fd1cf' },
//     { text: 'FREE DRINK', value: 'drink', color: '#FFB347' },
//     { text: '50% OFF', value: 50, color: '#FF6B6B' },
//     { text: 'FREE DELIVERY', value: 'delivery', color: '#6B8EFF' },
//   ];

//   const spinWheel = () => {
//     if (isSpinning || spinsLeft <= 0) return;

//     setIsSpinning(true);
    
//     // Random spins (5-10 full rotations)
//     const spins = 5 + Math.floor(Math.random() * 5);
//     const extraDeg = Math.floor(Math.random() * 360);
//     const newRotation = rotation + (spins * 360) + extraDeg;
    
//     setRotation(newRotation);

//     // Calculate prize after spin ends
//     setTimeout(() => {
//       setIsSpinning(false);
//       setSpinsLeft(0);
      
//       // Calculate which prize (based on final angle)
//       const segmentAngle = 360 / prizes.length;
//       const normalizedAngle = newRotation % 360;
//       const prizeIndex = Math.floor(normalizedAngle / segmentAngle);
//       const prize = prizes[prizeIndex];
      
//       setResult(prize);
      
//       if (prize.value !== 0 && prize.text !== 'TRY AGAIN') {
//         onWin(prize);
//       }
//     }, 3000);
//   };

//   const closePopup = () => {
//     if (onClose) onClose();
//   };

//   return (
//     <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 animate-fade-in">
//       <div className="relative bg-[#FFE5D9] max-w-md w-full rounded-[50px] border-6 border-black shadow-[20px_20px_0_black] p-6 animate-slide-up">
        
//         {/* Close Button */}
//         <button 
//           onClick={closePopup}
//           className="absolute -top-4 -right-4 w-12 h-12 bg-[#FFB5B5] rounded-full border-4 border-black shadow-[4px_4px_0_black] hover:scale-95 transition-all flex items-center justify-center text-2xl font-bold z-10"
//         >
//           ✕
//         </button>

//         {/* Header */}
//         <div className="text-center mb-6">
//           <div className="text-6xl animate-float mb-4">🎡</div>
//           <h2 className="font-['Fredoka'] text-3xl font-black text-black mb-2">
//             SPIN & WIN!
//           </h2>
//           <p className="font-['Fredoka'] text-gray-600">
//             {spinsLeft > 0 ? 'You have 1 free spin!' : 'Come back tomorrow!'}
//           </p>
//         </div>

//         {/* Wheel Container */}
//         <div className="relative w-64 h-64 mx-auto mb-6">
//           {/* Wheel */}
//           <div
//             className="w-full h-full rounded-full border-8 border-black shadow-[10px_10px_0_black] transition-transform duration-3000 ease-out"
//             style={{
//               transform: `rotate(${rotation}deg)`,
//               background: 'conic-gradient(' + prizes.map((p, i) => 
//                 `${p.color} ${i * 45}deg ${(i + 1) * 45}deg`
//               ).join(', ') + ')',
//               transition: isSpinning ? 'transform 3s cubic-bezier(0.2, 0.8, 0.3, 1)' : 'none'
//             }}
//           >
//             {/* Segment Labels */}
//             {prizes.map((prize, i) => {
//               const angle = i * 45 + 22.5; // Center of each segment
//               const rad = (angle * Math.PI) / 180;
//               const radius = 100; // pixels from center
//               const left = 128 + radius * Math.sin(rad) - 40;
//               const top = 128 - radius * Math.cos(rad) - 20;
              
//               return (
//                 <div
//                   key={i}
//                   className="absolute text-xs sm:text-sm font-['Fredoka'] font-bold text-black whitespace-nowrap"
//                   style={{
//                     left: `${left}px`,
//                     top: `${top}px`,
//                     transform: `rotate(${angle}deg)`,
//                     textShadow: '1px 1px 0 white',
//                     pointerEvents: 'none'
//                   }}
//                 >
//                   {prize.text}
//                 </div>
//               );
//             })}
//           </div>

//           {/* Center Pointer */}
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#FFD966] rounded-full border-4 border-black shadow-[4px_4px_0_black] z-10"></div>
          
//           {/* Fixed Pointer Arrow */}
//           <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-4xl animate-bounce-slow">⬇️</div>
//         </div>

//         {/* Result Display */}
//         {result && !isSpinning && (
//           <div className="text-center mb-4 animate-bounce">
//             <div className="inline-block bg-white px-6 py-3 rounded-[40px] border-4 border-black shadow-[4px_4px_0_black]">
//               <p className="font-['Fredoka'] text-xl font-bold">
//                 You got: <span className="text-[#FF6B6B]">{result.text}</span>
//               </p>
//               {result.value > 0 && (
//                 <p className="font-['Fredoka'] text-sm text-gray-600">
//                   Use code: SPIN{result.value}
//                 </p>
//               )}
//             </div>
//           </div>
//         )}

//         {/* Spin Button */}
//         <button
//           onClick={spinWheel}
//           disabled={isSpinning || spinsLeft <= 0}
//           className="w-full font-['Fredoka'] text-xl font-bold py-4 border-5 border-black rounded-[50px] shadow-[8px_8px_0_black] hover:scale-95 hover:shadow-[4px_4px_0_black] transition-all duration-200 bg-gradient-to-r from-[#FFB5B5] to-[#A0E7E5] disabled:opacity-50 disabled:cursor-not-allowed"
//         >
//           {isSpinning ? '🎡 Spinning...' : spinsLeft > 0 ? '🎯 SPIN NOW' : '⏰ No Spins Left'}
//         </button>

//         {/* Footer */}
//         <p className="text-center font-['Fredoka'] text-sm text-gray-600 mt-4">
//           *Win discounts on your next order!
//         </p>

//         {/* Decorative Elements */}
//         <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-[#FFD966] rounded-full border-4 border-black animate-float-slow"></div>
//         <div className="absolute -top-2 -left-2 w-8 h-8 bg-[#FFB5B5] rounded-full border-3 border-black animate-bounce-slow"></div>
//       </div>
//     </div>
//   );
// };

// export default SpinWheel; 










'use client';

import React, { useState, useEffect } from 'react';

const SpinWheel = ({ onClose, onWin }) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [result, setResult] = useState(null);
  const [spinsLeft, setSpinsLeft] = useState(1);

  // Load spins left from localStorage
  useEffect(() => {
    const lastSpinDate = localStorage.getItem('lastSpinDate');
    const today = new Date().toDateString();
    
    if (lastSpinDate === today) {
      setSpinsLeft(0);
    }
  }, []);

  const prizes = [
    { text: '10% OFF', value: 10, color: '#FFB5B5' },
    { text: '20% OFF', value: 20, color: '#A0E7E5' },
    { text: 'FREE FRIES', value: 'fries', color: '#FFD966' },
    { text: 'TRY AGAIN', value: 0, color: '#FF8A8A' },
    { text: '15% OFF', value: 15, color: '#7fd1cf' },
    { text: 'FREE DRINK', value: 'drink', color: '#FFB347' },
    { text: '50% OFF', value: 50, color: '#FF6B6B' },
    { text: 'FREE DELIVERY', value: 'delivery', color: '#6B8EFF' },
  ];

  const spinWheel = () => {
    if (isSpinning || spinsLeft <= 0) return;

    setIsSpinning(true);
    
    const spins = 5 + Math.floor(Math.random() * 5);
    const extraDeg = Math.floor(Math.random() * 360);
    const newRotation = rotation + (spins * 360) + extraDeg;
    
    setRotation(newRotation);

    setTimeout(() => {
      setIsSpinning(false);
      setSpinsLeft(0);
      
      // Save to localStorage
      localStorage.setItem('lastSpinDate', new Date().toDateString());
      
      const segmentAngle = 360 / prizes.length;
      const normalizedAngle = newRotation % 360;
      const prizeIndex = Math.floor(normalizedAngle / segmentAngle);
      const prize = prizes[prizeIndex];
      
      setResult(prize);
      
      if (prize.value !== 0 && prize.text !== 'TRY AGAIN') {
        onWin(prize);
      }
    }, 3000);
  };

  // Close when clicking outside
  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 animate-fade-in"
      onClick={handleOutsideClick}
    >
      <div className="relative bg-[#FFE5D9] max-w-md w-full rounded-[50px] border-6 border-black shadow-[20px_20px_0_black] p-6 animate-slide-up">
        
        {/* Close Button - Bigger and better positioned */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="absolute -top-5 -right-5 sm:-top-6 sm:-right-6 w-12 h-12 sm:w-14 sm:h-14 bg-[#FFB5B5] rounded-full border-4 border-black shadow-[6px_6px_0_black] hover:scale-95 hover:shadow-[3px_3px_0_black] transition-all flex items-center justify-center text-2xl sm:text-3xl font-bold z-20"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="text-6xl animate-float mb-4">🎡</div>
          <h2 className="font-['Fredoka'] text-3xl font-black text-black mb-2">
            SPIN & WIN!
          </h2>
          <p className="font-['Fredoka'] text-gray-600">
            {spinsLeft > 0 ? 'You have 1 free spin!' : 'Come back tomorrow!'}
          </p>
        </div>

        {/* Wheel Container */}
        <div className="relative w-64 h-64 mx-auto mb-6">
          {/* Wheel */}
          <div
            className="w-full h-full rounded-full border-8 border-black shadow-[10px_10px_0_black] transition-transform duration-3000 ease-out relative overflow-hidden"
            style={{
              transform: `rotate(${rotation}deg)`,
              background: 'conic-gradient(' + prizes.map((p, i) => 
                `${p.color} ${i * 45}deg ${(i + 1) * 45}deg`
              ).join(', ') + ')',
              transition: isSpinning ? 'transform 3s cubic-bezier(0.2, 0.8, 0.3, 1)' : 'none'
            }}
          >
            {/* Segment Numbers/Labels - Better positioned */}
            {prizes.map((prize, i) => {
              const angle = i * 45 + 22.5;
              return (
                <div
                  key={i}
                  className="absolute text-xs sm:text-sm font-['Fredoka'] font-bold text-black whitespace-nowrap"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `rotate(${angle}deg) translate(80px) rotate(-${angle}deg)`,
                    transformOrigin: '0 0',
                    textShadow: '1px 1px 0 white',
                  }}
                >
                  {prize.text}
                </div>
              );
            })}
          </div>

          {/* Center Pointer */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#FFD966] rounded-full border-4 border-black shadow-[4px_4px_0_black] z-10"></div>
          
          {/* Fixed Pointer Arrow */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-4xl animate-bounce-slow">⬇️</div>
        </div>

        {/* Result Display */}
        {result && !isSpinning && (
          <div className="text-center mb-4 animate-bounce">
            <div className="inline-block bg-white px-6 py-3 rounded-[40px] border-4 border-black shadow-[4px_4px_0_black]">
              <p className="font-['Fredoka'] text-xl font-bold">
                You got: <span className="text-[#FF6B6B]">{result.text}</span>
              </p>
              {result.value > 0 && (
                <p className="font-['Fredoka'] text-sm text-gray-600">
                  Use code: SPIN{result.value}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Spin Button */}
        <button
          onClick={spinWheel}
          disabled={isSpinning || spinsLeft <= 0}
          className="w-full font-['Fredoka'] text-xl font-bold py-4 border-5 border-black rounded-[50px] shadow-[8px_8px_0_black] hover:scale-95 hover:shadow-[4px_4px_0_black] transition-all duration-200 bg-gradient-to-r from-[#FFB5B5] to-[#A0E7E5] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSpinning ? '🎡 Spinning...' : spinsLeft > 0 ? '🎯 SPIN NOW' : '⏰ No Spins Left'}
        </button>

        {/* Footer */}
        <p className="text-center font-['Fredoka'] text-sm text-gray-600 mt-4">
          *Win discounts on your next order!
        </p>

        {/* Decorative Elements */}
        <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-[#FFD966] rounded-full border-4 border-black animate-float-slow"></div>
        <div className="absolute -top-2 -left-2 w-8 h-8 bg-[#FFB5B5] rounded-full border-3 border-black animate-bounce-slow"></div>
      </div>
    </div>
  );
};

export default SpinWheel;