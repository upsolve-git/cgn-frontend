import { Address } from "./Address"
import { OrderLine } from "./OrderLine"

export interface Order {
    order_id : number,
    user_id:number,
    invoice : string,
    creation_date : number,
    products : OrderLine[]
    address : Address
    status : string,
} 