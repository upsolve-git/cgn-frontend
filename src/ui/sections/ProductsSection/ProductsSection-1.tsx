import React from "react";

// import ProductCard from "../../molecules/ProductCard/ProductCard";
import ProductPreviewCard from "../../molecules/ProductPreviewCard/ProductPreviewCard";
import BigFiltersBoard from "../../organisms/FiltersBoard/BigFiltersBoard";
import { Product } from "../../../interfaces/Product";
import { FaSearch } from 'react-icons/fa';

import 'react-tabs/style/react-tabs.css';
interface ProductsSectionProps{
    products : Product[]
}

const ProductsSection: React.FC<ProductsSectionProps> = ({
    products
}) => {
    let items = []
    for(let i=0;i<products.length;i++){
        items.push(<ProductPreviewCard product={products[i]} isBestSeller={true} key={i+1}/>)
    }

    return(
        <div
        className="pt-6 pb-10 w-screen flex flex-col items-center">
            <h1
            className="font-lexend text-md font-bold text-primary tablet:text-lg">
                Products
            </h1> 
            <p
            className="font-lexend text-darkgray text-xs tablet:text-xs">
                Check the status of recent orders, manage returns, and discover similar products.
            </p> 
            <div> 
                <div className="w-[60%]"> 
                
                </div> 
                <div className="w-[40%] flex items-center rounded-md p-2">
                    <FaSearch  style={{color:"red"}}/>
                    <input
                        type="text"
                        placeholder="Search"
                        className=""
                    />
                </div>
            </div>

            <div
            className="flex justify-evenly mx-[1%] my-[5%]">
                <div className="w-[40%]">
                <BigFiltersBoard />
                </div>
                <div
                className="w-[70%] mx-4 my-4 grid grid-cols-2 grid-rows-auto gap-4 tablet:grid-cols-3 desktop:grid-cols-4">
                    {
                        items.map(e=>e)
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductsSection