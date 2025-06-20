import { useState, useEffect } from 'react';
import { getProductReq, updateProductReq } from '../../services/product';
import { Category } from '../../interfaces/Category';
import { Color } from '../../interfaces/Color';

/**
 * Extended color type for editing (guarantees inventory field)
 */
interface EditColor extends Color {
  inventory: number;
}

export const useEditProduct = () => {
  const [prodId, setProdId] = useState('');
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState(0);
  const [discPrice, setDiscPrice] = useState(0);
  const [discBizPrice, setDiscBizPrice] = useState(0);
  const [categoryIds, setCategoryIds] = useState<number[]>([]);
  // use EditColor so inventory is always number
  const [colors, setColors] = useState<EditColor[]>([]);
  const [error, setError] = useState('');

  // Load product details when prodId changes
  useEffect(() => {
    if (!prodId) return;
    (async () => {
      try {
        const p = await getProductReq(prodId);
        setError('');
        setName(p.name);
        setDesc(p.description);
        setPrice(p.price);
        setDiscPrice(p.discounted_price);
        setDiscBizPrice(p.discounted_business_price);
        setCategoryIds(p.categories.map((c: Category) => c.category_id));
        // map incoming colors to EditColor
        setColors(p.colors.map((c: any) => ({
          color_id: c.color_id,
          color_name: c.color_name,
          shade_name: c.shade_name,
          code: c.code,
          inventory: c.quantity
        })));
      } catch {
        setError('Failed to load product');
      }
    })();
  }, [prodId]);

  // Submit update
  const handleEditProduct = async () => {
    try {
      await updateProductReq({
        prodId,
        name,
        description: desc,
        price,
        discounted_price: discPrice,
        discounted_business_price: discBizPrice,
        category_ids: categoryIds,
        colors // EditColor[] satisfies required inventory: number
      });
      setError('');
      alert('Product updated!');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Update failed');
    }
  };

  // Color helpers
  const addColor = () => {
    setColors(c => [...c, { color_name: '', shade_name: '', code: '', inventory: 0 } as EditColor]);
  };
  const removeColor = (idx: number) => {
    setColors(c => c.filter((_, i) => i !== idx));
  };
  const updateColorField = (idx: number, field: keyof EditColor, value: any) => {
    setColors(c => {
      const arr = [...c];
      (arr[idx] as any)[field] = value;
      return arr;
    });
  };

  return {
    prodId, setProdId,
    name, setName,
    desc, setDesc,
    price, setPrice,
    discPrice, setDiscPrice,
    discBizPrice, setDiscBizPrice,
    categoryIds, setCategoryIds,
    colors, addColor, removeColor, updateColorField,
    handleEditProduct,
    error
  };
};