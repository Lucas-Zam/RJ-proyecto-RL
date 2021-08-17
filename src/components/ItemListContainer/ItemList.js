import React from 'react'
import { Item } from './Item'
import "./ItemList.scss"

export const ItemList = ( {productos = []} ) => {

// recibe el arreglo productos y lo muestra mapeandolo correctamente
    return (
        <section>
            <h2 className="texto-centrado titulo">Productos</h2>
            <div className="contenido grid col-5 m992-col-4 m576-col-3 m341-col-2">

                {/* modo 1 -------------------------------------------- */}
                {productos.map((prod) => <Item key={prod.id} {...prod}/> )}

                {/* modo 2 (modificar el modo 2 en Item.js)---------------------- */}
                {/* {productos.map((prod) => <Item key={prod.id} item={prod}/> )} */}

            </div>
        </section>
    )
}
