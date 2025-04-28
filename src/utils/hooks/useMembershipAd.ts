import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useMembershipAd = () => {
  const { pathname } = useLocation();
  const isBusiness = localStorage.getItem('role') === 'business';

  // Derive initial state
  const [showAd, setShowAd] = useState(() =>
    isBusiness && pathname !== '/membership'
  );

  // Sync with route changes
  useEffect(() => {
    if (pathname === '/membership') {
      setShowAd(false);
    } else if (isBusiness) {
      setShowAd(true);
    }
  }, [pathname, isBusiness]);

  const closeAd = () => setShowAd(false);

  const handleMemPurchase = () => {
    // 1) Hide the ad immediately
    setShowAd(false);
    // 2) Promote them to member so it never shows again
    localStorage.setItem('role', 'member');
    console.log('Membership purchased');
  };

  return { showAd, closeAd, handleMemPurchase };
};
