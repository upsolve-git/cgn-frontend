import {useState} from "react";

export const useAddReview = ()=>{
    let [rating, setRating] = useState<number>(2.5)
    let [ratingText, setRatingText] = useState<string>("")

    const handleRating = (rate:number) => {
        setRating(rate)
    }

    const handleRatingText = (rateText:string) => {
        setRatingText(rateText)
    }

    const dummyClick = () => {
        console.log(rating);
        console.log(ratingText);
    }

    return {rating, handleRating, ratingText, handleRatingText, dummyClick}
}