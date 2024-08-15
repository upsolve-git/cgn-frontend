import React from "react";

interface GoogleAuthButtonProps{}

const GoogleAuthButton: React.FC<GoogleAuthButtonProps> = ()=>{
    return(
        <button
        className="w-full h-fit py-2 bg-white text-sm border rounded-3xl mt-3 mb-6 flex justify-center">
            <img src="https://www.vectorlogo.zone/logos/google/google-icon.svg" alt="" 
            width={25} height={25}
            className="mr-3"/>
            Continue with Google
        </button>
    )
}

export default GoogleAuthButton