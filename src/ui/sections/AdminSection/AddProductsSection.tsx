import React from "react";

import ActionButton from "../../atoms/buttons/ActionButton/ActionButton";
import TextInput from "../../atoms/formElements/TextInput/TextInput";
import NumberInput from "../../atoms/formElements/NumberInput/NumberInput";
import FileInput from "../../atoms/formElements/FileInput/FileInput";
import { Category } from "../../../interfaces/Category";
import Dropdown from "../../atoms/formElements/Dropdown/Dropdown";

interface AddProductsSectionProps{
    prodName : string,
    prodType : string,
    prodDescription : string,
    prodCategory : Category,
    prodCost : number,
    prodDiscountPercentage : number, 
    error : string,
    categories : Category[]
    setProdName : (e: React.ChangeEvent<HTMLInputElement>)=>void,
    setProdType : (e: React.ChangeEvent<HTMLInputElement>)=>void,
    setProdDescription : (e: React.ChangeEvent<HTMLInputElement>)=>void,
    setProdCategory : (selectedCategory: Category)=>void,
    setProdCost : (e: React.ChangeEvent<HTMLInputElement>)=>void,
    setProdDiscountPercentage : (e: React.ChangeEvent<HTMLInputElement>)=>void,
    setFile :  (e: React.ChangeEvent<HTMLInputElement>)=>void,
    addProduct : () => void
}

const AddProducts: React.FC<AddProductsSectionProps> = ({prodName, prodType, prodDescription, prodCategory, prodCost, error, categories,setFile,
    prodDiscountPercentage,setProdName,setProdType,setProdDescription, setProdCategory,setProdCost,setProdDiscountPercentage, addProduct})=>{
    return(
        <div
        className="flex flex-col items-center">
            <table
            className="table-auto text-md border-separate border-spacing-4">
                <tbody>
                    <TextInput value={prodName} label="Product name" onChange={setProdName}/>
                    <FileInput label="Product image" onChange={setFile}/>
                    <TextInput value={prodType} label="Product type"  onChange={setProdType}/>
                    <TextInput value={prodDescription} label="Description"  onChange={setProdDescription}/>
                    <Dropdown value={prodCategory} label="Category" options={categories} onChange={setProdCategory}/>
                    <NumberInput value={prodCost} label="Product cost" callbackFunc={setProdCost}/>
                    <NumberInput value={prodDiscountPercentage} label="Discount percentage" callbackFunc={setProdDiscountPercentage}/>
                </tbody>
            </table>
            <div
            className="w-[60%]">
                <ActionButton 
                label="Add Product"
                callbackFunc={addProduct}/>
            </div>
            <p>
                {
                    error == 'false'&&
                    <span
                    className="text-green font-medium">
                        Added succesfully
                    </span>
                }
                {
                    error != '' && error != 'false' &&
                    <span
                    className="text-red font-medium">
                        {error}
                    </span>
                }
            </p>
        </div>
    )
}

export default AddProducts