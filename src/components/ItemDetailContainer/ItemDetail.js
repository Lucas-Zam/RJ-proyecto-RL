import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Counter } from "../Counter/Counter";
import "./ItemDetail.scss"

export const ItemDetail = ( {id,img,codigo,desc,precio,categoria,rubro,auto,marca,catparanav,stock,cod_original} ) => {

    const [cantidad, setCantidad] = useState(1);

    const agregarAlCarrito = () => {
        console.log({id,codigo,desc,precio,categoria,rubro,auto,marca,catparanav,stock,cod_original,cantidad})
    }

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
                    <p>{"Categoría: "}{catparanav}</p>
                    <p>{"Auto: "}{auto}</p>
                    <p>{"Rubro: "}{rubro}</p>
                    <p>{"Marca: "}{marca}</p>
                    <p>{"Código Original de Fábrica: "}{cod_original}</p>
                    <p>{"Stock disponible: "}{stock}</p>
                    <hr/>
                    <p className="texto-centrado enfasis600">{"$ "}{precio}</p>
                </div>

                <div className="tarjVolver">
                    <Link to={`/category/${categoria}`} className="btn btn-primary encuadre sombra">Volver</Link>
                </div>

                <div className="tarjCounter">
                    <Counter max={stock} cantidad={cantidad} setCantidad={setCantidad} agregar={agregarAlCarrito}/>    
                </div>                
                
            </div>
            
        </>
    )
}
