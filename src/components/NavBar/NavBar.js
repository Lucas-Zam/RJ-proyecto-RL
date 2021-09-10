import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import './NavBar.scss'
import logoRL from './logo-RL.png';

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

            <div className="boxNav">
                <div className="ulNav">
                    <Link className="linkNav" to={"/"}><div className="linkNava">Inicio</div></Link>                          
                    <Link className="linkNav" to={"/category/calefaccion"}><div className="linkNava">Calefacción</div></Link>
                    <Link className="linkNav" to={"/category/distribucion"}><div className="linkNava">Distribución</div></Link>
                    <Link className="linkNav" to={"/category/motor"}><div className="linkNava">Motor</div></Link>
                    <Link className="linkNav" to={"/category/refrigeracion"}><div className="linkNava">Refrigeración</div></Link>
                    <Link className="linkNav" to={"/category/direccion"}><div className="linkNava">Dirección</div></Link>
                    <Link className="linkNav" to={"/category/transmision"}><div className="linkNava">Transmisión</div></Link>
                </div>
            </div>

        </header>
    )
  
}
