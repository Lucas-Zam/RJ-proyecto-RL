import React, { createContext } from "react";
import { useState } from "react"


// el contexto pasa valores a una gama grande de mi aplicacion
export const CartContext = createContext()


// custom provider

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
        // el método reduce recorre el carrito, y suma en acc, cada cantidad que aparece en el carrito
        // el cero es el valor inicial
        // si un producto tiene cantidad 2 y otro cantidad 3, en acc quedará en 5
    }

    const cantidadItemCarrito = (id) => {
        // determina la cantidad que tiene el id en el carrito
        let ctrol = isInCart(id)
        let cantidadInicial
        let indiceABuscar = carrito.findIndex(el => el.id === id);// me da la posición
        // console.log(carrito)
        if (ctrol) {
            cantidadInicial = carrito[indiceABuscar].cantidad
        }else{
            cantidadInicial = 1
        }
        // console.log("Primer cantidad:"+cantidadInicial)
        return cantidadInicial
    }

    const vaciarCarrito = () => {
        setCarrito([])
    }

    const totalCarrito = () => {
        return carrito.reduce ((tot, prod) => tot + (prod.cantidad*prod.precio), 0)
    }

    const isInCart = (id) => {// devuelve true o false si existe o no en el carrito
        return carrito.some(el => el.id === id)
    }

        /*
            los q esten adentro del CartContext.Provider pueden acceder a lo que ponga en el UnContext
            por ejemplo si estuviera dentro de cualquier componente, poniendo:

            const toto = useContext(CartContext)
            console.log(toto) me daría   Hola Mundo
        
            Lo que veo es lo q comparti en el value
            Si son vs datos, se pone todo en un objeto a compartir. value={{a,b}}
            console.log(toto.a) y console.log(toto.b)
            o sino             
            const {a,b} = useContext(CartContext)
            console.log(a) y console.log(b)                        
        */
    
    return (
        <CartContext.Provider value={{ carrito, isInCart, vaciarCarrito, agregarAlCarrito, eliminarDelCarrito, cantidadCarrito, totalCarrito, cantidadItemCarrito }}>
            {children}
        </CartContext.Provider>

    )


}

