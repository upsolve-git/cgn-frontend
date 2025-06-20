import React from 'react';
import CommonButton from '../../atoms/buttons/CommonButton/CommonButton';

interface Props { onCancel: () => void; onConfirm: () => void; }
export const DeleteConfirmationOverlay: React.FC<Props> = ({ onCancel, onConfirm }) => (
  <div className="fixed inset-0 backdrop-blur-lg z-30 flex items-center justify-center">
    <div className="bg-secondary w-[60vw] max-w-lg p-6 rounded-3xl shadow-md">
      <div className="flex justify-end">
        <button onClick={onCancel}>X</button>
      </div>
      <h2 className="text-lg font-bold text-center mb-4">Confirm Delete</h2>
      <p className="text-center mb-6">Are you sure you want to delete this product?</p>
      <div className="flex justify-center space-x-4">
        <CommonButton label="Yes, Delete" callBack={onConfirm} />
        <CommonButton label="Cancel" callBack={onCancel} primaryColor="red" />
      </div>
    </div>
  </div>
);