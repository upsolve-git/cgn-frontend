import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Membership } from '../../interfaces/Membership';
import { getMembershipsReq } from '../../services/membership';

export const useMembership = () => {
  const { pathname } = useLocation();
  const isBusiness = localStorage.getItem('role') === 'Business';

  const [showAd, setShowAd] = useState(() =>
    isBusiness && pathname !== '/membership'
  );
  const [showPurchaseDets, setShowPurchaseDets] = useState(false);
  const [memberships, setMemberships] = useState<Membership[]>()
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    if (pathname === '/membership') {
      setShowAd(false);
    } else if (isBusiness) {
      setShowAd(true);
    }

    const getMembershipsWrapper = async () => {
      try{
        let mems = await getMembershipsReq();
        setMemberships(mems);
      }catch(err: any){
        console.log(err);
      }
    }

    getMembershipsWrapper();

  }, [pathname, isBusiness]);

  const closeAd = () => setShowAd(false);

  const handleMemPurchase = (price: number) => {
    // console.log(totalPrice)
    setTotalPrice(price);
    setShowAd(false);
    setShowPurchaseDets(true);
  };

  // const priceSetter = (price: number) => {
  //   setTotalPrice(price);
  // }

  return { showAd, closeAd, 
    showPurchaseDets, 
    memberships,
    totalPrice,
    handleMemPurchase };
};
