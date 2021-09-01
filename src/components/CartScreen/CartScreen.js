import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { BsFillTrashFill } from 'react-icons/bs'
import "./CartScreen.scss"

export const CartScreen = () => {

    const {carrito, eliminarDelCarrito, totalCarrito, vaciarCarrito} = useContext(CartContext)


    return (
        <div className="centrado espFuente">
            <h2 className="texto-centrado margen20">Resumen de compra</h2>

            <table className="boxTabla">
                <thead className="thead margen20">
                    <tr>{/*<!--fila 1--> */}
                        <th className="esp">Imagen</th>
                        <th className="esp">Código</th>
                        <th className="esp">Descripción</th>
                        <th className="esp">Categoría</th>
                        <th className="esp">Precio Unit.</th>
                        <th className="esp">Cantidad</th>
                        <th className="esp">Subtotal</th>
                        <th className="esp">Eliminar</th>
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
                            <td className="texto-centrado esp"><BsFillTrashFill className="tipoCursor" onClick={() => eliminarDelCarrito(prod.id)}/></td>
                        </tr>
                    ))}
        
                    <td className="boxImg">
                        <img src="../img/vacio.jpg" alt="## imagen no disponible ##"/>
                    </td>
                    <td className="texto-centrado esp"></td>
                    <td className="texto-izquierda esp"></td>
                    <td className="texto-derecha esp"></td>
                    <td className="texto-derecha esp"></td>
                    <td className="texto-derecha esp"></td>
                    <td className="texto-derecha esp enfasis600">${totalCarrito()}</td>
                </tbody>
            </table>

            <button className="btn btn-danger" onClick={vaciarCarrito}>Vaciar carrito</button>
        </div>
    )
}
