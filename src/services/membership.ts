import axios from "../helpers/axios"

import { GET_MEMSHIPS_ENDPOINT } from "../constants/routes"

export const getMembershipsReq = async () => {
    // return [
    //     {
    //         name: "Basic",
    //         price: 10,
    //         desc: "Basic membership with limited features.",
    //     },
    //     {
    //         name: "Medium",
    //         price: 20,
    //         desc: "Basic membership with limited features.",
    //     },
    //     {
    //         name: "Advanced",
    //         price: 30,
    //         desc: "Basic membership with limited features.",
    //     }
    // ]
    try {
        const response = await axios.get(GET_MEMSHIPS_ENDPOINT);
        // console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching memberships:", error);
        throw new Error("Failed to fetch memberships");
    }
}