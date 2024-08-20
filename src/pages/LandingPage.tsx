import React from "react";

import BestSellerSection from "../ui/sections/BestSellerSectiom/BestSellerSection";
import TopSellingShadesSection from "../ui/sections/TopSellingShadesSection/TopSellingShadesSection";
import OurProductsSection from "../ui/sections/OurProductsSection/OurProductsSection";
import ContactUsSection from "../ui/sections/ContactUsSection/ContactUsSection";
import FooterSection from "../ui/sections/FooterSection/FooterSection";
import MainSection from "../ui/sections/MainSection/MainSection";
import Navbar from "../ui/organisms/Navbar/Navbar";

import { useMediaWidth } from "../utils/hooks/useMediaWidth";
import MobileNavbar from "../ui/organisms/Navbar/MobileNavbar";
import MobileMainSection from "../ui/sections/MainSection/MobileMainSection";

interface LandingPageProps{}

const LandingPage: React.FC<LandingPageProps> = ()=>{

    let {isMobile} = useMediaWidth()

    return (
        <div>
            {isMobile?<MobileNavbar/>:<Navbar />}
            {isMobile?<MobileMainSection/>:<MainSection />}
            <BestSellerSection />
            <TopSellingShadesSection />
            <OurProductsSection />
            <ContactUsSection />
            <FooterSection />
        </div>
    )
}

export default LandingPage