import React, { useState } from "react";

import Navbar from "../ui/organisms/Navbar/Navbar";
import { useMediaWidth } from "../utils/hooks/useMediaWidth";
import { useAdminPage } from "../utils/hooks/useAdminPage";
import ProductPreviewList from "../ui/organisms/ProductPreviewList/ProductPreviewList";
import ArrowButton from "../ui/atoms/buttons/ArrowButton/ArrowButton";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa6";
import FooterSection from "../ui/sections/FooterSection/FooterSection";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ReviewsSection from "../ui/sections/ReviewsSection/ReviewsSection";


interface ProductDetailPageProps{}

const ProductDetailPage:React.FC<ProductDetailPageProps> = ()=>{
    const { id } = useParams<{ id: string }>(); // This will capture the `id` from the URL
    const navigate = useNavigate()

    let {isMobile} = useMediaWidth()
    let {products, handleAddToCart} = useAdminPage()
    let colors = ["green", "red"]
    let product = products.find(product => product.product_id === Number(id)) || products[1]
    const [quantity, setQuantity] = useState<number>(1);

    const increaseQuantity = () => {
        setQuantity(prevQuantity => {
            if (prevQuantity < 14) {
                return prevQuantity + 1;
            }
            return prevQuantity;
        });
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return(
        <div
        className="overflow-scroll bg-secondary">
            <Navbar />
            {products.length &&  (
            <div>
                <div className="grid grid-cols-1 place-items-center tablet:grid-cols-2 tablet:m-20">
                    <div> 
                        <div
                        className="h-full w-fit flex bg-secondarylight rounded-t-full px-10 m-auto p-16">
                            <img src={product.product_imgs_id||undefined} alt="/image/stockpolish.png" className="h-[300px] w-auto m-auto"/>
                        </div>
                    </div> 
                    <div className="text-center w-[80%] tablet:text-left"> 
                        <h1 className="font-bold text-xl mb-4">{product.name}</h1>
                        <h2 className="mb-3">{product.description}</h2> 
                        <p className="mb-6">
                        <span
                        className="text-md text-primary font-semibold desktop:text-xl pr-4">
                            ${product.discounted_price_percentage}
                        </span>
                        <span
                        className="text-darkgray text-xs desktop:text-md m">
                            <s>${product.price}</s>
                        </span>
                        </p> 

                        <p className="flex mb-4 justify-center tablet:justify-start">
                            <p className="font-bold mr-1">368</p> 
                            <p className="text-darkgray mr-24">reviews</p> 
                            <p className="font-bold mr-1">86</p>
                            <p className="text-darkgray mr-24">sold</p> 
                        </p> 

                        <p className="flex mb-4 justify-center tablet:justify-start">
                            <IoIosCheckmarkCircleOutline style={{color:"green", fontSize:"2em"}} className="mr-2"/> 
                            <p className="mt-1">Free shipping on orders over $49USD</p>
                        </p>

                        <label className="font-bold text-sm">Choose color</label>
                        <select className="w-full border rounded-md px-3 py-2 mb-4 bg-secondarylight">
                        <option>Color</option>
                        {colors.map(option => (
                            <option>
                            {option}
                            </option>
                        ))}
                        </select> 

                        <label className="font-bold text-sm">Quantity</label>
                        <div className="flex items-center justify-center mb-4 tablet:justify-start"> 
                            <button
                                className="w-8 h-8 bg-secondarylight rounded flex items-center justify-center text-lg font-bold hover:bg-gray-300 disabled:bg-gray-100"
                                onClick={decreaseQuantity}
                                disabled={quantity <= 1}
                            >
                                -
                            </button>
                            <span className="mx-3 text-lg font-bold">{quantity}</span>
                            <button
                                className="w-8 h-8 bg-secondarylight rounded flex items-center justify-center text-lg font-bold hover:bg-gray-300 disabled:bg-gray-100"
                                onClick={increaseQuantity}
                                disabled={quantity >= 10}
                            >
                                +
                            </button>
                        </div>

                        <div className="flex space-x-4">
                            <button
                            className="h-full w-[50%] bg-white flex items-center justify-center text-md text-primary"
                            onClick={()=> handleAddToCart(product, quantity)}>
                                <FaCartPlus style={{color:" rgb(194 111 45)"}} className="mr-2"/>
                                Add to Cart
                            </button>
                            <button
                            className="h-full w-[50%] bg-primary flex items-center justify-center text-md text-white"
                            onClick={()=> navigate('/cart')}>
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>  
                <p className="text-primary font-bold text-center my-20">Related products</p>
                <div
                className="h-fit flex justify-evenly items-center m-8">
                    {!isMobile&&<ArrowButton 
                    rotation={'180'}/>}
                    {products.length && <ProductPreviewList 
                    products={products}
                    isBestSeller={true}/>}
                    {!isMobile&&<ArrowButton 
                    rotation={'0'}/>}
                </div>
            </div>)}
            <ReviewsSection />
            <FooterSection />
        </div>
    )
}

export default ProductDetailPage