import React from 'react'
import { CartWidget } from './CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import './NavBar.scss'
import logoRL from './logo-RL.png';

// import { CartWidget } from "./components/NavBar/CartWidget/CartWidget";

export const NavBar = () => {

    return (
        <header className="encabezado">

                <Link className="boxLogo" to={"/"}>
                    <div className="img-tip">
                        <img src={logoRL} className="logoRL" alt="logo" width="10"/>
                    </div>
                    <div className="p-tip">
                        <p className="repLucas"><b>REPUESTOS LUCAS</b></p>
                        <p className="repAlter">Repuestos alternativos</p>
                        <p className="repAlter">para el automotor marca Chevrolet</p>
                    </div>
                </Link>
            
                <CartWidget/>

                <nav className="boxNav">
                    <ul className="ulNav">
                        <Link className="linkNav" to={"/"}><div className="linkNava">Inicio</div></Link>
                        <Link className="linkNav" to={"/category/bomba"}><div className="linkNava">Bomba</div></Link>
                        <Link className="linkNav" to={"/category/calefaccion"}><div className="linkNava">Calefacción</div></Link>
                        <Link className="linkNav" to={"/category/ciguenal"}><div className="linkNava">Cigüeñal</div></Link>
                        <Link className="linkNav" to={"/category/cilindro"}><div className="linkNava">Cilindro</div></Link>
                        <Link className="linkNav" to={"/category/direccion"}><div className="linkNava">Dirección</div></Link>
                        <Link className="linkNav" to={"/category/distribucion"}><div className="linkNava">Distribución</div></Link>
                        <Link className="linkNav" to={"/category/termostato"}><div className="linkNava">Termostato</div></Link>
                        <Link className="linkNav" to={"/category/ventilador"}><div className="linkNava">Ventilador</div></Link>
                    </ul>
                </nav>

        </header>
    )
  
}
