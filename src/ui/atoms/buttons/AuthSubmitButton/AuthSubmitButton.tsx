import React from "react";

interface AuthSubmitButtonProps{
    content: string,
    callbackFunc: ()=>void
}

const AuthSubmitButton: React.FC<AuthSubmitButtonProps> = ({content, callbackFunc}) => {
    return(
        <button
        onClick={callbackFunc}
        className="w-full h-fit py-2 bg-primary text-sm text-white rounded-3xl mt-6 mb-3">
            {content}
        </button>
    )
}

export default AuthSubmitButton