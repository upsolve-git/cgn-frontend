import React from "react";

import CommonButton from "../../atoms/buttons/CommonButton/CommonButton";

interface ProdListSwitcherProps{
    isBestSeller: boolean,
    setIsBestSeller: React.Dispatch<React.SetStateAction<boolean>>
}

const ProdListSwitcher: React.FC<ProdListSwitcherProps> = ({
    isBestSeller,
    setIsBestSeller
})=>{
    return (
        <div
        className="w-[80%] mt-4 bg-white rounded-md flex justify-center items-center tablet:w-[40%]">
            <CommonButton 
            label="Best-Sellers"
            primaryColor={isBestSeller?"secondarylight":"white"}
            secondaryColor="black"
            callBack={()=>setIsBestSeller(true)}/>
            <CommonButton
            label="New Products"
            primaryColor={!isBestSeller?"secondarylight":"white"}
            secondaryColor="black"
            callBack={()=>setIsBestSeller(false)}/>
        </div>
    )
}

export default ProdListSwitcher