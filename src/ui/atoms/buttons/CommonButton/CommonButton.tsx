import React from "react";

interface CommonButtonProps{
    label: string,
    primaryColor: string,
    secondaryColor: string,
    callBack: ()=>void
}

const CommonButton: React.FC<CommonButtonProps> = ({
    label,
    primaryColor,
    secondaryColor,
    callBack
})=>{
    return (
        <button
        onClick={callBack}
        className={`text-xxs w-[50%] rounded-md py-2 bg-${primaryColor} text-${secondaryColor} tablet:text-xs desktop:text-sm`}>
            {label}
        </button>
    )
}

export default CommonButton