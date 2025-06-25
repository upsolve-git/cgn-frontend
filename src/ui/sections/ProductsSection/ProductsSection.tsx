import React, { useState, useMemo, useEffect } from "react";

import { FaSearch } from 'react-icons/fa';
import { CgSortAz } from "react-icons/cg";
import { IoFilterSharp } from "react-icons/io5";
import { BiSortAlt2 } from "react-icons/bi";
import { TfiMenuAlt } from "react-icons/tfi";
import 'react-tabs/style/react-tabs.css';

import ProductPreviewCard from "../../molecules/ProductPreviewCard/ProductPreviewCard";
import BigFiltersBoard from "../../organisms/FiltersBoard/BigFiltersBoard";
import NavButton from "../../atoms/navItems/NavButton/NavButton";
import SmallFiltersBoard from "../../organisms/FiltersBoard/SmallFiltersBoard";


import { useAdminPage } from "../../../utils/hooks/useAdminPage";
import { useMediaWidth } from "../../../utils/hooks/useMediaWidth";
import { Product } from "../../../interfaces/Product";
import { ActiveCats, useFiltersContext } from "../../../utils/hooks/useFiltersContext";
import ProductPreviewList from "../../organisms/ProductPreviewList/ProductPreviewList";

interface ProductsSectionProps { }

// Extended ActiveCats to include machine names
interface ExtendedActiveCats extends ActiveCats {
    beautyBed: boolean;
    androidEMS: boolean;
    laserHair: boolean;
}

const ProductsSection: React.FC<ProductsSectionProps> = ({

}) => {
    const { isMobile } = useMediaWidth()
    let { priceRange, rating, activeCats, activeCatsChange, sortBy, sortByChange, searchProd, searchProdChange, clearAll } = useFiltersContext()
    let [showMobileFilters, setShowMobileFilters] = useState<boolean>(false)
    const [showSortOptions, setShowSortOptions] = useState(false);
    const { products } = useAdminPage();

    // Extended activeCats with machine names
    const extendedActiveCats = activeCats as ExtendedActiveCats;
    
    // Function to change active category for specific machine names
    const handleMachineSelect = (machineName: 'beautyBed' | 'androidEMS' | 'laserHair') => {
        const newActiveCats = {
            allproducts: false,
            nailPolish: false,
            machines: false,
            beautyBed: false,
            androidEMS: false,
            laserHair: false,
        };
        newActiveCats[machineName] = true;
        activeCatsChange(newActiveCats as unknown as ActiveCats);
    };

    let filteredproducts = useMemo(() => {
        let res = [...products];

        // Determine which category is active
        let trueCat = 'allproducts';
        let specificMachine = '';
        
        for (let key in extendedActiveCats) {
            if (extendedActiveCats[key as keyof ExtendedActiveCats]) {
                if (key === 'beautyBed' || key === 'androidEMS' || key === 'laserHair') {
                    trueCat = 'machines';
                    specificMachine = key;
                } else {
                    trueCat = key;
                }
                break;
            }
        }

        // Filter by category
        if (trueCat !== 'allproducts') {
            res = res.filter(prod => {
                let category = prod.categories[0];
                if (trueCat === 'nailPolish') return category === 'Nail Polish';
                if (trueCat === 'machines') {
                    if (specificMachine === 'beautyBed') return category === 'Machine' && prod.name.includes('Electric Beauty Bed') || prod.name.includes('Podiatry chair');
                    if (specificMachine === 'androidEMS') return category === 'Machine' && prod.name.includes('Android EMS') || prod.name.includes('RF Sculpture');
                    if (specificMachine === 'laserHair') return category === 'Machine' && prod.name.includes('LASER HAIR REMOVAL');
                    return category === 'Machine';
                }
                return category === trueCat;
            });
        }

        // Apply price filter
        if (priceRange[0] !== 0 || priceRange[1] !== 0) {
            res = res.filter(prod => {
                return prod.price >= priceRange[0] && prod.price <= priceRange[1];
            });
        }

        // Apply sort
        if (sortBy) {
            if (sortBy === 'price-asc') {
                res.sort((a, b) => a.price - b.price);
            } else if (sortBy === 'price-desc') {
                res.sort((a, b) => b.price - a.price);
            }
        }

        // Apply search filter
        if (searchProd) {
            res = res.filter(prod =>
                prod.name.toLowerCase().includes(searchProd.toLowerCase())
            );
        }

        return res;
    }, [products, priceRange, rating, activeCats, sortBy, searchProd]);

    let items = []
    console.log("Filtered Products: ", filteredproducts);
    for (let i = 0; i < filteredproducts.length; i++) {
        items.push(<ProductPreviewCard product={filteredproducts[i]} isBestSeller={false} key={i + 1} ishomepage={false} />)
    }

    useEffect(() => {
        clearAll()
    }, [])
    
    return (
        <div
            className="py-14 w-screen flex flex-col items-center overflow-y-scroll overflow-x-hidden">
            <h1
                className="font-lexend text-lg font-bold text-primary desktop:text-3xl">
                Products
            </h1>
            <p
                className="m-2 font-lexend text-center items-center text-darkgray text-xs mb-10 desktop:text-sm">
                Check the status of recent orders, manage returns, and discover similar products.
            </p>
            {
                isMobile ?
                    <div>
                        {
                            showMobileFilters ?
                                <SmallFiltersBoard
                                    closeFilter={() => setShowMobileFilters(false)}
                                    clearAll={clearAll}
                                />
                                :
                                <div>
                                    
                                        <div>

                                            <div
                                                className="px-2 text-center">
                                                <NavButton label="All products"
                                                    onClick={() => activeCatsChange({
                                                        allproducts: true,
                                                        nailPolish: false,
                                                        machines: false,
                                                    } as ActiveCats)}
                                                    isActive={extendedActiveCats.allproducts} />
                                                <NavButton label="Gel Nail Polish"
                                                    onClick={() => activeCatsChange({
                                                        allproducts: false,
                                                        nailPolish: true,
                                                        machines: false,
                                                    } as ActiveCats)}
                                                    isActive={extendedActiveCats.nailPolish} />
                                                <NavButton label="Beauty Bed"
                                                    onClick={() => handleMachineSelect('beautyBed')}
                                                    isActive={extendedActiveCats.beautyBed} />
                                                <NavButton label="Android EMS"
                                                    onClick={() => handleMachineSelect('androidEMS')}
                                                    isActive={extendedActiveCats.androidEMS} />
                                                <NavButton label="Diode Laser"
                                                    onClick={() => handleMachineSelect('laserHair')}
                                                    isActive={extendedActiveCats.laserHair} />
                                            </div>
                                            <div
                                                className="w-[90%] m-auto flex justify-around my-4">
                                                <div
                                                    onClick={() => setShowMobileFilters(true)}
                                                    className="text-xs flex items-center ">
                                                    <IoFilterSharp />
                                                    <span
                                                        className="ml-1">
                                                        Filters
                                                    </span>
                                                </div>
                                                <div
                                                    className="relative">
                                                    <div
                                                        onClick={() => setShowSortOptions(!showSortOptions)}
                                                        className="text-xs flex items-center cursor-pointer">
                                                        <BiSortAlt2 />
                                                        <span
                                                            className="ml-1">
                                                            Sort by
                                                        </span>
                                                    </div>
                                                    {showSortOptions && (
                                                        <div className="absolute bg-white whitespace-nowrap w-fit shadow-lg py-2 px-1 rounded mt-2">
                                                            <button className="text-xs block w-full text-left hover:bg-midgray" onClick={() => { sortByChange('price-asc'); setShowSortOptions(false) }}>Price: Low to High</button>
                                                            <button className="text-xs block w-full text-left hover:bg-midgray" onClick={() => { sortByChange('price-desc'); setShowSortOptions(false) }}>Price: High to Low</button>
                                                        </div>
                                                    )}
                                                </div>
                                                <div
                                                    className="text-xs flex items-center">

                                                </div>
                                            </div>
                                        </div>
                                        <div
                                        className="mx-auto w-[90%] flex my-16 justify-around items-start">
                                        {
                                            isMobile ?
                                                <></>
                                                :
                                                <div
                                                    className="w-[30%] tablet:mr-[10%] h-fit justify-between desktop:w-[20%]">
                                                    <BigFiltersBoard
                                                        clearAll={clearAll} />
                                                </div>
                                        }
            
                                        <div
                                            className="grid grid-cols-2 gap-6 tablet:w-[70%] tablet:grid-cols-3 desktop:grid-cols-4 desktop:gap-8">
                                            {
                                                items.map(e => e)
                                            }
                                        </div>
                                    </div>
                                </div>
                        }
                    </div>
                    :
                    <div>

                            <div className="flex w-[90vw] justify-between items-center m-auto">
                                <div className="grid grid-rows-1 grid-cols-6 w-fit h-[50%]">
                                    <NavButton label="All products"
                                        onClick={() => activeCatsChange({
                                            allproducts: true,
                                            nailPolish: false,
                                            machines: false,
                                        } as ActiveCats)}
                                        isActive={extendedActiveCats.allproducts} />
                                    <NavButton label="Gel Nail Polish"
                                        onClick={() => activeCatsChange({
                                            allproducts: false,
                                            nailPolish: true,
                                            machines: false,
                                        } as ActiveCats)}
                                        isActive={extendedActiveCats.nailPolish} />
                                    <NavButton label="Beauty Bed"
                                        onClick={() => handleMachineSelect('beautyBed')}
                                        isActive={extendedActiveCats.beautyBed} />
                                    <NavButton label="Android EMS"
                                        onClick={() => handleMachineSelect('androidEMS')}
                                        isActive={extendedActiveCats.androidEMS} />
                                    <NavButton label="Diode Laser"
                                        onClick={() => handleMachineSelect('laserHair')}
                                        isActive={extendedActiveCats.laserHair} />
                                </div>
                                <div className="w-[40%] flex items-center rounded-md">
                                    <FaSearch
                                        className="bg-secondary mr-2 text-sm"
                                        style={{ color: "rgb(194 111 45)" }}
                                    />
                                    <input
                                        type="text"
                                        value={searchProd}
                                        placeholder="Search product ..."
                                        className="p-2 border border-primary text-xs rounded w-[50%] desktop:text-md"
                                        onChange={searchProdChange}
                                    />
                                    <div
                                        className="relative">
                                        <button
                                            onClick={() => setShowSortOptions(!showSortOptions)}
                                            className="mx-4 p-2 text-xs flex rounded bg-lightgray desktop:text-md">
                                            Sort by
                                            <CgSortAz style={{ fontSize: "1.5rem" }} />
                                        </button>
                                        {showSortOptions && (
                                            <div className="absolute bg-white whitespace-nowrap w-fit shadow-lg py-2 px-1 rounded mt-2">
                                                <button className="text-xs block w-full text-left tablet:text-md hover:bg-midgray" onClick={() => { sortByChange('price-asc'); setShowSortOptions(false) }}>Price: Low to High</button>
                                                <button className="text-xs block w-full text-left tablet:text-md hover:bg-midgray" onClick={() => { sortByChange('price-desc'); setShowSortOptions(false) }}>Price: High to Low</button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        <div
                            className="mx-auto w-[90%] flex my-16 justify-around items-start">
                            {
                                isMobile ?
                                    <></>
                                    :
                                    <div
                                        className="w-[30%] tablet:mr-[10%] h-fit justify-between desktop:w-[20%]">
                                        <BigFiltersBoard
                                            clearAll={clearAll} />
                                    </div>
                            }

                            {
                                // (extendedActiveCats.beautyBed || extendedActiveCats.androidEMS || extendedActiveCats.laserHair) && Array.isArray(filteredproducts) && filteredproducts.length>0?
                                // <ProductPreviewList 
                                // products={filteredproducts}
                                // isBestSeller={false}
                                // ishomepage={true}
                                // gridItems={1}
                                // />
                                // :
                                <div
                                className="grid grid-cols-2 gap-6 tablet:w-[70%] tablet:grid-cols-3 desktop:grid-cols-4 desktop:gap-8">
                                    {
                                        items.map(e => e)
                                    }
                                </div>
                            }
                        </div>
                    </div>
            }
        </div>

    )
}

export default ProductsSection