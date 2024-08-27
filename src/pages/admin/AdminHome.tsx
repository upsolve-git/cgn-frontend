import React from "react";

import ActionButton from "../../ui/atoms/buttons/ActionButton/ActionButton";
import TextInput from "../../ui/atoms/formElements/TextInput/TextInput";
import NumberInput from "../../ui/atoms/formElements/NumberInput/NumberInput";
import FileInput from "../../ui/atoms/formElements/FileInput/FileInput";
import { useAddProduct } from "../../utils/hooks/admin/useAddProduct";

interface AdminHomeProps{}

const AdminHome: React.FC<AdminHomeProps> = () => {

    const addIsActive = true

    let {prodName,
        setProdName,
        prodImage,
        setProdImage,
        prodType,
        setProdType,
        prodDescription,
        setProdDescription,
        prodCost,
        setProdCost,
        prodDiscountPercentage,
        setProdDiscountPercentage,
        prodAvailableSizes,
        setProdAvailableSizes,
        prodCategory,
        setProdCategory,
        loading,
        error,
        success,
        handleAddProduct,} = useAddProduct()

    return(
        <div
        className="grid grid-cols-3 grid-rows-1 mt-20 mx-5">
            <div
            className="border-2 place-self-start border-primary w-[50%] py-7 px-4 my-[10%]">
                <button
                className={addIsActive?"w-full py-3 bg-primary text-white rounded-xl":"w-full py-3 rounded-xl"}>
                    Add Product
                </button>
            </div>
            <div
            className="flex flex-col items-center">
                <table
                className="table-auto text-md border-separate border-spacing-4">
                    <tbody>
                        <TextInput value={prodName} label="Product name" callbackFunc={(e)=>setProdName(e.target.value)}/>
                        <FileInput label="Product image"/>
                        <TextInput value={prodType} label="Product type"  callbackFunc={(e)=>setProdType(e.target.value)}/>
                        <TextInput value={prodDescription} label="Description"  callbackFunc={(e)=>setProdDescription(e.target.value)}/>
                        <TextInput value={prodAvailableSizes} label="Available sizes"  callbackFunc={(e)=>setProdAvailableSizes(e.target.value)}/>
                        <TextInput value={prodCategory} label="Category" callbackFunc={(e)=>setProdCategory(e.target.value)} />
                        <NumberInput value={prodCost} label="Product cost" callbackFunc={(e)=>setProdCost(Number(e.target.value))}/>
                        <NumberInput value={prodDiscountPercentage} label="Discount percentage" callbackFunc={(e)=>setProdDiscountPercentage(Number(e.target.value))}/>
                    </tbody>
                </table>
                <div
                className="w-[60%]">
                    <ActionButton 
                    label="Add Product"
                    callbackFunc={handleAddProduct}/>
                </div>
                <p>
                    {
                        success&&
                        <span
                        className="text-green font-medium">
                            Added succesfully
                        </span>
                    }
                    {
                        error &&
                        <span
                        className="text-red font-medium">
                            {error}
                        </span>
                    }
                </p>
            </div>
        </div>
    )
}

export default AdminHome