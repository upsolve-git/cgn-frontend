import React from "react";
import { Outlet } from "react-router-dom";

interface AuthLayoutProps{}

const AuthLayout: React.FC<AuthLayoutProps> = () =>{
    return (
        <div
        className="bg-authBg bg-cover h-screen bg-right desktop:bg-cover">
            <Outlet />
        </div>
    )
}

export default AuthLayout