import React from "react";

interface NumberInputProps{
    value: number | undefined,
    label: string,
    callbackFunc: (e: React.ChangeEvent<HTMLInputElement>)=>void
}

const NumberInput: React.FC<NumberInputProps> = ({
    value,
    label,
    callbackFunc
})=>{
    return(
        <tr>
            <td>
                <label 
                className="whitespace-nowrap font-medium text-xs tablet:text-sm desktop:text-md">
                    {label}
                </label>
            </td>
            <td>
                <input type="number" value={value}
                onChange={callbackFunc}
                className="w-full border rounded-md px-3 py-2 text-xs tablet:text-sm desktop:text-md"/>
            </td>
        </tr>
    )
}

export default NumberInput