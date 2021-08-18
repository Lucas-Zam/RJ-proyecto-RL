import React, { useEffect, useState } from 'react'
import { pedirDatos } from '../../helpers/pedirDatos'
import { ItemList } from './ItemList'


// solicita el archivo de stock y cuando lo tiene
// lo pasa al componente Itemlist
export const ItemListContainer = () => {

    // estado Hook: const [valor,fc modificadora] = useState (valor inicial)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    

    // este useEffect se dispara en el montaje
    useEffect( ()=> {

        setLoading(true);// mientras esté en true mostrará Cargando...

        // pedirDatos es una función. Fc que pide en forma asincrónica
        // el archivo de productos, que cuando está listo (respuesta) lo manda a (data) con setData
        pedirDatos()
            .then(respuesta => setData(respuesta))
            .catch(err => console.log(err))
            .finally(()=> {
                setLoading(false); // al ponerlo en false no aparecerá el Cargando... y
                // aparecerá el archivo de productos listo.
            })

    }, [])


    return (
        <>
            {loading ? 
            <h2>Cargando...</h2>// cuando loading está en true
            : 
            <ItemList productos={data}/>// cuando loading está en false
                                        // paso el stock al componente ItemList
            }
        </>
    )
}
