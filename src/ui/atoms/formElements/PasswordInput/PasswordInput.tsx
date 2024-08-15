import React, {useState} from "react";

interface PasswordInputProps{
    label: string
}

const PasswordInput: React.FC<PasswordInputProps> = ({
    label
}) => {

    let [hidePass, setHidePass] = useState(true)

    return(
        <div
        className="w-full h-fit my-2">
            <div
            className="w-full flex justify-between">
                <label htmlFor="login-password"
                className="text-darkgray block text-xs">
                    {label}
                </label>
                <span
                className="text-darkgray block text-xs"
                onClick={()=>setHidePass(!hidePass)}>{hidePass?'Show':'Hide'}</span>
            </div>
            <input name="login-password" type={hidePass? "password":"text"} 
            className="border border-darkgray rounded-lg px-3 py-2 w-full"/>
            
        </div>
    )
}

export default PasswordInput