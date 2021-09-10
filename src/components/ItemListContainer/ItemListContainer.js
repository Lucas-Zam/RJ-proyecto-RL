import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import { Redirect } from 'react-router-dom'
import { UIContext } from '../../context/UIContext'
import { getFirestore } from '../../firebase/config'
import { Loader } from '../Loader/Loader'
import { ItemList } from './ItemList'
// import { pedirDatos } from '../../helpers/pedirDatos'


// solicita el archivo de stock y cuando lo tiene
// lo pasa al componente Itemlist
export const ItemListContainer = () => {

    const {loading, setLoading} = useContext(UIContext)
    const { catId } = useParams()


    // estado Hook: const [valor,fc modificadora] = useState (valor inicial)
    const [data, setData] = useState([])
    // const [loading, setLoading] = useState(false)

    // console.log("data afuera:")
    // console.log(data)

    useEffect( ()=> {
        setLoading(true)

        const db = getFirestore()
        let productos = db.collection('productos')

        if (catId) {
            productos = productos.where('categoria', '==', catId)
        }
        productos.get()
            .then((response) => {
                const data = response.docs.map((doc) => ({...doc.data(), id: doc.id}))
                console.log(data)
                setData(data)
            })
            .finally(()=> {
                setLoading(false)
            })
            
    }, [catId, setLoading])
  

    //     setLoading(true);// mientras esté en true mostrará Cargando...

    //     // pedirDatos es una función. Fc que pide en forma asincrónica
    //     // el archivo de productos, que cuando está listo (respuesta) lo manda a (data) con setData
    //     pedirDatos()
    //         .then(respuesta => {
    //             if (catId) {
    //                 const arrayFiltrado = respuesta.filter( prod => prod.categoria === catId.toLowerCase())
    //                 setData( arrayFiltrado )
    //             }else{
    //                 setData(respuesta)
    //             }
    //         })
    //         .catch(err => console.log(err))
    //         .finally(()=> {
    //             setLoading(false); // al ponerlo en false no aparecerá el Cargando... y
    //             // aparecerá el archivo de productos listo.
    //         })
            
    // }, [catId, setLoading])

    return (
        <>
            {loading ? 
                <Loader/>
                // <p className="texto-centrado margen10">Cargando...</p>// cuando loading está en true
            :
                (data.length ?
                   <ItemList productos={data}/>
                :
                // esto sucede cuando la longitud de data (productos) no existe o sea esa 
                // categoria elegida no tiene productos en el archivo
                <h2 className="texto-centrado margen40">Producto no encontrado ....</h2>
                )
            }
        </>
    )
}
