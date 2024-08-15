import React from "react";

interface PhoneInputProps{}

const PhoneInput: React.FC<PhoneInputProps> = ()=>{
    return(
        <div
        className="w-full h-fit my-2">
            <label htmlFor="signup-tel"
            className="text-darkgray block text-xs">
                Phone Number
            </label>
            <input name="signup-tel" type="tel" 
            className="border border-darkgray rounded-lg px-3 py-2 w-full"/>
        </div>
    )
}

export default PhoneInput