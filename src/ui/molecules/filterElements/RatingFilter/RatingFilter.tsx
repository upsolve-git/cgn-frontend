import React, {useState} from "react";

import ListOpener from "../../../atoms/items/ListOpener/ListOpener";

interface RatingFilterProps{}

const RatingFilter: React.FC<RatingFilterProps> = ()=>{

    let [value, setValue] = useState<number[]>([20,600])
    let [isActive, setIsActive] = useState<boolean>(false)
    const handleSlide = (event: Event, newVal: number | number[])=>{
        setValue(newVal as number[])
    }

    return(
        <div
        className="border-t-2 my-[6%] border-lightgray relative">
            <div
            className="flex justify-between items-center my-[10%]"
            onClick={()=>setIsActive(!isActive)}>
                <span
                className="font-bold">
                    Rating
                </span>
                {
                    isActive?
                    <ListOpener rotate=""/>:
                    <ListOpener rotate="-rotate-90"/>
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
                </div>
            }
        </div>
    )
}

export default RatingFilter