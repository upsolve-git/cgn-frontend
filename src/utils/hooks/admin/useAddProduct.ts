import { useState } from "react";
import { addProdReq } from '../../../services/admin/addProduct'; // Adjust the import path as needed

export const useAddProduct = () => {
    const [prodName, setProdName] = useState<string>('');
    const [prodImage, setProdImage] = useState<File | null>(null);
    const [prodType, setProdType] = useState<string>('');
    const [prodDescription, setProdDescription] = useState<string>('');
    const [prodCost, setProdCost] = useState<number>(0);
    const [prodDiscountPercentage, setProdDiscountPercentage] = useState<number>(0);
    const [prodAvailableSizes, setProdAvailableSizes] = useState<string>('');
    const [prodCategory, setProdCategory] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<boolean>(false);

    const handleAddProduct = async () => {
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            await addProdReq({
                name: prodName,
                image: prodImage!,
                type: prodType,
                description: prodDescription,
                cost: prodCost,
                discountPercentage: prodDiscountPercentage,
                availableSizes: prodAvailableSizes,
                categoryId: prodCategory,
            });
            setSuccess(true);
            setError(null)
            console.log('sucess');
        } catch (err) {
            setSuccess(false)
            setError('Failed to add product. Please try again.');
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    return {
        prodName,
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
        handleAddProduct,
    };
};
