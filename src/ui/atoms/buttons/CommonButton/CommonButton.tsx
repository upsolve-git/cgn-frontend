import React from "react";

interface CommonButtonProps{
    label: string,
    primaryColor: string,
    secondaryColor: string,
    customStyles?: string,
    callBack: ()=>void
}

const CommonButton: React.FC<CommonButtonProps> = ({
    label,
    primaryColor,
    secondaryColor,
    customStyles='',
    callBack
})=>{
    return (
        <button
        onClick={callBack}
        className={`text-xxs w-full rounded-md py-2 bg-${primaryColor} text-${secondaryColor} tablet:text-xs desktop:text-sm ${customStyles}`}>
            {label}
        </button>
    )
}

export default CommonButton