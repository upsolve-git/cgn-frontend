import React from "react";

import Navbar from "../ui/organisms/Navbar/NavBar";
import FooterSection from "../ui/sections/FooterSection/FooterSection";
import AdSection from "../ui/sections/AdSection/AdSection";
import ProductsSection from "../ui/sections/ProductsSection/ProductsSection";
import { useMediaWidth } from "../utils/hooks/useMediaWidth";

interface ProductsPageProps{}

const ProductsPage:React.FC<ProductsPageProps> = ()=>{
    let {isMobile} = useMediaWidth()
    return(
        <div
        className="overflow-scroll bg-secondary">
            <Navbar />
            {isMobile?<></>:<AdSection />}
            <ProductsSection />
            <FooterSection />
        </div>
    )
}

export default ProductsPage