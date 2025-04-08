import axios from '../helpers/axios'

import { PAYMENT_ENDPOINT } from '../constants/routes';

export const makePaymentReq = async (
    cardName: string,
    cardNumber: string,
    expiryMonth: string,
    expiryYear: string,
    cvv: string,
    totalAmount: number
)=>{
    try{
        // axios.post( PAYMENT_ENDPOINT, {
        //     cardName,
        //     cardNumber,
        //     expiryMonth,
        //     expiryYear,
        //     cvv
        // })
        console.log(totalAmount)
    }catch(err: any){
        if(err.response.status === 400){
            throw new Error('Invalid card details');
        }else{
            throw new Error('Payment failed');
        }
    }
}