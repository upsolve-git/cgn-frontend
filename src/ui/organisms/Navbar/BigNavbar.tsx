import React from "react";
import Logo from "../../atoms/Logo/Logo";
import { useNavigate } from 'react-router-dom';
import { LOGIN_PAGE, SIGNUP_PAGE } from "../../../constants/routes";

interface BigNavbarProps{}

const BigNavbar: React.FC<BigNavbarProps> = ()=>{
    const navigate = useNavigate()

    return(
        <div
        className="bg-secondary px-6 py-2 flex justify-between items-center">
            <Logo 
            styles="w-14 h-14 desktop:w-20 desktop:h-20"
            fill="#C26F2D"/>
            <ul
            className="text-xxs flex items-center justify-between text-primary w-[40%] desktop:text-sm">
                <li>Home</li>
                <li>About</li>
                <li>Products</li>
                <li>Contact</li>
                <li>
                    <button 
                    onClick={() => navigate(SIGNUP_PAGE)}
                    className="border border-primary px-2 py-1 rounded-lg">
                        Sign Up
                    </button>
                </li>
                <li>
                    <button
                    onClick={() => navigate(LOGIN_PAGE)}
                    className="bg-primary text-white px-2 py-1 rounded-lg">
                        Sign In
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default BigNavbar