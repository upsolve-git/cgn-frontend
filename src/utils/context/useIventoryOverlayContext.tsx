import { useContext, createContext } from "react";

interface InventoryOverlayContextProps{
    showOverlay: boolean,
    handleShowOverlay: ()=>void
}

export const InventoryOverlayContext = createContext<InventoryOverlayContextProps|undefined>(undefined)

export const useIventoryOverlayContext: ()=>InventoryOverlayContextProps = ()=>{
    let inventoryOverlayProps = useContext(InventoryOverlayContext)

    if(inventoryOverlayProps === undefined){
        throw new Error('Context value undefined')
    }

    return inventoryOverlayProps
}