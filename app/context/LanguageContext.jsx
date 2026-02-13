// 'use client';

// import React, { createContext, useContext, useState } from 'react';

// // Create Context
// const LanguageContext = createContext();

// // Translations Data
// const translations = {
//   // English (US)
//   US: {
//     nav: {
//       home: 'Home',
//       menu: 'Menu',
//       offers: 'Offers',
//       contact: 'Contact',
//       order: 'Order Now'
//     },
//     hero: {
//       tasty: 'TASTY',
//       burger: 'BURGER',
//       delivery: 'DELIVERY',
//       tagline: '🍟 Hot & Crispy • 30 Min Delivery • Free Fries',
//       orderNow: 'Order Now',
//       viewMenu: 'View Menu',
//       happyCustomers: 'Happy Customers',
//       foodItems: 'Food Items',
//       rating: 'Rating'
//     },
//     menu: {
//       ourMenu: 'OUR MENU',
//       tastyFood: 'Tasty food, fast delivery',
//       cart: 'Cart',
//       emptyCart: 'Cart is empty!',
//       addFood: 'Add some yummy food',
//       total: 'Total',
//       checkout: 'Checkout',
//       allItems: 'All Items',
//       limitedOffer: 'LIMITED OFFER',
//       freeDelivery: 'Free Delivery on $30+',
//       useCode: 'Use code'
//     },
//     offers: {
//       hotOffers: 'HOT OFFERS',
//       grabThem: 'Grab them before they\'re gone!',
//       limitedTime: 'Limited Time Offers',
//       validTill: 'Valid till',
//       claimOffer: 'Claim Offer',
//       weekendSpecial: 'WEEKEND SPECIAL',
//       firstOrder: '50% OFF ON FIRST ORDER',
//       newCustomers: 'New customers only'
//     },
//     contact: {
//       getInTouch: 'GET IN TOUCH',
//       wedLove: 'We\'d love to hear from you!',
//       yourName: 'Your Name',
//       email: 'Email',
//       subject: 'Subject',
//       message: 'Message',
//       sendMessage: 'Send Message',
//       visitUs: 'Visit Us',
//       callUs: 'Call Us',
//       emailUs: 'Email Us',
//       openingHours: 'Opening Hours',
//       monFri: 'Monday - Friday',
//       satSun: 'Saturday - Sunday',
//       freeDelivery: 'Free delivery on orders $30+'
//     },
//     order: {
//       orderNow: 'ORDER NOW',
//       fastDelivery: 'Fast delivery • 30 min or free',
//       personalInfo: 'Personal Information',
//       deliveryAddress: 'Delivery Address',
//       selectItem: 'Select Item',
//       quantity: 'Quantity',
//       paymentMethod: 'Payment Method',
//       specialInstructions: 'Special Instructions',
//       placeOrder: 'Place Order',
//       securePayment: 'Secure Payment',
//       freshFood: 'Fresh Food'
//     },
//     footer: {
//       servingHappiness: 'Serving happiness since 2024',
//       quickLinks: 'Quick Links',
//       contactUs: 'Contact Us',
//       openingHours: 'Opening Hours',
//       rights: 'All rights reserved',
//       madeWith: 'Made with'
//     },
//     countrySelector: {
//       search: 'Search country...',
//       countriesAvailable: 'countries available'
//     },
//     emailPopup: {
//       getDiscount: 'Get 20% OFF!',
//       subscribe: 'Subscribe to get exclusive offers and deals',
//       enterEmail: 'Enter your email',
//       subscribeNow: 'Subscribe Now',
//       noSpam: 'No spam, only yummy food updates!',
//       thankYou: 'Thank You!',
//       subscribed: 'You\'re now subscribed to our newsletter'
//     }
//   },

//   // Hindi (India)
//   IN: {
//     nav: {
//       home: 'होम',
//       menu: 'मेनू',
//       offers: 'ऑफ़र',
//       contact: 'संपर्क',
//       order: 'ऑर्डर करें'
//     },
//     hero: {
//       tasty: 'स्वादिष्ट',
//       burger: 'बर्गर',
//       delivery: 'डिलीवरी',
//       tagline: '🍟 गरमागरम • 30 मिनट डिलीवरी • मुफ्त फ्राइज़',
//       orderNow: 'अभी ऑर्डर करें',
//       viewMenu: 'मेनू देखें',
//       happyCustomers: 'खुश ग्राहक',
//       foodItems: 'खाद्य पदार्थ',
//       rating: 'रेटिंग'
//     },
//     menu: {
//       ourMenu: 'हमारा मेनू',
//       tastyFood: 'स्वादिष्ट खाना, तेज़ डिलीवरी',
//       cart: 'कार्ट',
//       emptyCart: 'कार्ट खाली है!',
//       addFood: 'कुछ स्वादिष्ट खाना डालें',
//       total: 'कुल',
//       checkout: 'चेकआउट',
//       allItems: 'सभी आइटम',
//       limitedOffer: 'सीमित ऑफर',
//       freeDelivery: '$30+ पर मुफ्त डिलीवरी',
//       useCode: 'कोड का उपयोग करें'
//     },
//     offers: {
//       hotOffers: 'हॉट ऑफ़र',
//       grabThem: 'जल्दी करो, ऑफ़र खत्म होने वाले हैं!',
//       limitedTime: 'सीमित समय के ऑफर',
//       validTill: 'मान्य तक',
//       claimOffer: 'ऑफर प्राप्त करें',
//       weekendSpecial: 'वीकेंड स्पेशल',
//       firstOrder: 'पहले ऑर्डर पर 50% छूट',
//       newCustomers: 'केवल नए ग्राहकों के लिए'
//     },
//     contact: {
//       getInTouch: 'संपर्क करें',
//       wedLove: 'हम आपसे सुनना पसंद करेंगे!',
//       yourName: 'आपका नाम',
//       email: 'ईमेल',
//       subject: 'विषय',
//       message: 'संदेश',
//       sendMessage: 'संदेश भेजें',
//       visitUs: 'हमसे मिलें',
//       callUs: 'कॉल करें',
//       emailUs: 'ईमेल करें',
//       openingHours: 'खुलने का समय',
//       monFri: 'सोमवार - शुक्रवार',
//       satSun: 'शनिवार - रविवार',
//       freeDelivery: '$30+ के ऑर्डर पर मुफ्त डिलीवरी'
//     },
//     order: {
//       orderNow: 'अभी ऑर्डर करें',
//       fastDelivery: 'तेज़ डिलीवरी • 30 मिनट या मुफ्त',
//       personalInfo: 'व्यक्तिगत जानकारी',
//       deliveryAddress: 'डिलीवरी पता',
//       selectItem: 'आइटम चुनें',
//       quantity: 'मात्रा',
//       paymentMethod: 'भुगतान विधि',
//       specialInstructions: 'विशेष निर्देश',
//       placeOrder: 'ऑर्डर करें',
//       securePayment: 'सुरक्षित भुगतान',
//       freshFood: 'ताजा खाना'
//     },
//     footer: {
//       servingHappiness: '2024 से खुशियाँ बांट रहे',
//       quickLinks: 'त्वरित लिंक',
//       contactUs: 'संपर्क करें',
//       openingHours: 'खुलने का समय',
//       rights: 'सर्वाधिकार सुरक्षित',
//       madeWith: 'के साथ बनाया'
//     },
//     countrySelector: {
//       search: 'देश खोजें...',
//       countriesAvailable: 'देश उपलब्ध'
//     },
//     emailPopup: {
//       getDiscount: '20% छूट पाएं!',
//       subscribe: 'विशेष ऑफर और डील पाने के लिए सब्सक्राइब करें',
//       enterEmail: 'अपना ईमेल डालें',
//       subscribeNow: 'अभी सब्सक्राइब करें',
//       noSpam: 'कोई स्पैम नहीं, केवल स्वादिष्ट खाने के अपडेट!',
//       thankYou: 'धन्यवाद!',
//       subscribed: 'आप हमारे न्यूज़लेटर से जुड़ गए हैं'
//     }
//   },

//   // French (France)
//   FR: {
//     nav: {
//       home: 'Accueil',
//       menu: 'Menu',
//       offers: 'Offres',
//       contact: 'Contact',
//       order: 'Commander'
//     },
//     hero: {
//       tasty: 'DÉLICIEUX',
//       burger: 'BURGER',
//       delivery: 'LIVRAISON',
//       tagline: '🍟 Chaud & Croquant • Livraison 30 Min • Frites Gratuites',
//       orderNow: 'Commander',
//       viewMenu: 'Voir Menu',
//       happyCustomers: 'Clients Satisfaits',
//       foodItems: 'Plats',
//       rating: 'Note'
//     },
//     menu: {
//       ourMenu: 'NOTRE MENU',
//       tastyFood: 'Nourriture savoureuse, livraison rapide',
//       cart: 'Panier',
//       emptyCart: 'Panier vide!',
//       addFood: 'Ajoutez de délicieux plats',
//       total: 'Total',
//       checkout: 'Paiement',
//       allItems: 'Tous les articles',
//       limitedOffer: 'OFFRE LIMITÉE',
//       freeDelivery: 'Livraison gratuite dès 30€',
//       useCode: 'Utilisez le code'
//     },
//     offers: {
//       hotOffers: 'OFFRES SPÉCIALES',
//       grabThem: 'Ne les manquez pas!',
//       limitedTime: 'Offres à durée limitée',
//       validTill: 'Valable jusqu\'au',
//       claimOffer: 'Profiter',
//       weekendSpecial: 'SPÉCIAL WEEK-END',
//       firstOrder: '50% DE RÉDUCTION',
//       newCustomers: 'Nouveaux clients uniquement'
//     },
//     contact: {
//       getInTouch: 'CONTACTEZ-NOUS',
//       wedLove: 'Nous aimerions avoir de vos nouvelles!',
//       yourName: 'Votre nom',
//       email: 'Email',
//       subject: 'Sujet',
//       message: 'Message',
//       sendMessage: 'Envoyer',
//       visitUs: 'Nous rendre visite',
//       callUs: 'Appeler',
//       emailUs: 'Envoyer un email',
//       openingHours: 'Horaires',
//       monFri: 'Lundi - Vendredi',
//       satSun: 'Samedi - Dimanche',
//       freeDelivery: 'Livraison gratuite dès 30€'
//     },
//     order: {
//       orderNow: 'COMMANDER',
//       fastDelivery: 'Livraison rapide • 30 min ou gratuit',
//       personalInfo: 'Informations',
//       deliveryAddress: 'Adresse',
//       selectItem: 'Choisir',
//       quantity: 'Quantité',
//       paymentMethod: 'Paiement',
//       specialInstructions: 'Instructions',
//       placeOrder: 'Valider',
//       securePayment: 'Paiement sécurisé',
//       freshFood: 'Produits frais'
//     },
//     footer: {
//       servingHappiness: 'Service depuis 2024',
//       quickLinks: 'Liens rapides',
//       contactUs: 'Contact',
//       openingHours: 'Horaires',
//       rights: 'Tous droits réservés',
//       madeWith: 'Fait avec'
//     },
//     countrySelector: {
//       search: 'Rechercher...',
//       countriesAvailable: 'pays disponibles'
//     },
//     emailPopup: {
//       getDiscount: '-20%!',
//       subscribe: 'Abonnez-vous',
//       enterEmail: 'Votre email',
//       subscribeNow: 'S\'abonner',
//       noSpam: 'Pas de spam',
//       thankYou: 'Merci!',
//       subscribed: 'Abonné'
//     }
//   },

//   // Add more languages as needed
//   // Spanish, German, Italian, etc.
// };

// export function LanguageProvider({ children }) {
//   const [currentLanguage, setCurrentLanguage] = useState('US');

//   const changeLanguage = (countryCode) => {
//     setCurrentLanguage(countryCode);
//     // Save to localStorage
//     localStorage.setItem('preferredLanguage', countryCode);
//   };

//   // Load saved language on mount
//   React.useEffect(() => {
//     const saved = localStorage.getItem('preferredLanguage');
//     if (saved && translations[saved]) {
//       setCurrentLanguage(saved);
//     }
//   }, []);

//   const t = translations[currentLanguage] || translations.US;

//   return (
//     <LanguageContext.Provider value={{ 
//       t, 
//       currentLanguage, 
//       changeLanguage,
//       languages: Object.keys(translations).map(code => ({
//         code,
//         flag: code === 'US' ? '🇺🇸' : code === 'IN' ? '🇮🇳' : code === 'FR' ? '🇫🇷' : '🇺🇸',
//         name: code === 'US' ? 'English' : code === 'IN' ? 'हिन्दी' : code === 'FR' ? 'Français' : 'English'
//       }))
//     }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// }

// export function useLanguage() {
//   return useContext(LanguageContext);
// } 








'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

// Create Context
const LanguageContext = createContext();

// Translations Data - 6 Languages
const translations = {
  // English (US)
  US: {
    nav: {
      home: 'Home',
      menu: 'Menu',
      offers: 'Offers',
      contact: 'Contact',
      order: 'Order Now'
    },
    hero: {
      tasty: 'TASTY',
      burger: 'BURGER',
      delivery: 'DELIVERY',
      tagline: '🍟 Hot & Crispy • 30 Min Delivery • Free Fries',
      orderNow: 'Order Now',
      viewMenu: 'View Menu',
      happyCustomers: 'Happy Customers',
      foodItems: 'Food Items',
      rating: 'Rating',
      scroll: 'Scroll',
      chefsSpecial: "Chef's Special",
      hotDeals: 'HOT DEALS THIS WEEK'
    },
    menu: {
      ourMenu: 'OUR MENU',
      tastyFood: 'Tasty food, fast delivery',
      cart: 'Your Cart',
      items: 'items',
      emptyCart: 'Cart is empty!',
      addFood: 'Add some yummy food',
      total: 'Total',
      checkout: 'Checkout',
      allItems: 'All Items',
      limitedOffer: 'LIMITED OFFER',
      freeDelivery: 'Free Delivery on $30+',
      useCode: 'Use code'
    },
    offers: {
      hotOffers: 'HOT OFFERS',
      grabThem: 'Grab them before they\'re gone!',
      limitedTime: 'Limited Time Offers',
      validTill: 'Valid till',
      claimOffer: 'Claim Offer',
      weekendSpecial: 'WEEKEND SPECIAL',
      firstOrder: '50% OFF ON FIRST ORDER',
      newCustomers: 'New customers only'
    },
    contact: {
      getInTouch: 'GET IN TOUCH',
      wedLove: 'We\'d love to hear from you!',
      yourName: 'Your Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      sendMessage: 'Send Message',
      visitUs: 'Visit Us',
      callUs: 'Call Us',
      emailUs: 'Email Us',
      openingHours: 'Opening Hours',
      monFri: 'Monday - Friday',
      satSun: 'Saturday - Sunday',
      freeDelivery: 'Free delivery on orders $30+'
    },
    order: {
      orderNow: 'ORDER NOW',
      fastDelivery: 'Fast delivery • 30 min or free',
      personalInfo: 'Personal Information',
      deliveryAddress: 'Delivery Address',
      selectItem: 'Select Item',
      quantity: 'Quantity',
      paymentMethod: 'Payment Method',
      specialInstructions: 'Special Instructions',
      placeOrder: 'Place Order',
      securePayment: 'Secure Payment',
      freshFood: 'Fresh Food'
    },
    footer: {
      servingHappiness: 'Serving happiness since 2024',
      quickLinks: 'Quick Links',
      contactUs: 'Contact Us',
      openingHours: 'Opening Hours',
      rights: 'All rights reserved',
      madeWith: 'Made with'
    },
    countrySelector: {
      search: 'Search country...',
      countriesAvailable: 'countries available'
    },
    emailPopup: {
      getDiscount: 'Get 20% OFF!',
      subscribe: 'Subscribe to get exclusive offers and deals',
      enterEmail: 'Enter your email',
      subscribeNow: 'Subscribe Now',
      noSpam: 'No spam, only yummy food updates!',
      thankYou: 'Thank You!',
      subscribed: 'You\'re now subscribed to our newsletter'
    }
  },

  // Hindi (India)
  IN: {
    nav: {
      home: 'होम',
      menu: 'मेनू',
      offers: 'ऑफ़र',
      contact: 'संपर्क',
      order: 'ऑर्डर करें'
    },
    hero: {
      tasty: 'स्वादिष्ट',
      burger: 'बर्गर',
      delivery: 'डिलीवरी',
      tagline: '🍟 गरमागरम • 30 मिनट डिलीवरी • मुफ्त फ्राइज़',
      orderNow: 'अभी ऑर्डर करें',
      viewMenu: 'मेनू देखें',
      happyCustomers: 'खुश ग्राहक',
      foodItems: 'खाद्य पदार्थ',
      rating: 'रेटिंग',
      scroll: 'नीचे स्क्रॉल करें',
      chefsSpecial: 'शेफ स्पेशल',
      hotDeals: 'इस सप्ताह के हॉट ऑफर'
    },
    menu: {
      ourMenu: 'हमारा मेनू',
      tastyFood: 'स्वादिष्ट खाना, तेज़ डिलीवरी',
      cart: 'आपकी कार्ट',
      items: 'आइटम',
      emptyCart: 'कार्ट खाली है!',
      addFood: 'कुछ स्वादिष्ट खाना डालें',
      total: 'कुल',
      checkout: 'चेकआउट',
      allItems: 'सभी आइटम',
      limitedOffer: 'सीमित ऑफर',
      freeDelivery: '$30+ पर मुफ्त डिलीवरी',
      useCode: 'कोड का उपयोग करें'
    },
    offers: {
      hotOffers: 'हॉट ऑफ़र',
      grabThem: 'जल्दी करो, ऑफ़र खत्म होने वाले हैं!',
      limitedTime: 'सीमित समय के ऑफर',
      validTill: 'मान्य तक',
      claimOffer: 'ऑफर प्राप्त करें',
      weekendSpecial: 'वीकेंड स्पेशल',
      firstOrder: 'पहले ऑर्डर पर 50% छूट',
      newCustomers: 'केवल नए ग्राहकों के लिए'
    },
    contact: {
      getInTouch: 'संपर्क करें',
      wedLove: 'हम आपसे सुनना पसंद करेंगे!',
      yourName: 'आपका नाम',
      email: 'ईमेल',
      subject: 'विषय',
      message: 'संदेश',
      sendMessage: 'संदेश भेजें',
      visitUs: 'हमसे मिलें',
      callUs: 'कॉल करें',
      emailUs: 'ईमेल करें',
      openingHours: 'खुलने का समय',
      monFri: 'सोमवार - शुक्रवार',
      satSun: 'शनिवार - रविवार',
      freeDelivery: '$30+ के ऑर्डर पर मुफ्त डिलीवरी'
    },
    order: {
      orderNow: 'अभी ऑर्डर करें',
      fastDelivery: 'तेज़ डिलीवरी • 30 मिनट या मुफ्त',
      personalInfo: 'व्यक्तिगत जानकारी',
      deliveryAddress: 'डिलीवरी पता',
      selectItem: 'आइटम चुनें',
      quantity: 'मात्रा',
      paymentMethod: 'भुगतान विधि',
      specialInstructions: 'विशेष निर्देश',
      placeOrder: 'ऑर्डर करें',
      securePayment: 'सुरक्षित भुगतान',
      freshFood: 'ताजा खाना'
    },
    footer: {
      servingHappiness: '2024 से खुशियाँ बांट रहे',
      quickLinks: 'त्वरित लिंक',
      contactUs: 'संपर्क करें',
      openingHours: 'खुलने का समय',
      rights: 'सर्वाधिकार सुरक्षित',
      madeWith: 'के साथ बनाया'
    },
    countrySelector: {
      search: 'देश खोजें...',
      countriesAvailable: 'देश उपलब्ध'
    },
    emailPopup: {
      getDiscount: '20% छूट पाएं!',
      subscribe: 'विशेष ऑफर और डील पाने के लिए सब्सक्राइब करें',
      enterEmail: 'अपना ईमेल डालें',
      subscribeNow: 'अभी सब्सक्राइब करें',
      noSpam: 'कोई स्पैम नहीं, केवल स्वादिष्ट खाने के अपडेट!',
      thankYou: 'धन्यवाद!',
      subscribed: 'आप हमारे न्यूज़लेटर से जुड़ गए हैं'
    }
  },

  // Urdu (Pakistan)
  UR: {
    nav: {
      home: 'ہوم',
      menu: 'مینو',
      offers: 'آفرز',
      contact: 'رابطہ',
      order: 'آرڈر کریں'
    },
    hero: {
      tasty: 'لذیذ',
      burger: 'برگر',
      delivery: 'ڈیلیوری',
      tagline: '🍟 گرم و کرنچی • 30 منٹ ڈیلیوری • مفت فرائز',
      orderNow: 'ابھی آرڈر کریں',
      viewMenu: 'مینو دیکھیں',
      happyCustomers: 'خوش گاہک',
      foodItems: 'کھانے کی اشیاء',
      rating: 'ریٹنگ',
      scroll: 'نیچے سکرول کریں',
      chefsSpecial: 'شیف اسپیشل',
      hotDeals: 'اس ہفتے کے ہاٹ ڈیلز'
    },
    menu: {
      ourMenu: 'ہمارا مینو',
      tastyFood: 'لذیذ کھانا، تیز ڈیلیوری',
      cart: 'آپ کی کارٹ',
      items: 'اشیاء',
      emptyCart: 'کارٹ خالی ہے!',
      addFood: 'کچھ مزیدار کھانا شامل کریں',
      total: 'کل',
      checkout: 'چیک آؤٹ',
      allItems: 'تمام اشیاء',
      limitedOffer: 'محدود آفر',
      freeDelivery: '$30+ پر مفت ڈیلیوری',
      useCode: 'کوڈ استعمال کریں'
    },
    offers: {
      hotOffers: 'ہاٹ آفرز',
      grabThem: 'جلدی کریں، آفرز ختم ہونے والی ہیں!',
      limitedTime: 'محدود وقت کی آفرز',
      validTill: 'میزانی تک',
      claimOffer: 'آفر حاصل کریں',
      weekendSpecial: 'ویکینڈ اسپیشل',
      firstOrder: 'پہلے آرڈر پر 50% چھوٹ',
      newCustomers: 'صرف نئے گاہکوں کے لیے'
    },
    contact: {
      getInTouch: 'رابطہ کریں',
      wedLove: 'ہم آپ سے سننا پسند کریں گے!',
      yourName: 'آپ کا نام',
      email: 'ای میل',
      subject: 'موضوع',
      message: 'پیغام',
      sendMessage: 'پیغام بھیجیں',
      visitUs: 'ہم سے ملیں',
      callUs: 'کال کریں',
      emailUs: 'ای میل کریں',
      openingHours: 'کھلنے کے اوقات',
      monFri: 'پیر - جمعہ',
      satSun: 'ہفتہ - اتوار',
      freeDelivery: '$30+ کے آرڈر پر مفت ڈیلیوری'
    },
    order: {
      orderNow: 'ابھی آرڈر کریں',
      fastDelivery: 'تیز ڈیلیوری • 30 منٹ یا مفت',
      personalInfo: 'ذاتی معلومات',
      deliveryAddress: 'ڈیلیوری ایڈریس',
      selectItem: 'آئٹم منتخب کریں',
      quantity: 'مقدار',
      paymentMethod: 'ادائیگی کا طریقہ',
      specialInstructions: 'خصوصی ہدایات',
      placeOrder: 'آرڈر دیں',
      securePayment: 'محفوظ ادائیگی',
      freshFood: 'تازہ کھانا'
    },
    footer: {
      servingHappiness: '2024 سے خوشیاں بانٹ رہے',
      quickLinks: 'فوری لنکس',
      contactUs: 'رابطہ کریں',
      openingHours: 'کھلنے کے اوقات',
      rights: 'جملہ حقوق محفوظ',
      madeWith: 'کے ساتھ بنایا'
    },
    countrySelector: {
      search: 'ملک تلاش کریں...',
      countriesAvailable: 'ممالک دستیاب'
    },
    emailPopup: {
      getDiscount: '20% چھوٹ حاصل کریں!',
      subscribe: 'خصوصی آفرز اور ڈیلز کے لیے سبسکرائب کریں',
      enterEmail: 'اپنا ای میل درج کریں',
      subscribeNow: 'ابھی سبسکرائب کریں',
      noSpam: 'کوئی سپیم نہیں، صرف مزیدار کھانے کے اپ ڈیٹس!',
      thankYou: 'شکریہ!',
      subscribed: 'آپ ہمارے نیوز لیٹر سے منسلک ہو گئے ہیں'
    }
  },

  // French (France)
  FR: {
    nav: {
      home: 'Accueil',
      menu: 'Menu',
      offers: 'Offres',
      contact: 'Contact',
      order: 'Commander'
    },
    hero: {
      tasty: 'DÉLICIEUX',
      burger: 'BURGER',
      delivery: 'LIVRAISON',
      tagline: '🍟 Chaud & Croquant • Livraison 30 Min • Frites Gratuites',
      orderNow: 'Commander',
      viewMenu: 'Voir Menu',
      happyCustomers: 'Clients Satisfaits',
      foodItems: 'Plats',
      rating: 'Note',
      scroll: 'Défiler',
      chefsSpecial: 'Spécialité du Chef',
      hotDeals: 'OFFRES SPÉCIALES'
    },
    menu: {
      ourMenu: 'NOTRE MENU',
      tastyFood: 'Nourriture savoureuse, livraison rapide',
      cart: 'Votre Panier',
      items: 'articles',
      emptyCart: 'Panier vide!',
      addFood: 'Ajoutez de délicieux plats',
      total: 'Total',
      checkout: 'Paiement',
      allItems: 'Tous les articles',
      limitedOffer: 'OFFRE LIMITÉE',
      freeDelivery: 'Livraison gratuite dès 30€',
      useCode: 'Utilisez le code'
    },
    offers: {
      hotOffers: 'OFFRES SPÉCIALES',
      grabThem: 'Ne les manquez pas!',
      limitedTime: 'Offres à durée limitée',
      validTill: 'Valable jusqu\'au',
      claimOffer: 'Profiter',
      weekendSpecial: 'SPÉCIAL WEEK-END',
      firstOrder: '50% DE RÉDUCTION',
      newCustomers: 'Nouveaux clients uniquement'
    },
    contact: {
      getInTouch: 'CONTACTEZ-NOUS',
      wedLove: 'Nous aimerions avoir de vos nouvelles!',
      yourName: 'Votre nom',
      email: 'Email',
      subject: 'Sujet',
      message: 'Message',
      sendMessage: 'Envoyer',
      visitUs: 'Nous rendre visite',
      callUs: 'Appeler',
      emailUs: 'Envoyer un email',
      openingHours: 'Horaires',
      monFri: 'Lundi - Vendredi',
      satSun: 'Samedi - Dimanche',
      freeDelivery: 'Livraison gratuite dès 30€'
    },
    order: {
      orderNow: 'COMMANDER',
      fastDelivery: 'Livraison rapide • 30 min ou gratuit',
      personalInfo: 'Informations',
      deliveryAddress: 'Adresse',
      selectItem: 'Choisir',
      quantity: 'Quantité',
      paymentMethod: 'Paiement',
      specialInstructions: 'Instructions',
      placeOrder: 'Valider',
      securePayment: 'Paiement sécurisé',
      freshFood: 'Produits frais'
    },
    footer: {
      servingHappiness: 'Service depuis 2024',
      quickLinks: 'Liens rapides',
      contactUs: 'Contact',
      openingHours: 'Horaires',
      rights: 'Tous droits réservés',
      madeWith: 'Fait avec'
    },
    countrySelector: {
      search: 'Rechercher...',
      countriesAvailable: 'pays disponibles'
    },
    emailPopup: {
      getDiscount: '-20%!',
      subscribe: 'Abonnez-vous',
      enterEmail: 'Votre email',
      subscribeNow: 'S\'abonner',
      noSpam: 'Pas de spam',
      thankYou: 'Merci!',
      subscribed: 'Abonné'
    }
  },

  // Spanish (Spain)
  ES: {
    nav: {
      home: 'Inicio',
      menu: 'Menú',
      offers: 'Ofertas',
      contact: 'Contacto',
      order: 'Pedir'
    },
    hero: {
      tasty: 'SABROSO',
      burger: 'HAMBURGUESA',
      delivery: 'ENTREGA',
      tagline: '🍟 Caliente y Crujiente • Entrega 30 Min • Papas Gratis',
      orderNow: 'Pedir Ahora',
      viewMenu: 'Ver Menú',
      happyCustomers: 'Clientes Felices',
      foodItems: 'Platos',
      rating: 'Valoración',
      scroll: 'Desplazar',
      chefsSpecial: 'Especialidad del Chef',
      hotDeals: 'OFERTAS DE LA SEMANA'
    },
    menu: {
      ourMenu: 'NUESTRO MENÚ',
      tastyFood: 'Comida sabrosa, entrega rápida',
      cart: 'Tu Carrito',
      items: 'artículos',
      emptyCart: '¡Carrito vacío!',
      addFood: 'Agrega comida deliciosa',
      total: 'Total',
      checkout: 'Pagar',
      allItems: 'Todos los artículos',
      limitedOffer: 'OFERTA LIMITADA',
      freeDelivery: 'Entrega gratis en $30+',
      useCode: 'Usa el código'
    },
    offers: {
      hotOffers: 'OFERTAS ESPECIALES',
      grabThem: '¡No te las pierdas!',
      limitedTime: 'Ofertas por tiempo limitado',
      validTill: 'Válido hasta',
      claimOffer: 'Reclamar Oferta',
      weekendSpecial: 'ESPECIAL FIN DE SEMANA',
      firstOrder: '50% DE DESCUENTO',
      newCustomers: 'Solo nuevos clientes'
    },
    contact: {
      getInTouch: 'PONTE EN CONTACTO',
      wedLove: '¡Nos encantaría saber de ti!',
      yourName: 'Tu Nombre',
      email: 'Email',
      subject: 'Asunto',
      message: 'Mensaje',
      sendMessage: 'Enviar Mensaje',
      visitUs: 'Visítanos',
      callUs: 'Llámanos',
      emailUs: 'Envíanos un email',
      openingHours: 'Horario',
      monFri: 'Lunes - Viernes',
      satSun: 'Sábado - Domingo',
      freeDelivery: 'Entrega gratis en pedidos de $30+'
    },
    order: {
      orderNow: 'PEDIR AHORA',
      fastDelivery: 'Entrega rápida • 30 min o gratis',
      personalInfo: 'Información Personal',
      deliveryAddress: 'Dirección de Entrega',
      selectItem: 'Seleccionar Artículo',
      quantity: 'Cantidad',
      paymentMethod: 'Método de Pago',
      specialInstructions: 'Instrucciones Especiales',
      placeOrder: 'Realizar Pedido',
      securePayment: 'Pago Seguro',
      freshFood: 'Comida Fresca'
    },
    footer: {
      servingHappiness: 'Sirviendo felicidad desde 2024',
      quickLinks: 'Enlaces Rápidos',
      contactUs: 'Contáctanos',
      openingHours: 'Horario',
      rights: 'Todos los derechos reservados',
      madeWith: 'Hecho con'
    },
    countrySelector: {
      search: 'Buscar país...',
      countriesAvailable: 'países disponibles'
    },
    emailPopup: {
      getDiscount: '¡Obtén 20% DE DESCUENTO!',
      subscribe: 'Suscríbete para obtener ofertas exclusivas',
      enterEmail: 'Ingresa tu email',
      subscribeNow: 'Suscríbete Ahora',
      noSpam: 'Sin spam, solo actualizaciones de comida!',
      thankYou: '¡Gracias!',
      subscribed: 'Te has suscrito a nuestro boletín'
    }
  },

  // Arabic (UAE)
  AR: {
    nav: {
      home: 'الرئيسية',
      menu: 'القائمة',
      offers: 'العروض',
      contact: 'اتصل بنا',
      order: 'اطلب الآن'
    },
    hero: {
      tasty: 'لذيذ',
      burger: 'برجر',
      delivery: 'توصيل',
      tagline: '🍟 ساخن ومقرمش • توصيل 30 دقيقة • بطاطس مجانية',
      orderNow: 'اطلب الآن',
      viewMenu: 'عرض القائمة',
      happyCustomers: 'عملاء سعداء',
      foodItems: 'أصناف الطعام',
      rating: 'التقييم',
      scroll: 'مرر لأسفل',
      chefsSpecial: 'خاصة الشيف',
      hotDeals: 'عروض ساخنة هذا الأسبوع'
    },
    menu: {
      ourMenu: 'قائمتنا',
      tastyFood: 'طعام لذيذ، توصيل سريع',
      cart: 'سلة التسوق',
      items: 'عناصر',
      emptyCart: 'السلة فارغة!',
      addFood: 'أضف بعض الطعام اللذيذ',
      total: 'المجموع',
      checkout: 'إتمام الشراء',
      allItems: 'جميع العناصر',
      limitedOffer: 'عرض محدود',
      freeDelivery: 'توصيل مجاني للطلبات فوق $30',
      useCode: 'استخدم الكود'
    },
    offers: {
      hotOffers: 'عروض ساخنة',
      grabThem: 'احصل عليها قبل انتهائها!',
      limitedTime: 'عروض لفترة محدودة',
      validTill: 'صالح حتى',
      claimOffer: 'احصل على العرض',
      weekendSpecial: 'عرض نهاية الأسبوع',
      firstOrder: 'خصم 50% على أول طلب',
      newCustomers: 'للعملاء الجدد فقط'
    },
    contact: {
      getInTouch: 'تواصل معنا',
      wedLove: 'نحن نحب أن نسمع منك!',
      yourName: 'اسمك',
      email: 'البريد الإلكتروني',
      subject: 'الموضوع',
      message: 'الرسالة',
      sendMessage: 'إرسال الرسالة',
      visitUs: 'زرنا',
      callUs: 'اتصل بنا',
      emailUs: 'راسلنا',
      openingHours: 'ساعات العمل',
      monFri: 'الإثنين - الجمعة',
      satSun: 'السبت - الأحد',
      freeDelivery: 'توصيل مجاني للطلبات فوق $30'
    },
    order: {
      orderNow: 'اطلب الآن',
      fastDelivery: 'توصيل سريع • 30 دقيقة أو مجاني',
      personalInfo: 'المعلومات الشخصية',
      deliveryAddress: 'عنوان التوصيل',
      selectItem: 'اختر العنصر',
      quantity: 'الكمية',
      paymentMethod: 'طريقة الدفع',
      specialInstructions: 'تعليمات خاصة',
      placeOrder: 'تأكيد الطلب',
      securePayment: 'دفع آمن',
      freshFood: 'طعام طازج'
    },
    footer: {
      servingHappiness: 'نقدم السعادة منذ 2024',
      quickLinks: 'روابط سريعة',
      contactUs: 'اتصل بنا',
      openingHours: 'ساعات العمل',
      rights: 'جميع الحقوق محفوظة',
      madeWith: 'صنع بـ'
    },
    countrySelector: {
      search: 'ابحث عن دولة...',
      countriesAvailable: 'دولة متاحة'
    },
    emailPopup: {
      getDiscount: 'احصل على خصم 20%!',
      subscribe: 'اشترك للحصول على عروض حصرية',
      enterEmail: 'أدخل بريدك الإلكتروني',
      subscribeNow: 'اشترك الآن',
      noSpam: 'لا يوجد بريد مزعج، فقط تحديثات الطعام اللذيذ!',
      thankYou: 'شكراً!',
      subscribed: 'لقد اشتركت في نشرتنا الإخبارية'
    }
  },

  // Chinese (China)
  CN: {
    nav: {
      home: '首页',
      menu: '菜单',
      offers: '优惠',
      contact: '联系我们',
      order: '立即订购'
    },
    hero: {
      tasty: '美味',
      burger: '汉堡',
      delivery: '外卖',
      tagline: '🍟 热辣香脆 • 30分钟送达 • 免费薯条',
      orderNow: '立即订购',
      viewMenu: '查看菜单',
      happyCustomers: '满意客户',
      foodItems: '食品种类',
      rating: '评分',
      scroll: '向下滚动',
      chefsSpecial: '厨师特选',
      hotDeals: '本周热卖'
    },
    menu: {
      ourMenu: '我们的菜单',
      tastyFood: '美味食物，快速送达',
      cart: '购物车',
      items: '商品',
      emptyCart: '购物车是空的！',
      addFood: '添加一些美味的食物',
      total: '总计',
      checkout: '结账',
      allItems: '所有商品',
      limitedOffer: '限时优惠',
      freeDelivery: '满$30免费配送',
      useCode: '使用优惠码'
    },
    offers: {
      hotOffers: '热卖优惠',
      grabThem: '赶快抢购，优惠即将结束！',
      limitedTime: '限时优惠',
      validTill: '有效期至',
      claimOffer: '领取优惠',
      weekendSpecial: '周末特惠',
      firstOrder: '首单立减50%',
      newCustomers: '仅限新客户'
    },
    contact: {
      getInTouch: '联系我们',
      wedLove: '我们很乐意收到您的来信！',
      yourName: '您的姓名',
      email: '电子邮件',
      subject: '主题',
      message: '留言',
      sendMessage: '发送留言',
      visitUs: '访问我们',
      callUs: '致电我们',
      emailUs: '发送邮件',
      openingHours: '营业时间',
      monFri: '周一至周五',
      satSun: '周六至周日',
      freeDelivery: '满$30免费配送'
    },
    order: {
      orderNow: '立即订购',
      fastDelivery: '快速配送 • 30分钟或免费',
      personalInfo: '个人信息',
      deliveryAddress: '配送地址',
      selectItem: '选择商品',
      quantity: '数量',
      paymentMethod: '支付方式',
      specialInstructions: '特殊说明',
      placeOrder: '提交订单',
      securePayment: '安全支付',
      freshFood: '新鲜食品'
    },
    footer: {
      servingHappiness: '自2024年传递快乐',
      quickLinks: '快速链接',
      contactUs: '联系我们',
      openingHours: '营业时间',
      rights: '保留所有权利',
      madeWith: '用爱制作'
    },
    countrySelector: {
      search: '搜索国家...',
      countriesAvailable: '个国家可用'
    },
    emailPopup: {
      getDiscount: '获取20%优惠！',
      subscribe: '订阅获取独家优惠',
      enterEmail: '输入您的邮箱',
      subscribeNow: '立即订阅',
      noSpam: '没有垃圾邮件，只有美食更新！',
      thankYou: '谢谢！',
      subscribed: '您已成功订阅我们的通讯'
    }
  }
};

export function LanguageProvider({ children }) {
  const [currentLanguage, setCurrentLanguage] = useState('US');

  const changeLanguage = (countryCode) => {
    setCurrentLanguage(countryCode);
    localStorage.setItem('preferredLanguage', countryCode);
  };

  useEffect(() => {
    const saved = localStorage.getItem('preferredLanguage');
    if (saved && translations[saved]) {
      setCurrentLanguage(saved);
    }
  }, []);

  const t = translations[currentLanguage] || translations.US;

  const languages = [
    { code: 'US', flag: '🇺🇸', name: 'English', language: 'English' },
    { code: 'IN', flag: '🇮🇳', name: 'Hindi', language: 'हिन्दी' },
    { code: 'UR', flag: '🇵🇰', name: 'Urdu', language: 'اردو' },
    { code: 'FR', flag: '🇫🇷', name: 'French', language: 'Français' },
    { code: 'ES', flag: '🇪🇸', name: 'Spanish', language: 'Español' },
    { code: 'AR', flag: '🇦🇪', name: 'Arabic', language: 'العربية' },
    { code: 'CN', flag: '🇨🇳', name: 'Chinese', language: '中文' }
  ];

  return (
    <LanguageContext.Provider value={{ 
      t, 
      currentLanguage, 
      changeLanguage,
      languages
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}