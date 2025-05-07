import { useState } from "react";
import { makePaymentReq } from "../../services/payment";

import { useCartPage } from "./useCartPage";

export const usePayment = (totalAmount: number) => {

    const [cardName, setCardName] = useState<string>("");
    const [cardNumber, setCardNumber] = useState<string>("");
    const [expiryMonth, setExpiryMonth] = useState<string>("");
    const [expiryYear, setExpiryYear] = useState<string>("");
    const [cvv, setCvv] = useState<string>("");
    const [success, setSuccess] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");

    const handleCardNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCardName(e.target.value);
    }
    const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCardNumber(e.target.value);
    }
    const handleExpiryMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setExpiryMonth(e.target.value);
    }
    const handleExpiryYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setExpiryYear(e.target.value);
    }
    const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCvv(e.target.value);
    }
    const handlePaymentSubmit = async (token : string) => {
        console.log("Payment submitted with details: ", {
            cardName,
            cardNumber,
            expiryMonth,
            expiryYear,
            cvv
        });
        try{
            const resData = await makePaymentReq(
                cardName,
                token,
                totalAmount
            )
            setSuccess(true);
            // handlePlaceOrder('123456789')
            setMessage("Payment successful");
            return resData;
            // window.location.href = "/orders";
        }catch(err: any){
            setSuccess(false);
            setMessage(err);
        }
    }
    const handlePaymentCancel = () => {
        console.log("Payment cancelled");
    }

    return {
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
        handlePaymentCancel,
        success, message
    }

}