// import React from "react";
// import RatingStars from "../../atoms/items/ratings/RatingStars/RatingStars";
// import { Salon } from "../../../interfaces/Salon";

// interface SalonListItemProps {
//     salon: Salon
// }

// const SalonListItem: React.FC<SalonListItemProps> = ({salon})=>{
//     return(
//         <div
//         className="flex bg-white p-3 rounded-lg shadow-sm mb-3">
//             <img src={salon.image} alt="salon.jpg" 
//             className="w-15 h-24 my-auto tablet:w-24 tablet:h-32"/>
//             <div
//             className="mx-[0.4rem]">
//                 <p
//                 className="text-sm font-semibold tablet:text-md">
//                     {salon.name}
//                 </p>
//                 {/* <RatingStars
//                 rating={salon.averageRating}/> */}
//                 <p
//                 className="text-xxs text-darkgray line-clamp-2 font-medium tablet:text-xs">
//                     {salon.description}
//                 </p>
//                 <p
//                 className="text-xs tablet:text:sm">
//                     {salon.location}
//                 </p>
//             </div>
//         </div>
//     )
// }

// export default SalonListItem

import React from "react";
import { Salon } from "../../../interfaces/Salon";
import { useNavigate } from "react-router-dom";

interface SalonListItemProps {
    salon: Salon;
}

const SalonListItem: React.FC<SalonListItemProps> = ({ salon }) => {
    const navigate = useNavigate();

    return (
        <div
            className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-center items-center hover:shadow-lg cursor-pointer"
            // onClick={() => navigate(`/salonDetail/${salon.salonName}`, { state: { salon } })}
        >
            <p className="text-lg font-semibold text-center mb-2">
                {/* {salon.salonName} */}
                {salon.name}
            </p>
            <p className="text-sm text-gray-600 text-center">
                {/* {salon.contactEmail} */}
                {salon.email}
            </p>
            <p className="text-sm text-gray-600 text-center">
                {/* {salon.contactMobile} */}
                {salon.contact}
            </p>
            <p className="text-sm text-gray-600 text-center">
                {salon.address}
                {/* PO Box 2900 Station A,
                Sudbury, ON
                P3A 5J3 */}
            </p>
        </div>
    );
};

export default SalonListItem;