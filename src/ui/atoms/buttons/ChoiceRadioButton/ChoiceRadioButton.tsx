import React from "react";

interface ChoiceRadioButtonProps{
    value: string,
    name: string
}

const ChoiceRadioButton: React.FC<ChoiceRadioButtonProps> = ({value, name})=>{
    return(
        <div
        className="w-fit flex justify-center items-center">
            <input type="radio" name={name} value={value}
            className="mr-2"/>
            <label
            className="text-xs">{value}</label>
        </div>
    )
}

export default ChoiceRadioButton