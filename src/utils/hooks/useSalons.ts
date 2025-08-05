import { useEffect, useState } from "react"

import { Salon } from "../../interfaces/Salon";

import { deleteSalonReq, getSalonsReq, addSalonReq, updateSalonReq } from "../../services/salons";

export const useSalons = () => {
    const [salons, setSalons] = useState<Salon[]>([]);

    const [error, setError] = useState<string | null>(null);

    const [newSalonName, setNewSalonName] = useState<string>("");
    const [newSalonEmail, setNewSalonEmail] = useState<string>("");
    const [newSalonContact, setNewSalonContact] = useState<string>("");
    const [newSalonAddress, setNewSalonAddress] = useState<string>("");

    const [editingSalon, setEditingSalon] = useState<Salon | null>(null);

    // const [newSalon, setNewSalon] = useState<Salon>({
    //     name: "",
    //     email: "",
    //     contact: "",
    //     address: ""
    // });

    const fetchSalons = async () => {
        try{
            const data = await getSalonsReq();
            // console.log(data);
            setSalons(data);
        } catch (error) {
            console.error("Error fetching salons:", error);
            setError("Failed to fetch salons");
        }
    }

    useEffect(() => {
        fetchSalons();
    }, []);

    const handleNewSalonNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewSalonName(e.target.value);
        // setNewSalon((prev) => ({ ...prev, name: e.target.value }));
    };

    const handleNewSalonEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewSalonEmail(e.target.value);
        // setNewSalon((prev) => ({ ...prev, email: e.target.value }));
    };

    const handleNewSalonContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewSalonContact(e.target.value);
        // setNewSalon((prev) => ({ ...prev, contact: e.target.value }));
    };

    const handleNewSalonAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewSalonAddress(e.target.value);
        // setNewSalon((prev) => ({ ...prev, address: e.target.value }));
    };

    const handleAddSalon = async () => {
        try {
            const newSalon = {
                name: newSalonName,
                email: newSalonEmail,
                contact: newSalonContact,
                address: newSalonAddress
            }
            await addSalonReq(newSalon);
            await fetchSalons()
            // setSalons((prevSalons) => [...prevSalons, addedSalon]);
            setNewSalonName("");
            setNewSalonEmail("");
            setNewSalonContact("");
            setNewSalonAddress("");
        } catch (error) {
            console.error("Error adding salon:", error);
            setError("Failed to add salon");
        }
    };

    const handleDeleteSalon = async (id: number) => {
        try{
            await deleteSalonReq(id)
            await fetchSalons()
        } catch (error: any) {
            setError("Failed to delete salon");
            console.error("Error deleting salon:", error);
        }
    };

    const handleEditSalon = async (id: number, updates: Partial<Salon>) => {
        try {
            await updateSalonReq(id, updates);
            await fetchSalons();
        } catch (err) {
            console.error(err);
            setError("Failed to edit salon");
        }
    };

    return {
        salons,
        newSalonName, newSalonEmail, newSalonContact, newSalonAddress,
        // newSalon,
        handleNewSalonNameChange, handleNewSalonEmailChange,
        handleNewSalonContactChange, handleNewSalonAddressChange,
        handleAddSalon, handleDeleteSalon, handleEditSalon,
        error
    }
}