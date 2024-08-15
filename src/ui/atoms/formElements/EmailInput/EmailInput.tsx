import React from "react";

interface EmailInputProps{}

const EmailInput: React.FC<EmailInputProps> = () => {
    return (
        <div
        className="w-full h-fit my-2">
            <label htmlFor="login-email"
            className="text-darkgray block text-xs">
                Email address
            </label>
            <input name="login-email" type="email" 
            className="border border-darkgray rounded-lg px-3 py-2 w-full"/>
        </div>
    )
}

export default EmailInput