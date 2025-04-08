import { useState } from "react";
import { makePaymentReq } from "../../services/payment";

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
    const handlePaymentSubmit = async () => {
        console.log("Payment submitted with details: ", {
            cardName,
            cardNumber,
            expiryMonth,
            expiryYear,
            cvv
        });
        try{
            await makePaymentReq(
                cardName,
                cardNumber,
                expiryMonth,
                expiryYear,
                cvv,
                totalAmount
            )
            await setSuccess(true);
            setMessage("Payment successful");
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