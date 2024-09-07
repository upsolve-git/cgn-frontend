import React from "react";
import { Product } from "../../../interfaces/Product";
import { FiShoppingCart } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

interface ProductPreviewCardProps{
    product : Product
    isBestSeller : boolean
}

const ProductPreviewCard: React.FC<ProductPreviewCardProps> = ({
    product,
    isBestSeller
})=>{
    const navigate = useNavigate()

    return (
        <div
        className="grid grid-cols-1 font-poppins max-w-[200px] max-h-fit">
            <div
            className="bg-white rounded-t-full px-3 py-4 desktop:px-6 desktop:py-8">
                <img src={product?.product_imgs_id||"/image/stockpolish.png"} alt="Alt text"
                className="w-auto h-[200px] m-auto tablet:w-[100px] desktop:w-[130px]"/>
            </div>
            <div
            className="w-full h-full flex flex-col bg-secondarylight  px-2 pt-1 pb-2 rounded-b-2xl">
                <div
                className="h-[80%] w-full flex justify-between">
                    <div>
                        <p
                        className="w-[100%] block font-semibold text-xs line-clamp-2 desktop:text-md">
                            {product?.name||"Lorem Ipsum"}
                        </p>
                        <p
                        className="w-[100%] line-clamp-1 font-light text-xxs desktop:text-sm">
                            {product?.description||"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, aut!"}
                        </p>
                    </div>
                    <button
                        className="h-fit w-fit whitespace-nowrap text-3xs text-white bg-primary rounded-3xl py-[2%] px-[3%] desktop:text-xxs">
                        {isBestSeller ? 'Best Seller' : 'New Product'}
                    </button>
                </div>
                <div
                className="h-fit flex items-center justify-between">
                    <div
                    className="w-fit flex justify-between items-center">
                        <span
                        className="text-sm font-semibold mr-1 tablet:text-md desktop:text-xl">
                            ${product?.discounted_price_percentage||20}
                        </span>
                        <span
                        className="text-darkgray text-xs tablet:text-xs desktop:text-md">
                            <s>${product?.price||32}</s>
                        </span>
                    </div>
                    <button 
                    className="p-1 rounded-full bg-white items-center justify-center desktop:p-2"
                    onClick={()=>navigate(`/productDetail/${product?.product_id||1}`)}> 
                        <FiShoppingCart className="text-sm desktop:text-lg" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductPreviewCard