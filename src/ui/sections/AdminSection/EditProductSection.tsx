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
    handleEditProduct, error,
    availableCategories
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

      {/* <div
      className='flex w-[60%]'>
        <label
        className="whitespace-nowrap font-medium text-xs tablet:text-sm desktop:text-md mr-5">
            Category
        </label>
        <select
          value={categoryIds[0] || ""} // use first selected category as current
          onChange={(e) => {
            const val = Number(e.target.value);
            if (!isNaN(val)) {
              setCategoryIds([val]); // replace with new selection
            }
          }}
          className="border rounded-md p-2 w-full"
        >
          <option value="" disabled>
            Select a category
          </option>
          {availableCategories.map((cat) => (
            <option key={cat.category_id} value={cat.category_id}>
              {cat.category_name}
            </option>
          ))}
        </select>
      </div> */}

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
              secondaryColor="black"
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