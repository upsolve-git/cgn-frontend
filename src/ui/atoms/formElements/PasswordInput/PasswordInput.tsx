import React, {useState} from "react";

interface PasswordInputProps{
    label: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>)=>void
}

const PasswordInput: React.FC<PasswordInputProps> = ({
    label,
    value,
    onChange
}) => {

    let [hidePass, setHidePass] = useState(true)

    return(
        <div
        className="w-full h-fit my-1 tablet:mb-2 desktop:mb-4">
            <div
            className="w-full flex justify-between">
                <label
                className="text-darkgray block text-xxs tablet:text-xs desktop:text-sm">
                    {label}
                </label>
                <span
                className="text-darkgray block text-xxs tablet:text-xs desktop:text-sm"
                onClick={()=>setHidePass(!hidePass)}>{hidePass?'Show':'Hide'}</span>
            </div>
            <input type={hidePass? "password":"text"}
            value={value}
            onChange={onChange}
            className="border border-darkgray rounded-lg w-full text-xxs px-[0.3rem] py-[0.1rem] tablet:text-xs tablet:px-[0.5rem] tablet:py-[0.3rem] desktop:text-sm" />
        </div>
    )
}

export default PasswordInput