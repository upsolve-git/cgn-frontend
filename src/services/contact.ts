import { FEEDBACK_ENDPOINT } from "../constants/routes"
import axios from "../helpers/axios"

export const sendFeedback = (feedback: any)=>{
    return axios.post(FEEDBACK_ENDPOINT, feedback)
}