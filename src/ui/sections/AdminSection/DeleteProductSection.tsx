import React, { useState } from 'react';
import TextInput from '../../atoms/formElements/textInput/textInput';
import CommonButton from '../../atoms/buttons/CommonButton/CommonButton';
import { useDeleteProduct } from '../../../utils/hooks/useDeleteProduct';
import { DeleteConfirmationOverlay } from '../../organisms/Admin/DeleteConfirmationOverlay';
import { DeleteColorsOverlay } from '../../organisms/Admin/DeleteColorsOverlay';
import { Color } from '../../../interfaces/Color';

const DeleteProductSection: React.FC = () => {
  const {
    productId,
    setProductId,
    message,
    loadProduct,
    deleteWholeProduct,
    deleteOneColor
  } = useDeleteProduct();

  const [showConfirm, setShowConfirm] = useState(false);
  const [showColors, setShowColors] = useState(false);
  const [currentColors, setCurrentColors] = useState<Color[]>([]);

  const handleDeleteClick = async () => {
    const result = await loadProduct();
    if (!result.success) return;

    if (result.type === 'Nail Polish') {
      setCurrentColors(result.colors || []);
      setShowColors(true);
    } else {
      setShowConfirm(true);
    }
  };

  return (
    <div className="flex flex-col items-start space-y-4">
      <div className="flex items-center space-x-2">
        <TextInput
          label="Product ID"
          value={productId}
          onChange={e => setProductId(e.target.value)}
        />
        <CommonButton label="Delete" callBack={handleDeleteClick} />
      </div>

      {showConfirm && (
        <DeleteConfirmationOverlay
          onCancel={() => setShowConfirm(false)}
          onConfirm={() => { deleteWholeProduct(); setShowConfirm(false); }}
        />
      )}

      {showColors && (
        <DeleteColorsOverlay
          colors={currentColors}
          onDeleteColor={colorId => {
            setCurrentColors(prev => prev.filter(c => c.color_id !== colorId));
            deleteOneColor(colorId, currentColors.length);
          }}
          onDeleteAll={() => { deleteWholeProduct(); setShowColors(false); }}
          onCancel={() => setShowColors(false)}
        />
      )}

      {message && <p className="text-green font-medium">{message}</p>}
    </div>
  );
};

export default DeleteProductSection;