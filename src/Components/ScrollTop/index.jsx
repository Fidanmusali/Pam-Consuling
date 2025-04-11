// ScrollToTop.js

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Her sayfa geçişinde scroll pozisyonunu en üste getir
    window.scrollTo(0, 0);
  }, [pathname]); // pathname değiştiğinde useEffect tekrar çalışacak

  return null; // Scroll pozisyonu ile ilgili bir şey render etmemiz gerekmiyor
};

export default ScrollToTop;
