import customAxios from '../helpers/axios'
import { PAYMENT_ENDPOINT } from '../constants/routes';

export const makePaymentReq = async (
    cardName: string,
    token: string,
    totalAmount: number
)=>{
    try{
        let response;
        try {
            response = await customAxios.post(PAYMENT_ENDPOINT, {
                amount: totalAmount,
                code : token,
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