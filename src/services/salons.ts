import axios from "../helpers/axios";

import { Salon } from "../interfaces/Salon";

import { SALONS } from "../constants/routes";

export const getSalonsReq = async () => {
    try {
        const response = await axios.get(SALONS);
        return response.data;
    } catch (error) {
        console.error("Error fetching salons:", error);
        throw new Error("Failed to fetch salons");
    }
}

export const addSalonReq = async (salon: any) => {
    try {
        const response = await axios.post(SALONS, salon);
        return response.data;
    } catch (error) {
        console.error("Error adding salon:", error);
        throw new Error("Failed to add salon");
    }
}

export const deleteSalonReq = async (id: number) => {
    try {
        const response = await axios.delete(`${SALONS}/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting salon:", error);
        throw new Error("Failed to delete salon");
    }
}

export const updateSalonReq = async (id: number, updates: Partial<Salon>) => {
  const response = await axios.put(`${SALONS}/${id}`, updates);
  return response.data;
};