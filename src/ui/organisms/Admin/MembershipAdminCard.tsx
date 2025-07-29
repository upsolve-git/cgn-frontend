import React from 'react';

import ActionButton from '../../atoms/buttons/ActionButton/ActionButton';
import CommonButton from '../../atoms/buttons/CommonButton/CommonButton';

import { Membership } from '../../../interfaces/Membership';

interface MembershipAdminCardProps {
    membership: Membership,
    onEdit?: () => void,
    onDelete?: () => void
}

const MembershipAdminCard: React.FC<MembershipAdminCardProps> = ({
    membership,
    onEdit = () => console.log('Edit clicked'),
    onDelete = () => console.log('Delete clicked')
}) => {
  return (
    <div>
        <div
        className='flex flex-col items-center mx-auto bg-white border border-primary p-4 rounded-2xl tablet:p-8'>
            <p
            className='text-sm text-primary font-semibold tablet:text-md'>
                {membership.name}
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
                {membership.description}
            </p>
            <p
            className='text-xs text-primary font-semibold tablet:text-sm'>
                Price: ${membership.price} CAD/month
            </p>
            <div
            className='bg-red w-0'>

            </div>
            <div
            className='w-[70%] grid grid-cols-1 gap-y-3 max-h-fit'>
                <CommonButton 
                label='Edit'
                callBack={()=>console.log('edit')}
                />
                <CommonButton
                label='Delete'
                primaryColor='red'
                secondaryColor='white'
                callBack={onDelete}
                />
            </div>
        </div>
    </div>
  );
};

export default MembershipAdminCard;
