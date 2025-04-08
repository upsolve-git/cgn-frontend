import React from 'react';
import CardDetails from '../../organisms/CardDetails/CardDetails';

interface PaymentDetailsSectionProps {
    totalAmount: number;
}

const PaymentDetailsSection: React.FC<PaymentDetailsSectionProps> = ({
    totalAmount
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
        />
    </div>
  );
};

export default PaymentDetailsSection;
