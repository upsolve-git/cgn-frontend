import React from "react";

import SmallNavbar from "./SmallNavbar";
import BigNavbar from "./BigNavbar";

import { useMediaWidth } from "../../../utils/hooks/useMediaWidth";

interface Navbar{}

const Navbar: React.FC<Navbar> = ()=>{

    let {isMobile} = useMediaWidth()

    return(
        <div>
            {isMobile?<SmallNavbar/>:<BigNavbar />}
        </div>
    )
}

export default Navbar