import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import PayPalButton from "../ui/organisms/Paypal/PaypalButton";

import { MdOutlineShoppingCart } from "react-icons/md";
import { LuUserCircle2 } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import { PiReceiptFill } from "react-icons/pi";
import { GrEdit } from "react-icons/gr";
import { IconContext } from 'react-icons';

import { useMediaWidth } from "../utils/hooks/useMediaWidth";
import { useCartPage } from "../utils/hooks/useCartPage";

interface CartPageProps{}

const CartPage:React.FC<CartPageProps> = ()=>{
    let {isMobile} = useMediaWidth()
    let {cartItems, handleDeleteFromCart, address, setAddress, handlePlaceOrder, handleGetOrders, stateDropdownItems, updateTaxPercent, generatePDF} = useCartPage();
    const navigate = useNavigate()
    let sumTotal = 0
    let fullPrice = 0 
    let [taxTotal , setTaxTotal] = useState<number>(0);
    const deliveryFee = 10

    const handleGenrateInvoice = async() => {
        generatePDF(fullPrice, fullPrice-sumTotal, taxTotal, deliveryFee);
    }
    for (const item of cartItems) {
        fullPrice = fullPrice + item.quantity * item.price
        sumTotal = sumTotal + item.quantity * item.discounted_price
    }

    return(
        <div className="bg-secondary space-y-16 my-6 tablet:my-8 desktop:my-12">
            {/* <Navbar /> */}
            <p className="text-center text-md text-primary font-bold tablet:text-lg desktop:text-xl">
                My Shopping Bag
            </p>
            <div
            className="grid grid-cols-1 place-items-stretch w-[90%] gap-4 m-auto text-xs tablet:grid-cols-2 tablet:text-md desktop:text-lg">
                <div className="border py-3 px-2 bg-white border-secondarydark rounded tablet:col-span-2">
                    <div className="m-auto my-3 flex justify-between tablet:w-[60%] tablet:my-6">
                        <p className="flex  text-primary font-bold ">
                            <MdOutlineShoppingCart style={{color:"rgb(194 111 45)"}} className="mt-1 mr-2"/>
                            Order summary 
                        </p>
                        <p className="flex  text-primary font-bold">Order Total : ${sumTotal}</p>
                    </div>
                    <div className="items-center overflow-scroll"> 
                        <table className="table-auto border-separate w-full">
                            <thead>
                                <tr>
                                    <th className="text-center">Product</th>
                                    <th className="text-center">Name</th>
                                    <th className="text-center">Color</th>
                                    <th className="text-center">Price</th>
                                    <th className="text-center">Quantity</th>
                                    <th className="text-center">Total</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                {cartItems.map((item) => (
                                    <tr>
                                        <td>
                                            <img src={item.images[0]} alt={item.name} className="h-16 w-16 object-cover mx-auto" />
                                        </td>
                                        <td>{item.name}</td>
                                        <td>{item.shade_name !== "NA" ? item.shade_name : ""}</td>
                                        <td>${item.discounted_price}</td>
                                        <td className="inline-flex justify-center items-center space-x-2 mt-4">
                                            <button
                                            onClick={()=>navigate(`/productDetail/${item.product_id}`)}><GrEdit /></button>
                                            <span>{item.quantity}</span>
                                        </td>
                                        <td>${(item.quantity * item.discounted_price).toFixed(2)}</td> 
                                        <td><button onClick={() => {handleDeleteFromCart(item.product_id, item.color_id);window.location.reload();}}><RiDeleteBin6Line /></button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className=" py-3 px-2 border bg-white border-secondarydark rounded">
                    <p className="flex text-primary font-bold ">
                        <LuUserCircle2 style={{color:"rgb(194 111 45)"}} className="mt-1 mr-2"/>
                        Customer information
                    </p> 
                    <div className="m-4 space-y-1">
                        <p className="">Full Name</p>
                        <input type="text" className="w-full rounded bg-lightgray" value={address.full_name} onChange={(e) => setAddress({ ...address, full_name: e.target.value })}/>
                    </div>
                    <div className="m-4 space-y-1">
                        <p className="">Address line 1</p>
                        <input type="text" className="w-full rounded bg-lightgray" value={address.address_line1} onChange={(e) => setAddress({ ...address, address_line1: e.target.value })}/>
                    </div>
                    <div className="m-4 space-y-1">
                        <p className="">Address line 2</p>
                        <input type="text" className="w-full rounded bg-lightgray" value={address.address_line2} onChange={(e) => setAddress({ ...address, address_line2: e.target.value })}/>
                    </div>

                    <div className="flex m-4 space-x-2">
                        <div className="w-[30%] space-y-1">
                            <p className="">Country</p>
                            <input type="text" className="w-full rounded bg-lightgray" value={address.country} onChange={(e) => setAddress({ ...address, country: e.target.value })}/>
                        </div>
                        <div className="w-[70%] space-y-1">
                            <p className="">Phone number</p>
                            <input type="text" className="w-full rounded bg-lightgray" value={address.mobile} onChange={(e) => setAddress({ ...address, mobile: e.target.value })}/>
                        </div>
                    </div> 
                    
                    <div className="flex m-4 space-x-2">
                        <div className="w-[40%] space-y-1">
                            <p className="font-bold">State</p>
                            <select 
                                className="w-full rounded bg-lightgray" 
                                value={address.state} 
                                onChange={(e) => {setAddress({ ...address, state: e.target.value }); setTaxTotal(Math.round(sumTotal*(updateTaxPercent(e.target.value)))/100)}}
                            >
                                {stateDropdownItems.map((state, index) => (
                                    <option key={index} value={state}>
                                        {state}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="w-[40%] space-y-1">
                            <p className="">City</p>
                            <input type="text" className="w-full rounded bg-lightgray" value={address.city} onChange={(e) => setAddress({ ...address, city: e.target.value })}/>
                        </div>
                        <div className="w-[20%] space-y-1">
                            <p className="">Pincode</p>
                            <input type="text" className="w-full rounded bg-lightgray" value={address.pincode} onChange={(e) => setAddress({ ...address, pincode: e.target.value })}/>
                        </div>
                    </div>
                    

                    <div className="flex m-4 space-x-1">
                        <input type="checkbox" checked={address.default} onChange={(e) =>{setAddress({ ...address, default: e.target.checked})}}/> <p>Save to default</p>
                    </div>

                </div>
                <div className="border py-3 px-2  bg-white border-secondarydark rounded">
                    <p className="flex text-primary font-bold ">
                        Payment method
                    </p>
                    <div>
                        <h2
                        className=' font-semibold flex items-center my-3 tablet:my-5 desktop:my-8'>
                            <IconContext.Provider
                            value={{color: '#C26F2D'}}>
                                <PiReceiptFill />
                            </IconContext.Provider>
                            Summary
                        </h2>
                        <div
                        className='my-2 flex items-center justify-between tablet:my-4 desktop:my-8'>
                            <p
                            className='text-darkgray'>Subtotal</p>
                            <p
                            className='font-semibold'>${fullPrice}</p>
                        </div>
                        <div
                        className='my-2 flex items-center justify-between tablet:my-4 desktop:my-8'>
                            <p
                            className='text-darkgray'>Discount</p>
                            <p
                            className='font-semibold'>- ${fullPrice-sumTotal}</p>
                        </div>
                        <div
                        className='my-2 flex items-center justify-between tablet:my-4 desktop:my-8'>
                            <p
                            className='text-darkgray'>Tax</p>
                            <p
                            className='font-semibold'>${taxTotal}</p>
                        </div>
                        <div
                        className='my-2 flex items-center justify-between tablet:my-4 desktop:my-8'>
                            <p
                            className='text-darkgray'>Delivery fee</p>
                            <p
                            className='font-semibold'>${deliveryFee}</p>
                        </div>
                        <div className='h-[0.07rem] bg-midgray my-6'></div>
                        <div
                        className='my-2 flex items-center justify-between tablet:my-4 desktop:my-8'>
                            <p
                            className='text-darkgray'>Total</p>
                            <p
                            className='font-semibold text-primary'>${sumTotal + taxTotal + deliveryFee}</p>
                        </div>
                        <div className='h-[0.07rem] bg-midgray my-6'></div>
                    </div>
                    <button onClick={()=>{handlePlaceOrder("123456"); handleGenrateInvoice()}}>Order</button>
                    <PayPalButton amount={sumTotal + taxTotal + deliveryFee} handleInvoice={handleGenrateInvoice} />
                </div>
            </div>
            {/* <FooterSection /> */}
        </div>
    )
}

export default CartPage