import React from "react";

import Navbar from "../../ui/organisms/Navbar/Navbar";
import FooterSection from "../../ui/sections/FooterSection/FooterSection";

interface UserProfilePageProps{}

const UserProfilePage: React.FC<UserProfilePageProps> = ()=>{
    return(
        <div>
            <Navbar />
            <div
            className="w-full h-[80vh] bg-secondary pt-8">
            <h2 className="text-center text-lg font-semibold text-primary tablet:text-xl desktop:text-xl">User profile</h2>

                <table
                className="table-auto text-xs mx-auto my-9 border-separate border-spacing-3 tablet:text-md desktop:text-lg">
                    <tr>
                        <td>First name</td>
                        <td>John</td>
                    </tr>
                    <tr>
                        <td>Last name</td>
                        <td>Doe</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>example@mail.com</td>
                    </tr>
                    <tr>
                        <td>Account type</td>
                        <td>Business</td>
                    </tr>
                    <tr>
                        <td>Phone</td>
                        <td>6025654657</td>
                    </tr>
                </table>
            </div>
            <FooterSection />
        </div>
    )
}

export default UserProfilePage