import React, { useEffect, useState } from "react";

import { useMediaWidth } from "../utils/hooks/useMediaWidth";
import Navbar from "../ui/organisms/Navbar/Navbar";
import FooterSection from "../ui/sections/FooterSection/FooterSection";
import { MdOutlineShoppingCart } from "react-icons/md";
import { LuUserCircle2 } from "react-icons/lu";
import { useAdminPage } from "../utils/hooks/useAdminPage";
import { CartItem } from "../interfaces/CartItem";
import { Product } from "../interfaces/Product";
import { Cart } from "../interfaces/Cart";


interface CartPageProps{}

export const useCartPage = () => {

}

const CartPage:React.FC<CartPageProps> = ()=>{
    let {isMobile} = useMediaWidth()
    let {cart} = useAdminPage();
    console.log("in cart", cart)
    return(
        <div className="bg-secondary space-y-16">
            <Navbar/>
            <p className="text-center text-primary font-bold">My Shopping Bag ({2} Items)</p>

            <div space-y-4>
                <div className="border my-4 bg-white border-secondarydark rounded mx-10">
                    <p className="m-4 flex text-primary font-bold ">
                        <MdOutlineShoppingCart style={{color:"rgb(194 111 45)"}} className="mt-1 mr-2"/>
                        Order summary 
                    </p> 
                    <div className=" items-center"> 
                    <table className="table-auto text-md border-separate border-spacing-4 w-full">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.items.map((item: CartItem, index: number) => (
                                <tr key={index}>
                                    <td>
                                        <img src={item.image} alt={item.name} className="h-16 w-16 object-cover" />
                                    </td>
                                    <td>{item.name}</td>
                                    <td>${item.price.toFixed(2)}</td>
                                    <td>{item.quantity}</td>
                                    <td>${item.total.toFixed(2)}</td>
                                    
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    </div>
                </div>
                <div className="flex mx-10 space-x-4"> 
                    <div className="w-[60%] border my-4 bg-white border-secondarydark rounded">
                        <p className="m-4 flex text-primary font-bold ">
                            <LuUserCircle2 style={{color:"rgb(194 111 45)"}} className="mt-1 mr-2"/>
                            Customer information
                        </p> 
                        <div className="flex m-4 space-x-2">
                            <div className="w-[60%] space-y-1">
                                <p className="font-bold text-xs">Full name</p>
                                <input type="text" className="w-full rounded bg-lightgray"/>
                            </div>
                            <div className="w-[40%] space-y-1">
                                <p className="font-bold text-xs">Phone number</p>
                                <input type="text" className="w-full rounded bg-lightgray"/>
                            </div>
                        </div> 
                        <div className="m-4 space-y-1">
                                <p className="font-bold text-xs">Address</p>
                                <input type="text" className="w-full rounded bg-lightgray"/>
                            </div>
                    </div>
                    <div className="w-[40%] border my-4 bg-white border-secondarydark rounded">
                        <p className="m-4 flex text-primary font-bold ">
                            Payment method
                        </p>
                    </div>
                </div>
            </div>

            <FooterSection />
        </div>
    )
}

export default CartPage