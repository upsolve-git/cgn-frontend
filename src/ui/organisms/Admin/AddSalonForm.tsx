import React from 'react';
import TextInput from '../../atoms/formElements/textInput/textInput';
import { useSalons } from '../../../utils/hooks/useSalons';
import ActionButton from '../../atoms/buttons/ActionButton/ActionButton';

interface AddSalonFormProps {}

const AddSalonForm: React.FC<AddSalonFormProps> = () => {
    let {
        newSalonName, newSalonEmail, newSalonContact, newSalonAddress,
        handleNewSalonNameChange, handleNewSalonEmailChange,
        handleNewSalonContactChange, handleNewSalonAddressChange,
        handleAddSalon
    } = useSalons()
  return (
    <div>
        <p
        className='text-xs text-primary font-bold mb-4 tablet:text-sm desktop:text-md'>
            Add a membership:
        </p>
        <div>
            <TextInput 
            value={newSalonName}
            label='Salon Name: '
            onChange={handleNewSalonNameChange}
            />
            <TextInput 
            value={newSalonEmail}
            label='Salon Email: '
            onChange={handleNewSalonEmailChange}
            />
            <TextInput 
            value={newSalonContact}
            label='Salon Contact: '
            onChange={handleNewSalonContactChange}
            />
            <TextInput 
            value={newSalonAddress}
            label='Salon Address: '
            onChange={handleNewSalonAddressChange}
            />
            <div
            className='w-[30%]'>
                <ActionButton 
                label='Add'
                callbackFunc={() => handleAddSalon()}
                />
            </div>
        </div>
        
    </div>
  );
};

export default AddSalonForm;
