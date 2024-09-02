import React from "react";
import ProductPreviewCard from "../../molecules/ProductPreviewCard/ProductPreviewCard";
import { useMediaWidth } from "../../../utils/hooks/useMediaWidth";
import { Product } from "../../../interfaces/Product";

interface ProductPreviewListProps{
    products : Product[]
    isBestSeller: boolean
}

const ProductPreviewList: React.FC<ProductPreviewListProps>= ({
    products,
    isBestSeller
})=>{
    let {isTablet} = useMediaWidth()
    let maxGridItems = isTablet?3:4
    let items = [] 
    console.log(products)
    for(let i=0;i<maxGridItems;i++){
        items.push(<ProductPreviewCard product={products[10 + i]} isBestSeller={isBestSeller} />)
    }
    
    return(
        <div
        className="grid h-fit w-fit grid-cols-2 grid-rows-2 gap-6 tablet:grid-rows-1 tablet:grid-cols-3 desktop:grid-cols-4 desktop:px-6">
            {
                items.map(e=>e)
            }
        </div>
    )
}

export default ProductPreviewList