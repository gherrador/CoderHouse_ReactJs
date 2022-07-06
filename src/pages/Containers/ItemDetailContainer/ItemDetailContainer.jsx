import './ItemDetailContainer.css'
import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../../components/ItemDetail/ItemDetail'
import { CartContext } from "../../../Context/CartContext"
import { GetDocFirebase } from '../../../Dal/Dao/Productos/GetItemFirebase'

function ItemDetailContainer() {
  const { addToCart } = useContext(CartContext)
  const [Add, setAdd] = useState(false)
  const [Producto, SetProductos] = useState(null)
  const [Buscando, SetBuscando] = useState(true)
  const [Foto, SetFoto] = useState()

  const { id } = useParams()

  const onAdd = (count, producto) => {
    setAdd(true)
    addToCart({ count, producto })
  }

  const CambiarFoto = (e) => {    
    SetFoto(e.target.getAttribute('src'))     
  }


  useEffect(() => {    
    GetDocFirebase(id)
    .then(producto => SetProductos({ Id: producto.id, ...producto.data() }))
    .catch((err) => console.log(err))
    .finally(() => SetBuscando(false))
  })
    return (
      <>
        <div className="detailProduct">
          {Buscando ? <h4>Buscando Producto...</h4>
            :
            <ItemDetail cambiarFoto={CambiarFoto} foto={Foto} producto={Producto} onAdd={onAdd} Add={Add} />}
        </div>
      </>
    )
  }

export default ItemDetailContainer