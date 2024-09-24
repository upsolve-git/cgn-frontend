import { useNavigate } from 'react-router-dom';

import Navbar from "../ui/organisms/Navbar/Navbar";
import FooterSection from "../ui/sections/FooterSection/FooterSection";
import OrderDetailLine from '../ui/molecules/OrderDetailLine/OrderDetialLine';

import { MdOutlineDateRange } from 'react-icons/md';
import { LuUserCircle2 } from "react-icons/lu";
import { TbInvoice } from "react-icons/tb";
import { BiDollar } from "react-icons/bi";

import { useMediaWidth } from "../utils/hooks/useMediaWidth";
import { useCartPage } from "../utils/hooks/useCartPage";
import OrderProductItem from '../ui/molecules/OrderProductItem/OrderProductItem';

interface OrderSuccessPageProps { }

const OrderSuccessPage: React.FC<OrderSuccessPageProps> = () => {
    let { isMobile } = useMediaWidth()
    let { cartItems, handleDeleteFromCart } = useCartPage();
    const navigate = useNavigate()
    let orders = [{}, {}, {}, {}, {}, {}]
    console.log("in cart", cartItems)
    const dummyOrder = {
        order_id: 12345678,
        user_id: 23456,
        invoice: 'string',
        creation_date: 2345,
        products: [
            {
                product_id: 234567,
                images: [
                    '/image/wrapper/stockpolish.png',
                    '/image/wrapper/stockpolish.png',
                    '/image/wrapper/stockpolish.png'

                ],
                name: 'big prod name yayaya',
                quantity: 3,
                price: 45,
                shade_name: 'limegreencolorcodered',
                code: '2345678',
                category: 'nails'
            },
            {
                product_id: 234567,
                images: [
                    '/image/wrapper/stockpolish.png',
                    '/image/wrapper/stockpolish.png',
                    '/image/wrapper/stockpolish.png'

                ],
                name: 'big prod name yayaya',
                quantity: 3,
                price: 1000000,
                shade_name: 'limegreencolorcodered',
                code: '2345678',
                category: 'nails'
            },
            {
                product_id: 234567,
                images: [
                    '/image/wrapper/stockpolish.png',
                    '/image/wrapper/stockpolish.png',
                    '/image/wrapper/stockpolish.png'

                ],
                name: 'big prod name yayaya',
                quantity: 3,
                price: 45,
                shade_name: 'limegreencolorcodered',
                code: '2345678',
                category: 'nails'
            },
        ],
        status: 'pending',
    }
    return (
        <div className="bg-secondary space-y-16">
            {/* <Navbar /> */}
            <p className="text-center text-primary font-bold tablet:text-lg">Thank you for your purchase!</p>
            <div className="w-[90%] px-3 border bg-white border-secondarydark rounded m-auto tablet:w-[70%]">
                <div className="items-center">
                    <div
                    className="w-full h-fit">
                        <div
                            className='my-2'>
                            <OrderDetailLine
                                icon={<MdOutlineDateRange />}
                                label={'Date'}
                                value={dummyOrder.creation_date.toString()} />
                            <OrderDetailLine
                                icon={<LuUserCircle2 />}
                                label={'Customer'}
                                value={dummyOrder.user_id.toString()} />
                        </div>
                        <div
                            className='my-2'>
                            <OrderDetailLine
                                icon={<TbInvoice />}
                                label={'Order Number'}
                                value={dummyOrder.order_id.toString()} />
                            <OrderDetailLine
                                icon={<BiDollar />}
                                label={'Total'}
                                value={'$107890'} />
                        </div>
                    </div>
                    <div>
                        <h2
                        className='font-bold tablet:text-lg'>Order Line</h2>
                        <div
                        className='h-[20vh] overflow-scroll'>
                            {
                                dummyOrder.products.map(prod=>
                                <OrderProductItem 
                                orderProduct={prod}
                                />)
                            }
                        </div>
                    </div>
                </div>
            </div>
            {/* <FooterSection /> */}
        </div>
    )
}

export default OrderSuccessPage