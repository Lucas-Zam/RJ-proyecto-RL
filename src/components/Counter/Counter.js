import { Link } from 'react-router-dom'
import "./Counter.scss"

export const Counter = ({max, cantidad, setCantidad, agregar, agregado}) => {
    console.log("agregado:"+agregado)


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
            <div>

                    {
                    agregado ? 
                        <Link to="/cart" className="btn btn-success margen20">Terminar mi compra</Link>
                        :
                        <div className="tarjCantidad">
                            <button className="btn btn-primary margen10" onClick={handleRestar}>-</button>
                            <p className="enfasis600">{cantidad}</p>
                            <button className="btn btn-primary margen10" onClick={handleSumar}>+</button>
                            <button className="btn btn-outline-primary" onClick={agregar}>Agregar al carrito</button>
                        </div>
                    }

            </div>
        </>
    )
}
