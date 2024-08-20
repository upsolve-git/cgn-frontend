import React from "react";

interface NailPolishProps {
    nailPolishPath: string
}

const NailPolish: React.FC<NailPolishProps> = ({
    nailPolishPath
})=>{
    return (
        <div
        className="flex flex-col items-center">
            <img src={nailPolishPath} alt="" 
            className="w-[70px] h-[120px] -translate-x-[15px] tablet:w-[90px] tablet:h-[150px] desktop:w-[150px] desktop:h-[235px] monitor:w-[300px] monitor:h-[450px]"/>
            <h1
            className="text-xs font-semibold block tablet:text-md desktop:text-xl">
                Lorem
            </h1>
            <p
            className="text-xxs tablet:text-xs desktop:text-md">
                Lorem Ipsum
            </p>
        </div>
    )
}

export default NailPolish