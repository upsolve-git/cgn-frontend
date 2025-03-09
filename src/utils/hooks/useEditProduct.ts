import { useState } from "react";
import { editProduct } from "../../services/product";

export const useEditProduct = () => {
  let [prodID, setProdID] = useState<string>('');
  let [prodName, setProdName] = useState<string>('');
  let [prodDesc, setProdDesc] = useState<string>('');
  let [prodCost, setProdCost] = useState<number>(0);
  let [prodCostBusiness, setProdCostBusiness] = useState<number>(0);
  let [error, setError] = useState<string>('');
  let [files, setFiles] = useState<File[]>([]);

  const handleProdID = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setProdID(e.target.value);
  };
  const handleProdName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setProdName(e.target.value);
  };
  const handleProdDesc = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setProdDesc(e.target.value);
  };
  const handleProdCost = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setProdCost(Number(e.target.value));
  };
  const handleProdCostBusiness = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setProdCostBusiness(Number(e.target.value));
  };

  // New file handler: update the state with selected files
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const selectedFiles = e.target.files;
    if (selectedFiles) {
      setFiles(Array.from(selectedFiles));
    }
  };

  const handleEditProduct = async () => {
    console.log('Submitting product edit:', prodID);
    try {
      const result = await editProduct({
        prodId: prodID,
        name: prodName,
        description: prodDesc,
        cost: prodCost,
        discBusinessCost: prodCostBusiness,
        files: files, // pass files; if empty, they won't be appended
      });
      console.log('Product updated successfully:', result);
      setError('false'); // "false" as a flag for success
    } catch (err) {
      console.error('Error updating product:', err);
      setError('Failed to update product');
    }
  };

  return {
    prodID, handleProdID,
    prodName, handleProdName,
    prodDesc, handleProdDesc,
    prodCost, handleProdCost,
    prodCostBusiness, handleProdCostBusiness,
    handleEditProduct,
    error,
    handleFileChange, // expose the file change handler
  };
};