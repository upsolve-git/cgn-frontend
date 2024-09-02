import { Product } from "./Product";

export interface CartItem {
    product : Product,
    color: string,
    quantity : number,
    total : number
}