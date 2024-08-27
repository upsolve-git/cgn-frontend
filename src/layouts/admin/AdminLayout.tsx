import React from "react";
import { Outlet } from "react-router-dom";

interface AdminLayoutProps{}

const AdminLayout: React.FC<AdminLayoutProps> = () =>{
    return (
        <div
        className="bg-authBg bg-cover min-h-screen h-fit bg-right tablet:py-5 desktop:py-9">
            <Outlet />
        </div>
    )
}

export default AdminLayout