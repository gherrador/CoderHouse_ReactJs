import { useContext } from 'react'
import { ProductsContext } from '../../Context/ProductContext'

import { useForm } from 'react-hook-form'

function ModificarProductoAdmin({producto, back }) {
    const { register, handleSubmit } = useForm()
    const {  modifyProduct } = useContext(ProductsContext)  

    return (
        <div className="Sign">
            <div>
                <h3>Bienvenido a Admin</h3>
                <h5>Podra modificar el producto señalado desde este formulario</h5>
            </div>
            <form onSubmit={handleSubmit(modifyProduct)} id="formSign" className="my-5">
                <div className="form-group my-lg-3">
                    <label>Id</label>
                    <input
                        defaultValue={producto.Id}
                        type="text" className="form-control" placeholder="Ingresa tu nombre"
                        {...register("Id", { required: true })}
                        readOnly
                    />
                </div>

                <div className="form-group my-lg-3">
                    <label>Nombre</label>
                    <input
                        type="text" className="form-control" placeholder="Ingresa tu nombre"
                        defaultValue={producto.Nombre}
                        {...register("Nombre", { required: true })}
                        onInvalid={e => e.target.setCustomValidity("El campo Nombre no puede estar vacio")}
                        onInput={e => e.target.setCustomValidity('')}
                        required />
                </div>

                <div className="form-group my-lg-3">
                    <label>Descripcion</label>
                    <input
                        type="text" className="form-control" placeholder="Ingresa tu apellido"
                       defaultValue={producto.Descripcion}
                        {...register("Descripcion", { required: true })}
                        onInvalid={e => e.target.setCustomValidity("Ingresa la descripcion a actualizar")}
                        onInput={e => e.target.setCustomValidity('')}
                        required />
                </div>

                <div className="form-group my-lg-3">
                    <label>Categoria</label>
                    <input
                        type="text" className="form-control" placeholder="Ingresa tu apellido"
                        defaultValue={producto.Categoria}
                        {...register("Categoria", { required: true })}
                        onInvalid={e => e.target.setCustomValidity("Ingresa la categoria a actualizar")}
                        onInput={e => e.target.setCustomValidity('')}
                        required />
                </div>

                <div className="form-group my-lg-3">
                    <label>Foto</label>
                    <input
                        type="text" className="form-control" placeholder="Ingresa tu foto"
                        defaultValue={producto.Foto}
                        {...register("Foto", { required: true })}
                        onInvalid={e => e.target.setCustomValidity("Ingresa la foto a actualizar")}
                        onInput={e => e.target.setCustomValidity('')}
                        required />
                </div>
                <div className="form-group my-lg-3">
                    <label>Foto</label>
                    <input
                        type="text" className="form-control" placeholder="Ingresa tu foto"
                        defaultValue={producto.Foto2}
                        {...register("Foto2", { required: true })}
                        onInvalid={e => e.target.setCustomValidity("Ingresa la foto a actualizar")}
                        onInput={e => e.target.setCustomValidity('')}
                        required />
                </div>
                <div className="form-group my-lg-3">
                    <label>Foto</label>
                    <input
                        type="text" className="form-control" placeholder="Ingresa tu foto"
                        defaultValue={producto.Foto3}
                        {...register("Foto3", { required: true })}
                        onInvalid={e => e.target.setCustomValidity("Ingresa la foto a actualizar")}
                        onInput={e => e.target.setCustomValidity('')}
                        required />
                </div>
                <div className="form-group my-lg-3">
                    <label>Foto</label>
                    <input
                        type="text" className="form-control" placeholder="Ingresa tu foto"
                        defaultValue={producto.Foto4}
                        {...register("Foto4", { required: true })}
                        onInvalid={e => e.target.setCustomValidity("Ingresa la foto a actualizar")}
                        onInput={e => e.target.setCustomValidity('')}
                        required />
                </div>
                <div className="form-group my-lg-3">
                    <label>Foto</label>
                    <input
                        type="text" className="form-control" placeholder="Ingresa tu foto"
                        defaultValue={producto.Foto5}
                        {...register("Foto5", { required: true })}
                        onInvalid={e => e.target.setCustomValidity("Ingresa la foto a actualizar")}
                        onInput={e => e.target.setCustomValidity('')}
                        required />
                </div>

                <div className="form-group my-lg-3">
                    <label>Precio</label>
                    <input
                        type="number" className="form-control" placeholder="Ingresa tu email"
                        defaultValue={producto.Precio}
                        {...register("Precio", { required: true })}
                        onInvalid={e => e.target.setCustomValidity("Ingresa el Precio a actualizar")}
                        onInput={e => e.target.setCustomValidity('')}
                        required />
                </div>
                <div className="form-group my-lg-3">
                    <label>Stock</label>
                    <input
                        type="number" className="form-control" placeholder="Ingresa tu Telefono"
                        defaultValue={producto.Stock}
                        {...register("Stock", { required: true })}
                        onInvalid={e => e.target.setCustomValidity("Ingresa el Stock a actualizar")}
                        onInput={e => e.target.setCustomValidity('')}
                        required />
                </div>
                <div>
                    <button id='btnReg' type="submit" className="btn btn-success btn-lg btn-block my-3">Modificar Producto</button>
                    <button onClick={back} id='btnBack' type="submit" className="btn btn-danger btn-lg btn-block my-3">Volver al panel de Admin</button>
                </div>

            </form>
        </div>
    )
}

export default ModificarProductoAdmin