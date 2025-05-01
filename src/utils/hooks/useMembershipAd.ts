import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useMembershipAd = () => {
  const { pathname } = useLocation();
  const isBusiness = localStorage.getItem('role') === 'Business';

  const [showAd, setShowAd] = useState(() =>
    isBusiness && pathname !== '/membership'
  );

  const [showPurchaseDets, setShowPurchaseDets] = useState(false);

  useEffect(() => {
    if (pathname === '/membership') {
      setShowAd(false);
    } else if (isBusiness) {
      setShowAd(true);
    }
  }, [pathname, isBusiness]);

  const closeAd = () => setShowAd(false);

  const handleMemPurchase = () => {
    setShowAd(false);
    setShowPurchaseDets(true);
  };

  return { showAd, closeAd, 
    showPurchaseDets, 
    handleMemPurchase };
};
