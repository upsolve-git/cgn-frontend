import React from "react";

// import ProductCard from "../../molecules/ProductCard/ProductCard";
import ProductPreviewCard from "../../molecules/ProductPreviewCard/ProductPreviewCard";
import BigFiltersBoard from "../../organisms/FiltersBoard/BigFiltersBoard";
import { Product } from "../../../interfaces/Product";
import { FaSearch } from 'react-icons/fa';
import { CgSortAz } from "react-icons/cg";

import 'react-tabs/style/react-tabs.css';
import { useMediaWidth } from "../../../utils/hooks/useMediaWidth";
import NavButton from "../../atoms/navItems/NavButton/NavButton";

interface ProductsSectionProps{
    products : Product[]
}

const ProductsSection: React.FC<ProductsSectionProps> = ({
    products
}) => {
    const {isMobile} = useMediaWidth()
    let items = []
    for(let i=0;i<products.length;i++){
        items.push(<ProductPreviewCard product={products[i]} isBestSeller={true} key={i+1}/>)
    }

    return(
        <div
        className="py-14 w-screen flex flex-col items-center">
            <h1
            className="font-lexend text-lg font-bold text-primary desktop:text-3xl">
                Products
            </h1> 
            <p
            className="m-2 font-lexend text-center items-center text-darkgray text-xs mb-10 desktop:text-sm">
                Check the status of recent orders, manage returns, and discover similar products.
            </p> 
            {
                isMobile?
                <div>
                    <div
                    className="px-2 flex min-w-fit justify-start">
                        <NavButton label="All products" isActive={true}/>
                        <NavButton label="Nails" isActive={false}/>
                        <NavButton label="Manicure" isActive={false}/>
                        <NavButton label="Pedicure" isActive={false}/>
                    </div>
                </div>:
                <div className="flex w-[90vw] justify-between items-center m-auto"> 
                    <div className="grid grid-rows-1 grid-cols-4 w-fit h-[50%]"> 
                        <NavButton label="All products" isActive={true}/>
                        <NavButton label="Nails" isActive={false}/>
                        <NavButton label="Manicure" isActive={false}/>
                        <NavButton label="Pedicure" isActive={false}/>
                    </div> 
                    <div className="w-[40%] flex items-center rounded-md">
                        <FaSearch 
                        className="bg-secondary mr-2 text-sm" 
                        style={{color:"rgb(194 111 45)"}}
                        />
                        <input
                            type="text"
                            placeholder="Search product ..."
                            className="p-2 border border-primary text-xs rounded w-[50%] desktop:text-md"
                        /> 
                        <button className="mx-4 p-2 text-xs flex rounded bg-lightgray desktop:text-md">
                            Sort by 
                            <CgSortAz style={{fontSize:"1.5rem"}}/>
                        </button>
                    </div>
                </div>
            }

            <div
            className="w-[90%] flex my-16 items-start">
                
                {
                    isMobile?
                    <></>:
                    <div
                    className="w-[30%] h-fit mr-6 justify-between desktop:w-[20%]">
                        <BigFiltersBoard/>
                    </div>
                }
                
                <div
                className="grid grid-cols-2 gap-4 mx-auto tablet:grid-cols-3 desktop:grid-cols-4 desktop:gap-8">
                    {
                        items.map(e=>e)
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductsSection