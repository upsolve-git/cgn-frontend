import React from "react";
import Logo from "../../atoms/Logo/Logo";
import { useNavigate } from 'react-router-dom';
import { LOGIN_PAGE, POS_WEBSITE_URL, SIGNUP_PAGE } from "../../../constants/routes";
import { useSignInPage } from "../../../utils/hooks/useSignInPage";

interface BigNavbarProps{}

const BigNavbar: React.FC<BigNavbarProps> = ()=>{
    const navigate = useNavigate()

    let {isAuthenticated,logoutHandler} = useSignInPage()

    return(
        <div
        className="bg-secondarylight px-6 py-2">
            {/* <Logo
            styles="w-14 h-14 desktop:w-20 desktop:h-20"
            fill="#C26F2D"/> */}
            <div
            className="flex justify-around">
                <img src="/image/cgnailslogo.png" alt="logo.png" 
                className="object-fill w-32 h-24 desktop:w-40 desktop:h-32"/>
            </div>
            <div
            className="flex justify-between">
                <div></div>
                <ul
                className="text-xs max-w-[500px] flex hover:cursor-pointer items-center justify-between text-primary w-[65%] desktop:text-md desktop:w-[50%] desktop:max-w-prose">
                    <li><a href="/">Home</a></li>
                    {/* <li>About</li> */}
                    <li><a href="/products">Products</a></li>
                    <li><a href={'/salons'}>Salon Partners</a></li>
                    { isAuthenticated && <li><a href="/orders">Orders</a></li> }
                    {/* <li>Contact</li> */}
                    { !isAuthenticated && <li>
                        <button 
                        onClick={() => navigate(SIGNUP_PAGE)}
                        className="border border-primary px-2 py-1 rounded-lg">
                            Sign Up
                        </button>
                    </li>}
                    { !isAuthenticated && <li>
                        <button
                        onClick={() => navigate(LOGIN_PAGE)}
                        className="bg-primary text-white px-2 py-1 rounded-lg">
                            Sign In
                        </button>
                    </li> } 
                    { isAuthenticated && <li><a href="/cart">Cart</a></li>}
                    { isAuthenticated && <li>
                        <button
                        onClick={() => logoutHandler()}
                        className="bg-primary text-white px-2 py-1 rounded-lg">
                            Log out
                        </button>
                    </li> } 
                </ul>
            </div>
        </div>
    )
}

export default BigNavbar