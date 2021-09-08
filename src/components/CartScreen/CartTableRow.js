import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { BsFillTrashFill } from 'react-icons/bs'
import { HiPencilAlt } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import "./CartTableRow.scss"

export const CartTableRow = ( {id,img,codigo,desc,precio,categoria,rubro,auto,marca,catparanav,stock,cod_original,cantidad} ) => {

    const {eliminarDelCarrito} = useContext(CartContext)

    return (
            <>
            <td className="boxImg">
                <img src={"../img/"+img} alt="## imagen no disponible ##"/>
            </td>
            <td className="texto-centrado esp">{codigo}</td>
            <td className="texto-izquierda esp">{desc}</td>
            <td className="texto-izquierda esp">{catparanav}</td>
            <td className="texto-derecha esp">${precio}</td>
            <td className="texto-derecha esp">{cantidad}</td>
            <td className="texto-derecha esp">${precio * cantidad}</td>
            <td className="texto-centrado esp1">
                <Link to={`/detail/${id}`}><HiPencilAlt className="tipoCursor"/></Link>
            </td>
            <td className="texto-centrado esp1"><BsFillTrashFill className="tipoCursor" onClick={() => eliminarDelCarrito(id)}/></td>
            </>
        )
}
