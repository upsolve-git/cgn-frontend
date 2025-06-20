import { useState } from 'react';
import { getProductReq, deleteProductReq, deleteColorReq } from '../../services/product';
import { Color } from '../../interfaces/Color';

interface LoadResult {
  success: boolean;
  type?: string;
  colors?: Color[];
}

/**
 * Hook providing deletion logic for products and colors.
 */
export const useDeleteProduct = () => {
  const [productId, setProductId] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  /**
   * Fetch the product info and return type/colors, handling errors.
   */
  const loadProduct = async (): Promise<LoadResult> => {
    try {
      // getProductReq returns payload directly
      const payload = await getProductReq(productId);
      return {
        success: true,
        type: payload.product_type,
        colors: payload.colors || []
      };
    } catch (err) {
      setMessage('Error fetching product info');
      return { success: false };
    }
  };

  /**
   * Delete the entire product.
   */
  const deleteWholeProduct = async () => {
    try {
      await deleteProductReq(productId);
      setMessage('Product deleted successfully');
    } catch {
      setMessage('Failed to delete product');
    }
  };

  /**
   * Delete a single color and if last, delete whole product.
   */
  const deleteOneColor = async (colorId: number, remainingCount: number) => {
    try {
      await deleteColorReq(productId, colorId);
      if (remainingCount <= 1) {
        await deleteWholeProduct();
      }
    } catch {
      setMessage('Failed to delete color');
    }
  };

  return {
    productId,
    setProductId,
    message,
    loadProduct,
    deleteWholeProduct,
    deleteOneColor
  };
};