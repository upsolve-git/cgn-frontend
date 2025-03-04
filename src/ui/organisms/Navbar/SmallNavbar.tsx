import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import CommonButton from "../../atoms/buttons/CommonButton/CommonButton";
import Logo from "../../atoms/Logo/Logo";

import { LOGIN_PAGE, POS_WEBSITE_URL, SIGNUP_PAGE } from "../../../constants/routes";

import { useSignInPage } from "../../../utils/hooks/useSignInPage";

interface SmallNavbarProps {}

const SmallNavbar: React.FC<SmallNavbarProps> = () => {
    const navigate = useNavigate()
    const [menuOpen, setMenuOpen] = useState(false);
    let {isAuthenticated,logoutHandler} = useSignInPage()

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="p-2 flex justify-between items-center">
            {/* <Logo styles="w-12 h-12" fill="#C26F2D" /> */}
            <div>

            </div>
            <div
            className="">
                <img src="/image/cgnailslogo.png" alt="logo.png" 
                className="w-28 translate-x-[20%]"/>
            </div>
            <div className="relative">
                <div onClick={toggleMenu} className="cursor-pointer">
                    <svg
                        width="24"
                        height="8"
                        viewBox="0 0 24 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <line y1="0.5" x2="24" y2="0.5" stroke="black" />
                        <line y1="7.5" x2="24" y2="7.5" stroke="black" />
                    </svg>
                </div>

                {menuOpen && (
                    <ul className="absolute flex flex-col gap-1 justify-between items-center right-0 top-full mt-2 bg-white shadow-lg py-3 px-4 text-xs z-50">
                        <li><a href="/">Home</a></li>
                        {/* <li>About</li> */}
                        <li><a href="/products">Products</a></li>
                        <li><a href={'/salons'}>Salon Partners</a></li>
                        {/* <li>Contact</li> */}
                        { !isAuthenticated && <li>
                            {/* <button
                            onClick={() => navigate(SIGNUP_PAGE)}
                            className="bg-primary text-white rounded-md px-1 text-xxs">
                                Sign Up
                            </button> */}
                            <CommonButton 
                            label="Sign Up"
                            primaryColor="primary"
                            secondaryColor="secondary"
                            callBack={() => navigate(SIGNUP_PAGE)}
                            />
                        </li>}
                        { !isAuthenticated && <li>
                            {/* <button
                            onClick={() => navigate(LOGIN_PAGE)}
                            className="bg-primary text-white rounded-md px-1 text-xxs">
                                Sign In
                            </button> */}
                            <CommonButton 
                            label="Sign In"
                            primaryColor="primary"
                            secondaryColor="secondary"
                            callBack={() => navigate(LOGIN_PAGE)}
                            />
                        </li>} 
                        { isAuthenticated && <li><a href="/cart">Cart</a></li>}
                        { isAuthenticated && <li><a href="/orders">Orders</a></li>}
                        { isAuthenticated && <li>
                            <button
                            onClick={() => logoutHandler()}
                            className="bg-primary text-white rounded-md px-1 text-xxs">
                                Logout
                            </button>
                        </li>}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default SmallNavbar;
