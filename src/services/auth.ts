import axios from "../helpers/axios"

import { GET_AUTH_ENDPOINT, RESET_PASSWORD_ENDPOINT } from "../constants/routes"

import { ResetPasswordParams } from "../interfaces/Password"

export const getAuth = async() => {
    return axios.get(GET_AUTH_ENDPOINT)
}
  
export const resetPassword = async ({ email, password }: ResetPasswordParams) => {
    try {
      const response = await axios.post(RESET_PASSWORD_ENDPOINT, { email, password });
      return response.data;
    } catch (error) {
      console.error("Error resetting password:", error);
      throw error;
    }
  };


export const resetPasswordEmail = ()=>{
    console.log('reset password email sent')
}