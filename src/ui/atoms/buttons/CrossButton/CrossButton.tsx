import React from "react";
import { useNavigate } from 'react-router-dom';
import { HOME_PAGE } from "../../../../constants/routes";

const CrossButton: React.FC = () =>{ 
    const navigate = useNavigate()
    return (
        <button 
        onClick={() =>navigate(HOME_PAGE)}
        className="w-full h-fit flex justify-end text-darkgray float-right text-lg">
            x
        </button>
    )
}

export default CrossButton