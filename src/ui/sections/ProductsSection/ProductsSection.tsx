import React from "react";

// import ProductCard from "../../molecules/ProductCard/ProductCard";
import ProductPreviewCard from "../../molecules/ProductPreviewCard/ProductPreviewCard";
import BigFiltersBoard from "../../organisms/FiltersBoard/BigFiltersBoard";
import { Product } from "../../../interfaces/Product";
import { FaSearch } from 'react-icons/fa';
import { CgSortAz } from "react-icons/cg";

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
        className="py-14 w-screen flex flex-col items-center">
            <h1
            className="font-lexend text-2xl font-bold text-primary">
                Products
            </h1> 
            <p
            className="m-2 font-lexend items-center text-darkgray text-xs mb-10">
                Check the status of recent orders, manage returns, and discover similar products.
            </p> 
            <div className="flex w-[90%] m-auto"> 
                <div className="w-[60%] item-lcenter"> 
                    <button className="p-2 px-8 rounded border bg-white text-primary">All Products</button>
                    <button className="p-2 px-16 rounded border bg-white text-primary">Nails</button>
                    <button className="p-2 px-12 rounded border bg-white text-primary">Pedicure</button>
                    <button className="p-2 px-12 rounded border bg-white text-primary">Manicure</button>
                </div> 
                <div className="w-[40%] flex items-center rounded-md">
                    <FaSearch className="bg-white mr-2" style={{color:"rgb(194 111 45)"}}/>
                    <input
                        type="text"
                        placeholder="Search products ..."
                        className="p-2 border border-primary rounded w-[50%]"
                    /> 
                    <button className="mx-4 p-2 flex rounded bg-lightgray">Sort by <CgSortAz style={{fontSize:"1.5rem"}}/></button>
                </div>
            </div>

            <div
            className="w-[90%] flex my-16">
                <div className="w-[25%]">
                <BigFiltersBoard/>
                </div>
                <div
                className="w-[70%] mx-8 my-4 grid grid-cols-2 grid-rows-auto gap-4 tablet:grid-cols-3 desktop:grid-cols-4">
                    {
                        items.map(e=>e)
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductsSection