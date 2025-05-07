import React, { useEffect, useState } from 'react';
import TextInput from '../../atoms/formElements/auth/textInput/textInput';
import { usePayment } from '../../../utils/hooks/usePayment';
import ActionButton from '../../atoms/buttons/ActionButton/ActionButton';

interface CardDetailsProps {
  totalAmount: number;
  placeOrderHandler?: (orderId: string) => void;
  handleInvoice?: () => void;
}

declare global {
  interface Window {
    customcheckout?: any;
  }
}

const CardDetails: React.FC<CardDetailsProps> = ({
  totalAmount,
  placeOrderHandler,
  handleInvoice
}) => {
  const {
    cardName,
    handleCardNameChange,
    handlePaymentSubmit,
    message,
    success
  } = usePayment(totalAmount);

  const [customCheckoutInstance, setCustomCheckoutInstance] = useState<any>(null);

  // Load Bambora Custom Checkout script
  useEffect(() => {
    const scriptId = 'bambora-customcheckout-script';
    if (document.getElementById(scriptId)) {
      initializeCustomCheckout();
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://libs.na.bambora.com/customcheckout/1/customcheckout.js';
    script.id = scriptId;
    script.async = true;
    script.onload = initializeCustomCheckout;
    script.onerror = () => console.error('Failed to load Bambora Custom Checkout SDK');
    document.body.appendChild(script);
  }, []);

  const initializeCustomCheckout = () => {
    if (!window.customcheckout) {
      console.error('Bambora Custom Checkout SDK not available');
      return;
    }

    const customCheckout = window.customcheckout();

    const cardNumber = customCheckout.create('card-number');
    cardNumber.mount('#card-number');

    const cvv = customCheckout.create('cvv');
    cvv.mount('#card-cvv');

    const expiry = customCheckout.create('expiry');
    expiry.mount('#card-expiry');

    customCheckout.on('error', (event: any) => {
      console.error(`Error in ${event.field}: ${event.message}`);
    });

    customCheckout.on('complete', (event: any) => {
      console.log(`${event.field} is complete`);
    });

    setCustomCheckoutInstance(customCheckout);
  };

  const handlePayClick = () => {
    if (!customCheckoutInstance) {
      console.error('Custom Checkout not initialized');
      return;
    }

    customCheckoutInstance.createToken(async (result: any) => {
      if (result.error) {
        console.error('Tokenization error:', result.error.message);
        return;
      }

      try {
        const resData = await handlePaymentSubmit(result.token);
        placeOrderHandler?.(resData.id);
        handleInvoice?.();
      } catch (err) {
        console.error('Payment submission failed:', err);
      }
    });
  };

  return (
    <div>
      <TextInput
        label="Full Name (on card)"
        value={cardName}
        onChange={handleCardNameChange}
      />

      <div id="card-number" className="border p-2 my-2 rounded-md" />
      <div id="card-expiry" className="border p-2 my-2 rounded-md" />
      <div id="card-cvv" className="border p-2 my-2 rounded-md" />

      <div className="w-[40%] m-auto mt-4">
        <ActionButton label="Pay Now" callbackFunc={handlePayClick} />
      </div>

      {message && (
        <div
          className={`border-[0.1rem] rounded-md my-2 py-1 px-2 shadow-lg border-${success ? 'green' : 'red'}`}
        >
          <p className={`text-${success ? 'green' : 'red'} text-xxs tablet:text-xs desktop:text-sm`}>
            {message}
          </p>
        </div>
      )}
    </div>
  );
};

export default CardDetails;
