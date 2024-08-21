import React from "react";
import PreviewAddToCartButton from "../../atoms/buttons/PreviewAddToCartButton/PreviewAddToCartButton";

interface ProductPreviewCardProps{
    isBestSeller: boolean
}

const ProductPreviewCard: React.FC<ProductPreviewCardProps> = ({
    isBestSeller
})=>{
    return (
        <div
        className="h-full w-[80%] bg-white rounded-b-lg rounded-t-full ">
            <div
            className="w-[100px] h-[150px] m-auto tablet:w-[110px] tablet:h-[160px] tablet:max-w-[20vw] desktop:w-[160px] desktop:h-[220px] desktop:mb-6">
                <img src="/image/stockpolish.png" alt="" />
            </div>
            <div
            className="bg-secondarylight w-full h-fit px-2 pt-1 pb-2 rounded-b-2xl text-3xs tablet:pt-3 desktop:pt-6">
                <div
                className="flex w-full justify-around">
                    <div
                    className="w-[70%] text-3xs tablet:text-xs desktop:text-lg">
                        <p
                        className="block font-extrabold">
                            Gel Nail Polish
                        </p>
                        <p
                        className="desktop:text-md">
                            Lorem ipsum dolor sit amet.
                        </p>
                        <div
                        className="w-[60%] flex justify-between items-center tablet:w-[50%]">
                            <span
                            className="text-xs font-semibold tablet:text-md desktop:text-xl">
                                $32
                            </span>
                            <span
                            className="text-darkgray tablet:text-xs desktop:text-md">
                                <s>$42</s>
                            </span>
                        </div>
                    </div>
                    <div
                    className="w-[30%] h-full flex flex-col items-center justify-between">
                        <button
                        className="bg-primary text-white px-[2px] py-[3px] rounded-2xl text-4xs mb-3 tablet:text-3xs desktop:text-sm">
                            {isBestSeller?'Best-Seller':'New-Product'}
                        </button>
                        <PreviewAddToCartButton />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPreviewCard