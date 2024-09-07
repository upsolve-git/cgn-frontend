import React, { useState } from "react";
import { Slider } from "@mui/material";

import ListOpener from "../../../atoms/items/ListOpener/ListOpener";

interface PriceRangeSliderProps{}

const PriceRangeSlider: React.FC<PriceRangeSliderProps> = ()=>{

    let [value, setValue] = useState<number[]>([10,200])
    let [isActive, setIsActive] = useState<boolean>(false)
    const handleSlide = (event: Event, newVal: number | number[])=>{
        setValue(newVal as number[])
    }

    return(
        <div
        className="tablet:border-t-2 my-[6%] tablet:border-lightgray relative">
            <div
            className="flex justify-between items-center my-[10%]"
            onClick={()=>setIsActive(!isActive)}>
                <span
                className="font-bold">
                    Price Range
                </span>
                {
                    isActive?
                    <ListOpener rotate="" onClick={()=>console.log()}
                    />:
                    <ListOpener rotate="-rotate-90" onClick={()=>console.log()}
                    />
                }
            </div>
            {
                isActive &&
                <div
                className="h-fit">
                    <div
                    className="grid grid-rows-1 grid-cols-3 items-stretch">
                        <span
                        className="bg-lightgray px-[0.3rem] py-[0.1rem] rounded-md">
                            {value[0]}
                        </span>
                        <span
                        className="self-center text-center">
                            to
                        </span>
                        <span
                        className="bg-lightgray px-[0.3rem] py-[0.1rem] rounded-md">
                            {value[1]}
                        </span>
                    </div>
                    <Slider
                    value={value}
                    min={0}
                    max={700}
                    onChange={handleSlide}
                    sx={{
                        color: '#C26F2D',
                        '& .MuiSlider-thumb': {
                            color: '#ffffff',
                        },
                        '& .MuiSlider-track': {
                            color: '#C26F2D',
                        },
                        '& .MuiSlider-rail': {
                            color: '#F0D5BF',
                        },
                    }}
                    />
                </div>
            }
        </div>
    )
}

export default PriceRangeSlider