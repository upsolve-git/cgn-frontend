import React, { useState } from "react";

import TextInput from "../../atoms/formElements/textInput/textInput";
import NumberInput from "../../atoms/formElements/NumberInput/NumberInput";
import ActionButton from "../../atoms/buttons/ActionButton/ActionButton";

import { Membership } from "../../../interfaces/Membership";

interface Props {
  membership: Membership;
  onClose: () => void;
  onSave: (updated: Omit<Membership, "id">) => void;
}

const EditMembershipModal: React.FC<Props> = ({
  membership,
  onClose,
  onSave,
}) => {
  const [name, setName] = useState(membership.name);
  const [price, setPrice] = useState(membership.price);
  const [discount, setDiscount] = useState(membership.discount ?? 0);
  const [description, setDescription] = useState(membership.description);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">Edit Membership</h2>
        <TextInput
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <NumberInput
          label="Price (CAD/month)"
          value={price}
          callbackFunc={(e) => setPrice(Number(e.target.value))}
        />
        <NumberInput
          label="Discount (%)"
          value={discount}
          callbackFunc={(e) => setDiscount(Number(e.target.value))}
        />
        <TextInput
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <div className="mt-6 flex justify-end space-x-3">
          <ActionButton label="Cancel" callbackFunc={onClose} />
          <ActionButton
            label="Save"
            callbackFunc={() =>
              onSave({
                name: name.trim(),
                price,
                discount,
                description: description.trim(),
              })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default EditMembershipModal;
