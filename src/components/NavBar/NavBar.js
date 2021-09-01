import React, { useEffect, useState } from 'react'
import { CartWidget } from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import './NavBar.scss'
import logoRL from './logo-RL.png';
import { pedirCategoria } from '../../helpers/pedirCategoria';
import { NavList } from './NavList'


// import { CartWidget } from "./components/NavBar/CartWidget/CartWidget";

export const NavBar = () => {

    const [categoria, setCategoria] = useState([])
    const [load, setLoad] = useState(false)

    useEffect( ()=> {

        setLoad(true);
        
        pedirCategoria()
            .then(respu => {
                setCategoria(respu)
            })
            .catch(err => console.log(err))
            .finally(()=> {
                setLoad(false); // al ponerlo en false no aparecerá el Cargando... 
            })
    }, [])


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

                {load ? 
                    <p className="boxNav texto-centrado">Cargando Nav...</p>// cuando load está en true
                : 
                    (<nav className="boxNav">
                        <ul className="ulNav">

                            <NavList categorias={categoria}/>

                        </ul>
                    </nav>)
                }

        </header>
    )
  
}
