import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

import ProdListSwitcher from "../../molecules/ProdListSwitcher/ProdListSwitcher";
import ProductPreviewList from "../../organisms/ProductPreviewList/ProductPreviewList";
import ActionButton from "../../atoms/buttons/ActionButton/ActionButton";
import ArrowButton from "../../atoms/buttons/ArrowButton/ArrowButton";

import { useMediaWidth } from "../../../utils/hooks/useMediaWidth";

import { PRODUCTS_PAGE } from "../../../constants/routes";
import { useAdminPage } from "../../../utils/hooks/useAdminPage";

interface BestSellerSectionProps {}

const BestSellerSection: React.FC<BestSellerSectionProps> = ()=>{
    let {products} = useAdminPage()
    let [isBestSeller, setIsBestSeller] = useState<boolean>(true)
    let {isMobile} = useMediaWidth()
    const navigate = useNavigate()
    console.log(products)
    return (
        <div
        className="h-fit w-screen px-4 py-8 bg-contain flex flex-col items-center">
            <h1
            className="pt-20 font-semibold text-center text-secondarydark text-md tablet:text-xl desktop:text-2xl monitor:text-5xl">
                OUR BEST SELLING PRODUCTS
            </h1>
            <ProdListSwitcher 
            isBestSeller={isBestSeller}
            setIsBestSeller={setIsBestSeller}/>
            <div
            className="w-[90%] h-fit flex justify-evenly items-center">
                {!isMobile&&<ArrowButton 
                rotation={'180'}/>}
                {products.length && <ProductPreviewList 
                ishomepage={true}
                products={products}
                isBestSeller={isBestSeller}/>}
                {!isMobile&&<ArrowButton 
                rotation={'0'}/>}
            </div>
            <div
            className="w-[40%] mt-10 tablet:w-[20%]">
                <ActionButton
                label="View more!"
                callbackFunc={()=> navigate(PRODUCTS_PAGE)}/>
            </div>
        </div>
    )
}

export default BestSellerSection