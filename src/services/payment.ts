import customAxios from '../helpers/axios'
import axios from 'axios';
import { base_url, PAYMENT_ENDPOINT } from '../constants/routes';

export const makePaymentReq = async (
    cardName: string,
    cardNumber: string,
    expiryMonth: string,
    expiryYear: string,
    cvv: string,
    totalAmount: number
)=>{
    try{
        let response;
        try {
            response = await axios.post("https://api.na.bambora.com/scripts/tokenization/tokens", {
                number : cardNumber,
                expiry_month: expiryMonth,
                expiry_year: expiryYear,
                cvd : cvv
            }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            response = await customAxios.post(PAYMENT_ENDPOINT, {
                amount: totalAmount,
                token : response.data.token,
                name : cardName
            });
            
            return response.data;

        } catch (error) {
            throw new Error('Payment Error')
        }
    }catch(err: any){
        if(err.response.status === 400){
            throw new Error('Invalid card details');
        }else{
            throw new Error('Payment failed');
        }
    }
}