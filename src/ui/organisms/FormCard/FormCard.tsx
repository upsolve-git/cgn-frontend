import React from "react";

import Logo from "../../atoms/Logo/Logo";
import CrossButton from "../../atoms/buttons/CrossButton/CrossButton";

interface FormCardProps{
    children: React.ReactNode
}

const FormCard: React.FC<FormCardProps> = ({children}) => {
    return (
        <div
        className="w-3/5 bg-white rounded-2xl px-3 py-2 flex flex-col tablet:w-3/5 desktop:w-2/5">
            <CrossButton />
            <div id="content-wrapper"
            className="flex flex-col items-center tablet:px-16 tablet:pb-11">
                <Logo
                fill="#C26F2D"
                styles="w-12 h-12 tablet:w-20 tablet:h-20"/>
                <p
                className="text-md font-bold tablet:text-xl desktop:text-xl text-primary">
                    Canadian Gel Nails
                </p>
                {children}
            </div>
        </div>
    )
}

export default FormCard