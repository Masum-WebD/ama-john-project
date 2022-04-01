import { useEffect, useState } from "react"
import { getStorageAdd } from "../utilities/fakedb"


const useCart=(products)=>{  
    const [cart , setCart]= useState([])
    useEffect(()=>{
        const storedCart = getStorageAdd()
        const saveCart =[]
        for(const id in storedCart){
            const addCart = products.find(product=>product.id===id)
            if(addCart){
                const quantity = storedCart[id]
                addCart.quantity= quantity
                saveCart.push(addCart)
            }
        }
        setCart(saveCart)

    },[products])
    return[cart,setCart]
}
export default useCart