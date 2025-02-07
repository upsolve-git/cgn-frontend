import React from "react";
import SalonsSection from "../ui/sections/SalonsSection/SalonsSection";

interface SalonsPageProps{}

const SalonsPage: React.FC<SalonsPageProps> = ()=>{
    return(
        <div>
            <div
            className="">
                <h1
                    className="font-lexend text-center text-lg font-bold text-primary desktop:text-3xl">
                    Salons
                </h1>
                <p
                    className="m-2 font-lexend text-center items-center text-darkgray text-xs mb-10 desktop:text-sm">
                    Check out salons and their services from here
                </p>
                <SalonsSection />
            </div>
        </div>
    )
}

export default SalonsPage