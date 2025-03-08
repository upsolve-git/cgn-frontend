import React from 'react';

import ActionButton from "../../atoms/buttons/ActionButton/ActionButton";
import TextInput from "../../atoms/formElements/textInput/textInput";
import NumberInput from "../../atoms/formElements/NumberInput/NumberInput";
import FileInput from "../../atoms/formElements/FileInput/FileInput";
import { Category } from "../../../interfaces/Category";
import Dropdown from "../../atoms/formElements/Dropdown/Dropdown";
import AddColorSection from "./AddColorSection";
import { Color } from "../../../interfaces/Color";
import { useEditProduct } from '../../../utils/hooks/useEditProduct';

interface EditProductSectionProps {}

const EditProductSection: React.FC<EditProductSectionProps> = () => {

    let {
        prodID, handleProdID,
        prodName, handleProdName,
        prodDesc, handleProdDesc,
        prodCost, handleProdCost,
        prodCostBusiness, handleProdCostBusiness,
        handleEditProduct,
        error
    } = useEditProduct()

    return (
        <div className={``}>
            <div
            className="flex flex-col items-center">
                <table
                className="table-auto text-md border-separate border-spacing-4">
                    <tbody>
                        <TextInput value={prodID} label="Product ID" onChange={handleProdID}/>
                        <TextInput value={prodName} label="Product name" onChange={handleProdName}/>
                        {/* <FileInput label="Product images" onChange={setFile}/> */}
                        {/* <TextInput value={prodType} label="Product type"  onChange={setProdType}/> */}
                        <TextInput value={prodDesc} label="Description"  onChange={handleProdDesc}/>
                        {/* <Dropdown value={prodCategory} label="Category" options={categories} onChange={setProdCategory}/> */}
                        <NumberInput value={prodCost} label="Product cost" callbackFunc={handleProdCost}/>
                        {/* <NumberInput value={prodDiscountPercentage} label="Price after discount" callbackFunc={handleProdDiscountPercentage}/> */}
                        <NumberInput value={prodCostBusiness} label="Business Price after discount" callbackFunc={handleProdCostBusiness}/>
                    </tbody>
                </table>
                <div
                className="w-[60%]">
                    <ActionButton 
                    label="Add Product"
                    callbackFunc={handleEditProduct}/>
                </div>
                <p>
                    {
                        error === 'false'&&
                        <span
                        className="text-green font-medium">
                            Added succesfully
                        </span>
                    }
                    {
                        error !== '' && error !== 'false' &&
                        <span
                        className="text-red font-medium">
                            {error}
                        </span>
                    }
                </p>
            </div>
            {/* { prodCategory.category_name ==="Nail Polish" && 
                <AddColorSection color={color} shade={shade} code={code} setCode={handleAddCode} setShade={handleAddShade} setColor={handleAddColorName} addColor={handleAddColor}/>
            } */}
        </div>
    );
};

export default EditProductSection;
