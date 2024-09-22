import React from 'react';

import CommonButton from '../../atoms/buttons/CommonButton/CommonButton';

interface AddReviewProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddReview: React.FC<AddReviewProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50 bg-secondary">
      <div className="bg-secondary w-[90%] rounded-lg shadow-lg p-6 flex flex-col items-center desktop:w-[50%]">
        <h2 className="text-lg font-semibold text-primary tablet:text-xl desktop:text-xl">Review</h2>
        <textarea
        className='border-2 border-primary w-full p-3 rounded-md my-4'></textarea>
          <div
          className='w-[80%] display grid grid-cols-2 place-items-center gap-3'>
            <CommonButton 
            label='Add Review'
            primaryColor='primary'
            secondaryColor='white'
            callBack={onClose}
            />
            <CommonButton 
            label='Close'
            primaryColor='white'
            secondaryColor='primary'
            callBack={onClose}
            />
          </div>
      </div>
    </div>
  );
};

export default AddReview;
