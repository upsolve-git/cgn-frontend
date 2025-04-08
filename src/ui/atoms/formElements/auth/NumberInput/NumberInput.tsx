import React from "react";

interface NumberInputProps{
    label: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>)=>void
}

const NumberInput: React.FC<NumberInputProps> = ({
    label,
    value,
    onChange
})=>{
    return(
        <div
        className="w-full h-fit my-2">
            <label
            className="text-darkgray block text-xxs tablet:text-xs desktop:text-sm">
                {label}
            </label>
            <input
            type="number" value={value} onChange={onChange}
            className="border border-darkgray rounded-lg w-full text-xxs px-[0.3rem] py-[0.1rem] tablet:text-xs tablet:px-[0.5rem] tablet:py-[0.3rem] desktop:text-sm"/>
        </div>
    )
}

export default NumberInput