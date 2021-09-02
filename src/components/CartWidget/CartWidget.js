import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import "./CartWidget.scss"

// Para poder utilizar los íconos de font awesome hacer:
// entrar a www.react-icons.github.io/react-icons/icons?name=fa
// elijo el IconName y lo importo aca:

// import logoCarrito from '../../../img/carrito.png';// sacar esto

// eslint-disable-next-line
import { FaCartArrowDown } from "react-icons/fa"; {/* poner esto */}

export const CartWidget = () => {//será 0 si no viene nada

    const {cantidadCarrito} = useContext(CartContext)

    return (  
        <>

        <Link to='/cart'>
            {cantidadCarrito() === 0 ?
                <div>
                    <FaCartArrowDown className="cartwidgetB"/>
                    {/* <img src={logoCarrito} alt="logo" width="40"/>sacar esto */}
                    <span>{cantidadCarrito()}</span>
                </div>
                :
                <div>
                    <FaCartArrowDown className="cartwidgetR"/>
                    {/* <img src={logoCarrito} alt="logo" width="40"/>sacar esto */}
                    <span>{cantidadCarrito()}</span>
                </div>
            }    
        </Link>

        </>
    )
}
