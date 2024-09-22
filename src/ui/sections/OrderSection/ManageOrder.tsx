import React from 'react';

import CommonButton from '../../atoms/buttons/CommonButton/CommonButton';
import OrderProgressBar from '../../molecules/OrderProgressBar/OrderProgressBar';

import { TbTruckDelivery } from "react-icons/tb";
import { FaRegCheckCircle } from "react-icons/fa";
import OrderProductItem from '../../molecules/OrderProductItem/OrderProductItem';

export interface OrderProduct{
  productName: string,
  size: string,
  quantity: number,
  price: number
}

interface OrderStatus{
  orderProducts: OrderProduct[],
  orderId: string
  orderDate: Date
  total?: number
  orderConfirmDate: Date | null
  shippedDate: Date | null
  outForDeliveryDate: Date | null
  deliveredDate: Date | null
  etaDate: Date
}

interface ManageOrderProps {
  isOpen: boolean;
  onClose: () => void;
  orderStatus: OrderStatus
}

const ManageOrder: React.FC<ManageOrderProps> = ({ isOpen, onClose, orderStatus }) => {
  if (!isOpen) return null;

  const invoiceHandler = ()=>{
    console.log('invoice gen');
    
  }

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-10 bg-secondary">
      <div className="bg-secondary w-[90%] rounded-lg shadow-lg p-6 flex flex-col items-center desktop:w-[50%]">
        <h2 className="text-md font-semibold text-primary tablet:text-xl desktop:text-xl">Manage Order</h2>
        <div
        className='w-full flex items-start justify-between'>
          <div
          className='tablet:w-fit'>
            <h2
            className='text-sm font-medium tablet:text-lg'>
              Order ID: {orderStatus.orderId}
            </h2>
            <div
            className='w-full text-xxs whitespace-nowrap tablet:flex'>
              <p className='tablet:mr-3'>Order date: {orderStatus.orderDate.toDateString()}</p>
              {
                orderStatus.deliveredDate?
                <p className='text-green flex items-center'>
                  <FaRegCheckCircle />
                  Delivered: {orderStatus.deliveredDate.toDateString()}
                </p>:
                <p className='text-green flex items-center'>
                  <TbTruckDelivery />
                  Estimated delivery: {orderStatus.etaDate.toDateString()}
                </p>
              }
              
            </div>
          </div>
          <div>
            <CommonButton
            label='Invoice' 
            primaryColor='secondary'
            secondaryColor='primary'
            customStyles='border-2 px-1 border-primary'
            callBack={invoiceHandler}
            />
          </div>
        </div>
        <OrderProgressBar
        orderConfirmDate={orderStatus.orderConfirmDate}
        shippedDate={orderStatus.shippedDate}
        outForDeliveryDate={orderStatus.outForDeliveryDate}
        deliveredDate={orderStatus.deliveredDate}
        />
        <div
        className='w-full my-4 max-h-[20vh] overflow-scroll'>
          {
            orderStatus.orderProducts.map(item=><OrderProductItem orderProduct={item}/>)
          }
        </div>
        <div
        className='w-12'>
          <CommonButton 
          label='Close'
          primaryColor='primary'
          secondaryColor='white'
          callBack={onClose}
          />
        </div>
      </div>
    </div>
  );
};

export default ManageOrder;