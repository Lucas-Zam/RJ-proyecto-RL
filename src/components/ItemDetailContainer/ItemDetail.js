import React from 'react'
import { Link } from 'react-router-dom'
import "./ItemDetail.scss"

export const ItemDetail = ( {id,img,codigo,desc,precio,categoria,auto,rubro,marca,cod_original} ) => {

    return (
        <>
            <h2 className="texto-centrado titulo"> DETALLE DE PRODUCTO</h2>
            <div className="tarjetaDetail">

                <div className="tarjImg">
                    <img src={"../img/"+img} alt={codigo} width="400"/>
                </div>

                <div className="tarjTexto">
                    <p>{"Código Producto: "}{codigo}</p>
                    <p>{"Descripción: "}{desc}</p>
                    <hr/>
                    <p>{"Categoría: "}{categoria}</p>
                    <p>{"Auto: "}{auto}</p>
                    <p>{"Rubro: "}{rubro}</p>
                    <p>{"Marca: "}{marca}</p>
                    <p>{"Código Original de Fábrica: "}{cod_original}</p>
                    <hr/>
                    <p className="texto-centrado enfasis600">{"$ "}{precio}</p>
                </div>
                    <Link to={`/category/${categoria}`} className="btn btn-primary encuadre sombra">Volver</Link>
            </div>
        </>
    )
}
