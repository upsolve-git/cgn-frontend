import React from "react";

import BestSellerSection from "../ui/sections/BestSellerSectiom/BestSellerSection";
import TopSellingShadesSection from "../ui/sections/TopSellingShadesSection/TopSellingShadesSection";
import OurProductsSection from "../ui/sections/OurProductsSection/OurProductsSection";
import ContactUsSection from "../ui/sections/ContactUsSection/ContactUsSection";
import FooterSection from "../ui/sections/FooterSection/FooterSection";
import MainSection from "../ui/sections/MainSection/MainSection";
import Navbar from "../ui/organisms/Navbar/Navbar";

import { useMediaWidth } from "../utils/hooks/useMediaWidth";

import MobileMainSection from "../ui/sections/MainSection/MobileMainSection";
import AboutUs from "../ui/sections/AboutUsSection/AboutUsSection";

interface LandingPageProps{}

const LandingPage: React.FC<LandingPageProps> = ()=>{

    let {isMobile} = useMediaWidth()

    return (
        <div>
            {/* <Navbar /> */}
            {isMobile?<MobileMainSection/>:<MainSection />}
            <div
            className="bg-secondary tablet:bg-sectionBg">
                <div
                className="grid grid-rows-2">
                    <BestSellerSection />
                    <TopSellingShadesSection />
                </div>
                {/* <OurProductsSection /> */}
                <AboutUs />
                <ContactUsSection />
                {/* <FooterSection /> */}
            </div>
        </div>
    )
}

export default LandingPage