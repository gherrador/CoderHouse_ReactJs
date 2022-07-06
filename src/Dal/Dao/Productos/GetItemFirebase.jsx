import { collection, getDocs, query, where, getDoc, doc, updateDoc, addDoc  } from 'firebase/firestore'
import { db } from '../../../Firebase/config'
const queryCollection = collection(db, 'productos')    


function GetCollectionFirebase(id) { 
    const queryCollectionFilter = id ? query(queryCollection, where('Categoria', '==', id)) : queryCollection
    return getDocs(queryCollectionFilter)     
}

function GetDocFirebase(id){   
    const dbQuery = doc(db, 'productos', id)
    return getDoc(dbQuery)
}

async function AddProductsFirebase(producto){
  await addDoc(queryCollection, producto)
}

async function ModificarProductoFirebase(producto) {
    const productoActualizar = doc(db, "productos", producto.Id)
    await updateDoc(productoActualizar, {
      Categoria: producto.Categoria,
      Descripcion: producto.Descripcion,
      Foto: producto.Foto,
      Nombre: producto.Nombre,
      Precio: producto.Precio,
      Stock: producto.Stock
    })
  }

export { GetCollectionFirebase, GetDocFirebase, AddProductsFirebase, ModificarProductoFirebase}