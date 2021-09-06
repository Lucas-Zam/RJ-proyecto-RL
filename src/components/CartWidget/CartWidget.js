import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import "./CartWidget.scss"

// Para poder utilizar los íconos de font awesome hacer:
// entrar a www.react-icons.github.io/react-icons/icons?name=fa
// elijo el IconName y lo importo aca:

// import logoCarrito from '../../../img/carrito.png';// sacar esto


import { FaCartArrowDown } from "react-icons/fa"


export const CartWidget = () => {

    const {cantidadCarrito} = useContext(CartContext)



    return (  
        <>
            {cantidadCarrito() !== 0 ? 
                // <p className="texto-centrado">Carrito vacío...</p>
                <Link to='/cart'> 
                        <FaCartArrowDown className={cantidadCarrito() === 0 ? "negro" : "rojo"}/>
                        <span className="span1">{cantidadCarrito()}</span>
                </Link>
            :
                <Link to='/'> 
                        <FaCartArrowDown className={cantidadCarrito() === 0 ? "negro" : "rojo"}/>
                        <span className="span1">{cantidadCarrito()}</span>
                </Link>
            }
        </>
    )
}

