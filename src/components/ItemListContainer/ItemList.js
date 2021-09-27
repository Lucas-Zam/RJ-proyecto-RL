import React from 'react'
import { Item } from './Item'
import "./ItemList.scss"


export const ItemList = ( {productos = []} ) => {


    return (
        <section>
            <h2 className="texto-centrado titulo">Productos</h2>
            <div className="contenido grid col-5 m992-col-4 m576-col-3 m341-col-2">

                {productos.map((prod) => <Item key={prod.id} {...prod}/> )}

            </div>
        </section>
    )
}
