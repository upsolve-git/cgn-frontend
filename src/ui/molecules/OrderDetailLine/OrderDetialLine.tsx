import React from "react";

import { MdOutlineDateRange } from 'react-icons/md';
import { IconContext } from 'react-icons';

interface OrderDetailLineProps {
    icon: React.ReactNode,
    label: string,
    value: string
}

const OrderDetailLine: React.FC<OrderDetailLineProps> = ({
    icon,
    label,
    value
}) => {
    return (
        <div
        className="flex justify-between text-xs">
            <div
            className='flex items-center'>
                <div
                className='mr-1'>
                    <IconContext.Provider
                    value={{color: '#C26F2D'}}>
                        {icon}
                    </IconContext.Provider>
                </div>
                {label}
            </div>
            <p>{value}</p>
        </div>
    )
}

export default OrderDetailLine