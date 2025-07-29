import React from 'react';

import ActionButton from '../../atoms/buttons/ActionButton/ActionButton';
import { Membership } from '../../../interfaces/Membership';

interface MembershipCardProps {
    purchaseHandler: (price: number) => void
    membershipDetails: Membership,
    // totalPriceSetter: (price: number) => void
}

const MembershipCard: React.FC<MembershipCardProps> = ({
    purchaseHandler,
    membershipDetails
}) => {
  return (
    <div>
        <div
        className='flex flex-col items-center mx-auto bg-white border border-primary p-4 rounded-2xl tablet:p-8'>
            <p
            className='text-sm text-primary font-semibold tablet:text-md'>
                {membershipDetails.name}
            </p>
            {/* <ul
            className="text-darkgray text-xs p-2 tablet:text-sm">
                <li>Exclusive discounts on services</li>
                <li>Priority booking</li>
                <li>Access to special events</li>
                <li>Free product samples</li>
            </ul> */}
            <p
            className='text-xs text-darkgray font-normal tablet:text-sm'>
                {membershipDetails.description}
            </p>
            <p
            className='whitespace-nowrap text-sm text-primary font-semibold tablet:text-md'>
                Price: {membershipDetails.price} CAD/month
            </p>
            <ActionButton 
            label='Purchase'
            callbackFunc={()=>purchaseHandler(membershipDetails.price)}
            />
        </div>
    </div>
  );
};

export default MembershipCard;
