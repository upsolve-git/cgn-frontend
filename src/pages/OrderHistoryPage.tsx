import { useMediaWidth } from "../utils/hooks/useMediaWidth";
import Navbar from "../ui/organisms/Navbar/Navbar";
import FooterSection from "../ui/sections/FooterSection/FooterSection";
import { MdOutlineShoppingCart } from "react-icons/md";
import { LuUserCircle2 } from "react-icons/lu";
import { useAdminPage } from "../utils/hooks/useAdminPage";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GrEdit } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';
import OrderDetailSection from "../ui/sections/OrderSection/OrderDetailSection";
import { useState } from "react";
import ManageOrder from "../ui/sections/OrderSection/ManageOrder";
import AddReview from "../ui/sections/OrderSection/AddReview";
import { useCartPage } from "../utils/hooks/useCartPage";

interface OrderHistoryPageProps{}

const OrderHistoryPage:React.FC<OrderHistoryPageProps> = ()=>{
    let {isMobile} = useMediaWidth()
    let {cartItems, handleDeleteFromCart} = useCartPage();
    const navigate = useNavigate()
    const dummyOrderStatus = {
        orderId: '123456789000000',
        orderProducts: [
            {
                productName: 'Lorem ipsum',
                size: '20ml',
                quantity: 10,
                price: 2000
            },
            {
                productName: 'Lorem ipsum',
                size: '20ml',
                quantity: 10,
                price: 2000
            },
            {
                productName: 'Lorem ipsum',
                size: '20ml',
                quantity: 10,
                price: 2000
            },
            {
                productName: 'Lorem ipsum',
                size: '20ml',
                quantity: 10,
                price: 2000
            },
            {
                productName: 'Lorem ipsum',
                size: '20ml',
                quantity: 10,
                price: 2000
            },
            {
                productName: 'Lorem ipsum',
                size: '20ml',
                quantity: 10,
                price: 2000
            },
            {
                productName: 'Lorem ipsum',
                size: '20ml',
                quantity: 10,
                price: 2000
            },
            {
                productName: 'Lorem ipsum',
                size: '20ml',
                quantity: 10,
                price: 2000
            },
        ],
        orderDate: new Date(2024, 11, 25),
        orderConfirmDate: new Date(2024, 11, 25),
        shippedDate: null,
        outForDeliveryDate: null,
        etaDate: new Date(2024, 11, 25),
        deliveredDate: null
    }
    let orders = [{},{}, {}, {}, {}, {}] 
    const [isManageOrderOpen, setIsManageOrderOpen] = useState(false);
    const [isAddReviewOpen, setIsAddReviewOpen] = useState(false);
    let [id, setId] = useState(1)

    const openPopup = () => setIsManageOrderOpen(true);
    const closePopup = () => setIsManageOrderOpen(false);
    let items = []
    for(let i=0;i<orders.length;i++){
        items.push(<OrderDetailSection order="" id={i} setId={setId} setIsManageOrderOpen={setIsManageOrderOpen} setIsAddReviewOpen={setIsAddReviewOpen}/>)
    }
    return(
        <div>
            <div className={`bg-secondary space-y-16 relative ${isManageOrderOpen || isAddReviewOpen? 'blur-sm' : ''}`}>
            <Navbar/>
            <p className="text-center text-primary font-bold">Purchase history</p>
            {
                items.map(e=>e)
            }
            <FooterSection />

        </div>
        <ManageOrder isOpen={isManageOrderOpen} onClose={() => setIsManageOrderOpen(false)} orderStatus={dummyOrderStatus}/>
        <AddReview isOpen={isAddReviewOpen} onClose={() => setIsAddReviewOpen(false)} />
        </div>
        
    )
}

export default OrderHistoryPage