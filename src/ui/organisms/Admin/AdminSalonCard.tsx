import React from 'react';

import CommonButton from '../../atoms/buttons/CommonButton/CommonButton';

import { Salon } from '../../../interfaces/Salon';


interface AdminSalonCardProps {
    salon: Salon
    onEdit?: () => void,
    onDelete?: () => void
}

const AdminSalonCard: React.FC<AdminSalonCardProps> = ({
    salon,
    onEdit = () => {console.log('edit')},
    onDelete = () => {console.log('delete')},
}) => {

  return (
    <div
            className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-center items-center hover:shadow-lg cursor-pointer"
            // onClick={() => navigate(`/salonDetail/${salon.salonName}`, { state: { salon } })}
        >
            <p className="text-lg font-semibold text-center mb-2">
                {/* {salon.salonName} */}
                {salon.name}
            </p>
            <p className="text-sm text-gray-600 text-center">
                {/* {salon.contactEmail} */}
                {salon.email}
            </p>
            <p className="text-sm text-gray-600 text-center">
                {/* {salon.contactMobile} */}
                {salon.contact}
            </p>
            <p className="text-sm text-gray-600 text-center">
                {salon.address}
                {/* PO Box 2900 Station A,
                Sudbury, ON
                P3A 5J3 */}
            </p>
            <div
            className='grid grid-cols-1 gap-3 w-[60%]'>
                <CommonButton 
                label='Edit'
                callBack={onEdit}
                />
                <CommonButton
                label='Delete'
                primaryColor='red'
                secondaryColor='white'
                callBack={onDelete}
                />
            </div>
        </div>
  );
};

export default AdminSalonCard;
