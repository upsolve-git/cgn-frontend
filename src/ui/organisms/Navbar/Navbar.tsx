import React from "react";
import Logo from "../../atoms/Logo/Logo";

interface NavbarProps{}

const Navbar: React.FC<NavbarProps> = ()=>{
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
                    className="border border-primary px-2 py-1 rounded-lg">
                        Sign Up
                    </button>
                </li>
                <li>
                    <button
                    className="bg-primary text-white px-2 py-1 rounded-lg">
                        Sign In
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default Navbar