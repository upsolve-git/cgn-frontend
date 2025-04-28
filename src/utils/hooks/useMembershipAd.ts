import { useState } from "react";


export const useMembershipAd = () => {

    let initValue = localStorage.getItem('role') === 'business'

    const[showAd, setShowAd] = useState<boolean>(true)

    const closeAd = () => {
        setShowAd(false)
    }

    const handleMemPurchase = () => {
        console.log('Membership purchased')
    }

    return {
        showAd,
        closeAd,
        handleMemPurchase
    }

}