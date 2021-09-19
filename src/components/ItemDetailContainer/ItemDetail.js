import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Counter } from "../Counter/Counter";
import { CartContext } from '../../context/CartContext'
import "./ItemDetail.scss"

export const ItemDetail = ( {id,img,codigo,desc,precio,categoria,rubro,auto,marca,catparanav,stock,cod_original} ) => {


    const {agregarAlCarrito, isInCart, cantidadItemCarrito, modificarCantCarrito} = useContext(CartContext)



    const [cantidad, setCantidad] = useState(cantidadItemCarrito(id));
    const [ingresoCarrito, setIngresoCarrito] = useState(false);


    // const [cantidad, setCantidad] = useState(1);
    // agregar al carrito

    const handleChange = () => {//modifica cantidad de un item existente en carrito
        setIngresoCarrito(true)
        modificarCantCarrito( id, cantidad )
    }

    const handleAdd = () => {//agrega un item nuevo al carrito
        setIngresoCarrito(true)
        agregarAlCarrito({
            id,img,codigo,desc,precio,categoria,rubro,auto,marca,catparanav,stock,cod_original,cantidad
        })
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
                    {stock > 0 ?
                        <p>{"Stock disponible: "}{stock}</p>
                        :
                        <p className="sinStock">PRODUCTO SIN STOCK</p>
                    }
                    <hr/>
                    <p className="texto-centrado enfasis600">{"$ "}{precio}</p>
                </div>

                <div className="tarjVolver">
                    <Link to={`/category/${categoria}`} className="btn btn-primary encuadre sombra">Volver</Link>
                </div>
      
                {stock > 0 ?
                    <div className="tarjCounter">
                        <Counter 
                            max={stock} 
                            cantidad={cantidad} 
                            setCantidad={setCantidad} 
                            agregar={handleAdd}
                            ctrolIngreso={ingresoCarrito}
                            modificar={handleChange}
                            agregado={isInCart(id)}
                        />    
                    </div>
                    :                
                    <div className="tarjCounter"></div>
                }
                
            </div>
            
        </>
    )
}
