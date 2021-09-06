import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { pedirDatos } from '../../helpers/pedirDatos'
import { ItemDetail } from './ItemDetail'
import { Loader } from '../Loader/Loader'



export const ItemDetailContainer = () => {

    const { itemId } = useParams()

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)

        pedirDatos()
            .then( res => {
                setItem( res.find( prod => prod.id === parseInt(itemId)) )
            })
            .finally(()=> { setLoading(false)})

    }, [itemId])


    return (
        <>
                {loading ?                     
                    <Loader/>
                    /* <p className="texto-centrado margen10">Cargando...</p> */
                :
                    (item ?
                        <ItemDetail {...item}/>
                    :
                        // <Redirect to ="/"/>   
                        <h1 className="texto-centrado margen40">Producto no encontrado</h1>
                    )
                }
        </>
    )
}
