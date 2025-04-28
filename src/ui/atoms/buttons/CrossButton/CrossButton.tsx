import React from "react";

import { IoIosClose } from "react-icons/io";

interface CrossButtonProps {
    callbackFunc: () => void;
}

const CrossButton: React.FC<CrossButtonProps> = ({
    callbackFunc
}
) =>{ 
    
    return (
        <button 
        onClick={callbackFunc}
        className="w-full h-fit flex justify-end text-darkgray float-right text-2xl pt-2 pr-4">
                <IoIosClose />
        </button>
    )
}

export default CrossButton