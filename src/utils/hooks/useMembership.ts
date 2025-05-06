import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Membership } from '../../interfaces/Membership';
import { getMembershipsReq } from '../../services/membership';

export const useMembership = () => {
  const { pathname } = useLocation();
  let initialIsMember = localStorage.getItem('isMember') === 'false';

  const [showAd, setShowAd] = useState(() =>
    initialIsMember && pathname !== '/membership'
  );

  const [isMember, setIsMember] = useState(initialIsMember);

  useEffect(() => {
    const currentIsMember = localStorage.getItem('isMember') === 'false';
    console.log('current is ',currentIsMember);
    
    if (currentIsMember !== isMember) {
      setIsMember(currentIsMember);
    }
    
    if (pathname === '/membership') {
      setShowAd(false);
    } else if (currentIsMember) {
      setShowAd(true);
    } else {
      setShowAd(false);
    }
  }, [pathname, isMember]);

  const [showPurchaseDets, setShowPurchaseDets] = useState(false);
  const [memberships, setMemberships] = useState<Membership[]>()
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    if (pathname === '/membership') {
      setShowAd(false);
    } else if (isMember) {
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

  }, [pathname, isMember]);

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
