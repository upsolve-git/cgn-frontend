import React from "react";

import RatingStars from "../../atoms/items/ratings/RatingStars/RatingStars";

import { getDaysGap, getToday } from "../../../helpers/dateHandler";

interface ReviewContentProps{
    username: string,
    userImg: string,
    reviewDate: Date,
    reviewRating: number,
    reviewText: string
}

const ReviewContent: React.FC<ReviewContentProps> = ({
    username,
    userImg,
    reviewDate,
    reviewRating,
    reviewText
})=>{

    let reviewDaysAgo = getDaysGap(reviewDate, getToday())

    return(
        <div
        className="mx-3 my-5">
            <div
            className="flex my-3">
                <div
                className="rounded-full w-fit h-fit bg-red mr-2">
                    <img src={userImg}
                    className="w-[40px] h-auto"/>
                </div>
                <div>
                    <div>
                        <span
                        className="text-sm font-bold mr-3">
                            {username}
                        </span>
                        <span
                        className="text-xs ">
                            {reviewDaysAgo} days ago
                        </span>
                    </div>
                    <RatingStars
                    rating={reviewRating}/>
                </div>
            </div>
            <div
            className="text-xs line-clamp-4">
                {reviewText}
            </div>
        </div>
    )
}

export default ReviewContent