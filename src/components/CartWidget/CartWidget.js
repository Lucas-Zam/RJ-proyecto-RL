import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import "./CartWidget.scss"
import { FaCartArrowDown } from "react-icons/fa"


export const CartWidget = () => {

    const {cantidadCarrito} = useContext(CartContext)

    const url = cantidadCarrito() !== 0 ? '/cart' : '/'

    return (  
        <>
            {/* <p className="texto-centrado">Carrito vacío...</p> */}
            <Link to={url} > 
                    <FaCartArrowDown className={cantidadCarrito() === 0 ? "negro" : "rojo"}/>
                    <span className="span1">{cantidadCarrito()}</span>
            </Link>
        </>
    )
}

