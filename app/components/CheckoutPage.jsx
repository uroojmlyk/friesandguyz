'use client';

import React, { useState } from 'react';
import PaymentMethodsPopup from './PaymentMethodsPopup';
import OrderSuccessPopup from './OrderSuccessPopup';

const CheckoutPage = () => {
  const [showPayment, setShowPayment] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [orderId] = useState('ORD' + Math.floor(Math.random() * 10000));

  const handlePaymentComplete = () => {
    setShowPayment(false);
    setTimeout(() => setShowSuccess(true), 500);
  };

  return (
    <section className="min-h-screen bg-[#FFE5D9] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Checkout Form (tumhara existing form) */}
        <form className="bg-white/90 rounded-[60px] border-6 border-black shadow-[20px_20px_0_black] p-8">
          {/* ... form fields ... */}
          
          <button
            type="button"
            onClick={() => setShowPayment(true)}
            className="w-full font-['Fredoka'] text-2xl font-bold bg-[#A0E7E5] py-4 px-6 rounded-[50px] border-6 border-black shadow-[10px_10px_0_black] hover:scale-95 transition-all"
          >
            Proceed to Payment 💰
          </button>
        </form>
      </div>

      {/* Payment Popup */}
      {showPayment && (
        <PaymentMethodsPopup
          onClose={() => setShowPayment(false)}
          onPaymentComplete={handlePaymentComplete}
        />
      )}

      {/* Success Popup */}
      {showSuccess && (
        <OrderSuccessPopup
          orderId={orderId}
          onClose={() => setShowSuccess(false)}
        />
      )}
    </section>
  );
};

export default CheckoutPage;