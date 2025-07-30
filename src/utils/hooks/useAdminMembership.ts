import { useEffect, useState } from "react";

import { getMembershipsReq, addMembershipReq, softDeleteMembershipReq, editMembershipReq } from "../../services/membership";

import { Membership } from "../../interfaces/Membership";

export const useAdminMembership = () =>{
    const [memberships, setMemberships] = useState<Membership[]>([])

    const [newMembershipName, setNewMembershipName] = useState<string>("")
    const [membershipPrice, setMembershipPrice] = useState<number | undefined>()
    const [membershipDiscount, setMembershipDiscount] = useState<number | undefined>()
    const [membershipDescription, setMembershipDescription] = useState<string>("")

    const [error, setError] = useState<string | null>(null)

    const fetchMemberships =  () => {
        try {
            const response = getMembershipsReq();
            response.then(data=>{
                setMemberships(data)
            })
            setError(null);
        } catch (error) {
            console.error("Error fetching memberships:", error);
            setError("Failed to fetch memberships");
        }
        console.log("Memberships fetched:", memberships);
    }

    useEffect(()=>fetchMemberships(), []);

    const handleNewMembershipName = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setNewMembershipName(e.target.value);
        // console.log("New membership name:", newMembershipName);
    }

    const handleMembershipPrice = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setMembershipPrice(Number(e.target.value));
        // console.log("New membership price:", membershipPrice);
    }

    const handleMembershipDiscount = (e: React.ChangeEvent<HTMLInputElement>) =>{
        // This function is not used in the current code, but can be implemented if needed
        setMembershipDiscount(Number(e.target.value));
        // console.log("New membership discount:", membershipDiscount);
    }

    const handleMembershipDescription = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setMembershipDescription(e.target.value);
        // console.log("New membership description:", membershipDescription);
    }

    const handleMembershipAdd = async () => {
        if (!newMembershipName.trim()) {
            setError("Name is required");
            return;
        }
        if (membershipPrice == null || isNaN(membershipPrice)) {
            setError("Valid price is required");
            return;
        }
        if (!membershipDescription.trim()) {
            setError("Description is required");
            return;
        }

        setError(null);
        const payload: Membership = {
            name: newMembershipName.trim(),
            price: membershipPrice,
            description: membershipDescription.trim(),
            discount: membershipDiscount,
        };

        try {
            await addMembershipReq(payload);
            await fetchMemberships();
            setNewMembershipName("");
            setMembershipPrice(undefined);
            setMembershipDiscount(undefined);
            setMembershipDescription("");
        } catch (err: any) {
            console.error("Error adding membership:", err);
            setError(err.message || "Failed to add membership");
        }
    };

    const deleteMembership = async (id: number) => {
        try {
            await softDeleteMembershipReq(id);
            setMemberships(memberships => memberships.filter(m => m.id !== id));
        } catch (err) {
            console.error(err);
            setError("Failed to delete membership");
        }
    };

    const handleMembershipEdit = async (id: any, m: Omit<Membership, "id">) =>{
        try {
            await editMembershipReq(id, m);
            await fetchMemberships();
        } catch {
            setError("Failed to update membership");
        }
    }

    return {
        memberships,
        newMembershipName, handleNewMembershipName,
        membershipPrice, handleMembershipPrice,
        membershipDiscount, handleMembershipDiscount,
        membershipDescription, handleMembershipDescription,
        deleteMembership,
        handleMembershipAdd, handleMembershipEdit,
        error
    }
}