import { getFirestore } from '../firebase/config'
import firebase from 'firebase/app'
import 'firebase/firestore'


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


    return new Promise ( async (resolve, reject) => {

        const db = getFirestore()
        const orders = db.collection('orders')
        
        const newOrder = {
            buyer: buyer,
            items: carrito1,
            total: total,
            date: firebase.firestore.Timestamp.fromDate(new Date())
        }

        //BATCH DE ACTUALIZACION DE LOS DOCUMENTOS A COMPRAR
            const itemsToUpdate = db.collection('productos')
                .where(firebase.firestore.FieldPath.documentId(), 'in', carrito1.map(prod => prod.id))

            const batch = db.batch()
            const query = await itemsToUpdate.get()

            const outOfStock = []

            query.docs.forEach((doc) => {
                const itemInCart = carrito1.find(el => el.id === doc.id)
                if (doc.data().stock >= itemInCart.cantidad ) {
                    batch.update(doc.ref, {stock: doc.data().stock - itemInCart.cantidad })
                } else {
                    outOfStock.push({id: doc.id, ...doc.data(), solicita: itemInCart.cantidad})
                }
            })

        if (outOfStock.length === 0) {
            orders.add(newOrder)
                .then((res) => {
                    batch.commit()
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
