import React from "react";

interface TextInputProps{
    value: string,
    label: string,
    callbackFunc: (e:React.ChangeEvent<HTMLInputElement>)=>void
}

const TextInput: React.FC<TextInputProps> = ({
    value,
    label,
    callbackFunc
})=>{
    return(
        <tr
        className="">
            <td>
                <label
                className="whitespace-nowrap font-medium">
                    {label}
                </label>
            </td>
            <td>
                <input type="text" value={value}
                onChange={callbackFunc}
                className="w-full border rounded-md px-3 py-2 "/>
            </td>
        </tr>
    )
}

export default TextInput