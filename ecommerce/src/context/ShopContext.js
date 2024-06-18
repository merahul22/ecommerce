import React, { createContext } from "react"
import all_product from "../components/Assets/all_product.js"
const shopContext=createContext(null)

const shopContextProvider=(props)=>{
    const contextValue={all_product}
return (
<shopContext.Provider value={contextValue}>
    {props.children}
</shopContext.Provider>
)
}

export default shopContextProvider