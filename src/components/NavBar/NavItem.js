import React from 'react'
import { Link } from 'react-router-dom'

// representa a cada categoria en la Nav

// modo 1 ----------------------------------------------
export const NavItem = ( { id, way, value } ) => {

    // console.log(id);
    // console.log(way);
    // console.log(value);

    return (
        <>
            <Link className="linkNav" to={`${way}`}><div className="linkNava">{value}</div></Link>
        </>
    )
}

// modo 2 (ver en ItemList.js)----------


// <Link className="linkNav" to={"/"}><div className="linkNava">Inicio</div></Link>                          
// <Link className="linkNav" to={"/category/bomba"}><div className="linkNava">Bomba</div></Link>
// <Link className="linkNav" to={"/category/calefaccion"}><div className="linkNava">Calefacción</div></Link>
// <Link className="linkNav" to={"/category/ciguenal"}><div className="linkNava">Cigüeñal</div></Link>
// <Link className="linkNav" to={"/category/cilindro"}><div className="linkNava">Cilindro</div></Link>
// <Link className="linkNav" to={"/category/direccion"}><div className="linkNava">Dirección</div></Link>
// <Link className="linkNav" to={"/category/distribucion"}><div className="linkNava">Distribución</div></Link>
// <Link className="linkNav" to={"/category/termostato"}><div className="linkNava">Termostato</div></Link>
// <Link className="linkNav" to={"/category/ventilador"}><div className="linkNava">Ventilador</div></Link>
