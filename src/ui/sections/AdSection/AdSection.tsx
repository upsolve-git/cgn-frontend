import React from "react";
import CommonButton from "../../atoms/buttons/CommonButton/CommonButton";

interface AdSectionProps{}

const AdSection: React.FC<AdSectionProps> = ()=>{

    const callback = ()=>{
        console.log('shop now');
    }

    return(
        <div
        className="relative h-fit">
            <img src="/image/image.png" alt="" 
            className="w-full h-auto"/>
            <div
            className="grid grid-cols-3 h-full absolute inset-0 z-40 text-primary">
                <div></div>
                <div></div>
                <div
                className="flex flex-col items-center justify-evenly">
                    <h1
                    className="font-bold text-lg font-lexend desktop:text-3xl">
                        Lorem
                    </h1>
                    <p
                    className="text-center text-md font-thin font-lexend desktop:text-xl">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora eius consequatur tenetur!
                    </p>
                    <CommonButton 
                    label="Shop now!"
                    primaryColor="secondary"
                    secondaryColor="primary"
                    callBack={callback}/>
                </div>
            </div>
            
        </div>
    )
}

export default AdSection