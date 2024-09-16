import React from 'react';

interface AddReviewProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddReview: React.FC<AddReviewProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render if not open

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6">
        <h2 className="text-xl font-semibold mb-4">Popup Title</h2>
        <p className="mb-4">This is a popup dialog box. The background is blurred.</p>
        <div className="flex justify-end space-x-2">
          <button 
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            onClick={onClose}
          >
            Cancel
          </button>
          <button 
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={onClose}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
