import React from 'react'
import "./CartWidget.css"
import logoCarrito from './carrito.png';

export const CartWidget = () => {
    return (  

        <div className="boxCarrito">
            <img src={logoCarrito} className="img-tip" alt="logo" />
            <p className="p-tip"><b>Mi compra</b></p>
        </div>
        
    )
}
