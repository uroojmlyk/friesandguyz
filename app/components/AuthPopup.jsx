// 'use client';

// import React, { useState } from 'react';
// import { useAuth } from '../context/AuthContext';

// const AuthPopup = ({ onClose, mode = 'login' }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [isLogin, setIsLogin] = useState(mode === 'login');
  
//   const { login, signup, loginWithGoogle } = useAuth();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);

//     try {
//       if (isLogin) {
//         await login(email, password);
//       } else {
//         await signup(email, password);
//       }
//       onClose();
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleGoogleLogin = async () => {
//     setError('');
//     setLoading(true);
//     try {
//       await loginWithGoogle();
//       onClose();
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 animate-fade-in"
//          onClick={(e) => e.target === e.currentTarget && onClose()}>
      
//       <div className="relative bg-gradient-to-br from-[#FFE5D9] to-[#FFD9D0] dark:from-gray-800 dark:to-gray-900 max-w-md w-full rounded-[50px] border-6 border-black shadow-[20px_20px_0_black] p-6 sm:p-8 animate-slide-up">
        
//         <button onClick={onClose} className="absolute -top-4 -right-4 w-12 h-12 bg-[#FFB5B5] dark:bg-gray-700 rounded-full border-4 border-black shadow-[4px_4px_0_black] hover:scale-95 transition-all flex items-center justify-center text-2xl font-bold">✕</button>

//         <div className="text-center mb-6">
//           <div className="text-6xl mb-4 animate-float">🔐</div>
//           <h2 className="font-['Fredoka'] text-3xl sm:text-4xl font-black dark:text-white">
//             {isLogin ? 'Welcome Back!' : 'Create Account'}
//           </h2>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {!isLogin && (
//             <div className="relative">
//               <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl">👤</span>
//               <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)}
//                 className="w-full font-['Fredoka'] pl-14 pr-4 py-3 border-4 border-black rounded-[40px] shadow-[4px_4px_0_black] focus:shadow-[6px_6px_0_#FFB5B5] focus:outline-none dark:bg-gray-700 dark:text-white dark:border-gray-600"
//                 required={!isLogin} />
//             </div>
//           )}

//           <div className="relative">
//             <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl">📧</span>
//             <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
//               className="w-full font-['Fredoka'] pl-14 pr-4 py-3 border-4 border-black rounded-[40px] shadow-[4px_4px_0_black] focus:shadow-[6px_6px_0_#A0E7E5] focus:outline-none dark:bg-gray-700 dark:text-white dark:border-gray-600"
//               required />
//           </div>

//           <div className="relative">
//             <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl">🔒</span>
//             <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
//               className="w-full font-['Fredoka'] pl-14 pr-4 py-3 border-4 border-black rounded-[40px] shadow-[4px_4px_0_black] focus:shadow-[6px_6px_0_#FFD966] focus:outline-none dark:bg-gray-700 dark:text-white dark:border-gray-600"
//               required />
//           </div>

//           {error && <p className="text-red-500 text-sm font-['Fredoka']">{error}</p>}

//           <button type="submit" disabled={loading}
//             className="w-full font-['Fredoka'] text-xl font-bold py-4 border-5 border-black rounded-[50px] shadow-[8px_8px_0_black] hover:scale-95 hover:shadow-[4px_4px_0_black] transition-all bg-gradient-to-r from-[#FFB5B5] to-[#A0E7E5] disabled:opacity-50 dark:from-gray-700 dark:to-gray-600 dark:text-white">
//             {loading ? 'Processing...' : (isLogin ? 'Login' : 'Sign Up')}
//           </button>
//         </form>

//         <div className="relative my-6">
//           <div className="absolute inset-0 flex items-center"><div className="w-full border-t-3 border-black dark:border-gray-600"></div></div>
//           <div className="relative flex justify-center text-sm">
//             <span className="px-4 bg-[#FFE5D9] dark:bg-gray-800 font-['Fredoka'] text-gray-600">OR</span>
//           </div>
//         </div>

//         <button onClick={handleGoogleLogin} disabled={loading}
//           className="w-full font-['Fredoka'] text-lg font-bold py-3 border-4 border-black rounded-[50px] shadow-[6px_6px_0_black] hover:scale-95 hover:shadow-[3px_3px_0_black] transition-all bg-white dark:bg-gray-700 flex items-center justify-center gap-3">
//           <span className="text-2xl">🇬</span> Continue with Google
//         </button>

//         <p className="text-center mt-6 font-['Fredoka'] dark:text-gray-300">
//           {isLogin ? "Don't have an account? " : "Already have an account? "}
//           <button onClick={() => setIsLogin(!isLogin)} className="text-[#FF6B6B] dark:text-[#FF8A8A] font-bold underline">
//             {isLogin ? 'Sign Up' : 'Login'}
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AuthPopup; 






'use client';

import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const AuthPopup = ({ onClose, mode = 'login' }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(mode === 'login');
  
  const { login, signup, loginWithGoogle } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isLogin) {
        await login(email, password);
      } else {
        await signup(email, password);
      }
      onClose();
    } catch (error) {
      console.error('Auth error:', error.code);
      
      // 🔥 FIXED: Handle email already in use error
      if (error.code === 'auth/email-already-in-use') {
        setError('This email is already registered. Please login instead.');
        // Auto switch to login mode after 2 seconds
        setTimeout(() => setIsLogin(true), 2000);
      } else if (error.code === 'auth/weak-password') {
        setError('Password should be at least 6 characters.');
      } else if (error.code === 'auth/invalid-email') {
        setError('Invalid email address.');
      } else if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        setError('Invalid email or password.');
      } else if (error.code === 'auth/too-many-requests') {
        setError('Too many failed attempts. Try again later.');
      } else if (error.code === 'auth/network-request-failed') {
        setError('Network error. Check your internet connection.');
      } else {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError('');
    setLoading(true);
    try {
      await loginWithGoogle();
      onClose();
    } catch (error) {
      console.error('Google login error:', error.code);
      if (error.code === 'auth/popup-closed-by-user') {
        setError('Popup closed before completion.');
      } else if (error.code === 'auth/cancelled-popup-request') {
        setError('Another popup is already open.');
      } else if (error.code === 'auth/popup-blocked') {
        setError('Popup blocked by browser. Allow popups and try again.');
      } else {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 animate-fade-in"
         onClick={(e) => e.target === e.currentTarget && onClose()}>
      
      <div className="relative bg-gradient-to-br from-[#FFE5D9] to-[#FFD9D0] dark:from-gray-800 dark:to-gray-900 max-w-md w-full rounded-[50px] border-6 border-black shadow-[20px_20px_0_black] p-6 sm:p-8 animate-slide-up">
        
        <button onClick={onClose} className="absolute -top-4 -right-4 w-12 h-12 bg-[#FFB5B5] dark:bg-gray-700 rounded-full border-4 border-black shadow-[4px_4px_0_black] hover:scale-95 transition-all flex items-center justify-center text-2xl font-bold">✕</button>

        <div className="text-center mb-6">
          <div className="text-6xl mb-4 animate-float">🔐</div>
          <h2 className="font-['Fredoka'] text-3xl sm:text-4xl font-black dark:text-white">
            {isLogin ? 'Welcome Back!' : 'Create Account'}
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl">👤</span>
              <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)}
                className="w-full font-['Fredoka'] pl-14 pr-4 py-3 border-4 border-black rounded-[40px] shadow-[4px_4px_0_black] focus:shadow-[6px_6px_0_#FFB5B5] focus:outline-none dark:bg-gray-700 dark:text-white dark:border-gray-600"
                required={!isLogin} />
            </div>
          )}

          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl">📧</span>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
              className="w-full font-['Fredoka'] pl-14 pr-4 py-3 border-4 border-black rounded-[40px] shadow-[4px_4px_0_black] focus:shadow-[6px_6px_0_#A0E7E5] focus:outline-none dark:bg-gray-700 dark:text-white dark:border-gray-600"
              required />
          </div>

          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl">🔒</span>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
              className="w-full font-['Fredoka'] pl-14 pr-4 py-3 border-4 border-black rounded-[40px] shadow-[4px_4px_0_black] focus:shadow-[6px_6px_0_#FFD966] focus:outline-none dark:bg-gray-700 dark:text-white dark:border-gray-600"
              required />
          </div>

          {/* Error Message with better styling */}
          {error && (
            <div className="bg-red-100 border-2 border-red-500 rounded-[20px] p-3">
              <p className="text-red-600 text-sm font-['Fredoka'] text-center">{error}</p>
            </div>
          )}

          <button type="submit" disabled={loading}
            className="w-full font-['Fredoka'] text-xl font-bold py-4 border-5 border-black rounded-[50px] shadow-[8px_8px_0_black] hover:scale-95 hover:shadow-[4px_4px_0_black] transition-all bg-gradient-to-r from-[#FFB5B5] to-[#A0E7E5] disabled:opacity-50 dark:from-gray-700 dark:to-gray-600 dark:text-white">
            {loading ? 'Processing...' : (isLogin ? 'Login' : 'Sign Up')}
          </button>
        </form>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t-3 border-black dark:border-gray-600"></div></div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-[#FFE5D9] dark:bg-gray-800 font-['Fredoka'] text-gray-600">OR</span>
          </div>
        </div>

        <button onClick={handleGoogleLogin} disabled={loading}
          className="w-full font-['Fredoka'] text-lg font-bold py-3 border-4 border-black rounded-[50px] shadow-[6px_6px_0_black] hover:scale-95 hover:shadow-[3px_3px_0_black] transition-all bg-white dark:bg-gray-700 flex items-center justify-center gap-3">
          <span className="text-2xl">🇬</span> Continue with Google
        </button>

        <p className="text-center mt-6 font-['Fredoka'] dark:text-gray-300">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button onClick={() => setIsLogin(!isLogin)} className="text-[#FF6B6B] dark:text-[#FF8A8A] font-bold underline">
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPopup;