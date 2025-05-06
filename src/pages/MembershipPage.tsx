import React from 'react';
import { useMembership } from '../utils/hooks/useMembership';
import PaymentDetailsSection from '../ui/sections/PaymentDetialsSection/PaymentDetailsSection';
import MembershipCard from '../ui/organisms/MembershipCard/MembershipCard';

interface MembershipPageProps {}

const MembershipPage: React.FC<MembershipPageProps> = () => {

    let {
        handleMemPurchase,
        showPurchaseDets,
        memberships,
        totalPrice
    } = useMembership()

  return (
    <div
    className='w-[90%] py-[1rem] mx-auto'>
        <h1
        className="font-lexend text-lg font-bold text-primary desktop:text-3xl">
            Membership
        </h1>
        <div
        className='grid grid-cols-1 gap-3 tablet:grid-cols-3'>
            {
                memberships &&
                memberships.map((membership, index) => (
                    <MembershipCard 
                    key={index}
                    membershipDetails={membership} 
                    purchaseHandler={handleMemPurchase}
                    // totalPriceSetter={priceSetter}
                    />
                ))
            }
        </div>
        {/* <MembershipCard
        membershipDetails={} 
        purchaseHandler={handleMemPurchase}
        /> */}
        { showPurchaseDets &&
            <div
            className='bg-white border border-primary p-4 rounded-2xl w-[90%] mx-auto my-4'>
                <PaymentDetailsSection 
                totalAmount={totalPrice}
                />
            </div>
        }
    </div>
  );
};

export default MembershipPage;
