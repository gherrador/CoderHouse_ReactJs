import AdminPanel from '../../../../components/AdminPanel/AdminPanel'
import { GetCollectionFirebase } from '../../../../Dal/Dao/Productos/GetItemFirebase'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


function AdminContainer() {

  const [productos, setProductos] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    GetCollectionFirebase()
      .then(resp => setProductos(resp.docs.map(producto => ({ Id: producto.id, ...producto.data() }))))
      .catch((err) => console.log(err))
  }, [])


  const addProduct = () => {
     navigate('/admin/agregarproducto')
  }

  return (
    <div>
      <AdminPanel addProduct={addProduct} productos={productos} />
    </div>
  )
}

export default AdminContainer