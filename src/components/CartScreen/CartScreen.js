import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { BsFillTrashFill } from 'react-icons/bs'
import { HiPencilAlt } from 'react-icons/hi'
import "./CartScreen.scss"
import { ItemListContainer } from '../ItemListContainer/ItemListContainer'

export const CartScreen = () => {

    const {carrito, eliminarDelCarrito, totalCarrito, vaciarCarrito} = useContext(CartContext)


    return (
        <>
        {(carrito.length === 0) ?
            // <Redirect to ="/"/>
            <ItemListContainer/>
            :
            <div className="centrado espFuente">
                <h2 className="texto-centrado margen20">Resumen de compra</h2>

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
                            {/* <th className="esp1">Modificar Cantidad</th>
                            <th className="esp1">Eliminar</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {carrito.map(prod => (
                            <tr key={prod.id}>
                                <td className="boxImg">
                                    <img src={"../img/"+prod.img} alt="## imagen no disponible ##"/>
                                </td>
                                <td className="texto-centrado esp">{prod.codigo}</td>
                                <td className="texto-izquierda esp">{prod.desc}</td>
                                <td className="texto-izquierda esp">{prod.catparanav}</td>
                                <td className="texto-derecha esp">${prod.precio}</td>
                                <td className="texto-derecha esp">{prod.cantidad}</td>
                                <td className="texto-derecha esp">${prod.precio * prod.cantidad}</td>
                                <td className="texto-centrado esp1">
                                    <Link to={`/detail/${prod.id}`}><HiPencilAlt className="tipoCursor"/></Link>
                                </td>
                                <td className="texto-centrado esp1"><BsFillTrashFill className="tipoCursor" onClick={() => eliminarDelCarrito(prod.id)}/></td>
                            </tr>
                        ))}
            
                        <td className="boxImg">
                            <img src="../img/vacio.jpg" alt="## imagen no disponible ##" width="40%"/>
                        </td>
                        <td className="texto-centrado esp"></td>
                        <td className="texto-izquierda esp"></td>
                        <td className="texto-derecha esp"></td>
                        <td className="texto-derecha esp"></td>
                        <td className="texto-derecha esp"></td>
                        <td className="texto-derecha esp enfasis600 sombra crema">${totalCarrito()}</td>
                    </tbody>
                </table>

                <button className="btn btn-danger margen10" onClick={vaciarCarrito}>Vaciar carrito</button>
            </div>
        }
        </>
    )
}
