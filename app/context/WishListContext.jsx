// 'use client';

// import React, { createContext, useContext, useState, useEffect } from 'react';

// const WishlistContext = createContext();

// export function WishlistProvider({ children }) {
//   const [wishlist, setWishlist] = useState([]);

//   // Load wishlist from localStorage on mount
//   useEffect(() => {
//     const saved = localStorage.getItem('wishlist');
//     if (saved) {
//       setWishlist(JSON.parse(saved));
//     }
//   }, []);

//   // Save to localStorage whenever wishlist changes
//   useEffect(() => {
//     localStorage.setItem('wishlist', JSON.stringify(wishlist));
//   }, [wishlist]);

//   const addToWishlist = (item) => {
//     setWishlist(prev => {
//       // Check if item already exists
//       const exists = prev.some(i => i.id === item.id);
//       if (exists) return prev;
//       return [...prev, item];
//     });
//   };

//   const removeFromWishlist = (itemId) => {
//     setWishlist(prev => prev.filter(item => item.id !== itemId));
//   };

//   const isInWishlist = (itemId) => {
//     return wishlist.some(item => item.id === itemId);
//   };

//   return (
//     <WishlistContext.Provider value={{ 
//       wishlist, 
//       addToWishlist, 
//       removeFromWishlist, 
//       isInWishlist 
//     }}>
//       {children}
//     </WishlistContext.Provider>
//   );
// }

// export function useWishlist() {
//   return useContext(WishlistContext);
// } 




'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);

  // Load from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('wishlist');
      if (saved) {
        setWishlist(JSON.parse(saved));
      }
    } catch (error) {
      console.error('Error loading wishlist:', error);
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
      console.log('Wishlist saved:', wishlist); // Debug
    } catch (error) {
      console.error('Error saving wishlist:', error);
    }
  }, [wishlist]);

  const addToWishlist = (item) => {
    console.log('Adding to wishlist:', item); // Debug
    setWishlist(prev => {
      const exists = prev.some(i => i.id === item.id);
      if (exists) {
        console.log('Item already in wishlist');
        return prev;
      }
      const newWishlist = [...prev, item];
      console.log('New wishlist:', newWishlist);
      return newWishlist;
    });
  };

  const removeFromWishlist = (itemId) => {
    console.log('Removing from wishlist:', itemId); // Debug
    setWishlist(prev => prev.filter(item => item.id !== itemId));
  };

  const isInWishlist = (itemId) => {
    return wishlist.some(item => item.id === itemId);
  };

  return (
    <WishlistContext.Provider value={{ 
      wishlist, 
      addToWishlist, 
      removeFromWishlist, 
      isInWishlist 
    }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within WishlistProvider');
  }
  return context;
}