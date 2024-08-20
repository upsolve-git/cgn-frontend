import React, { useState } from "react";
import Logo from "../../atoms/Logo/Logo";

interface MobileNavbarProps {}

const MobileNavbar: React.FC<MobileNavbarProps> = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="p-2 flex justify-between items-center">
            <Logo styles="w-12 h-12" fill="#C26F2D" />
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

                {/* Conditional rendering of the menu */}
                {menuOpen && (
                    <ul className="absolute right-0 top-full mt-2 bg-white shadow-lg p-2 text-xs z-50">
                        <li className="py-1 px-2 hover:bg-gray-100">Home</li>
                        <li className="py-1 px-2 hover:bg-gray-100">About</li>
                        <li className="py-1 px-2 hover:bg-gray-100">Products</li>
                        <li className="py-1 px-2 hover:bg-gray-100">Contact</li>
                    </ul>
                )}
            </div>
        </div>
    );
};

export default MobileNavbar;
