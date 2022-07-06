import { db } from '../../../Firebase/config'
import { collection, addDoc, query, documentId, where, writeBatch, getDocs } from 'firebase/firestore'


async function CreateOrders(carrito, orden) {
    const queryStock = collection(db, 'productos')
    const queryCollection = collection(db, 'ordenes')
    const queryStockUpdate = query(queryStock, where(documentId(), 'in', carrito.map(prod => prod.Id)))
    const batch = writeBatch(db)

    //Se crea la orden en Firebase

    await addDoc(queryCollection, orden)
        .then(resp => console.log(resp))

    //Se actualizan todos los stock de los productos que fueron comprados

    await getDocs(queryStockUpdate)
        .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
            Stock: res.data().Stock - carrito.find(item => item.Id === res.id).Cantidad
        })))
    batch.commit()

}

export default CreateOrders