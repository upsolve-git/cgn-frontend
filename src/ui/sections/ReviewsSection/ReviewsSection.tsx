import React from "react";

import { useMediaWidth } from "../../../utils/hooks/useMediaWidth";
import ReviewsStats from "../../organisms/ReviewsStats/ReviewsStats";
import ReviewsPreview from "../../organisms/ReviewsPreview/ReviewsPreview";

interface ReviewsSectionProps{}

const ReviewsSection: React.FC<ReviewsSectionProps> = ()=>{

    let {isMobile} = useMediaWidth()

    return(
        <div
        className="flex w-screen h-fit">
        {/* {
            isMobile?
            <></>:
            <div
            className="bg-red w-full h-full">
            </div>
        } */}
            <div
            className="font-manrope">
                <h1
                className="font-semibold font-montserrat text-center text-primary text-lg tablet:text-xl tablet:text-left desktop:text-2xl monitor:text-5xl">
                    Reviews
                </h1>
                <div
                className="grid grid-cols-1 place-items-center tablet:grid-cols-2 tablet:grid-rows-[80%_20%] tablet:place-items-start">
                    <ReviewsStats 
                    averageRating={4.5}
                    totalReviews={368}/>
                    <div
                    className="overflow-hidden">
                        <ReviewsPreview />
                    </div>
                    {/* <div
                    className="col-span-2 row-span-1 place-self-center">
                        <p>
                            This is a para for 1, 2 ,3 4 ,5 ,6 ,6 7, 78, 8 ....
                        </p>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default ReviewsSection