import React from "react";

interface TextInputProps{
    value: string,
    label: string,
    onChange: (e:React.ChangeEvent<HTMLInputElement>)=>void
}

const TextInput: React.FC<TextInputProps> = ({
    value,
    label,
    onChange
})=>{
    return(
        <tr
        className="">
            <td>
                <label
                className="whitespace-nowrap font-medium text-xs tablet:text-sm desktop:text-md">
                    {label}
                </label>
            </td>
            <td>
                <input type="text" value={value}
                onChange={onChange}
                className="w-full border rounded-md px-1 py-1 text-xs tablet:text-sm desktop:text-md"/>
            </td>
        </tr>
    )
}

export default TextInput