import React from "react";
import { Outlet } from "react-router-dom";

interface AdminLayoutProps{}

const AdminLayout: React.FC<AdminLayoutProps> = ()=>{
    return(
        <div
        className="w-screen h-screen flex flex-col items-center bg-secondary">
            <h1
            className="font-semibold text-3xl">
                Admin Controls
            </h1>
            <Outlet />
        </div>
    )
}

export default AdminLayout