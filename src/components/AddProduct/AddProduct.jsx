import { useContext } from 'react'
import { ProductsContext } from '../../Context/ProductContext'

import { useForm } from 'react-hook-form'

function AddProductPanel({ back }) {
    const { register, handleSubmit } = useForm()
    const {  AddProducts } = useContext(ProductsContext)

    return (
        <div className="Sign">
            <div>
                <h3>Bienvenido a Admin</h3>
                <h5>Podra agregar un nuevo producto desde este formulario</h5>
            </div>
            <form onSubmit={handleSubmit(AddProducts)} id="formSign" className="my-5">
                <div className="form-group my-lg-3">
                    <label>Nombre</label>
                    <input
                        type="text" className="form-control" placeholder="Ingresa el nombre del producto"
                        {...register("Nombre", { required: true })}
                        onInvalid={e => e.target.setCustomValidity("El campo Nombre no puede estar vacio")}
                        onInput={e => e.target.setCustomValidity('')}
                        required />
                </div>

                <div className="form-group my-lg-3">
                    <label>Descripcion</label>
                    <input
                        type="text" className="form-control" placeholder="Ingresa la descripcion del producto"
                        {...register("Descripcion", { required: true })}
                        onInvalid={e => e.target.setCustomValidity("Ingresa la descripcion")}
                        onInput={e => e.target.setCustomValidity('')}
                        required />
                </div>

                <div className="form-group my-lg-3">
                    <label>Categoria</label>
                    <input
                        type="text" className="form-control" placeholder="Ingresa la categoria del producto"
                        {...register("Categoria", { required: true })}
                        onInvalid={e => e.target.setCustomValidity("Ingresa la categoria")}
                        onInput={e => e.target.setCustomValidity('')}
                        required />
                </div>

                <div className="form-group my-lg-3">
                    <label>Foto</label>
                    <input
                        type="text" className="form-control" placeholder="Ingresa la foto del producto"
                        {...register("Foto", { required: true })}
                        onInvalid={e => e.target.setCustomValidity("Ingresa la foto")}
                        onInput={e => e.target.setCustomValidity('')}
                        required />
                </div>
                <div className="form-group my-lg-3">
                    <label>Foto</label>
                    <input
                        type="text" className="form-control" placeholder="Ingresa la foto del producto"
                        {...register("Foto2", { required: true })}
                        onInvalid={e => e.target.setCustomValidity("Ingresa la foto")}
                        onInput={e => e.target.setCustomValidity('')}
                        required />
                </div>
                <div className="form-group my-lg-3">
                    <label>Foto</label>
                    <input
                        type="text" className="form-control" placeholder="Ingresa la foto del producto"
                        {...register("Foto3", { required: true })}
                        onInvalid={e => e.target.setCustomValidity("Ingresa la foto")}
                        onInput={e => e.target.setCustomValidity('')}
                        required />
                </div>
                <div className="form-group my-lg-3">
                    <label>Foto</label>
                    <input
                        type="text" className="form-control" placeholder="Ingresa la foto del producto"
                        {...register("Foto4", { required: true })}
                        onInvalid={e => e.target.setCustomValidity("Ingresa la foto")}
                        onInput={e => e.target.setCustomValidity('')}
                        required />
                </div>
                <div className="form-group my-lg-3">
                    <label>Foto</label>
                    <input
                        type="text" className="form-control" placeholder="Ingresa la foto del producto"
                        {...register("Foto5", { required: true })}
                        onInvalid={e => e.target.setCustomValidity("Ingresa la foto")}
                        onInput={e => e.target.setCustomValidity('')}
                        required />
                </div>

                <div className="form-group my-lg-3">
                    <label>Precio</label>
                    <input
                        type="number" className="form-control" placeholder="Ingresa el Precio"
                        {...register("Precio", { required: true })}
                        onInvalid={e => e.target.setCustomValidity("Ingresa el Precio")}
                        onInput={e => e.target.setCustomValidity('')}
                        required />
                </div>
                <div className="form-group my-lg-3">
                    <label>Stock</label>
                    <input
                        type="number" className="form-control" placeholder="Ingresa el Stock"
                        {...register("Stock", { required: true })}
                        onInvalid={e => e.target.setCustomValidity("Ingresa el Stock")}
                        onInput={e => e.target.setCustomValidity('')}
                        required />
                </div>
                <div>
                    <button id='btnReg' type="submit" className="btn btn-success btn-lg btn-block my-3">Agregar Producto</button>
                    <button onClick={back} id='btnBack' type="submit" className="btn btn-danger btn-lg btn-block my-3">Volver al panel de Admin</button>
                </div>

            </form>
        </div>
    )
}

export default AddProductPanel