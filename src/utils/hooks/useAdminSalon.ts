import { useState } from 'react';

import { Salon } from '../../interfaces/Salon';

const useAdminSalon = () => {
    const [salons, setSalons] = useState<Salon[]>([]);

    const [newSalonName, setNewSalonName] = useState<string>('');
    const [newSalonEmail, setNewSalonEmail] = useState<string>('');
    const [newSalonPhone, setNewSalonPhone] = useState<string>('');
    const [newSalonAddress, setNewSalonAddress] = useState<string>('');

    const [error, setError] = useState<string | null>(null);

    const handleSalonNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewSalonName(e.target.value);
    }

    const handleSalonEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewSalonEmail(e.target.value);
    }

    const handleSalonPhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewSalonPhone(e.target.value);
    }

    const handleSalonAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewSalonAddress(e.target.value);
    }

    // const handleMembershipAdd = async () => {
    //     if (!newMembershipName.trim()) {
    //         setError("Name is required");
    //         return;
    //     }
    //     if (membershipPrice == null || isNaN(membershipPrice)) {
    //         setError("Valid price is required");
    //         return;
    //     }
    //     if (!membershipDescription.trim()) {
    //         setError("Description is required");
    //         return;
    //     }

    //     setError(null);
    //     const payload: Membership = {
    //         name: newMembershipName.trim(),
    //         price: membershipPrice,
    //         description: membershipDescription.trim(),
    //         discount: membershipDiscount,
    //     };

    //     try {
    //         await addMembershipReq(payload);
    //         await fetchMemberships();
    //         setNewMembershipName("");
    //         setMembershipPrice(undefined);
    //         setMembershipDiscount(undefined);
    //         setMembershipDescription("");
    //     } catch (err: any) {
    //         console.error("Error adding membership:", err);
    //         setError(err.message || "Failed to add membership");
    //     }
    // };
    
    //     const deleteMembership = async (id: number) => {
    //         try {
    //             await softDeleteMembershipReq(id);
    //             setMemberships(memberships => memberships.filter(m => m.id !== id));
    //         } catch (err) {
    //             console.error(err);
    //             setError("Failed to delete membership");
    //         }
    //     };
    
    //     const handleMembershipEdit = async (id: any, m: Omit<Membership, "id">) =>{
    //         try {
    //             await editMembershipReq(id, m);
    //             await fetchMemberships();
    //         } catch {
    //             setError("Failed to update membership");
    //         }
    //     }

    return {
        salons,
        newSalonName, handleSalonNameChange,
        newSalonEmail, handleSalonEmailChange,
        newSalonPhone, handleSalonPhoneChange,
        newSalonAddress, handleSalonAddressChange,
        // handleMembershipAdd, deleteMembership, handleMembershipEdit
        error,
    }
}