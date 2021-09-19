import ReactDOM from 'react-dom';
import React, { useContext, useState } from 'react'
import { Redirect } from 'react-router'
import Swal from 'sweetalert2'
import { CartContext } from '../../context/CartContext'
import { generarOrden } from '../../firebase/generarOrden'
import { Link } from 'react-router-dom'
import "./Checkout.scss"


export const Checkout = () => {


    const [hayErr, setHayErr] = useState(0);

    const {carrito, totalCarrito, vaciarCarrito} = useContext(CartContext)


    const [values, setValues] = useState({
        nombre: "",
        email: "",
        tel: 0,
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if (values.nombre.length > 3 && values.email.length > 3 && values.tel.length > 5) {

            //si validación de datos está ok:
            //  se genera la orden de compra
            
            generarOrden(values, carrito, totalCarrito())
            
                // si hay stock disponible se realiza la compra
                // luego se vacía el carrito
                .then( res => {
                    Swal.fire({//mensaje de éxito de compra
                        icon: 'success',
                        title: 'Su compra fue registrada!',
                        text: `Guarde este identificador: ${res}`,
                        confirmButtonText: 'Genial!'
                    })
                    vaciarCarrito()
                })

                // si no hay stock en alguno de los productos entonces
                // se muestra el/los productos con cantidad pedida y stock disponible
                // se regresa al carrito para su modificación
                .catch( err => {
                    let element1 = <p>NO HAY STOCK DE ALGUN PRODUCTO. CORRIJA SU COMPRA</p>
                    ReactDOM.render(element1, document.getElementById('tit1faltastock'));

                    let element = err.map((iterar) => <><p className="linea1">Código:{iterar.codigo}</p> <p>{iterar.desc}</p>
                     <div className="linea2"><p> Su pedido: {iterar.solicita} . . . Stock Disponible: {iterar.stock}</p></div> <hr/> </>);
                    ReactDOM.render(element, document.getElementById('faltastock'));
                    setHayErr(1)
                })

        }else{//si validación da datos está mal:
            Swal.fire({//mensaje de error en carga de datos
                icon: 'error',
                title: 'Campos inválidos',
                text: 'Revise su información'
            })        
        }
        
    }

    return (
        <div>
            <h3 className="texto-centrado">Checkout</h3>
            <hr/>
            {/* <button onClick={() => generarOrden(buyer,carrito,totalCarrito())}>Generar orden</button> */}
        
            {!carrito.length ?
                <Redirect to="/"/>
                :
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className="formu__grupo">
                            <label for="nombre" class="formu__label tituh4"> Nombre y Apellido </label>
                            <input
                                type="text"
                                value={values.nombre}
                                onChange={handleInputChange}
                                name="nombre"
                                className="formu__input"
                                required
                            />
                        </div>
                        <div className="formu__grupo">
                            <label for="tel" class="formu__label tituh4"> Teléfono </label>
                            <input
                                type="tel"
                                value={values.tel}
                                onChange={handleInputChange}
                                name="tel"
                                className="formu__input"
                                required
                            />
                        </div>
                        <div className="formu__grupo">
                            <label for="email" class="formu__label tituh4"> Correo Electrónico </label>
                            <input
                                type="email"
                                value={values.email}
                                onChange={handleInputChange}
                                name="email"
                                className="formu__input"
                                required
                            />
                        </div>
                        {hayErr === 0 ?
                            <button type="submit" className="btn btn-primary margen20">Enviar Compra</button>
                            :
                            <span></span>
                        }
                    </form>

                    <br/>
                    <div>    
                        <div className={hayErr === 1 ? "tit1" : ""} id="tit1faltastock"></div>
                        <div className="cajaError" id="faltastock"></div>
                        {hayErr === 1 ?
                            <span><Link to="/cart" className="btn btn-danger margen20">Volver al carrito</Link></span>
                            :
                            <span></span>
                        }
                    </div>
                </div>
            }
        </div>
    )
}
                    // {/* // Swal.fire(//mensaje de error en carga de datos
                    // //     icon: 'error',
                    // //     title: 'NO HAY STOCK DE ALGUN PRODUCTO EN SU RESUMEN DE COMPRA.',
                    // //     text: `(Cód:${iterar.codigo})   ${iterar.desc} (Stock disponible: ${iterar.stock})`,
                    // //     allowEscapeKey: true,
                    // //     allowEnterKey: true
                    // // })         */}
                