import React from "react";
import { Outlet } from "react-router-dom";

interface AuthLayoutProps{}

const AuthLayout: React.FC<AuthLayoutProps> = () =>{
    return (
        <div>
            Auth
            <Outlet />
        </div>
    )
}

export default AuthLayout