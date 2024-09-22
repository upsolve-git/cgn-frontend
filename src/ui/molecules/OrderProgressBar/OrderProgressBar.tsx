import React from "react";

interface OrderProgressBarProps{
    orderConfirmDate: String | null
    shippedDate: String | null
    outForDeliveryDate: String | null,
    deliveredDate: String | null
}

const OrderProgressBar: React.FC<OrderProgressBarProps> = ({
    orderConfirmDate,
    shippedDate,
    outForDeliveryDate,
    deliveredDate
})=>{

    const barWidth = 0

    return (
        <div
        className="text-xxs h-fit w-[20rem] relative">
            <div
            className="absolute translate-y-[1450%] translate-x-[17%] w-[79%] bg-midgray h-[0.1rem] z-20">
                <div
                style={{ width: `${barWidth}%` }} 
                className={`bg-green h-full`}></div>
            </div>
            <div
            className="flex w-full justify-between z-30">
                <div
                className="flex flex-col items-center w-fit">
                    <p>Order confirmed</p>
                    <div className={`rounded-full w-fit ${orderConfirmDate?'bg-green':'bg-midgray'} p-1`}></div>
                    <p>{orderConfirmDate}</p>
                </div>
                <div
                className="flex flex-col items-center w-fit">
                    <p>Shipped</p>
                    <div className={`rounded-full w-fit ${shippedDate?'bg-green':'bg-midgray'} p-1`}></div>
                    <p>{shippedDate}</p>
                </div>
                <div
                className="flex flex-col items-center w-fit">
                    <p>Out for delivery</p>
                    <div className={`rounded-full w-fit ${outForDeliveryDate?'bg-green':'bg-midgray'} p-1`}></div>
                    <p>{outForDeliveryDate}</p>
                </div>
                <div
                className="flex flex-col items-center w-fit">
                    <p>Delivered</p>
                    <div className={`rounded-full w-fit ${deliveredDate?'bg-green':'bg-midgray'} p-1`}></div>
                    <p>{deliveredDate}</p>
                </div>
            </div>
        </div>
    )
}

export default OrderProgressBar