// 'use client';

// import React, { useState } from 'react';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitted(true);
//     setTimeout(() => {
//       setIsSubmitted(false);
//       setFormData({ name: '', email: '', subject: '', message: '' });
//     }, 3000);
//   };

//   return (
//     <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#FFE5D9] via-[#FFEED9] to-[#FFF5E6] min-h-screen overflow-hidden">
      
//       {/* Animated Background */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-[#FFB5B5]/20 rounded-full blur-3xl animate-pulse-slow"></div>
//         <div className="absolute bottom-[20%] right-[5%] w-80 h-80 bg-[#A0E7E5]/20 rounded-full blur-3xl animate-pulse-slower"></div>
//         <div className="absolute top-[40%] left-[50%] w-64 h-64 bg-[#FFD966]/20 rounded-full blur-3xl animate-float"></div>
        
//         {/* Floating Emojis */}
//         <span className="absolute top-[15%] right-[15%] text-7xl opacity-10 animate-float-super-slow">📞</span>
//         <span className="absolute bottom-[30%] left-[10%] text-8xl opacity-10 animate-float-delay2">✉️</span>
//         <span className="absolute top-[60%] right-[30%] text-7xl opacity-10 animate-bounce-slow">📍</span>
//       </div>

//       <div className="relative max-w-6xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12 animate-slide-down">
//           <h1 className="font-['Fredoka'] text-5xl sm:text-6xl lg:text-7xl font-black mb-4">
//             <span className="bg-[#FFB5B5] px-8 py-4 rounded-[80px_20px_80px_20px] border-5 border-black shadow-[15px_15px_0_black] inline-block transform hover:scale-105 transition-transform">
//               📞 GET IN TOUCH
//             </span>
//           </h1>
//           <p className="font-['Fredoka'] text-2xl text-gray-700 mt-6">
//             <span className="inline-block animate-wiggle">💬</span> We'd love to hear from you!
//           </p>
//         </div>

//         {/* Success Message */}
//         {isSubmitted && (
//           <div className="mb-8 bg-green-400 p-6 rounded-[50px] border-4 border-black shadow-[12px_12px_0_black] animate-slide-down">
//             <div className="flex items-center gap-4">
//               <span className="text-5xl animate-bounce-slow">✅</span>
//               <div>
//                 <h3 className="font-['Fredoka'] text-2xl font-bold text-black">Message Sent!</h3>
//                 <p className="font-['Fredoka'] text-lg text-black/80">We'll get back to you soon 🚀</p>
//               </div>
//             </div>
//           </div>
//         )}

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
//           {/* Contact Form */}
//           <div className="bg-white/90 backdrop-blur-sm p-8 rounded-[60px] border-6 border-black shadow-[20px_20px_0_black] animate-fade-in-up">
//             <form onSubmit={handleSubmit}>
//               {/* Name Field */}
//               <div className="mb-6">
//                 <label className="font-['Fredoka'] text-lg font-bold mb-2 block">
//                   Your Name <span className="text-red-500">*</span>
//                 </label>
//                 <div className="relative">
//                   <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl">👤</span>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     placeholder="John Doe"
//                     className="w-full font-['Fredoka'] pl-14 pr-4 py-3 border-4 border-black rounded-[40px] shadow-[6px_6px_0_black] focus:shadow-[10px_10px_0_#FFB5B5] focus:outline-none transition-all"
//                   />
//                 </div>
//               </div>

//               {/* Email Field */}
//               <div className="mb-6">
//                 <label className="font-['Fredoka'] text-lg font-bold mb-2 block">
//                   Email <span className="text-red-500">*</span>
//                 </label>
//                 <div className="relative">
//                   <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl">📧</span>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     placeholder="john@example.com"
//                     className="w-full font-['Fredoka'] pl-14 pr-4 py-3 border-4 border-black rounded-[40px] shadow-[6px_6px_0_black] focus:shadow-[10px_10px_0_#A0E7E5] focus:outline-none transition-all"
//                   />
//                 </div>
//               </div>

//               {/* Subject Field */}
//               <div className="mb-6">
//                 <label className="font-['Fredoka'] text-lg font-bold mb-2 block">
//                   Subject <span className="text-red-500">*</span>
//                 </label>
//                 <div className="relative">
//                   <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl">📝</span>
//                   <input
//                     type="text"
//                     name="subject"
//                     value={formData.subject}
//                     onChange={handleChange}
//                     required
//                     placeholder="What's this about?"
//                     className="w-full font-['Fredoka'] pl-14 pr-4 py-3 border-4 border-black rounded-[40px] shadow-[6px_6px_0_black] focus:shadow-[10px_10px_0_#FFD966] focus:outline-none transition-all"
//                   />
//                 </div>
//               </div>

//               {/* Message Field */}
//               <div className="mb-6">
//                 <label className="font-['Fredoka'] text-lg font-bold mb-2 block">
//                   Message <span className="text-red-500">*</span>
//                 </label>
//                 <div className="relative">
//                   <span className="absolute left-4 top-6 text-2xl">💬</span>
//                   <textarea
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     rows="4"
//                     placeholder="Tell us everything..."
//                     className="w-full font-['Fredoka'] pl-14 pr-4 py-3 border-4 border-black rounded-[40px] shadow-[6px_6px_0_black] focus:shadow-[10px_10px_0_#FFB5B5] focus:outline-none transition-all resize-none"
//                   ></textarea>
//                 </div>
//               </div>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 className="group relative w-full font-['Fredoka'] text-xl sm:text-2xl font-bold px-8 py-4 border-5 border-black rounded-[60px] shadow-[10px_10px_0_black] hover:shadow-[5px_5px_0_black] hover:scale-95 transition-all duration-200 bg-gradient-to-r from-[#FFB5B5] to-[#A0E7E5]"
//               >
//                 <span className="relative z-10 flex items-center justify-center gap-3">
//                   Send Message
//                   <span className="text-2xl group-hover:translate-x-2 transition-transform">✈️</span>
//                 </span>
//                 <span className="absolute inset-0 bg-gradient-to-r from-[#FF8A8A] to-[#7fd1cf] rounded-[60px] translate-x-2 translate-y-2 -z-10"></span>
//               </button>
//             </form>
//           </div>

//           {/* Contact Info */}
//           <div className="space-y-6">
//             {/* Info Cards */}
//             <div className="bg-white/90 backdrop-blur-sm p-8 rounded-[50px] border-5 border-black shadow-[15px_15px_0_black] animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
//               <div className="flex items-center gap-4 mb-6">
//                 <div className="w-16 h-16 bg-[#FFB5B5] rounded-full border-4 border-black flex items-center justify-center text-3xl animate-float">
//                   📍
//                 </div>
//                 <div>
//                   <h3 className="font-['Fredoka'] text-2xl font-bold">Visit Us</h3>
//                   <p className="font-['Fredoka'] text-gray-600">123 Food Street, NYC</p>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white/90 backdrop-blur-sm p-8 rounded-[50px] border-5 border-black shadow-[15px_15px_0_black] animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
//               <div className="flex items-center gap-4 mb-6">
//                 <div className="w-16 h-16 bg-[#A0E7E5] rounded-full border-4 border-black flex items-center justify-center text-3xl animate-bounce-slow">
//                   📞
//                 </div>
//                 <div>
//                   <h3 className="font-['Fredoka'] text-2xl font-bold">Call Us</h3>
//                   <p className="font-['Fredoka'] text-gray-600">+1 234 567 890</p>
//                   <p className="font-['Fredoka'] text-gray-600">+1 234 567 891</p>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white/90 backdrop-blur-sm p-8 rounded-[50px] border-5 border-black shadow-[15px_15px_0_black] animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
//               <div className="flex items-center gap-4 mb-6">
//                 <div className="w-16 h-16 bg-[#FFD966] rounded-full border-4 border-black flex items-center justify-center text-3xl animate-spin-slow">
//                   ✉️
//                 </div>
//                 <div>
//                   <h3 className="font-['Fredoka'] text-2xl font-bold">Email Us</h3>
//                   <p className="font-['Fredoka'] text-gray-600">hello@foodies.com</p>
//                   <p className="font-['Fredoka'] text-gray-600">support@foodies.com</p>
//                 </div>
//               </div>
//             </div>

//             {/* Hours Card */}
//             <div className="bg-gradient-to-r from-[#FFB5B5] to-[#FFD966] p-8 rounded-[50px] border-5 border-black shadow-[15px_15px_0_black] animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
//               <h3 className="font-['Fredoka'] text-2xl font-bold mb-4 flex items-center gap-2">
//                 <span className="text-3xl">🕐</span> Opening Hours
//               </h3>
//               <div className="space-y-2">
//                 <p className="font-['Fredoka'] text-lg flex justify-between">
//                   <span>Monday - Friday:</span>
//                   <span className="font-bold">11am - 11pm</span>
//                 </p>
//                 <p className="font-['Fredoka'] text-lg flex justify-between">
//                   <span>Saturday - Sunday:</span>
//                   <span className="font-bold">12pm - 12am</span>
//                 </p>
//                 <div className="mt-4 pt-4 border-t-4 border-black">
//                   <p className="font-['Fredoka'] text-lg flex items-center gap-2">
//                     <span className="text-2xl animate-ping-slow">🚚</span>
//                     <span className="font-bold">Free delivery on orders $30+</span>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Map Placeholder */}
//         <div className="mt-12 bg-white/90 backdrop-blur-sm p-6 rounded-[60px] border-6 border-black shadow-[20px_20px_0_black] animate-slide-up">
//           <div className="flex items-center justify-center gap-4 mb-4">
//             <span className="text-3xl animate-bounce-slow">🗺️</span>
//             <h3 className="font-['Fredoka'] text-2xl font-bold">Find Us Here</h3>
//           </div>
//           <div className="bg-gradient-to-br from-[#FFE5D9] to-[#FFD966] h-64 rounded-[40px] border-4 border-black flex items-center justify-center">
//             <p className="font-['Fredoka'] text-xl text-gray-600">📍 123 Food Street, NYC</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact; 








'use client';

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { t } = useLanguage();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <section className="relative py-8 sm:py-12 lg:py-16 xl:py-20 px-3 sm:px-4 lg:px-6 xl:px-8 bg-gradient-to-br from-[#FFE5D9] via-[#FFEED9] to-[#FFF5E6] min-h-screen overflow-hidden">
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-48 sm:w-56 lg:w-64 xl:w-72 h-48 sm:h-56 lg:h-64 xl:h-72 bg-[#FFB5B5]/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-[20%] right-[5%] w-56 sm:w-64 lg:w-72 xl:w-80 h-56 sm:h-64 lg:h-72 xl:h-80 bg-[#A0E7E5]/20 rounded-full blur-3xl animate-pulse-slower"></div>
        <div className="absolute top-[40%] left-[50%] w-52 sm:w-60 lg:w-64 xl:w-72 h-52 sm:h-60 lg:h-64 xl:h-72 bg-[#FFD966]/20 rounded-full blur-3xl animate-float"></div>
        
        {/* Floating Emojis */}
        <span className="absolute top-[15%] right-[15%] text-5xl sm:text-6xl lg:text-7xl opacity-5 animate-float-super-slow">📞</span>
        <span className="absolute bottom-[30%] left-[10%] text-6xl sm:text-7xl lg:text-8xl opacity-5 animate-float-delay2">✉️</span>
        <span className="absolute top-[60%] right-[30%] text-5xl sm:text-6xl lg:text-7xl opacity-5 animate-bounce-slow">📍</span>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12 animate-slide-down">
          <h1 className="font-['Fredoka'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-2 sm:mb-3 lg:mb-4">
            <span className="bg-[#FFB5B5] px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-[50px_15px_50px_15px] sm:rounded-[60px_20px_60px_20px] lg:rounded-[80px_20px_80px_20px] border-4 sm:border-5 border-black shadow-[10px_10px_0_black] sm:shadow-[12px_12px_0_black] lg:shadow-[15px_15px_0_black] inline-block transform hover:scale-105 transition-transform">
              📞 {t?.contact?.getInTouch || 'GET IN TOUCH'}
            </span>
          </h1>
          <p className="font-['Fredoka'] text-lg sm:text-xl lg:text-2xl text-gray-700 mt-4 sm:mt-6">
            <span className="inline-block animate-wiggle">💬</span> {t?.contact?.wedLove || 'We\'d love to hear from you!'}
          </p>
        </div>

        {/* Success Message */}
        {isSubmitted && (
          <div className="mb-6 sm:mb-8 bg-green-400 p-4 sm:p-5 lg:p-6 rounded-[30px] sm:rounded-[40px] lg:rounded-[50px] border-3 sm:border-4 border-black shadow-[8px_8px_0_black] sm:shadow-[10px_10px_0_black] lg:shadow-[12px_12px_0_black] animate-slide-down">
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="text-4xl sm:text-5xl animate-bounce-slow">✅</span>
              <div>
                <h3 className="font-['Fredoka'] text-xl sm:text-2xl font-bold text-black">{t?.contact?.messageSent || 'Message Sent!'}</h3>
                <p className="font-['Fredoka'] text-base sm:text-lg text-black/80">{t?.contact?.getBack || 'We\'ll get back to you soon'} 🚀</p>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {/* Contact Form */}
          <div className="bg-white/90 backdrop-blur-sm p-5 sm:p-6 lg:p-7 xl:p-8 rounded-[40px] sm:rounded-[45px] lg:rounded-[50px] xl:rounded-[60px] border-4 sm:border-5 lg:border-6 border-black shadow-[12px_12px_0_black] sm:shadow-[15px_15px_0_black] lg:shadow-[18px_18px_0_black] xl:shadow-[20px_20px_0_black] animate-fade-in-up">
            <form onSubmit={handleSubmit}>
              {/* Name Field */}
              <div className="mb-4 sm:mb-5 lg:mb-6">
                <label className="font-['Fredoka'] text-base sm:text-lg font-bold mb-1 sm:mb-2 block">
                  {t?.contact?.yourName || 'Your Name'} <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-xl sm:text-2xl">👤</span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={t?.contact?.namePlaceholder || "John Doe"}
                    className="w-full font-['Fredoka'] pl-10 sm:pl-12 lg:pl-14 pr-3 sm:pr-4 py-2 sm:py-2.5 lg:py-3 border-3 sm:border-4 border-black rounded-[30px] sm:rounded-[35px] lg:rounded-[40px] shadow-[4px_4px_0_black] sm:shadow-[5px_5px_0_black] lg:shadow-[6px_6px_0_black] focus:shadow-[6px_6px_0_#FFB5B5] sm:focus:shadow-[8px_8px_0_#FFB5B5] lg:focus:shadow-[10px_10px_0_#FFB5B5] focus:outline-none transition-all text-sm sm:text-base"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="mb-4 sm:mb-5 lg:mb-6">
                <label className="font-['Fredoka'] text-base sm:text-lg font-bold mb-1 sm:mb-2 block">
                  {t?.contact?.email || 'Email'} <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-xl sm:text-2xl">📧</span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder={t?.contact?.emailPlaceholder || "john@example.com"}
                    className="w-full font-['Fredoka'] pl-10 sm:pl-12 lg:pl-14 pr-3 sm:pr-4 py-2 sm:py-2.5 lg:py-3 border-3 sm:border-4 border-black rounded-[30px] sm:rounded-[35px] lg:rounded-[40px] shadow-[4px_4px_0_black] sm:shadow-[5px_5px_0_black] lg:shadow-[6px_6px_0_black] focus:shadow-[6px_6px_0_#A0E7E5] sm:focus:shadow-[8px_8px_0_#A0E7E5] lg:focus:shadow-[10px_10px_0_#A0E7E5] focus:outline-none transition-all text-sm sm:text-base"
                  />
                </div>
              </div>

              {/* Subject Field */}
              <div className="mb-4 sm:mb-5 lg:mb-6">
                <label className="font-['Fredoka'] text-base sm:text-lg font-bold mb-1 sm:mb-2 block">
                  {t?.contact?.subject || 'Subject'} <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-xl sm:text-2xl">📝</span>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder={t?.contact?.subjectPlaceholder || "What's this about?"}
                    className="w-full font-['Fredoka'] pl-10 sm:pl-12 lg:pl-14 pr-3 sm:pr-4 py-2 sm:py-2.5 lg:py-3 border-3 sm:border-4 border-black rounded-[30px] sm:rounded-[35px] lg:rounded-[40px] shadow-[4px_4px_0_black] sm:shadow-[5px_5px_0_black] lg:shadow-[6px_6px_0_black] focus:shadow-[6px_6px_0_#FFD966] sm:focus:shadow-[8px_8px_0_#FFD966] lg:focus:shadow-[10px_10px_0_#FFD966] focus:outline-none transition-all text-sm sm:text-base"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="mb-5 sm:mb-6 lg:mb-7">
                <label className="font-['Fredoka'] text-base sm:text-lg font-bold mb-1 sm:mb-2 block">
                  {t?.contact?.message || 'Message'} <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3 sm:left-4 top-5 sm:top-6 text-xl sm:text-2xl">💬</span>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    placeholder={t?.contact?.messagePlaceholder || "Tell us everything..."}
                    className="w-full font-['Fredoka'] pl-10 sm:pl-12 lg:pl-14 pr-3 sm:pr-4 py-2 sm:py-3 border-3 sm:border-4 border-black rounded-[30px] sm:rounded-[35px] lg:rounded-[40px] shadow-[4px_4px_0_black] sm:shadow-[5px_5px_0_black] lg:shadow-[6px_6px_0_black] focus:shadow-[6px_6px_0_#FFB5B5] sm:focus:shadow-[8px_8px_0_#FFB5B5] lg:focus:shadow-[10px_10px_0_#FFB5B5] focus:outline-none transition-all resize-none text-sm sm:text-base"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="group relative w-full font-['Fredoka'] text-base sm:text-lg lg:text-xl xl:text-2xl font-bold px-4 sm:px-6 lg:px-7 xl:px-8 py-2.5 sm:py-3 lg:py-3.5 xl:py-4 border-4 sm:border-5 border-black rounded-[40px] sm:rounded-[45px] lg:rounded-[50px] xl:rounded-[60px] shadow-[6px_6px_0_black] sm:shadow-[8px_8px_0_black] lg:shadow-[9px_9px_0_black] xl:shadow-[10px_10px_0_black] hover:shadow-[3px_3px_0_black] sm:hover:shadow-[4px_4px_0_black] lg:hover:shadow-[5px_5px_0_black] hover:scale-95 transition-all duration-200 bg-gradient-to-r from-[#FFB5B5] to-[#A0E7E5]"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                  {t?.contact?.sendMessage || 'Send Message'}
                  <span className="text-xl sm:text-2xl group-hover:translate-x-2 transition-transform">✈️</span>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#FF8A8A] to-[#7fd1cf] rounded-[40px] sm:rounded-[45px] lg:rounded-[50px] xl:rounded-[60px] translate-x-1 sm:translate-x-1.5 lg:translate-x-2 translate-y-1 sm:translate-y-1.5 lg:translate-y-2 -z-10"></span>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-5 lg:space-y-6">
            {/* Visit Us Card */}
            <div className="bg-white/90 backdrop-blur-sm p-4 sm:p-5 lg:p-6 xl:p-8 rounded-[30px] sm:rounded-[35px] lg:rounded-[40px] xl:rounded-[50px] border-4 sm:border-5 border-black shadow-[8px_8px_0_black] sm:shadow-[10px_10px_0_black] lg:shadow-[12px_12px_0_black] xl:shadow-[15px_15px_0_black] animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 bg-[#FFB5B5] rounded-full border-3 sm:border-4 border-black flex items-center justify-center text-2xl sm:text-3xl animate-float shrink-0">
                  📍
                </div>
                <div>
                  <h3 className="font-['Fredoka'] text-lg sm:text-xl lg:text-2xl font-bold">{t?.contact?.visitUs || 'Visit Us'}</h3>
                  <p className="font-['Fredoka'] text-sm sm:text-base text-gray-600">123 Food Street, NYC</p>
                </div>
              </div>
            </div>

            {/* Call Us Card */}
            <div className="bg-white/90 backdrop-blur-sm p-4 sm:p-5 lg:p-6 xl:p-8 rounded-[30px] sm:rounded-[35px] lg:rounded-[40px] xl:rounded-[50px] border-4 sm:border-5 border-black shadow-[8px_8px_0_black] sm:shadow-[10px_10px_0_black] lg:shadow-[12px_12px_0_black] xl:shadow-[15px_15px_0_black] animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 bg-[#A0E7E5] rounded-full border-3 sm:border-4 border-black flex items-center justify-center text-2xl sm:text-3xl animate-bounce-slow shrink-0">
                  📞
                </div>
                <div>
                  <h3 className="font-['Fredoka'] text-lg sm:text-xl lg:text-2xl font-bold">{t?.contact?.callUs || 'Call Us'}</h3>
                  <p className="font-['Fredoka'] text-sm sm:text-base text-gray-600">+1 234 567 890</p>
                  <p className="font-['Fredoka'] text-sm sm:text-base text-gray-600">+1 234 567 891</p>
                </div>
              </div>
            </div>

            {/* Email Us Card */}
            <div className="bg-white/90 backdrop-blur-sm p-4 sm:p-5 lg:p-6 xl:p-8 rounded-[30px] sm:rounded-[35px] lg:rounded-[40px] xl:rounded-[50px] border-4 sm:border-5 border-black shadow-[8px_8px_0_black] sm:shadow-[10px_10px_0_black] lg:shadow-[12px_12px_0_black] xl:shadow-[15px_15px_0_black] animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 bg-[#FFD966] rounded-full border-3 sm:border-4 border-black flex items-center justify-center text-2xl sm:text-3xl animate-spin-slow shrink-0">
                  ✉️
                </div>
                <div>
                  <h3 className="font-['Fredoka'] text-lg sm:text-xl lg:text-2xl font-bold">{t?.contact?.emailUs || 'Email Us'}</h3>
                  <p className="font-['Fredoka'] text-sm sm:text-base text-gray-600">hello@foodies.com</p>
                  <p className="font-['Fredoka'] text-sm sm:text-base text-gray-600">support@foodies.com</p>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-gradient-to-r from-[#FFB5B5] to-[#FFD966] p-4 sm:p-5 lg:p-6 xl:p-8 rounded-[30px] sm:rounded-[35px] lg:rounded-[40px] xl:rounded-[50px] border-4 sm:border-5 border-black shadow-[8px_8px_0_black] sm:shadow-[10px_10px_0_black] lg:shadow-[12px_12px_0_black] xl:shadow-[15px_15px_0_black] animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <h3 className="font-['Fredoka'] text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 flex items-center gap-2">
                <span className="text-2xl sm:text-3xl">🕐</span> {t?.contact?.openingHours || 'Opening Hours'}
              </h3>
              <div className="space-y-1.5 sm:space-y-2">
                <p className="font-['Fredoka'] text-sm sm:text-base lg:text-lg flex justify-between">
                  <span>{t?.contact?.monFri || 'Monday - Friday'}:</span>
                  <span className="font-bold">11am - 11pm</span>
                </p>
                <p className="font-['Fredoka'] text-sm sm:text-base lg:text-lg flex justify-between">
                  <span>{t?.contact?.satSun || 'Saturday - Sunday'}:</span>
                  <span className="font-bold">12pm - 12am</span>
                </p>
                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t-3 sm:border-t-4 border-black">
                  <p className="font-['Fredoka'] text-sm sm:text-base lg:text-lg flex items-center gap-2">
                    <span className="text-xl sm:text-2xl animate-ping-slow">🚚</span>
                    <span className="font-bold">{t?.contact?.freeDelivery || 'Free delivery on orders $30+'}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-8 sm:mt-10 lg:mt-12 bg-white/90 backdrop-blur-sm p-4 sm:p-5 lg:p-6 rounded-[40px] sm:rounded-[45px] lg:rounded-[50px] xl:rounded-[60px] border-4 sm:border-5 lg:border-6 border-black shadow-[12px_12px_0_black] sm:shadow-[15px_15px_0_black] lg:shadow-[18px_18px_0_black] xl:shadow-[20px_20px_0_black] animate-slide-up">
          <div className="flex items-center justify-center gap-2 sm:gap-3 lg:gap-4 mb-3 sm:mb-4">
            <span className="text-2xl sm:text-3xl animate-bounce-slow">🗺️</span>
            <h3 className="font-['Fredoka'] text-lg sm:text-xl lg:text-2xl font-bold">{t?.contact?.findUs || 'Find Us Here'}</h3>
          </div>
          <div className="bg-gradient-to-br from-[#FFE5D9] to-[#FFD966] h-40 sm:h-48 lg:h-56 xl:h-64 rounded-[25px] sm:rounded-[30px] lg:rounded-[35px] xl:rounded-[40px] border-3 sm:border-4 border-black flex items-center justify-center">
            <p className="font-['Fredoka'] text-base sm:text-lg lg:text-xl text-gray-600">📍 123 Food Street, NYC</p>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-6 sm:mt-8 lg:mt-10">
          <p className="font-['Fredoka'] text-xs sm:text-sm lg:text-base text-gray-600">
            ⏰ {t?.contact?.available247 || 'We are available 24/7'} • 💬 {t?.contact?.quickResponse || 'Quick response within 1 hour'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;