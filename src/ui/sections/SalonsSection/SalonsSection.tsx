import React from "react";
import { Salon } from "../../../interfaces/Salon";
import { Console, log } from "console";
import SalonListItem from "../../molecules/SalonListItem/SalonListItem";
import { dummySalons } from "../../../constants/dummyStuff";

interface SalonsSectionProps{}

const SalonsSection: React.FC<SalonsSectionProps> = ()=>{
    const salons = dummySalons
    console.log(salons);
    
    return (
        <div
        className="w-[90%] mx-auto font-manrope mb-10">
            {
                salons.map(salon=><SalonListItem salon={salon}/>)
            }
        </div>
    )
}

export default SalonsSection