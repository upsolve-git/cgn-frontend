import React from "react";

// import ProductCard from "../../molecules/ProductCard/ProductCard";
import ProductPreviewCard from "../../molecules/ProductPreviewCard/ProductPreviewCard";
import BigFiltersBoard from "../../organisms/FiltersBoard/BigFiltersBoard";

interface ProductsSectionProps{}

const ProductsSection: React.FC<ProductsSectionProps> = () => {

    const data = [
        {
            name:'Lorem',
            description: "Lorem Ipsum Dolor Sit Amet! Vango vainko pettuko",
            isBestSeller: true
        },
        {
            name:'Lorem',
            description: "Lorem Ipsum Dolor Sit Amet! Vango vainko pettuko",
            isBestSeller: true
        },
        {
            name:'Lorem',
            description: "Lorem Ipsum Dolor Sit Amet! Vango vainko pettuko",
            isBestSeller: true
        },
        {
            name:'Lorem',
            description: "Lorem Ipsum Dolor Sit Amet! Vango vainko pettuko",
            isBestSeller: true
        },
        {
            name:'Lorem',
            description: "Lorem Ipsum Dolor Sit Amet! Vango vainko pettuko",
            isBestSeller: true
        },
        {
            name:'Lorem',
            description: "Lorem Ipsum Dolor Sit Amet! Vango vainko pettuko",
            isBestSeller: true
        }
    ]

    return(
        <div
        className="pt-6 pb-10 w-screen flex flex-col items-center">
            <h1
            className="font-lexend text-md font-bold text-primary tablet:text-lg">
                Products
            </h1>
            <p
            className="font-lexend text-darkgray text-4xs tablet:text-3xs">
                Check the status of recent orders, manage returns, and discover similar products.
            </p>
            <div
            className="flex justify-evenly mx-[1%] my-[5%]">
                <BigFiltersBoard />
                <div
                className="mx-4 my-4 grid grid-cols-2 grid-rows-auto gap-4 tablet:grid-cols-3 desktop:grid-cols-4">
                    {
                        data.map((item, index)=>{
                            return <ProductPreviewCard
                                    key={index} 
                                    name={item.name}
                                    description={item.description}
                                    isBestSeller={item.isBestSeller}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductsSection