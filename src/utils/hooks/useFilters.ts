import { useState } from "react"

export const useFilters = ()=>{
    let [priceRange, setPriceRange] = useState<number[]>([60,200])
    let [ratingsFilter, setRatingsFilter] = useState<number[]>([])

    const handlePriceRange = (event: Event, newVal: number | number[])=>{
        setPriceRange(newVal as number[])
    }

    return {
        priceRange,
        handlePriceRange
    }
}