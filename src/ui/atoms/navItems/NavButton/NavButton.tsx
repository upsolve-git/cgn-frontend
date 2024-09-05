import React from "react";

interface NavButtonProps{
    label: string,
    isActive: boolean,
}

const NavButton: React.FC<NavButtonProps> = ({
    label,
    isActive,
})=>{
    return(
        <button
        className={`text-xs px-2 py-1 whitespace-nowrap mr-2 ${isActive?"bg-primary text-white":"bg-white text-primary"} rounded-3xl tablet:mr-0 tablet:rounded-sm desktop:text-md`}>
            {label}
        </button>
    )
}

export default NavButton