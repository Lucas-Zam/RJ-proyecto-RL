import { stock } from "../data/stock"

// fc que partiendo del archivo de stock con una promesa que solo tiene resolución efectiva,
// obtiene un array con todas las Categorías para colocar en el Nav y presenta los datos
// luego de 2 segundos
export const pedirCategoria = () => {

    const arrayCategoria = [];

    return new Promise((resolve, reject) => {

        setTimeout(()=>{
            let encontrado;
            let datoaBuscar = "";
        
            for (let x = 0; x < stock.length; x++) {
                datoaBuscar = stock[x].categoria;
                if ( x === 0 ) {
                    arrayCategoria.push(datoaBuscar);
                }else{
                    encontrado = arrayCategoria.includes(datoaBuscar);
                    if ( !encontrado ) {
                        arrayCategoria.push(datoaBuscar);
                    }
                }
            }
            resolve(arrayCategoria);// devuelvo el array con Categorías
            
        }, 2000)
    })
}
