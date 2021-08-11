import React from 'react'
import "./NavBar.css"
import { CartWidget } from '../CartWidget/CartWidget';

export const NavBar = () => {
    return (
        <header className="encabezado">
            
                <div className="boxLogo">
                    <h1>LOGO</h1>
                </div>
            
                <CartWidget/>
            
                <nav className="boxNav">
                    <a href= "#aa1">Página1</a>
                    <a href= "#aa2">Página2</a>
                    <a href= "#aa3">Página3</a>
                    <a href= "#aa4">Página4</a>
                    <a href= "#aa5">Página5</a>
                </nav>

        </header>
    )
}
