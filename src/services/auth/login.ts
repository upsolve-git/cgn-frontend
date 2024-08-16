import axios from "../../helpers/axios";

import { LOGIN_ENDPOINT } from "../../constants/routes";

export const loginReq = async (email: string|undefined, password:string|undefined)=>{
    if(email && password){
        return axios.post(LOGIN_ENDPOINT, {
            "email": email,
            "password": password
        });
    }
}