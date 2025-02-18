import React from "react";
import RatingStars from "../../atoms/items/ratings/RatingStars/RatingStars";
import { Salon } from "../../../interfaces/Salon";

interface SalonListItemProps {
    salon: Salon
}

const SalonListItem: React.FC<SalonListItemProps> = ({salon})=>{
    return(
        <div
        className="flex bg-white p-3 rounded-lg shadow-sm mb-3">
            <img src={salon.image} alt="salon.jpg" 
            className="w-15 h-24 my-auto tablet:w-24 tablet:h-32"/>
            <div
            className="mx-[0.4rem]">
                <p
                className="text-sm font-semibold tablet:text-md">
                    {salon.name}
                </p>
                {/* <RatingStars
                rating={salon.averageRating}/> */}
                <p
                className="text-xxs text-darkgray line-clamp-2 font-medium tablet:text-xs">
                    {salon.description}
                </p>
                <p
                className="text-xs tablet:text:sm">
                    {salon.location}
                </p>
            </div>
        </div>
    )
}

export default SalonListItem