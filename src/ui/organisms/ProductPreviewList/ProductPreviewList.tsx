import React from "react";
import ProductPreviewCard from "../../molecules/ProductPreviewCard/ProductPreviewCard";
import { useMediaWidth } from "../../../utils/hooks/useMediaWidth";
import { Product } from "../../../interfaces/Product";

interface ProductPreviewListProps{
    products : Product[]
    isBestSeller: boolean
    ishomepage : boolean
}

const ProductPreviewList: React.FC<ProductPreviewListProps>= ({
    products,
    isBestSeller,
    ishomepage
})=>{
    let {isTablet} = useMediaWidth()
    let maxGridItems = isTablet?3:4
    let items = [] 
    console.log(products)
    for(let i=0;i<products.length;i++){
        if( isBestSeller && (products[i].product_id === 3 ||
            products[i].product_id === 6 ||
            products[i].product_id === 11 ||
            products[i].product_id === 12 )
        )
        {
            items.push(<ProductPreviewCard product={products[i]} isBestSeller={isBestSeller} ishomepage={ishomepage}/>)
        } 

        if(!isBestSeller && (products[i].product_id === 5 ||
            products[i].product_id === 8 ||
            products[i].product_id === 11 ||
            products[i].product_id === 13 )) {
                items.push(<ProductPreviewCard product={products[i]} isBestSeller={isBestSeller} ishomepage={ishomepage}/>)
            }
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