import axios from "../helpers/axios";

import { DELETE_FROM_CART, GET_AUTH_REQ, GET_CART, GET_USERS_ENDPOINT, GOOGLE_SIGNIN, LOGIN_ENDPOINT, LOGOUT_REQ, UPDATE_CART } from "../constants/routes";

export const loginReq = async (email: string|undefined, password:string|undefined)=>{
    if(email && password){
        return axios.post(LOGIN_ENDPOINT, {
            "email": email,
            "password": password
        });
    }
} 

export const googleAuthReq = async (email : string, first_name : string, last_name : string) => {
    if (email && first_name && last_name){
        return axios.post(GOOGLE_SIGNIN, {
            "email" : email,
            "first_name" : first_name,
            "last_name" : last_name
        })
    }
}

export const getAuthReq = async() => {
    return axios.get(GET_AUTH_REQ)
}

export const logoutReq = async() => {
    return axios.post(LOGOUT_REQ)
}

export const getUsersReq = async() => {
    return axios.get(GET_USERS_ENDPOINT)
}

export const getUsersCartReq = async(user_id:number) => {
    return axios.get(GET_CART);
} 

export const updateUsersCartReq = async(product_id : number, quantity : number, color_id : number) => {
    if(product_id && quantity && color_id) {
        return axios.post(UPDATE_CART, {
            "product_id":product_id,
            "quantity":quantity,
            "color_id":color_id
        })
    }
}

export const deleteFromUsersCartReq = async(product_id : number, user_id : number) => {
    if(product_id) {
        return axios.post(DELETE_FROM_CART, {
            "product_id":product_id,
            "user_id":user_id
        })
    }
}