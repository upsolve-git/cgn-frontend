import React from "react";
import AboutUsInfo from "../../organisms/AboutUsInfo/AboutUsInfo";

interface AboutUsSectionProps{

}

const AboutUs: React.FC<AboutUsSectionProps> = ()=>{
    return(
        <div
        className=" bg-secondary flex flex-col items-center my-9 tablet:mx-12 tablet:px-[10%] desktop:my-14">
            <h1
            className="font-semibold text-secondarydark text-md tablet:text-xl desktop:text-2xl monitor:text-5xl">
                ABOUT US
            </h1>
            <AboutUsInfo isRight={false}/>
            <AboutUsInfo isRight={true} />
            <AboutUsInfo isRight={false} />
        </div>
    )
}

export default AboutUs