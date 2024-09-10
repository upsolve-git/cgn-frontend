import { useMediaWidth } from "../utils/hooks/useMediaWidth";
import Navbar from "../ui/organisms/Navbar/Navbar";
import FooterSection from "../ui/sections/FooterSection/FooterSection";
import { MdOutlineShoppingCart } from "react-icons/md";
import { LuUserCircle2 } from "react-icons/lu";
import { useAdminPage } from "../utils/hooks/useAdminPage";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GrEdit } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';

interface CartPageProps{}

const CartPage:React.FC<CartPageProps> = ()=>{
    let {isMobile} = useMediaWidth()
    let {cartItems, handleDeleteFromCart} = useAdminPage();
    const navigate = useNavigate()

    console.log("in cart", cartItems)
    return(
        <div className="bg-secondary space-y-16">
            <Navbar/>
            <p className="text-center text-primary font-bold">My Shopping Bag </p>

            <div space-y-4>
                <div className="border my-4 bg-white border-secondarydark rounded mx-10">
                    <p className="m-4 flex text-primary font-bold ">
                        <MdOutlineShoppingCart style={{color:"rgb(194 111 45)"}} className="mt-1 mr-2"/>
                        Order summary 
                    </p> 
                    <div className="items-center overflow-scroll"> 
                    <table className="table-auto text-md border-separate border-spacing-4 w-full">
                        <thead>
                            <tr>
                                <th className="text-center">Product</th>
                                <th className="text-center">Name</th>
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
                                        <img src={item.image} alt={item.name} className="h-16 w-16 object-cover mx-auto" />
                                    </td>
                                    <td>{item.name}</td>
                                    <td>${item.price}</td>
                                    <td className="inline-flex justify-center items-center space-x-2 mt-4">
                                        <button
                                        onClick={()=>navigate(`/productDetail/${item.product_id}`)}><GrEdit /></button>
                                        <span>{item.quantity}</span>
                                    </td>
                                    <td>${(item.quantity * item.price).toFixed(2)}</td> 
                                    <td><button onClick={() => {handleDeleteFromCart(item.product_id);window.location.reload();}}><RiDeleteBin6Line /></button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    </div>
                </div>
                <div className="flex mx-10 space-x-4 "> 
                    <div className="w-[60%] border my-4 bg-white border-secondarydark rounded">
                        <p className="m-4 flex text-primary font-bold ">
                            <LuUserCircle2 style={{color:"rgb(194 111 45)"}} className="mt-1 mr-2"/>
                            Customer information
                        </p> 
                        { !isMobile && <div className="flex m-4 space-x-2">
                            <div className="w-[60%] space-y-1">
                                <p className="font-bold text-xs">Full name</p>
                                <input type="text" className="w-full rounded bg-lightgray"/>
                            </div>
                            <div className="w-[40%] space-y-1">
                                <p className="font-bold text-xs">Phone number</p>
                                <input type="text" className="w-full rounded bg-lightgray"/>
                            </div>
                        </div> }
                        { isMobile && <div className="flex-col m-4">
                            <div className="space-y-1">
                                <p className="font-bold text-xs">Full name</p>
                                <input type="text" className="w-full rounded bg-lightgray"/>
                            </div>
                            <div className="space-y-1">
                                <p className="font-bold text-xs">Phone number</p>
                                <input type="text" className="w-full rounded bg-lightgray"/>
                            </div>
                        </div> }
                        <div className="m-4 space-y-1">
                            <p className="font-bold text-xs">Address</p>
                            <input type="text" className="w-full rounded bg-lightgray"/>
                        </div> 
                        <div className="flex m-4 text-xs space-x-1">
                            <input type="checkbox"/> <p>Save to default</p>
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