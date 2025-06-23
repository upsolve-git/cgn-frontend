import axios from 'axios';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { getMembershipsReq } from '../../services/membership';

import { Membership } from '../../interfaces/Membership';

import { ADD_MEMBERSHIP_ENDPOINT } from '../../constants/routes';

export const useMembership = () => {
  
  const { pathname } = useLocation();
  // let initialIsMember = localStorage.getItem('isMember') === 'false';
  const rawIsMember = localStorage.getItem('isMember');
  const rawRole = localStorage.getItem('role');
  const initialIsMember = rawIsMember === 'true';
  const initialRole = rawRole || '';

  // const [showAd, setShowAd] = useState(() =>
  //   initialIsMember && pathname !== '/membership'
  // );
  const [showAd, setShowAd] = useState(() =>
    !initialIsMember
    && initialRole === 'Business'
    && pathname !== '/membership'
  );

  const [isMember, setIsMember] = useState(initialIsMember);

  useEffect(() => {
    const currentIsMember = localStorage.getItem('isMember') === 'false';
    const currentRole = localStorage.getItem('role') || '';
    // console.log('current is ',currentIsMember);
    
    if (currentIsMember !== isMember) {
      setIsMember(currentIsMember);
    }
    
    if (pathname === '/membership') {
      setShowAd(false);
    } else if (currentIsMember) {
      setShowAd(true);
    } else {
      setShowAd(
        !currentIsMember
        && currentRole === 'Business'
      );
    }
  }, [pathname, isMember]);

  const [showPurchaseDets, setShowPurchaseDets] = useState(false);
  const [memberships, setMemberships] = useState<Membership[]>()
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [membership, setMembership] = useState<Membership[]>()

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

  const handleSubmitMembership = async (payment_id : any) => {
    try {
      await axios.post(ADD_MEMBERSHIP_ENDPOINT, {
        membership_id: membership
      })
    } catch (err) {
      alert(err)
      return
    }
  };

  // const priceSetter = (price: number) => {
  //   setTotalPrice(price);
  // }

  return { 
    showAd, closeAd, 
    showPurchaseDets, 
    memberships,
    totalPrice,
    handleMemPurchase, 
    handleSubmitMembership,
    membership, setMembership
  };
};
