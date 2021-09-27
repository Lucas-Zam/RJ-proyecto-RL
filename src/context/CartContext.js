import React, { createContext } from "react";
import { useState } from "react"


export const CartContext = createContext()

export const CartProvider = ({children}) => {


    const [carrito, setCarrito] = useState([])

    const agregarAlCarrito = (prod) => {
        setCarrito([
            ...carrito,
            prod
        ])
    }

    const eliminarDelCarrito = (id) => {
        setCarrito ( carrito.filter(prod => prod.id !== id) )
    }

    const cantidadCarrito = () => {
        return carrito.reduce ((acc, prod) => acc + prod.cantidad, 0)
    }

    const cantidadItemCarrito = (id) => {
        // determina la cantidad que tiene el id en el carrito
        let cantidadInicial
        let indiceABuscar = carrito.findIndex(el => el.id === id);
        if (isInCart(id)) {
            cantidadInicial = carrito[indiceABuscar].cantidad
        }else{
            cantidadInicial = 1
        }
        return cantidadInicial
    }

    const modificarCantCarrito = (id, cantidad) => {
        let indiceABuscar = carrito.findIndex(el => el.id === id);
        carrito[indiceABuscar].cantidad = cantidad
        setCarrito([...carrito])
    }

    const vaciarCarrito = () => {
        setCarrito([])
    }

    const totalCarrito = () => {
        return carrito.reduce ((tot, prod) => tot + (prod.cantidad*prod.precio), 0)
    }

    const isInCart = (id) => {
        return carrito.some(el => el.id === id)
    }

    
    return (
        
        <CartContext.Provider value={{ carrito, isInCart, vaciarCarrito, agregarAlCarrito, 
                                        eliminarDelCarrito, cantidadCarrito, totalCarrito,
                                        cantidadItemCarrito, modificarCantCarrito }}>
            {children}
        </CartContext.Provider>

    )
}

