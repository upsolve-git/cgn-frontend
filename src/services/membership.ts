import axios from "../helpers/axios"

import { Membership } from "../interfaces/Membership";

import { ADD_NEW_MEMBERSHIP_ENDPOINT, GET_MEMSHIPS_ENDPOINT } from "../constants/routes"

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

export const addMembershipReq = async (membership: Membership) => {
    try {
        const response = await axios.post(ADD_NEW_MEMBERSHIP_ENDPOINT, membership);
        return response.data;
    } catch (error) {
        console.error("Error adding membership:", error);
        throw new Error("Failed to add membership");
    }
}

export const softDeleteMembershipReq = async (id: number) => {
  const response = await axios.patch(`/membership/${id}`);
  return response.data;
};

export const editMembershipReq = async (
  id: number,
  membership: Omit<Membership, "id">
) => {
  const response = await axios.put(`/membership/${id}`, membership);
  return response.data;
};