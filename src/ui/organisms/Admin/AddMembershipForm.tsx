import React from 'react';
import TextInput from '../../atoms/formElements/textInput/textInput';
import { useAdminMembership } from '../../../utils/hooks/useAdminMembership';
import NumberInput from '../../atoms/formElements/NumberInput/NumberInput';
import ActionButton from '../../atoms/buttons/ActionButton/ActionButton';

interface AddMembershipFormProps {}

const AddMembershipForm: React.FC<AddMembershipFormProps> = () => {
    let {
        newMembershipName, handleNewMembershipName,
        membershipPrice, handleMembershipPrice,
        membershipDiscount, handleMembershipDiscount,
        membershipDescription, handleMembershipDescription,
        handleMembershipAdd, error
    } = useAdminMembership()
  return (
    <div>
        <p
        className='text-xs text-primary font-bold mb-4'>
            Add a membership:
        </p>
        <TextInput 
        value={newMembershipName}
        label='Membership Name'
        onChange={handleNewMembershipName}
        />
        <NumberInput 
        value={membershipPrice}
        label='Membership Price (CAD/month)'
        callbackFunc={handleMembershipPrice}
        />
        <NumberInput
        value={membershipDiscount}
        label='Membership Discount (%)'
        callbackFunc={handleMembershipDiscount}
        />
        <TextInput 
        value={membershipDescription}        
        label='Membership Description'
        onChange={handleMembershipDescription}
        />
        <ActionButton 
        label='Add'
        callbackFunc={handleMembershipAdd}
        />
        {
            error &&
            <p
            className='text-red-500 text-xs mt-2 tablet:text-sm desktop:text-md'>
                {error}
            </p>
        }
    </div>
  );
};

export default AddMembershipForm;
