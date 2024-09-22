import { useMediaWidth } from "../utils/hooks/useMediaWidth";
import Navbar from "../ui/organisms/Navbar/Navbar";
import FooterSection from "../ui/sections/FooterSection/FooterSection";
import { MdOutlineShoppingCart } from "react-icons/md";
import { LuUserCircle2 } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GrEdit } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';
import { useCartPage } from "../utils/hooks/useCartPage";
import PayPalButton from "../ui/organisms/Paypal/PaypalButton";

interface CartPageProps{}

const CartPage:React.FC<CartPageProps> = ()=>{
    let {isMobile} = useMediaWidth()
    let {cartItems, handleDeleteFromCart, address, setAddress, handlePlaceOrder, handleGetOrders} = useCartPage();
    const navigate = useNavigate()
    let sumTotal = 0; 
    for (const item of cartItems) {
        console.log(item.total)
        sumTotal = sumTotal + item.quantity * item.discounted_price
    }

    console.log("in cart", cartItems)
    return(
        <div className="bg-secondary space-y-16">
            <Navbar/>
            <p className="text-center text-primary font-bold">My Shopping Bag </p>

            <div space-y-4>
                <div className="border my-4 bg-white border-secondarydark rounded mx-10">
                    <div className="flex justify-between">
                    <p className="m-4 flex text-primary font-bold ">
                        <MdOutlineShoppingCart style={{color:"rgb(194 111 45)"}} className="mt-1 mr-2"/>
                        Order summary 
                    </p> 
                    <p className="m-4 flex text-primary font-bold">Order Total : ${sumTotal}</p>
                    </div>
                    <div className="items-center overflow-scroll"> 
                    <table className="table-auto text-md border-separate border-spacing-4 w-full">
                        <thead>
                            <tr>
                                <th className="text-center">Product</th>
                                <th className="text-center">Name</th>
                                <th className="text-center">Color</th>
                                <th className="text-center">Price</th>
                                <th className="text-center">Quantity</th>
                                <th className="text-center">Total</th>
                                <th></th>
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
                            {/* <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>total : ${sumTotal}</td>
                                <td></td>
                                <td></td>
                            </tr> */}
                        </tbody>
                    </table>
                    </div>
                </div>
                <div className="flex mx-10 space-x-4 "> 
                    <div className="w-[50%] border my-4 bg-white border-secondarydark rounded">
                        <p className="m-4 flex text-primary font-bold ">
                            <LuUserCircle2 style={{color:"rgb(194 111 45)"}} className="mt-1 mr-2"/>
                            Customer information
                        </p> 
                        <div className="m-4 space-y-1">
                            <p className="font-bold text-xs">Ful Name</p>
                            <input type="text" className="w-full rounded bg-lightgray" value={address.full_name} onChange={(e) => setAddress({ ...address, full_name: e.target.value })}/>
                        </div>
                        <div className="m-4 space-y-1">
                            <p className="font-bold text-xs">Address line 1</p>
                            <input type="text" className="w-full rounded bg-lightgray" value={address.address_line1} onChange={(e) => setAddress({ ...address, address_line1: e.target.value })}/>
                        </div>
                        <div className="m-4 space-y-1">
                            <p className="font-bold text-xs">Address line 2</p>
                            <input type="text" className="w-full rounded bg-lightgray" value={address.address_line2} onChange={(e) => setAddress({ ...address, address_line2: e.target.value })}/>
                        </div>

                        <div className="flex m-4 space-x-2">
                            <div className="w-[30%] space-y-1">
                                <p className="font-bold text-xs">Country</p>
                                <input type="text" className="w-full rounded bg-lightgray" value={address.country} onChange={(e) => setAddress({ ...address, country: e.target.value })}/>
                            </div>
                            <div className="w-[70%] space-y-1">
                                <p className="font-bold text-xs">Phone number</p>
                                <input type="text" className="w-full rounded bg-lightgray" value={address.mobile} onChange={(e) => setAddress({ ...address, mobile: e.target.value })}/>
                            </div>
                        </div> 
                        
                        <div className="flex m-4 space-x-2">
                            <div className="w-[40%] space-y-1">
                                <p className="font-bold text-xs">State</p>
                                <input type="text" className="w-full rounded bg-lightgray" value={address.state} onChange={(e) => setAddress({ ...address, state: e.target.value })}/>
                            </div>
                            <div className="w-[40%] space-y-1">
                                <p className="font-bold text-xs">City</p>
                                <input type="text" className="w-full rounded bg-lightgray" value={address.city} onChange={(e) => setAddress({ ...address, city: e.target.value })}/>
                            </div>
                            <div className="w-[20%] space-y-1">
                                <p className="font-bold text-xs">Pincode</p>
                                <input type="text" className="w-full rounded bg-lightgray" value={address.pincode} onChange={(e) => setAddress({ ...address, pincode: e.target.value })}/>
                            </div>
                        </div>
                        

                        <div className="flex m-4 text-xs space-x-1">
                            <input type="checkbox" checked={address.default} onChange={(e) =>{setAddress({ ...address, default: e.target.checked})}}/> <p>Save to default</p>
                        </div>

                    </div>
                    <div className="w-[50%] border my-4 bg-white border-secondarydark rounded">
                        <p className="m-4 flex text-primary font-bold ">
                            Payment method
                        </p>
                        <button onClick={()=>handlePlaceOrder("123456")}>Order</button>
                        <PayPalButton amount={sumTotal}/>
                    </div>
                </div>
            </div>

            <FooterSection />
        </div>
    )
}

export default CartPage