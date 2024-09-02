import React from "react";

import Navbar from "../ui/organisms/Navbar/Navbar";
import FooterSection from "../ui/sections/FooterSection/FooterSection";
import AdSection from "../ui/sections/AdSection/AdSection";
import ProductsSection from "../ui/sections/ProductsSection/ProductsSection";
import { useMediaWidth } from "../utils/hooks/useMediaWidth";
import { useAdminPage } from "../utils/hooks/useAdminPage";

interface ProductsPageProps{}

const ProductsPage:React.FC<ProductsPageProps> = ()=>{
    let {isMobile} = useMediaWidth()
    let {
        products
    } = useAdminPage()
    return(
        <div
        className="overflow-scroll bg-secondary">
            <Navbar />
            <div className="h-[60%]">{isMobile?<></>:<AdSection />}</div>
            <ProductsSection  products={products}/>
            <FooterSection />
        </div>
    )
}

export default ProductsPage