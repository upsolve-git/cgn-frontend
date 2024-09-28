import React from "react";

interface OrderProgressBarProps{
    orderConfirmDate: String | null
    confirmedDate: String | null,
    shippedDate: String | null
    deliveredDate: String | null
    orderStatus : string
}

const OrderProgressBar: React.FC<OrderProgressBarProps> = ({
    orderConfirmDate,
    shippedDate,
    confirmedDate,
    deliveredDate,
    orderStatus
})=>{

    let barWidth = 0
    // let [confirmDate, shippedDate, deliveredDate] = [false, false, false]
    if(orderStatus === "pending"){
        barWidth = 2
    }
    if(orderStatus === "confirmed"){
        barWidth = 36
        orderConfirmDate = 'true'
    }
    if(orderStatus === "shipped"){
        barWidth = 68
        shippedDate = ''
    }
    if(orderStatus === "delivered"){
        barWidth = 100
    }

    return (
        <div
        className="text-3xs h-fit my-6">
            <div
            className="translate-y-[1050%] translate-x[10%] w-[68%] m-auto bg-midgray h-[0.1rem]">
                <div
                style={{ width: `${barWidth}%` }} 
                className={`bg-green h-full`}></div>
            </div>
            <div
            className="flex justify-between">
                {/* <div
                className="flex flex-col items-center w-fit">
                    <p>Order placed</p>
                    <div className={`rounded-full w-fit ${orderConfirmDate?'bg-green':'bg-midgray'} p-1`}></div>
                    <p>{orderConfirmDate}</p>
                </div> */}
                <div
                className="flex flex-col items-center w-fit">
                    <p>Confirmed</p>
                    <div className={`rounded-full w-fit ${confirmedDate?'bg-green':'bg-midgray'} p-1`}></div>
                    <p>{confirmedDate}</p>
                </div>
                <div
                className="flex flex-col items-center w-fit">
                    <p>Shipped</p>
                    <div className={`rounded-full w-fit ${shippedDate?'bg-green':'bg-midgray'} p-1`}></div>
                    <p>{shippedDate}</p>
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