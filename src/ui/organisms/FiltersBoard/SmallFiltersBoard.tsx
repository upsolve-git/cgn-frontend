import React from "react";
import ListOpener from "../../atoms/items/ListOpener/ListOpener";
import PriceRangeSlider from "../../molecules/filterElements/PriceRangeSlider/PriceRangeSlider";
import RatingFilter from "../../molecules/filterElements/RatingFilter/RatingFilter";

interface SmallFiltersBoardProps{
    setIsFilterActive: React.Dispatch<React.SetStateAction<boolean>>
}

const SmallFiltersBoard: React.FC<SmallFiltersBoardProps> = ({
    setIsFilterActive
})=>{
    return (
        <div
        className="w-full h-full bg-white">
            <div
            className="w-[full] grid grid-cols-3 px-3 drop-shadow-md bg-white pt-4">
                <ListOpener 
                onClick={()=>setIsFilterActive(false)}
                rotate="rotate-90"/>
                <h1
                className="place-self-center text-md font-semibold">
                    Filters
                </h1>
                <div></div>
            </div>
            <div
            className="h-fit px-4">
                <PriceRangeSlider />
                <RatingFilter />
            </div>
        </div>
    )
}

export default SmallFiltersBoard