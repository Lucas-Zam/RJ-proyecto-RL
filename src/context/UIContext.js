import React, { createContext } from 'react'
import { useState } from "react"



export const UIContext = createContext()




export const UIContextProvider = ({children}) => {

    
    const [loading, setLoading] = useState(false)
    console.log("loading:"+loading)


    return (
        <UIContext.Provider value={{ loading, setLoading }}>
            {children}
        </UIContext.Provider>
    )
    
}

