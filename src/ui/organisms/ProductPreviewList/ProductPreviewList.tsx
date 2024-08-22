import React from "react";
import ProductPreviewCard from "../../molecules/ProductPreviewCard/ProductPreviewCard";
import { useMediaWidth } from "../../../utils/hooks/useMediaWidth";

interface ProductPreviewListProps{
    isBestSeller: boolean
}

const ProductPreviewList: React.FC<ProductPreviewListProps>= ({
    isBestSeller
})=>{
    let {isTablet} = useMediaWidth()
    let maxGridItems = isTablet?3:4
    let items = []
    for(let i=0;i<maxGridItems;i++){
        items.push(<ProductPreviewCard isBestSeller={isBestSeller} key={i+1}/>)
    }
    
    return(
        <div
        className="grow w-full grid place-items-stretch grid-cols-2 grid-rows-2 gap-[6%] tablet:grid-rows-1 tablet:grid-cols-3 desktop:grid-cols-4">
            {
                items.map(e=>e)
            }
        </div>
    )
}

export default ProductPreviewList