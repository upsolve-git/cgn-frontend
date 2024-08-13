import React from "react"
import { Outlet } from "react-router-dom"

interface DefaultLayoutProps {}

const DefaultLayout: React.FC<DefaultLayoutProps> = () =>{
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default DefaultLayout