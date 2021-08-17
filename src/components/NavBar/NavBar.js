import React from 'react'
import { CartWidget } from './CartWidget/CartWidget'
import './NavBar.scss'
import logoRL from './logo-RL.png';

// import { CartWidget } from "./components/NavBar/CartWidget/CartWidget";

export const NavBar = () => {

    return (
        <header className="encabezado">

                <div className="boxLogo">
                    <div className="img-tip">
                        <img src={logoRL} className="logoRL" alt="logo" width="10"/>
                    </div>
                    <div className="p-tip">
                        <p className="repLucas"><b>REPUESTOS LUCAS</b></p>
                        <p className="repAlter">Repuestos alternativos</p>
                        <p className="repAlter">para el automotor marca Chevrolet</p>
                    </div>
                </div>
            
                <CartWidget/>
            
                <nav className="boxNav">
                    <ul className="ulNav">
                        <li><div><a href= "#aa1">Enlace1</a></div></li>
                        <li><div><a href= "#aa2">Enlace2</a></div></li>
                        <li><div><a href= "#aa3">Enlace3</a></div></li>
                        <li><div><a href= "#aa4">Enlace4</a></div></li>
                        <li><div><a href= "#aa5">Enlace5</a></div></li>
                    </ul>
                </nav>

        </header>
    )
  
}
