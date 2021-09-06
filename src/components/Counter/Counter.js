import { Link } from 'react-router-dom'
import "./Counter.scss"

export const Counter = ({max, cantidad, setCantidad, agregar, modificar, ctrolIngreso, agregado}) => {
    console.log("agregado:(esta en carrito?): "+agregado)
    console.log("ctrolingreso:(pasó por los handles?): "+ctrolIngreso)



    const handleSumar = () => {
        if (cantidad < max) {
            setCantidad(cantidad + 1)
        }
    }
    
    const handleRestar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    }

    return (
        <>
            {ctrolIngreso ?// si está en false es primera pasada, si está en true es segunda pasada
                <span><Link to="/cart" className="btn btn-success margen20">Terminar mi compra</Link></span>
            : 
                <>
                    <div className="tarjCantidad">
                        <button className="btn btn-primary margen10" onClick={handleRestar}>-</button>
                        <p className="enfasis600">{cantidad}</p>
                        <button className="btn btn-primary margen10" onClick={handleSumar}>+</button>
                        {agregado ?// si está en false NO está en carrito, si está en true SI está en carrito
                            <button className="btn btn-outline-primary" onClick={modificar}>Modificar el carrito</button>
                        :
                            <button className="btn btn-outline-primary" onClick={agregar}>Agregar al carrito</button>
                        }
                    </div>
                </>
            }
        </>
    )
}
