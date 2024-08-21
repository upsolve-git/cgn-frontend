import React from "react";

interface AboutUsInfoProps{
    isRight: boolean
}

const AboutUsInfo: React.FC<AboutUsInfoProps> = ({
    isRight
})=>{
    return(
        <div
        className="grid grid-cols-2 grid-rows-1 px-3 py-4 gap-2 justify-center items-center">
            <div
            className={isRight?'order-last':''}>
                <div
                className="text-xs text-primary tablet:text-md desktop:text-xl">
                    Lorem ipsum dolor sit amet.
                </div>
                <hr className="text-primary w-[30%]"/>
                <div
                className="w-70% text-xxs tablet:text-xs desktop:text-md">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eius, tempora facilis doloremque inventore minus!
                </div>
            </div>
            <div
            className="w-[150px] h-[170px] bg-secondarylight rounded-t-full self-center m-auto tablet:w-[160px] tablet:h-[220px] desktop:h-[350px] desktop:w-[320px]">
                <img src="/image/stockpolish.png" alt="" 
                className="w-[100px] h-[160px] tablet:w-[140px] tablet:h-[200px] desktop:h-[300px] desktop:w-[210px] m-auto"/>
            </div>
        </div>
    )
}

export default AboutUsInfo