import React from "react";
import PreviewAddToCartButton from "../../atoms/buttons/PreviewAddToCartButton/PreviewAddToCartButton";

interface ProductPreviewCardProps{
    name:string,
    description:string,
    isBestSeller: boolean
}

const ProductPreviewCard: React.FC<ProductPreviewCardProps> = ({
    name,
    description,
    isBestSeller
})=>{
    return (
        <div
        className="h-full w-fit flex flex-col bg-white rounded-b-lg rounded-t-full font-poppins">
            <div
            className="w-[100px] h-[150px] m-auto mt-10 tablet:w-[110px] tablet:h-[160px] tablet:max-w-[20vw] desktop:w-[120px] desktop:h-[200px] desktop:mb-6">
                <img src="/image/stockpolish.png" alt="" />
            </div>
            <div
            className="w-full h-full max-w-[150px] bg-secondarylight  px-2 pt-1 pb-2 rounded-b-2xl text-3xs tablet:pt-3 tablet:max-w-[400px] desktop:pt-6 flex flex-col">
                <div
                className="h-[80%] flex text-3xs tablet:text-xs desktop:text-lg mobile:">
                    <div>
                        <p
                        className="w-[100%] block font-semibold desktop:text-md">
                            {name}
                        </p>
                        <p
                        className="w-[70%] line-clamp-1 font-light desktop:text-sm">
                            {description}
                        </p>
                    </div>
                    <button
                        className="max-h-[50%] w-auto desktop:h-[40%] bg-primary text-white px-2 py-1 rounded-2xl text-4xs mb-3 tablet:text-3xs desktop:text-xs">
                        {isBestSeller ? 'Best Seller' : 'New Product'}
                    </button>
                </div>
                <div
                className="h-[10%] flex items-center justify-between">
                    <div
                    className="w-[20%] flex justify-between items-center tablet:w-[50%]">
                        <span
                        className="text-xs font-semibold tablet:text-md desktop:text-xl">
                            $32
                        </span>
                        <span
                        className="text-darkgray tablet:text-xs desktop:text-md">
                            <s>$42</s>
                        </span>
                    </div>
                    <PreviewAddToCartButton />
                </div>
            </div>
        </div>
    )
}

export default ProductPreviewCard