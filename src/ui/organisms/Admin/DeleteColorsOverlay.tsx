import React from 'react';
import CommonButton from '../../atoms/buttons/CommonButton/CommonButton';
import { Color } from '../../../interfaces/Color';

interface Props {
  colors: Color[];
  onDeleteColor: (colorId: number) => void;
  onDeleteAll: () => void;
  onCancel: () => void;
}
export const DeleteColorsOverlay: React.FC<Props> = ({ colors, onDeleteColor, onDeleteAll, onCancel }) => (
  <div className="fixed inset-0 backdrop-blur-lg z-30 flex items-center justify-center overflow-auto">
    <div className="bg-secondary w-[60vw] max-w-2xl p-6 rounded-3xl shadow-md">
      <div className="flex justify-end">
        <button onClick={onCancel}>X</button>
      </div>
      <h2 className="text-lg font-bold text-center mb-4">Delete Colors</h2>
      <div className="space-y-3 max-h-96 overflow-y-auto">
        {colors.map(color => (
          <div key={color.color_id} className="flex justify-between items-center p-3 bg-white rounded-md">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full" style={{ backgroundColor: color.code }} />
              <span>{color.color_name} ({color.shade_name})</span>
            </div>
            <CommonButton label="Delete Color" callBack={() => onDeleteColor(color.color_id)} primaryColor="red" />
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center">
        <CommonButton label="Delete Entire Product" callBack={onDeleteAll} />
      </div>
    </div>
  </div>
);