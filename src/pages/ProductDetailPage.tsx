import React from "react";

import Navbar from "../ui/organisms/Navbar/Navbar";
import FooterSection from "../ui/sections/FooterSection/FooterSection";
import AdSection from "../ui/sections/AdSection/AdSection";
import ProductsSection from "../ui/sections/ProductsSection/ProductsSection";
import { useMediaWidth } from "../utils/hooks/useMediaWidth";
import { useAdminPage } from "../utils/hooks/useAdminPage";

interface ProductDetailPageProps{}

const ProductDetailPage:React.FC<ProductDetailPageProps> = ()=>{
    let {isMobile} = useMediaWidth()
    let {
        products
    } = useAdminPage()
    let product = products[14]
    return(
        <div
        className="overflow-scroll bg-secondary">
            <Navbar />
            {products.length &&  <div className="flex m-10">
                <div className="w-[50%]"> 
                    <div
                    className="h-full w-fit flex bg-secondarylight rounded-t-full px-10 m-auto">
                        <img src="/image/stockpolish.png" alt="" />
                    </div>
                </div> 
                <div className="text-left"> 
                    <h1 className="font-bold text-xl mb-4">{product.name}</h1>
                    <h2 className="mb-3">{product.description}</h2> 
                    <span
                        className="text-xs text-primary font-semibold tablet:text-md desktop:text-xl pr-4">
                            ${product.discounted_price_percentage}
                        </span>
                        <span
                        className="text-darkgray tablet:text-xs desktop:text-md">
                            <s>${product.price}</s>
                        </span>
                </div>
            </div>}
        </div>
    )
}

export default ProductDetailPage