import React, { useState } from "react";

import TextInput from "../../atoms/formElements/textInput/textInput";
import NumberInput from "../../atoms/formElements/NumberInput/NumberInput";
import ActionButton from "../../atoms/buttons/ActionButton/ActionButton";

import { Salon } from "../../../interfaces/Salon";

interface Props {
  salon: Salon;
  onClose: () => void;
  onSave: (updated: Omit<Salon, "id">) => void;
}

const EditSalonModal: React.FC<Props> = ({
  salon,
  onClose,
  onSave,
}) => {
  const [name, setName] = useState(salon.name);
  const [email, setEmail] = useState(salon.email);
  const [contact, setContact] = useState(salon.contact);
  const [address, setAddress] = useState(salon.address);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">Edit Membership</h2>
        <TextInput
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextInput
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextInput
          label="Contact"
          value={contact}
          onChange={(e) => setContact((e.target.value))}
        />
        <TextInput
          label="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <div className="mt-6 flex justify-end space-x-3">
          <ActionButton label="Cancel" callbackFunc={onClose} />
          <ActionButton
            label="Save"
            callbackFunc={() =>
              onSave({
                name: name.trim(),
                email,
                contact,
                address: address.trim(),
              })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default EditSalonModal;
