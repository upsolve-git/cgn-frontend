import React from "react";
import PriceRangeSlider from "../../molecules/filterElements/PriceRangeSlider/PriceRangeSlider";
import RatingFilter from "../../molecules/filterElements/RatingFilter/RatingFilter";

interface BigFiltersBoardProps{}

const BigFiltersBoard: React.FC<BigFiltersBoardProps> = ()=>{
    return(
        <div
        className="text-xs py-4 px-3 w-full h-full rounded-lg border border-primary bg-white">
            <div
            className="flex justify-between text-xs mb-[10%]">
                <span
                className="font-medium">
                    Filters
                </span>
                <span
                className="text-primary min-w-fit">
                    Clear all
                </span>
            </div>
            <PriceRangeSlider />
            <RatingFilter />
        </div>
    )
}

export default BigFiltersBoard