// export interface Salon {
//     name: string;
//     location: string;
//     image: string;
//     averageRating: number;
//     description: string;
// }

export interface Salon{
    salonId: number,
    salonName: string,
    location: string,
    description: string,
    image: string,
    ownerName: string,
    contactEmail: string,
    contactMobile: string,
    bankAccount: string,
    numberOfSystems: number,
    pricePerSystem: number,
}