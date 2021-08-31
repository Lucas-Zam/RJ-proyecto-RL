import { stock } from "../data/stock"

// fc que partiendo del archivo de stock con una promesa que solo tiene resolución efectiva,
// obtiene un array con todas las Categorías para colocar en el Nav y presenta los datos
// luego de 2 segundos
export const pedirCategoria = () => {

    const array1xCategoria = [];
    const array1xCatparaNav = [];
    const array2 = [];
    const arrayFinal = [];

    return new Promise((resolve, reject) => {

        setTimeout(()=>{

            // paso 1 = llenar el array1xCategoria con cada categoria existente en stock
            // y llenar el array1xCatparaNav con el campor catparavav del stock
            let encontrado;
            let datoaBuscar = "";
            let datoaMostrar = "";
            for (let x = 0; x < stock.length; x++) {
                datoaBuscar = stock[x].categoria;
                datoaMostrar = stock[x].catparanav;
                if ( x === 0 ) {
                    array1xCategoria.push(datoaBuscar);
                    array1xCatparaNav.push(datoaMostrar);
                }else{
                    encontrado = array1xCategoria.includes(datoaBuscar);
                    if ( !encontrado ) {
                        array1xCategoria.push(datoaBuscar);
                        array1xCatparaNav.push(datoaMostrar);
                    }
                }
            }

            // paso 2 = generar el array2 con los datos de 
            // id, way q es la ruta y value q es la categoría a mostrar en el Nav
            for (let x = 0; x < array1xCategoria.length; x++) {
                array2[x] = {id: x, way: "/category/"+array1xCategoria[x], value: array1xCatparaNav[x]}
            }

            // paso 3 = ordenar el array2 
            // usando array array3mapped auxiliar
            let array3mapped = array2.map(function(el,i) {
                return {index: i, valor: el.value};
            });
            array3mapped.sort (function(a,b) {
                if (a.valor < b.valor) {return -1;}
                if (a.valor > b.valor) {return 1;}
                return 0;
            });
            
            // paso 4 = array array4 ordenado por categoria para Nav
            let array4 = array3mapped.map(function(el) {
                return array2[el.index];
            });

            // paso 5 = reordenar el indice y agregar el indice 0            
            arrayFinal[0] = {id: 0, way: "/", value: "Inicio"}
            for (let x = 0; x < array4.length; x++) {
                arrayFinal[x+1] = { id: x+1, way: array4[x].way, value: array4[x].value }
            }

            resolve(arrayFinal);// devuelvo el array con Categorías ordenadas
        }, 1700)
    })
}
