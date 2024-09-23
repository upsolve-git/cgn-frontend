import React, { useState } from "react";

import ReviewsStats from "../../organisms/ReviewsStats/ReviewsStats";
import ReviewsPreview from "../../organisms/ReviewsPreview/ReviewsPreview";
import { FaChevronRight } from "react-icons/fa6";

import { useMediaWidth } from "../../../utils/hooks/useMediaWidth";
import { useAdminPage } from "../../../utils/hooks/useAdminPage";
import { useCartPage } from "../../../utils/hooks/useCartPage";
import { Order } from "../../../interfaces/Order";
import OrderProductItem from "../../molecules/OrderProductItem/OrderProductItem";
import CommonButton from "../../atoms/buttons/CommonButton/CommonButton";

interface OrderDetailSectionProps{
    order : Order,
}

const OrderDetail: React.FC<OrderDetailSectionProps> = ({order})=>{

    let {isMobile} = useMediaWidth()
    let [expand, setExpand] = useState<boolean>(false);
    const formattedDate = new Date(order.creation_date.toString())
    formattedDate.setDate(formattedDate.getDate() + 7)

    const dummyFunc = async() => {

    }

      const deliveryDate = formattedDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      console.log("formatted date",formattedDate)
    return(
        <div className='w-[70%] border bg-white border-secondarydark rounded m-4 mx-auto'>
             
            <div className="mx-8 my-6 flex justify-between items-center">
                <div className="flex items-center">
                    <p className="mx-2 font-bold text-md">Order #{order.order_id}</p>
                    {order.status === "delivered" && 
                        <p className="text-xs my-1 text-gray-500">Delivered on {deliveryDate}</p>
                    } 
                    {order.status !== "delivered" && 
                        <p className="text-xs">Delivery on {deliveryDate}</p>
                    }
                </div>
                <div className="flex items-center space-x-4">
                    <CommonButton label="Confirm" primaryColor="primary" secondaryColor="white" callBack={dummyFunc} />
                    {
                        !expand && <button onClick={()=> setExpand(true)}><FaChevronRight className="text-xs"/></button>
                    } 
                    {
                        expand && <button onClick={() => setExpand(false)}><FaChevronRight style={{ transform: 'rotate(90deg)' }} className="text-xs mt-1" /></button>
                    }
                </div>
            </div>
            
            { expand && 
                 <div
                    className='w-full m-4 max-h-[20vh]'>
                    {
                        // order.products.map(item=><OrderProductItem setproductId={setproductId}  orderProduct={item} setIsAddReviewOpen={setIsAddReviewOpen}/>)
                    }
                    </div>
            } 
        </div>
    )
}

export default OrderDetail