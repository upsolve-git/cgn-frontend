import React from 'react';
import CardDetails from '../../organisms/CardDetails/CardDetails';

interface PaymentDetailsSectionProps {
    totalAmount: number;
    placeOrderHandler?: (orderId: string) => void;
    handleInvoice?: () => void;
    isAddressValid? : () => boolean
    requireAddress?: boolean
}

const PaymentDetailsSection: React.FC<PaymentDetailsSectionProps> = ({
    totalAmount,
    placeOrderHandler,
    handleInvoice,
    isAddressValid,
    requireAddress = true
}) => {
  return (
    <div>
        <p
        className="flex text-primary font-bold"
        >
            Payment Details
        </p>
        <CardDetails 
        totalAmount={totalAmount}
        placeOrderHandler={placeOrderHandler}
        handleInvoice={handleInvoice}
        isAddressValid={isAddressValid}
        />
    </div>
  );
};

export default PaymentDetailsSection;
