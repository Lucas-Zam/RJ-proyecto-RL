import React from 'react'
import { Link } from 'react-router-dom'
import "./Item.scss"

// representa a cada tarjeta de producto en si mismo

// modo 1 ----------------------------------------------
export const Item = ( {id,img,codigo,desc,precio,categoria,rubro,auto,marca,catparanav,stock,cod_original} ) => {

    console.log(id);
    console.log(codigo);
    console.log(desc);
    // debugger;

    return (
        <div className="tarjeta">
            <img src={"../img/"+img} alt={codigo} width="400"/>
            <div className="encuadre1">
                <Link to={`/detail/${id}`} className="btn btn-primary sombra">Ver más</Link>
            </div>
            <p>{"Cód: "}{codigo}</p>
            <p>{desc}</p>
            {/* <p>{"Categoría: "}{categoria}</p> */}
            {/* <p>{"Auto: "}{auto}</p> */}
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
