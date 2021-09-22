import { getFirestore } from '../firebase/config'
import firebase from 'firebase/app'
import 'firebase/firestore'


// cuando tengo los datos válidos, entonces
export const generarOrden = (buyer,carrito,total) => {

    // en carrito1 no se guarda catparanav, img, stock
    let carrito1 = carrito.map((item) => ({
        id: item.id,
        codigo: item.codigo, 
        desc: item.desc,
        precio: item.precio,
        categoria: item.categoria,
        rubro: item.rubro,
        auto: item.auto,
        marca: item.marca,
        cod_original: item.cod_original,
        cantidad: item.cantidad,
     } ))
    // igual anterior
    // let carrito1 = carrito.map(function(item) {return {codigo:item.codigo, desc:item.desc } })


    return new Promise ( async (resolve, reject) => {

        const db = getFirestore()
        const orders = db.collection('orders')
        
        const newOrder = {//se genera el objeto de la nueva orden de compra
            buyer: buyer,
            items: carrito1,
            total: total,
            date: firebase.firestore.Timestamp.fromDate(new Date())
        }

        //BATCH DE ACTUALIZACION DE LOS DOCUMENTOS A COMPRAR
            const itemsToUpdate = db.collection('productos')// el where lleva 3 parámetros:
                .where(firebase.firestore.FieldPath.documentId(), 'in', carrito1.map(prod => prod.id))
                //en itemsToUpdate = la referencia de todos los id de la coleccion que estén(in) o coincidan con los id que 
                //están en el arreglo carrito.map formado por los id de los productos q están en el carrito
                //se usa el id como comparación

            const batch = db.batch()// batch es el lote de actualización q tendrá las ref de los documentos a los q hay q cambiarles el stock
            const query = await itemsToUpdate.get()// await = q espere a q se resuelva para poder continuar luego
            // query es un array con la colección de firebase

            const outOfStock = [];// creo un array vacio q tendrá los id de los prod q tienen mayor cantidad q el 
            // stock disponible

            query.docs.forEach((doc) => {// batch de actualización
                const itemInCart = carrito1.find(el => el.id === doc.id)
                //en el preciso momento de generar la orden, se controla q haya stock disponible
                if (doc.data().stock >= itemInCart.cantidad ) {
                    batch.update(doc.ref, {stock: doc.data().stock - itemInCart.cantidad })
                } else {
                    outOfStock.push({id: doc.id, ...doc.data(), solicita: itemInCart.cantidad})
                }
            })

        if (outOfStock.length === 0) {// si no hay productos sin stock, entonces
            orders.add(newOrder)//genero una nueva orden y mando a actualizar el lote
                //metodo add para sumar un item
                //metodo update para actualizar un item
                //metodo remove para borrar un item
                .then((res) => {
                    batch.commit()// con esto se actualiza mis documentos en firebase
                    resolve(res.id)
                })
                .catch((err) => {
                    reject(err)
                })
        } else {                     
            reject(
                // error: "Productos sin stock",
                outOfStock
            )
        }    
    })
}


    //ACTUALIZAR EL STOCK UNO X UNO
    //el problema de esto es si alguno no tiene stock, 
    // ya actualicé los anteriores y no puedo volver la orden atrás

    // carrito.forEach((prod) => {//recorro el carrito para modificar el stock
    //     //hace la referencia a Firebase de ese documento
    //     const docRef = db.collection('productos').doc(prod.id)

    //     docRef.get()//para obtener la data del doc y saber como esta en este momento
    //         .then(doc => {
    //             const actualizar = docRef.update({//este update guarda una promesa
    //                 stock: doc.data().stock - prod.cantidad
    //             })
    //             actualizar.then((res) => console.log(res))           
    //     })
    // })
        
