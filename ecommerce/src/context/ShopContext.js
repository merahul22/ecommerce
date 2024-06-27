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
    const getTotalCartValue=()=>{
        let total_value=0;
      for(const item in cartItem){
    if(cartItem[item]>0){
        const iteminfo=all_product.find((Number(item)===all_product.id))
        total_value+=iteminfo.new_price*cartItem[item]
    } 

      }
      return total_value

    }
    const addtocart=(itemId)=>{
        setcartItem((prev)=>(
         {...prev,[itemId]:prev[itemId]+1}
        ))
        console.log(cartItem)
    }
    const removefromcart=(itemId)=>{
setcartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    } 
    const getTotalCartItem=()=>{
        let cartitem=0;
        for(const item in cartItem){
            if(cartItem[item]>0) cartitem+=cartItem[item]
        }
        return cartitem
    }
  const [cartItem,setcartItem]=useState(getDefaultCart())
    const contextValue={all_product,cartItem,addtocart,removefromcart,getTotalCartValue,getTotalCartItem}
return (
<ShopContext.Provider value={contextValue}>
    {props.children}
</ShopContext.Provider>
)
}

export default ShopContextProvider