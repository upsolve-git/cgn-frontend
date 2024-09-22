import { useMediaWidth } from "../utils/hooks/useMediaWidth";
import Navbar from "../ui/organisms/Navbar/Navbar";
import FooterSection from "../ui/sections/FooterSection/FooterSection";
import { useNavigate } from 'react-router-dom';
import { useCartPage } from "../utils/hooks/useCartPage";

interface OrderSuccessPageProps{}

const OrderSuccessPage:React.FC<OrderSuccessPageProps> = ()=>{
    let {isMobile} = useMediaWidth()
    let {cartItems, handleDeleteFromCart} = useCartPage();
    const navigate = useNavigate()
    let orders = [{},{}, {}, {}, {}, {}] 
    console.log("in cart", cartItems)
    return(
        <div className="bg-secondary space-y-16">
            <Navbar/>
            <p className="text-center text-primary font-bold">Thank you for your purchase!</p>
            <div className="w-[70%] border bg-white border-secondarydark rounded m-auto">
            <div className="items-center overflow-scroll"> 
                <div
                className="w-full h-fit">
                    <div>
                        
                    </div>
                </div>
                <table className="table-auto text-md border-separate border-spacing-4 w-full">
                    <thead>
                        <tr>
                            <th className="text-center">Product</th>
                            <th className="text-center">Name</th>
                            <th className="text-center">Price</th>
                            <th className="text-center">Quantity</th>
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
                                <td>${item.discounted_price}</td>
                                <td className="inline-flex justify-center items-center space-x-2 mt-4">
                                    <span>{item.quantity}</span>
                                </td>
                                {/* <td>${item.total}</td>  */}
                                <td></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
            </div>
            <FooterSection />
        </div>
    )
}

export default OrderSuccessPage