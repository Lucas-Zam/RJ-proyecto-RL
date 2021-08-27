import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { pedirDatos } from '../../helpers/pedirDatos'
import { ItemDetail } from './ItemDetail'




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
            <div>
                {loading ? 
                    <p className="texto-centrado margen10">Cargando...</p>// cuando loading está en true
                    :
                    (item ?
                        <ItemDetail {...item}/>
                    :
                        <h1 className="texto-centrado margen40">Producto no encontrado</h1>
                    )
                }
            </div>
        </>
    )
}
