import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { BsFillTrashFill } from 'react-icons/bs'
import { HiPencilAlt } from 'react-icons/hi'
import "./CartScreen.scss"
import { CartTableRow } from './CartTableRow'

export const CartScreen = () => {

    const {carrito, totalCarrito, vaciarCarrito} = useContext(CartContext)


    return (
        <>
        <h2 className="texto-centrado margen20">Resumen de compra</h2>

        {(carrito.length === 0) ?
            <>
                <h4 className="texto-centrado margen20">No hay ítems agregados en el carrito</h4>
                <div className="texto-centrado">
                    <Link to="/"> 
                        <button className="btn btn-success margen10">Volver al Listado</button>
                    </Link>
                </div>
            </>
            :          
            <>
            <div className="texto-centrado espFuente">

                <table className="boxTabla">
                    <thead className="thead margen20">
                        <tr>{/*<!--fila 1--> */}
                            <th className="esp">Imagen</th>
                            <th className="esp">Código</th>
                            <th className="esp">Descripción</th>
                            <th className="esp">Categoría</th>
                            <th className="esp">$ Unit.</th>
                            <th className="esp">Cant.</th>
                            <th className="esp">Subtotal</th>
                            <th className="texto-centrado esp1"><HiPencilAlt/></th>
                            <th className="texto-centrado esp1"><BsFillTrashFill/></th>
                        </tr>
                    </thead>

                    <tbody>                        
                        {carrito.map(prod => <tr> { <CartTableRow key={prod.id} {...prod}/> } </tr> )}
                    </tbody>

                    <tfoot>
                        <td className="boxImg">
                            <img src="../img/vacio.jpg" alt="## imagen no disponible ##" width="40%"/>
                        </td>
                        <td className="texto-centrado esp"></td>
                        <td className="texto-izquierda esp"></td>
                        <td className="texto-derecha esp"></td>
                        <td className="texto-derecha esp"></td>
                        <td className="texto-derecha esp"></td>
                        <td className="texto-derecha esp enfasis600 sombra crema">${totalCarrito()}</td>
                    </tfoot>
                </table>

                <button className="btn btn-danger margen10" onClick={vaciarCarrito}>Vaciar carrito</button>
            </div>
            </>
        }
        </>
    )
}
