import React, {useState, useMemo, useEffect} from "react";

import { FaSearch } from 'react-icons/fa';
import { CgSortAz } from "react-icons/cg";
import { IoFilterSharp } from "react-icons/io5";
import { BiSortAlt2 } from "react-icons/bi";
import { TfiMenuAlt } from "react-icons/tfi";
import 'react-tabs/style/react-tabs.css';

import ProductPreviewCard from "../../molecules/ProductPreviewCard/ProductPreviewCard";
import BigFiltersBoard from "../../organisms/FiltersBoard/BigFiltersBoard";
import NavButton from "../../atoms/navItems/NavButton/NavButton";


import { useAdminPage } from "../../../utils/hooks/useAdminPage";
import { useMediaWidth } from "../../../utils/hooks/useMediaWidth";
import { Product } from "../../../interfaces/Product";
import { ActiveCats, useFiltersContext } from "../../../utils/hooks/useFiltersContext";

interface ProductsSectionProps{}

const ProductsSection: React.FC<ProductsSectionProps> = ({
    
}) => {
    const {isMobile} = useMediaWidth()
    let {priceRange, rating, activeCats, activeCatsChange } = useFiltersContext()
    let {
        products
    } = useAdminPage()
    const filteredproducts = useMemo(() => {
        let res = products
        
        // Filter by category
        let trueCat = 'allproducts';
        for (let key in activeCats) {
            if (activeCats[key as keyof ActiveCats]) {
                trueCat = key;
                break;
            }
        }
        
        // Only filter by category if a specific category is selected
        if (trueCat !== 'allproducts') {
            res = res.filter(prod => prod.category === trueCat);
        }
    
        // Filter by price range if it's set
        if (priceRange[0] !== 0 || priceRange[1] !== 0) {  // Ensure it's not default
            res = res.filter(prod => {
                return prod.discounted_price_percentage >= priceRange[0] && prod.discounted_price_percentage <= priceRange[1];
            });
        } 
    
        // Filter by rating if it's set
        // if (rating && rating.length > 0) {
        //     res = res.filter(prod => {
        //         return prod.rating >= rating[0] && prod.rating <= rating[1];
        //     });
        // }
    
        return res;  // Return the filtered products
    }, [priceRange, rating, activeCats]);
    

    let items = []
    for(let i=0;i<filteredproducts.length;i++){
        items.push(<ProductPreviewCard product={filteredproducts[i]} isBestSeller={true} key={i+1}/>)
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
                        <NavButton label="All products"
                        onClick={()=>activeCatsChange({
                            allproducts: true,
                            nails: false,
                            manicure: false,
                            pedicure: false
                        })}
                        isActive={activeCats.allproducts}/>
                        <NavButton label="Nails" 
                        onClick={()=>activeCatsChange({
                            allproducts: false,
                            nails: true,
                            manicure: false,
                            pedicure: false
                        })}
                        isActive={activeCats.nails}/>
                        <NavButton label="Manicure" 
                        onClick={()=>activeCatsChange({
                            allproducts: false,
                            nails: false,
                            manicure: true,
                            pedicure: false
                        })}
                        isActive={activeCats.manicure}/>
                        <NavButton label="Pedicure" 
                        onClick={()=>activeCatsChange({
                            allproducts: false,
                            nails: false,
                            manicure: false,
                            pedicure: true
                        })}
                        isActive={activeCats.pedicure}/>
                    </div>
                    <div
                    className="w-[90%] m-auto flex justify-between my-4">
                        <div
                        className="text-xs flex items-center">
                            <IoFilterSharp />
                            <span
                            className="ml-1">
                                Filters
                            </span>
                        </div>
                        <div
                        className="text-xs flex items-center">
                            <BiSortAlt2 />
                            <span
                            className="ml-1">
                                Sort by
                            </span>
                        </div>
                        <div
                        className="text-xs flex items-center">
                            <TfiMenuAlt />
                        </div>
                    </div>
                </div>
                :
                <div className="flex w-[90vw] justify-between items-center m-auto"> 
                    <div className="grid grid-rows-1 grid-cols-4 w-fit h-[50%]"> 
                    <NavButton label="All products"
                        onClick={()=>activeCatsChange({
                            allproducts: true,
                            nails: false,
                            manicure: false,
                            pedicure: false
                        })}
                        isActive={activeCats.allproducts}/>
                        <NavButton label="Nails" 
                        onClick={()=>activeCatsChange({
                            allproducts: false,
                            nails: true,
                            manicure: false,
                            pedicure: false
                        })}
                        isActive={activeCats.nails}/>
                        <NavButton label="Manicure" 
                        onClick={()=>activeCatsChange({
                            allproducts: false,
                            nails: false,
                            manicure: true,
                            pedicure: false
                        })}
                        isActive={activeCats.manicure}/>
                        <NavButton label="Pedicure" 
                        onClick={()=>activeCatsChange({
                            allproducts: false,
                            nails: false,
                            manicure: false,
                            pedicure: true
                        })}
                        isActive={activeCats.pedicure}/>
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
                    <></>
                    :
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

export default ProductsSection