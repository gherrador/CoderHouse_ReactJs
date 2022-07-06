import { useNavigate } from 'react-router-dom';
import ModificarProductoAdmin from '../../../../components/ModifyProduct/ModifyProduct';
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { GetDocFirebase } from '../../../../Dal/Dao/Productos/GetItemFirebase'

function ModifyProduct() {
    const navigate = useNavigate();
    const [Producto, SetProductos] = useState(null)
    const [Buscando, SetBuscando] = useState(true)

    const { id } = useParams()

    useEffect(() => {
        GetDocFirebase(id)
            .then(producto => SetProductos({ Id: producto.id, ...producto.data() }))
            .catch((err) => console.log(err))
            .finally(() => SetBuscando(false))
    }, [id])

    const regresar = () => {
        navigate('/admin')
    }

    return (
        <div>
            {Buscando ? <h4>Buscando Producto...</h4>
                :
                <ModificarProductoAdmin producto={Producto} back={regresar} />}
        </div>
    )
}

export default ModifyProduct