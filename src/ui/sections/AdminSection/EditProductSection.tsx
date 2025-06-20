import React from 'react';
import TextInput from '../../atoms/formElements/textInput/textInput';
import NumberInput from '../../atoms/formElements/NumberInput/NumberInput';
import CommonButton from '../../atoms/buttons/CommonButton/CommonButton';
import { useEditProduct } from '../../../utils/hooks/useEditProduct';

const EditProductSection: React.FC = () => {
  const {
    prodId, setProdId,
    name, setName,
    desc, setDesc,
    price, setPrice,
    discPrice, setDiscPrice,
    discBizPrice, setDiscBizPrice,
    categoryIds, setCategoryIds,
    colors, addColor, removeColor, updateColorField,
    handleEditProduct, error
  } = useEditProduct();

  return (
    <div className="space-y-6">
      <div className="flex space-x-2">
        <TextInput label="Product ID" value={prodId} onChange={e => setProdId(e.target.value)} />
      </div>

      <TextInput label="Name" value={name} onChange={e => setName(e.target.value)} />
      <TextInput label="Description" value={desc} onChange={e => setDesc(e.target.value)} />
      <NumberInput label="Price" value={price} callbackFunc={e => setPrice(Number(e.target.value))} />
      <NumberInput label="Discounted Price" value={discPrice} callbackFunc={e => setDiscPrice(Number(e.target.value))} />
      <NumberInput label="Biz Discounted Price" value={discBizPrice} callbackFunc={e => setDiscBizPrice(Number(e.target.value))} />

      {/* Categories: simple comma-separated edit, or replace with multi-select dropdown */}
      <TextInput
        label="Category IDs (comma-separated)"
        value={categoryIds.join(',')}
        onChange={e => setCategoryIds(e.target.value.split(',').map(s => Number(s.trim())))}
      />

      {/* Colors & inventory */}
      <div className="space-y-2">
        <h3 className="font-semibold">Colors & Inventory</h3>
        {colors.map((c, i) => (
          <div key={i} className="flex space-x-2 items-center">
            <TextInput
              label="Name"
              value={c.color_name}
              onChange={e => updateColorField(i, 'color_name', e.target.value)}
            />
            <TextInput
              label="Shade"
              value={c.shade_name}
              onChange={e => updateColorField(i, 'shade_name', e.target.value)}
            />
            <TextInput
              label="Code"
              value={c.code}
              onChange={e => updateColorField(i, 'code', e.target.value)}
            />
            <NumberInput
              label="Inventory"
              value={c.inventory||0}
              callbackFunc={e => updateColorField(i, 'inventory', Number(e.target.value))}
            />
            <CommonButton
              label="Remove"
              primaryColor="red"
              secondaryColor="white"
              callBack={() => removeColor(i)}
            />
          </div>
        ))}
        <CommonButton label="Add Color" primaryColor="primary" secondaryColor="white" callBack={addColor} />
      </div>

      {error && <p className="text-red">{error}</p>}

      <CommonButton
        label="Save Changes"
        primaryColor="green"
        secondaryColor="white"
        callBack={handleEditProduct}
      />
    </div>
  );
};

export default EditProductSection;