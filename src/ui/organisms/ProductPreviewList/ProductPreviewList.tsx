import React, { useState } from "react";
import ProductPreviewCard from "../../molecules/ProductPreviewCard/ProductPreviewCard";
import ArrowButton from "../../atoms/buttons/ArrowButton/ArrowButton";
import { useMediaWidth } from "../../../utils/hooks/useMediaWidth";
import { Product } from "../../../interfaces/Product";
import { error } from "console";

interface ProductPreviewListProps {
    products: Product[];
    isBestSeller: boolean;
    ishomepage: boolean;
    gridItems?: number;
}

const ProductPreviewList: React.FC<ProductPreviewListProps> = ({
    products,
    isBestSeller,
    ishomepage,
    gridItems
}) => {
    const [startIndex, setStartIndex] = useState<number>(0);
    const { isMobile, isTablet } = useMediaWidth();
    const maxGridItems = gridItems?gridItems:(isTablet ? 3 : 4)
    const totalProducts = products.length;
    
    const handleRightClick = () => {
        setStartIndex((prevIndex) => (prevIndex + 1) % totalProducts);
    };

    const handleLeftClick = () => {
        setStartIndex((prevIndex) => (prevIndex - 1 + totalProducts) % totalProducts);
    };
    
    const createWindowProds = ()=>{

        let currentWindowProducts = products.slice(startIndex, startIndex + maxGridItems);
    
        if (currentWindowProducts.length < maxGridItems) {
            let remainingItems = maxGridItems - currentWindowProducts.length;
            currentWindowProducts.push(...products.slice(0, remainingItems));
        }
        if (currentWindowProducts){
            return currentWindowProducts
        }else{
            throw new Error('current window products not generated')
        }
    }

    return (
        <div className="w-[90%] h-fit flex justify-evenly items-center m-auto">
            {
                !isMobile &&
                <ArrowButton rotation="180" clickFunc={handleLeftClick} />
            }
            <div className={`grid h-fit w-fit grid-cols-2 grid-rows-2 gap-6 tablet:grid-rows-1 tablet:grid-cols-${maxGridItems} desktop:grid-cols-${maxGridItems} desktop:px-6`}>
                {
                    createWindowProds().map((product, index) => {
                        return (
                        <ProductPreviewCard
                            key={index}
                            product={product}
                            isBestSeller={isBestSeller}
                            ishomepage={ishomepage}
                        />
                    )})
                }
            </div>
            {
                !isMobile &&
                <ArrowButton rotation="0" clickFunc={handleRightClick} />
            }
        </div>
    );
};

export default ProductPreviewList;