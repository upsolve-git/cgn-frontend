import React from 'react';
import ActionButton from '../ui/atoms/buttons/ActionButton/ActionButton';
import { useMembershipAd } from '../utils/hooks/useMembershipAd';
import PaymentDetailsSection from '../ui/sections/PaymentDetialsSection/PaymentDetailsSection';

interface MembershipPageProps {}

const MembershipPage: React.FC<MembershipPageProps> = () => {

    let {
        handleMemPurchase,
        showPurchaseDets
    } = useMembershipAd()

  return (
    <div
    className='w-[90%] py-[1rem] mx-auto'>
        <h1
        className="font-lexend text-lg font-bold text-primary desktop:text-3xl">
            Membership
        </h1>
        <div
        className='flex flex-col items-center w-[70%] mx-auto bg-white border border-primary p-4 rounded-2xl tablet:w-[50%] tablet:p-8'>
            <p
            className='text-sm text-primary font-semibold tablet:text-md'>
                Get a membership and claim many benefits!
            </p>
            <ul
            className="text-darkgray text-xs p-2 tablet:text-sm">
                <li>Exclusive discounts on services</li>
                <li>Priority booking</li>
                <li>Access to special events</li>
                <li>Free product samples</li>
            </ul>
            <p
            className='whitespace-nowrap text-sm text-primary font-semibold tablet:text-md'>
                Price: 15.99 CAD/month
            </p>
            <ActionButton 
            label='Purchase'
            callbackFunc={handleMemPurchase}
            />
        </div>
        { showPurchaseDets &&
            <div
            className='bg-white border border-primary p-4 rounded-2xl w-[90%] mx-auto my-4'>
                <PaymentDetailsSection 
                totalAmount={15.99}
                />
            </div>
        }
    </div>
  );
};

export default MembershipPage;
