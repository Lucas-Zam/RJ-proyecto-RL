import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { UIContext } from '../../context/UIContext'
import { pedirDatos } from '../../helpers/pedirDatos'
import { ItemList } from './ItemList'


// solicita el archivo de stock y cuando lo tiene
// lo pasa al componente Itemlist
export const ItemListContainer = () => {


    const {loading, setLoading} = useContext(UIContext)
    const { catId } = useParams();
    
    // estado Hook: const [valor,fc modificadora] = useState (valor inicial)
    const [data, setData] = useState([])
    // const [loading, setLoading] = useState(false)

    
    useEffect( ()=> {
        
        setLoading(true);// mientras esté en true mostrará Cargando...

        // pedirDatos es una función. Fc que pide en forma asincrónica
        // el archivo de productos, que cuando está listo (respuesta) lo manda a (data) con setData
        pedirDatos()
            .then(respuesta => {
                if (catId) {
                    const arrayFiltrado = respuesta.filter( prod => prod.categoria === catId.toLowerCase())
                    setData( arrayFiltrado )
                }else{
                    setData(respuesta)
                }
            })
            .catch(err => console.log(err))
            .finally(()=> {
                setLoading(false); // al ponerlo en false no aparecerá el Cargando... y
                // aparecerá el archivo de productos listo.
            })
            
    // eslint-disable-next-line
    }, [catId])


    return (
        <>
            {loading ? 
            <p className="texto-centrado margen10">Cargando...</p>// cuando loading está en true
            :
            (data.length ?
                <ItemList productos={data}/> 
            :
                <h1 className="texto-centrado margen40">Producto no encontrado</h1>
            )

            // <ItemList productos={data}/> 
            // cuando loading está en false
            // paso el stock al componente ItemList
            }
        </>
    )
}
