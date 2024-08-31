import React from "react";
import ProductPreviewCardAdmin from "../../molecules/ProductPreviewCard/ProductPreviewCardAdmin";
import { Product } from "../../../interfaces/Product";

interface ProductPreviewListProps{
    products : Product[]
    onClick : (product_id : number) => void
}

const ProductPreviewList: React.FC<ProductPreviewListProps>= ({
    products,
    onClick
})=>{
    let items = []
    for(let i=0;i<products.length;i++){
        items.push(<ProductPreviewCardAdmin product={products[i]} onClick={onClick}/>)
    }
    
    return(
        <div
        className="grid h-fit w-fit grid-cols-2 grid-rows-2 gap-6 tablet:grid-rows-1 tablet:grid-cols-3 desktop:grid-cols-7 desktop:px-6">
            {
                items.map(e=>e)
            }
        </div>
    )
}

export default ProductPreviewList