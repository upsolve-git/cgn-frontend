import React, { useState } from "react";

import { useMediaWidth } from "../utils/hooks/useMediaWidth";
import Navbar from "../ui/organisms/Navbar/Navbar";
import FooterSection from "../ui/sections/FooterSection/FooterSection";
import { MdOutlineShoppingCart } from "react-icons/md";
import { LuUserCircle2 } from "react-icons/lu";


interface CartPageProps{}

const Cart:React.FC<CartPageProps> = ()=>{
    let {isMobile} = useMediaWidth()
    
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
                    <table
                        className="table-auto text-md border-separate border-spacing-4">
                        <thead>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th></th>
                        </thead>
                        <tbody>
                            <td></td>
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

export default Cart