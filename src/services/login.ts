import axios from "../helpers/axios";

import { GET_USERS_ENDPOINT, LOGIN_ENDPOINT } from "../constants/routes";

export const loginReq = async (email: string|undefined, password:string|undefined)=>{
    if(email && password){
        return axios.post(LOGIN_ENDPOINT, {
            "email": email,
            "password": password
        });
    }
} 

export const getUsersReq = async() => {
    return axios.get(GET_USERS_ENDPOINT)
}