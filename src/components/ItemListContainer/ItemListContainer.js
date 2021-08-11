import React from 'react'
import "./ItemListContainer.css"

export const ItemListContainer = ( {greeting} ) => {

    return (
        <div className="titulo">
            <h2>{greeting}</h2>
            <hr/>
        </div>
    )
}
