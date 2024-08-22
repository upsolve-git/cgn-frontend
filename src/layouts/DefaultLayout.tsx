import React from "react"
import { Outlet } from "react-router-dom"

interface DefaultLayoutProps {}

const DefaultLayout: React.FC<DefaultLayoutProps> = () =>{
    return (
        <div
        className="font-montserrat">
            <Outlet />
        </div>
    )
}

export default DefaultLayout