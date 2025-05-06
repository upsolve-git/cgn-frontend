import React from 'react';
import CardDetails from '../../organisms/CardDetails/CardDetails';

interface PaymentDetailsSectionProps {
    totalAmount: number;
    placeOrderHandler?: (orderId: string) => void;
    handleInvoice?: () => void;
}

const PaymentDetailsSection: React.FC<PaymentDetailsSectionProps> = ({
    totalAmount,
    placeOrderHandler,
    handleInvoice
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
        />
    </div>
  );
};

export default PaymentDetailsSection;
