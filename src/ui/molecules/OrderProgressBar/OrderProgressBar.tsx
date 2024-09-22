import React from "react";

interface OrderProgressBarProps{
    orderConfirmDate: Date | null
    shippedDate: Date | null
    outForDeliveryDate: Date | null,
    deliveredDate: Date | null
}

const OrderProgressBar: React.FC<OrderProgressBarProps> = ({
    orderConfirmDate,
    shippedDate,
    outForDeliveryDate,
    deliveredDate
})=>{

    let barWidth = 0
    if(orderConfirmDate){
        barWidth = 2
    }
    if(shippedDate){
        barWidth = 36
    }
    if(outForDeliveryDate){
        barWidth = 68
    }
    if(deliveredDate){
        barWidth = 100
    }

    return (
        <div
        className="text-3xs whitespace-nowrap h-fit w-[17rem] relative">
            <div
            className="absolute translate-y-[950%] translate-x-[17%] w-[76%] bg-midgray h-[0.1rem] z-20">
                <div
                style={{ width: `${barWidth}%` }} 
                className={`bg-green h-full`}></div>
            </div>
            <div
            className="flex justify-between z-30">
                <div
                className="flex flex-col items-center w-fit">
                    <p>Order placed</p>
                    <div className={`rounded-full w-fit ${orderConfirmDate?'bg-green':'bg-midgray'} p-1`}></div>
                    <p>{orderConfirmDate?orderConfirmDate.toDateString():''}</p>
                </div>
                <div
                className="flex flex-col items-center w-fit">
                    <p>Confirmed</p>
                    <div className={`rounded-full w-fit ${shippedDate?'bg-green':'bg-midgray'} p-1`}></div>
                    <p>{shippedDate?shippedDate.toDateString():''}</p>
                </div>
                <div
                className="flex flex-col items-center w-fit">
                    <p>Shipped</p>
                    <div className={`rounded-full w-fit ${outForDeliveryDate?'bg-green':'bg-midgray'} p-1`}></div>
                    <p>{outForDeliveryDate?outForDeliveryDate.toDateString():''}</p>
                </div>
                <div
                className="flex flex-col items-center w-fit">
                    <p>Delivered</p>
                    <div className={`rounded-full w-fit ${deliveredDate?'bg-green':'bg-midgray'} p-1`}></div>
                    <p>{deliveredDate?deliveredDate.toDateString():''}</p>
                </div>
            </div>
        </div>
    )
}

export default OrderProgressBar