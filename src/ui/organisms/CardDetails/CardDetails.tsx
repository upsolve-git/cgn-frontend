import React from 'react';
import TextInput from '../../atoms/formElements/auth/textInput/textInput';
import { usePayment } from '../../../utils/hooks/usePayment';
import ActionButton from '../../atoms/buttons/ActionButton/ActionButton';
import NumberInput from '../../atoms/formElements/auth/NumberInput/NumberInput';

interface CardDetailsProps {
    totalAmount: number;
    placeOrderHandler?: (orderId: string) => void;
    handleInvoice?: () => void;
}

const CardDetails: React.FC<CardDetailsProps> = ({
    totalAmount,
    placeOrderHandler,
    handleInvoice
}) => {

    let {
        cardName,
        handleCardNameChange,
        cardNumber,
        handleCardNumberChange,
        expiryMonth,
        handleExpiryMonthChange,
        expiryYear,
        handleExpiryYearChange,
        cvv,
        handleCvvChange,
        handlePaymentSubmit,
        message, success
    } = usePayment(totalAmount)

  return (
    <div>
        <TextInput
        label='Full Name (on card)'
        value={cardName}
        onChange={handleCardNameChange}
        />
        <NumberInput 
        label='Card Number'
        value={cardNumber}
        onChange={handleCardNumberChange}
        />
        <div
        className='grid grid-cols-3 gap-2'>
            <NumberInput
            label='Expiry Month'
            value={expiryMonth}
            onChange={handleExpiryMonthChange}
            />
            <NumberInput
            label='Expiry Year'
            value={expiryYear}
            onChange={handleExpiryYearChange}
            />
            <NumberInput
            label='CVV'
            value={cvv}
            onChange={handleCvvChange}
            />
        </div>
        <div
        className='w-[40%] m-auto'>
            <ActionButton 
            label='Pay Now'
            callbackFunc={async ()=>{
                try {
                    const resData = await handlePaymentSubmit();
                    console.log('Response Data:', resData);
                    placeOrderHandler && placeOrderHandler(resData.id)
                    placeOrderHandler && placeOrderHandler('123456')
                    handleInvoice && handleInvoice()
                  } catch (err) {
                    console.error('Error submitting payment:', err);
                    // Optionally, show a user-friendly message
                  }
            }}
            />
        </div>
        {
            message &&
            <div
            className={`border-[0.1rem] rounded-md my-2 py-1 px-2 shadow-lg border-${success?'green':'red'}`}>
                {/* <span
                className='text-xxs tablet:text-xs desktop:text-sm'>hiih</span> */}
                <p
                className={`text-${success?'green':'red'} text-xxs tablet:text-xs desktop:text-sm`}>
                    {message}
                </p>
            </div>
        }
    </div>
  );
};

export default CardDetails;
