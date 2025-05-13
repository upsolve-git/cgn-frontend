import React, { useEffect, useRef, useState } from 'react';
import TextInput from '../../atoms/formElements/auth/textInput/textInput';
import { usePayment } from '../../../utils/hooks/usePayment';
import ActionButton from '../../atoms/buttons/ActionButton/ActionButton';

interface CardDetailsProps {
  totalAmount: number;
  placeOrderHandler?: (orderId: string) => void;
  handleInvoice?: () => void;
  isAddressValid?: () => boolean;
}

declare global {
  interface Window {
    customcheckout?: any;
  }
}

const CardDetails: React.FC<CardDetailsProps> = ({
  totalAmount,
  placeOrderHandler,
  handleInvoice,
  isAddressValid,
}) => {
  const {
    cardName,
    handleCardNameChange,
    handlePaymentSubmit,
    message,
    success,
  } = usePayment(totalAmount);

  const [customCheckoutInstance, setCustomCheckoutInstance] = useState<any>(null);
  const [loadError, setLoadError] = useState<boolean>(false);

  // Avoid remounting Bambora fields
  const mountedRef = useRef({
    number: false,
    expiry: false,
    cvv: false,
  });

  useEffect(() => {
    const scriptId = 'bambora-customcheckout-script';

    const waitForCustomCheckout = () => {
      const checkReady = () => {
        if (window.customcheckout) {
          initializeCustomCheckout();
        } else {
          setTimeout(checkReady, 100);
        }
      };
      checkReady();
    };

    if (document.getElementById(scriptId)) {
      waitForCustomCheckout();
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://libs.na.bambora.com/customcheckout/1/customcheckout.js';
    script.id = scriptId;
    script.async = true;
    script.onload = waitForCustomCheckout;
    script.onerror = () => {
      console.error('Failed to load Bambora SDK');
      setLoadError(true);
    };
    document.body.appendChild(script);
  }, []);

  const initializeCustomCheckout = () => {
    if (!window.customcheckout) {
      console.error('Bambora SDK not ready');
      setLoadError(true);
      return;
    }

    try {
      const customCheckout = window.customcheckout();

      if (!mountedRef.current.number) {
        const cardNumber = customCheckout.create('card-number');
        cardNumber.mount('#card-number');
        mountedRef.current.number = true;
      }

      if (!mountedRef.current.expiry) {
        const expiry = customCheckout.create('expiry');
        expiry.mount('#card-expiry');
        mountedRef.current.expiry = true;
      }

      if (!mountedRef.current.cvv) {
        const cvv = customCheckout.create('cvv');
        cvv.mount('#card-cvv');
        mountedRef.current.cvv = true;
      }

      customCheckout.on('error', (event: any) => {
        console.error(`Error in ${event.field}: ${event.message}`);
      });

      customCheckout.on('complete', (event: any) => {
        console.log(`${event.field} is complete`);
      });

      setCustomCheckoutInstance(customCheckout);
    } catch (err) {
      console.error('Custom checkout initialization error:', err);
      setLoadError(true);
    }
  };

  const handlePayClick = () => {
    if (!isAddressValid || !isAddressValid()) {
      alert('Please fill all address fields before placing the order.');
      return;
    }

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
      {loadError ? (
        <div className="w-fit mx-auto text-red text-xxs tablet:text-xs desktop:text-sm">
          An error occurred loading the payment form. Please reload the page.
        </div>
      ) : (
        <div>
          <TextInput
            label="Full Name (on card)"
            value={cardName}
            onChange={handleCardNameChange}
          />

          <label className="text-darkgray block text-xxs tablet:text-xs desktop:text-sm">
            Card number
          </label>
          <div id="card-number" className="border p-2 my-2 rounded-md" />

          <label className="text-darkgray block text-xxs tablet:text-xs desktop:text-sm">
            Card expiry date (MM/YYYY)
          </label>
          <div id="card-expiry" className="border p-2 my-2 rounded-md" />

          <label className="text-darkgray block text-xxs tablet:text-xs desktop:text-sm">
            CVV
          </label>
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
      )}
    </div>
  );
};

export default CardDetails;
