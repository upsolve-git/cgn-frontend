import axios from "../helpers/axios"

import { GET_AUTH_ENDPOINT, RESET_PASSWORD_ENDPOINT, FORGOT_PASSWORD_ENDPOINT } from "../constants/routes"

import { ResetPasswordParams, ForgotPasswordParams } from "../interfaces/Password"

export const getAuth = async() => {
    return axios.get(GET_AUTH_ENDPOINT)
}
  
export const resetPassword = async ({ token, password }: ResetPasswordParams) => {
  try {
    const response = await axios.post(`${RESET_PASSWORD_ENDPOINT}/${encodeURIComponent(token)}`, { password });
    return response.data;
  } catch (error) {
    console.error("Error resetting password:", error);
    throw error;
  }
};


  export const forgotPassword = async ({ email }: ForgotPasswordParams) => {
    try {
      const response = await axios.post(FORGOT_PASSWORD_ENDPOINT, { email });
      return response.data;
    } catch (error) {
      console.error('Error in forgotPassword:', error);
      throw error;
    }
  };

export const resetPasswordEmail = ()=>{
    console.log('reset password email sent')
}