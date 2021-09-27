import React from 'react'
import { Link } from 'react-router-dom'
import "./Item.scss"


export const Item = ( {id,img,codigo,desc,precio,categoria,rubro,auto,marca,catparanav,stock,cod_original} ) => {


    return (
        <div className="tarjeta">
            <img src={"../img/"+img} alt={codigo} width="400"/>
            <div className="encuadre1">
                <Link to={`/detail/${id}`} className="btn btn-primary sombra">Ver más</Link>
            </div>
            <p>{"Cód: "}{codigo}</p>
            <p>{desc}</p>
            <p className="texto-centrado enfasis600">{"$ "}{precio}</p>
            
        </div>
    )
}
