import React from "react";

import ChoiceRadioButton from "../../atoms/buttons/ChoiceRadioButton/ChoiceRadioButton";

interface AccountTypeProps{}

const AccountType: React.FC<AccountTypeProps> = ()=>{
    return(
        <div
        className="grid grid-cols-1 gap-4 tablet:grid-cols-2 ">
            <ChoiceRadioButton 
            value="For personal"
            name="account-type"/>
            <ChoiceRadioButton
            value="For business"
            name="account-type"/>
        </div>
    )
}

export default AccountType