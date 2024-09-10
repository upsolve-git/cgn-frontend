import React, { useContext, createContext, ReactNode, useState } from "react";

export interface ActiveCats{
    'allproducts': boolean,
    'nails': boolean,
    'manicure': boolean,
    'pedicure': boolean
}

// Define the context's types
interface FiltersContextProps {
    priceRange: number[];
    priceRangeChange: (priceRange: number[]) => void;
    rating: number[];
    ratingFilterChange: (ratings: number[]) => void;
    activeCats: ActiveCats;
    activeCatsChange: (cats: ActiveCats) => void;
}

// Create the context
export const FiltersContext = createContext<FiltersContextProps | undefined>(undefined);

// Custom hook to use the FiltersContext
export const useFiltersContext = () => {
    const filters = useContext(FiltersContext);
    if (!filters) {
        throw new Error("useFiltersContext must be used within a FiltersProvider");
    }
    return filters;
};

// Context provider component
export const FiltersContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [priceRange, setPriceRange] = useState<number[]>([0, 0]);
    const [rating, setRating] = useState<number[]>([0, 5]);
    const [activeCats, setActiveCats] = useState<ActiveCats>({
        allproducts: true,
        nails: false,
        manicure: false,
        pedicure: false,
    });

    const priceRangeChange = (priceRange: number[]): void => setPriceRange(priceRange)
    const activeCatsChange = (cats: ActiveCats): void => setActiveCats(cats)
    const ratingFilterChange = (ratings: number[]): void => setRating(ratings)

    return (
        <FiltersContext.Provider
            value={{
                priceRange,
                priceRangeChange,
                rating,
                ratingFilterChange,
                activeCats,
                activeCatsChange,
            }}
        >
            {children}
        </FiltersContext.Provider>
    );
};