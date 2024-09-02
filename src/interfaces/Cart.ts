import { CartItem } from "./CartItem"

export interface Cart {
    cartItem : CartItem[],
    total : number
}