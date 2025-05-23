import React from "react";
import { useNavigate } from "react-router-dom";

import CrossButton from "../../atoms/buttons/CrossButton/CrossButton";

import { HOME_PAGE } from "../../../constants/routes";

interface FormCardProps{
    children: React.ReactNode
}

const FormCard: React.FC<FormCardProps> = ({children}) => {
    const navigate = useNavigate()

    return (
        <div
        className="bg-white rounded-2xl flex flex-col tablet:w-3/5 desktop:w-2/5">
            <CrossButton
            callbackFunc={() =>navigate(HOME_PAGE)} 
            />
            <div
            className="px-4 tablet:px-12 py-2">
                <div id="content-wrapper"
                className="flex flex-col items-center tablet:px-16 tablet:pb-11">
                    <img src="/image/cgnailslogo.png" alt="logo.png" 
                    className="object-fill w-32 h-24 desktop:w-40 desktop:h-32"/>
                    {/* <Logo
                    fill="#C26F2D"
                    styles="w-10 h-10 tablet:w-14 tablet:h-14 desktop:w-16 desktop:h-16 monitor:h-40 monitor:h-40"/> */}
                    {/* <p
                    className="text-sm font-bold tablet:text-md desktop:text-xl text-primary">
                        Canadian Gel Nails
                    </p> */}
                    {children}
                </div>
            </div>
        </div>
    )
}

export default FormCard