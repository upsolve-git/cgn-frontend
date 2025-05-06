import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../ui/organisms/Navbar/Navbar"
import FooterSection from "../ui/sections/FooterSection/FooterSection"
import MembershipAd from "../ui/molecules/MembershipAd/MembershipAd"
import { useMembership } from "../utils/hooks/useMembership"

interface DefaultLayoutProps {}

const DefaultLayout: React.FC<DefaultLayoutProps> = () =>{

    let {
        showAd,
        closeAd
    } = useMembership()

    return (
        <div
        className="font-montserrat min-h-screen flex flex-col bg-secondary">
            <Navbar />
            {
                showAd &&
                <MembershipAd 
                closeAd={closeAd}
                />
            }
            <main
            className="flex-grow overflow-hidden">
                <Outlet />
            </main>
            <FooterSection />
        </div>
    )
}

export default DefaultLayout