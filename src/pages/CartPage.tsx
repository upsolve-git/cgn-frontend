import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


import { MdOutlineShoppingCart } from "react-icons/md";
import { LuUserCircle2 } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import { PiReceiptFill } from "react-icons/pi";
import { GrEdit } from "react-icons/gr";
import { IconContext } from 'react-icons';

import { useCartPage } from "../utils/hooks/useCartPage";
import OrderProductItem from '../ui/molecules/OrderProductItem/OrderProductItem';
import PaymentDetailsSection from '../ui/sections/PaymentDetialsSection/PaymentDetailsSection';

interface CartPageProps { }

const CartPage: React.FC<CartPageProps> = () => {
    let { cartItems, handleDeleteFromCart, 
        address, setAddress, handlePlaceOrder, 
        handleGetOrders, stateDropdownItems, 
        updateTaxPercent, generatePDF ,
        isAddressValid
    } = useCartPage();
    const navigate = useNavigate()
    let sumTotal = 0
    let fullPrice = 0
    let [taxTotal, setTaxTotal] = useState<number>(0);
    const deliveryFee = 0

    const handleGenrateInvoice = async () => {
        generatePDF(fullPrice, fullPrice - sumTotal, taxTotal, deliveryFee);
    }
    for (const item of cartItems) {
        fullPrice = fullPrice + item.quantity * item.price
        if(localStorage.getItem('isMember')==='true'){
            console.log('its a business profile')
            sumTotal = sumTotal + item.quantity * item.discounted_business_price
        }else{
            console.log('not business profile')
            sumTotal = sumTotal + item.quantity * item.price
        }
    }

    return (
        <div className="bg-secondary space-y-16 my-6 tablet:my-8 desktop:my-12">
            {/* <Navbar /> */}
            <p className="text-center text-md text-primary font-bold tablet:text-lg desktop:text-xl">
                My Shopping Bag
            </p>
            <div
                className="grid grid-cols-1 place-items-stretch w-[90%] gap-4 m-auto text-xs tablet:grid-cols-2 tablet:text-md desktop:text-lg">
                <div className="border py-3 px-2 bg-white border-secondarydark rounded tablet:col-span-2">
                    <div className="m-auto my-3 flex justify-between tablet:w-[60%] tablet:my-6">
                        <p className="flex text-primary font-bold">
                            <MdOutlineShoppingCart style={{ color: "rgb(194 111 45)" }} className="mt-1 mr-2" />
                            Order summary
                        </p>
                        <p className="flex text-primary font-bold">Order Total : ${sumTotal}</p>
                    </div>

                    <div className="items-center overflow-x-auto min-h-[160px]"> 
                        {
                            cartItems.map(item=>{
                                console.log('item')
                                return <OrderProductItem 
                                orderProduct={item}
                                deleteProduct={() => { handleDeleteFromCart(item.product_id, item.color_id) }}
                                />
                            })
                        }
                    </div>
                </div>


                <div className="p-8 border bg-white border-secondarydark rounded space-y-4">
                    <p className="flex text-primary font-bold ">
                        <LuUserCircle2 style={{ color: "rgb(194 111 45)" }} className="mt-1 mr-2" />
                        Customer information
                    </p>
                    <div className="space-y-1">
                        <p className="text-md">Full Name</p>
                        <input type="text" className="w-full rounded bg-lightgray" value={address.full_name} onChange={(e) => setAddress({ ...address, full_name: e.target.value })} />
                    </div>
                    <div className="space-y-1">
                        <p className="text-md">Address line 1</p>
                        <input type="text" className="w-full rounded bg-lightgray" value={address.address_line1} onChange={(e) => setAddress({ ...address, address_line1: e.target.value })} />
                    </div>
                    <div className="space-y-1">
                        <p className="text-md">Address line 2</p>
                        <input type="text" className="w-full rounded bg-lightgray" value={address.address_line2} onChange={(e) => setAddress({ ...address, address_line2: e.target.value })} />
                    </div>

                    <div className="flex space-x-2">
                        <div className="w-[30%] space-y-1">
                            <p className="text-md">Country</p>
                            <input type="text" className="w-full rounded bg-lightgray" value={address.country} onChange={(e) => setAddress({ ...address, country: e.target.value })} />
                        </div>
                        <div className="w-[70%] space-y-1">
                            <p className="text-md">Phone number</p>
                            <input type="text" className="w-full rounded bg-lightgray" value={address.mobile} onChange={(e) => setAddress({ ...address, mobile: e.target.value })} />
                        </div>
                    </div>

                    <div className="flex space-x-2">
                        <div className="w-[40%] space-y-1">
                            <p className=" text-md">Province</p>
                            <select
                                className="w-full rounded bg-lightgray text-md"
                                value={address.state}
                                onChange={(e) => { setAddress({ ...address, state: e.target.value }); setTaxTotal(Math.round(sumTotal * (updateTaxPercent(e.target.value))) / 100) }}
                            >
                                {stateDropdownItems.map((state, index) => (
                                    <option key={index} value={state}>
                                        {state}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="w-[40%] space-y-1">
                            <p className="text-md">City</p>
                            <input type="text" className="w-full rounded bg-lightgray" value={address.city} onChange={(e) => setAddress({ ...address, city: e.target.value })} />
                        </div>
                        <div className="w-[20%] space-y-1">
                            <p className="text-md">Postal Code</p>
                            <input type="text" className="w-full rounded bg-lightgray" value={address.pincode} onChange={(e) => setAddress({ ...address, pincode: e.target.value })} />
                        </div>
                    </div>


                    <div className="flex space-x-1">
                        <input type="checkbox" checked={address.default} onChange={(e) => { setAddress({ ...address, default: e.target.checked }) }} /> <p className='text-md'>Save to default</p>
                    </div>

                </div>
                <div className="border  bg-white border-secondarydark rounded p-8">
                    <p className="flex text-primary font-bold ">
                        Payment method
                    </p>
                    <div>
                        <h2
                            className=' font-semibold text-md flex items-center my-3 tablet:my-5 desktop:my-8 '>
                            <IconContext.Provider
                                value={{ color: '#C26F2D' }}>
                                <PiReceiptFill />
                            </IconContext.Provider>
                            Summary
                        </h2>
                        <div
                            className='my-2 flex items-center justify-between tablet:my-4 desktop:my-8'>
                            <p
                                className='text-darkgray text-md'>Subtotal</p>
                            <p
                                className='font-semibold text-md' >${fullPrice}</p>
                        </div>
                        <div
                            className='my-2 flex items-center justify-between tablet:my-4 desktop:my-8'>
                            <p
                                className='text-darkgray text-md'>Discount</p>
                            <p
                                className='font-semibold text-md'>- ${fullPrice - sumTotal}</p>
                        </div>
                        <div
                            className='my-2 flex items-center justify-between tablet:my-4 desktop:my-8'>
                            <p
                                className='text-darkgray text-md'>Tax</p>
                            <p
                                className='font-semibold text-md'>${taxTotal}</p>
                        </div>
                        <div
                            className='my-2 flex items-center justify-between tablet:my-4 desktop:my-8'>
                            <p
                                className='text-darkgray text-md'>Delivery fee</p>
                            <p
                                className='font-semibold text-md'>${deliveryFee}</p>
                        </div>
                        <div className='h-[0.07rem] bg-midgray my-6'></div>
                        <div
                            className='my-2 flex items-center justify-between tablet:my-4 desktop:my-8'>
                            <p
                                className='text-darkgray text-md'>Total</p>
                            <p
                                className='font-semibold text-primary text-md'>${sumTotal + taxTotal + deliveryFee}</p>
                        </div>
                        <div className='h-[0.07rem] bg-midgray my-6'></div>
                    </div>

                    {/* <button onClick={() => { handlePlaceOrder("123456"); handleGenrateInvoice() }}>Order</button> */}
                    {/* <PaymentButton/> */}
                    <PaymentDetailsSection 
                    totalAmount={sumTotal + taxTotal + deliveryFee}
                    placeOrderHandler={handlePlaceOrder}
                    handleInvoice={handleGenrateInvoice}
                    isAddressValid={isAddressValid}
                    />
                </div>
            </div>
            {/* <FooterSection /> */}
        </div>
    )
}

export default CartPage