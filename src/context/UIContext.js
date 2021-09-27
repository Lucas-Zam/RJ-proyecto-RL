import React, { createContext } from 'react'
import { useState } from "react"


export const UIContext = createContext()


export const UIContextProvider = ({children}) => {

    
    const [loading, setLoading] = useState(false)

    const [usoCateg, setUsoCateg] = useState("/")

    return (
        <UIContext.Provider value={{ loading, setLoading, usoCateg, setUsoCateg }}>
            {children}
        </UIContext.Provider>
    )
    
}

