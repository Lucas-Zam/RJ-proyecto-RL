import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { UIContext } from '../../context/UIContext'
import { getFirestore } from '../../firebase/config'
import { Loader } from '../Loader/Loader'
import { ItemList } from './ItemList'


export const ItemListContainer = () => {

    const {loading, setLoading} = useContext(UIContext)

    const { catId } = useParams()

    const {setUsoCateg} = useContext(UIContext)

    const [data, setData] = useState([])


    useEffect( ()=> {
        setLoading(true)
        setUsoCateg("/")

        const db = getFirestore()
        let productos = db.collection('productos')

        if (catId) {
            productos = productos.where('categoria', '==', catId)
            setUsoCateg(catId)
        }
        productos.get()
            .then((response) => {
                const data = response.docs.map((doc) => ({...doc.data(), id: doc.id}))
                setData(data)
            })
            .finally(()=> {
                setLoading(false)
            })
            
    }, [catId, setLoading, setUsoCateg])


    return (
        <>
            {loading ? 
                <Loader/>
            :
                (data.length ?
                   <ItemList productos={data} />
                :
                    <>
                        <h2 className="texto-centrado margen40">Producto no encontrado ....</h2>
                        <h3 className="texto-centrado margen40">Tal vez no esté conectado a internet ....</h3>
                    </>
                )    
            }
        </>
    )
}
