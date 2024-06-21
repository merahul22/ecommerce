import React, { createContext, useState } from "react"
import all_product from "../components/Assets/all_product.js"
 export const ShopContext=createContext(null)
 const getDefaultCart=()=>{
    const cart={}
    for(let i=0;i<all_product.length+1;i++){
        cart[i]=0
    }
    return cart
}
const ShopContextProvider=(props)=>{
    const addtocart=(itemId)=>{
        setcartItem((prev)=>(
         {...prev,[itemId]:prev[itemId]+1}
        ))
        console.log(cartItem)
    }
    const removefromcart=(itemId)=>{
setcartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    } 
  const [cartItem,setcartItem]=useState(getDefaultCart())
    const contextValue={all_product,cartItem,addtocart,removefromcart}
return (
<ShopContext.Provider value={contextValue}>
    {props.children}
</ShopContext.Provider>
)
}

export default ShopContextProvider