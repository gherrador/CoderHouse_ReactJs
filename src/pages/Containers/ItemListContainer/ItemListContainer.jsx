import { useState, useEffect } from "react"
import ItemList from '../../../components/ItemList/ItemList'
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'
import { GetCollectionFirebase } from '../../../Dal/Dao/Productos/GetItemFirebase'


export default function ItemListContainer({ greetings }) {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const { id }  = useParams()     
  
  useEffect(() => {    
      GetCollectionFirebase(id)
      .then(resp => setProductos(resp.docs.map( producto =>({Id:producto.id, ...producto.data()}) )))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }, [id])

  return (
    <>
      <div>
        <h1 className="saludo">{greetings}</h1>
      </div>
      <div className="cardProduct">
        {loading ? <h2>Cargando...</h2>
          :
          <ItemList productos={productos} />
        }
      </div>
    </>
  )
}


