import React from 'react';
import { useDeleteProduct } from '../../../utils/hooks/useAdminPage';
import TextInput from '../../atoms/formElements/textInput/textInput';
import CommonButton from '../../atoms/buttons/CommonButton/CommonButton';
import ActionButton from '../../atoms/buttons/ActionButton/ActionButton';

interface DeleteProductSectionProps {}

const DeleteProductSection: React.FC<DeleteProductSectionProps> = () => {
    let {
        productId, handleProductIdChange, handleDeleteProduct,
        success, message
    } = useDeleteProduct();
    return (
        <div
        className='flex flex-col items-center justify-evenly h-[50%]'>
            <table
            className='border-separate border-spacing-4'>
                <TextInput 
                value={productId}
                label="Product ID"
                onChange={handleProductIdChange}
                />
            </table>
            <div
            className='w-[50%]'>
                <ActionButton 
                label='Delete Product'
                callbackFunc={handleDeleteProduct}
                />
            </div>
            {
                message&&
                <p
                className={`text-${success?'green':'red'} font-medium`}>
                    {message}
                </p>
            }
        </div>
    );
};

export default DeleteProductSection;
