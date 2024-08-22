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
    let names = ["Radiant Shine Nail Polish", "Matte Velvet Nail Polish", "Elegance Gel Nail Polish",  "Complete Nail Care System"]
    let description = ["Vibrant, long-lasting color","Elegant, velvety matte look","High-gloss, salon-quality finish","Comprehensive at-home nail care"]
    for(let i=0;i<maxGridItems;i++){
        items.push(<ProductPreviewCard name= {names[i]} description = {description[i]} isBestSeller={isBestSeller} key={i+1}/>)
    }
    
    return(
        <div
        className="grid grow w-fit place-items-stretch grid-cols-2 grid-rows-2 gap-[6%] tablet:grid-rows-1 tablet:grid-cols-3 desktop:grid-cols-4 desktop:px-6">
            {
                items.map(e=>e)
            }
        </div>
    )
}

export default ProductPreviewList