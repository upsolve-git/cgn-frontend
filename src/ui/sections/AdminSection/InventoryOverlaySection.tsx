import React from 'react';

import CommonButton from '../../atoms/buttons/CommonButton/CommonButton';
import NumberInput from '../../atoms/formElements/NumberInput/NumberInput';
import { useAdminPage } from '../../../utils/hooks/useAdminPage';

interface InventoryOverlaySectionProps {
    setShowOverlay: React.Dispatch<React.SetStateAction<boolean>>
    newProdFlag: boolean
}

const InventoryOverlaySection: React.FC<InventoryOverlaySectionProps> = ({
    setShowOverlay, newProdFlag
}) => {
    let {quantity, handleQuantity, updateInventory} = useAdminPage()
  return (
    <div
    className="fixed w-screen h-screen top-0 left-0 backdrop-blur-lg z-30">
        <div
        className="bg-secondary w-[60vw] h-[50vh] mx-auto translate-y-1/2 px-4 py-3 rounded-3xl shadow-md">
            <div
            className="text-right w-full">
                <button
                onClick={()=>{
                    localStorage.removeItem('exist_product_id')
                    setShowOverlay(false)
                }}>
                    X
                </button>
            </div>
            <p>
                <div className="text-center">
                    {
                        newProdFlag?
                        <h2 className="text-lg font-bold mb-4">New Product Added</h2>
                        :
                        <h2 className="text-lg font-bold mb-4">Item already exists in database</h2>
                    }
                    <p className="text-sm text-gray-600">
                        You can add the inventory count to the existing product. 
                    </p>
                </div>
            </p>
            <table
            className="table-auto mx-auto text-md border-separate border-spacing-4">
                <NumberInput 
                label="Inventory count"
                value={quantity||0}
                callbackFunc={handleQuantity}
                />
            </table>
            <div
            // className="w-[60%] grid grid-cols-2 gap-3 mx-auto">
            className="w-[30%] mx-auto">
                <CommonButton
                label="Add Inventory"
                callBack={updateInventory}
                primaryColor="primary"
                secondaryColor="white"
                />
                {/* <CommonButton
                label="Cancel"
                callBack={()=>{
                    localStorage.removeItem('exist_product_id')
                    setShowOverlay(false)
                }}
                primaryColor="red"
                secondaryColor="white"
                /> */}
            </div>
        </div>    
    </div>
  );
};

export default InventoryOverlaySection;
