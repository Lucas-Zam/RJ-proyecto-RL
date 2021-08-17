import React from 'react'
import "./Item.scss"

// representa a cada tarjeta de producto en si mismo

// modo 1 ----------------------------------------------
export const Item = ( {img,codigo,desc,precio,auto} ) => {


    return (
        <div className="tarjeta">
            <img src={"./img/"+img} alt={codigo} width="400"/>
            <p>{"Cód: "}{codigo}</p>
            <p>{desc}</p>
            <p>{"Auto: "}{auto}</p>
            <p className="texto-centrado enfasis600">{"$ "}{precio}</p>
        </div>
    )
}

// modo 2 (modificar el modo 2 en ItemList.js)----------
// export const Item = ( {item} ) => {

//     return (
//         <div className="card col-4">
//             <img src={item.img} alt={item.nombre}/>
//             <h3>{item.nombre}</h3>
//             <p>{item.desc}</p>
//             <p>{item.precio}</p>
//         </div>
//     )
// }
