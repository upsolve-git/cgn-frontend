import React from "react";

import Star from "../Star/Star";
import { starGiver } from "../../../../../helpers/starGiver";

interface RatingCheckboxProps{
    rateValue: number
}

const RatingCheckbox: React.FC<RatingCheckboxProps> = ({
    rateValue
})=>{

    let starNodes: React.ReactNode[] = starGiver(rateValue)

    return(
        <div
        className="flex items-center">
            <input type="checkbox"/>
            {
                starNodes.map(star=>star)
            }
        </div>
    )
}

export default RatingCheckbox