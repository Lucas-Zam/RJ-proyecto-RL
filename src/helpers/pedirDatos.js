import { stock } from "../data/stock"

// fc que pide el archivo de stock con una
// promesa que solo tiene resolución efectiva
// y presenta los datos luego de 2 segundos
export const pedirDatos = () => {

    return new Promise((resolve, reject) => {

            setTimeout(()=>{
                // resolve(stock);// devuelvo el stock como está guardado

                // ordenar stock por código
                let mapped = stock.map(function(el,i) {
                    return {index: i, value: el.codigo};
                });
                mapped.sort (function(a,b) {
                    if (a.value < b.value) {return -1;}
                    if (a.value > b.value) {return 1;}
                    return 0;
                });
                let stockOrdenado = mapped.map(function(el) {
                    return stock[el.index];
                });

                resolve(stockOrdenado);// devuelvo el stock ordenado por código

            }, 2000)

    })
}
