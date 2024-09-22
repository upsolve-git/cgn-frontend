import React from "react";

import CommonButton from "../../atoms/buttons/CommonButton/CommonButton";

import { OrderLine } from "../../../interfaces/OrderLine";

interface OrderProductItemProps{
    orderProduct: OrderLine,
    setIsAddReviewOpen : (isOpen : boolean) => void,
    setproductId :  (productId:number) => void
}

const OrderProductItem: React.FC<OrderProductItemProps> = ({orderProduct, setIsAddReviewOpen, setproductId})=>{
    return(
        <div
        className="bg-white rounded-lg w-full px-2 py-1 my-3">
            <div
            className="flex justify-between items-center">
                <div
                className="w-fit flex max-w-[80%] overflow-hidden">
                    <img src="/image/wrapper/stockpolish.png" alt="" 
                    className="w-10 h-auto"/>
                    <div
                    className="text-xs tablet:text-sm flex flex-col h-full justify-between">
                        <p>{orderProduct.name}</p>
                        <p
                        className="text-xxs my-1">
                            <span
                            className="px-1 py-2 bg-lightgray rounded-full mr-[0.5rem]">x{orderProduct.quantity} items</span>
                            {orderProduct.category === "Nail Polish" && 
                                <span
                                className="px-1 py-2 bg-lightgray rounded-full mr-[0.5rem]">50ml</span>
                            }

                        </p>
                        <p>
                            ${orderProduct.price}
                        </p>
                    </div>
                </div>
                <div
                className="w-24 h-full grid grid-rows-2 grid-cols-1 gap-3">
                                    <button className="text-xs" onClick={() => {setproductId(orderProduct.product_id); setIsAddReviewOpen(true)}}>Add Review</button>
                    <CommonButton
                    label="Buy again"
                    primaryColor="primary"
                    secondaryColor="white"
                    callBack={()=>console.log('Buy again')}
                    />
                    <CommonButton 
                    label="View product"
                    primaryColor="lightgray"
                    secondaryColor="black"
                    callBack={()=>console.log('View product')}
                    />
                </div>
            </div>
        </div>
    )
}

export default OrderProductItem