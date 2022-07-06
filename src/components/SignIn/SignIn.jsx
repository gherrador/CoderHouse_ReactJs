import './SignIn.css'
import { useForm } from 'react-hook-form'


function SignIn({ back, Register }) {
    const { register, handleSubmit } = useForm()
    return (
        <div className="Sign">
            <div className='my-4'>
                <h3>Bienvenido a Japoneando</h3>
                <h5>Llena el siguiente formulario y se parte de nuestra comunidad!</h5>
            </div>
            <form onSubmit={handleSubmit(Register)} id="formSign" className="my-5">
                <div className="form-group my-lg-3">
                    <label>Nombre</label>
                    <input
                        type="text" className="form-control" placeholder="Ingresa tu nombre"
                        {...register("Nombre", { required: true })}
                        onInvalid={e => e.target.setCustomValidity("El campo Nombre no puede estar vacio")}
                        onInput={e => e.target.setCustomValidity('')}
                        required />
                </div>

                <div className="form-group my-lg-3">
                    <label>Apellido</label>
                    <input
                        type="text" className="form-control" placeholder="Ingresa tu apellido"
                        {...register("Apellido", { required: true })}
                        onInvalid={e => e.target.setCustomValidity("El campo Apellido no puede estar vacio")}
                        onInput={e => e.target.setCustomValidity('')}
                        required />
                </div>
                <div className="form-group my-lg-3">
                    <label>Foto</label>
                    <input
                        type="file" className="form-control" placeholder="Ingresa tu foto"
                        {...register("Foto", { required: true })}
                        onInvalid={e => e.target.setCustomValidity("El campo Apellido no puede estar vacio")}
                        onInput={e => e.target.setCustomValidity('')}                    
                        required />
                </div>

                <div className="form-group my-lg-3">
                    <label>Email</label>
                    <input
                        type="email" className="form-control" placeholder="Ingresa tu email"
                        {...register("Email", { required: true })}
                        onInvalid={e => e.target.setCustomValidity("El campo Email no puede estar vacio")}
                        onInput={e => e.target.setCustomValidity('')}
                        required />
                </div>
                <div className="form-group my-lg-3">
                    <label>Telefono</label>
                    <input
                        type="number" className="form-control" placeholder="Ingresa tu Telefono"
                        {...register("Telefono", { required: true })}
                        onInvalid={e => e.target.setCustomValidity("El campo Telefono no puede estar vacio")}
                        onInput={e => e.target.setCustomValidity('')}
                        required />
                </div>

                <div className="form-group my-lg-3">
                    <label>Usuario</label>
                    <input
                        type="text" className="form-control" placeholder="Ingresa tu usuario"
                        {...register("Usuario", { required: true })}
                        onInvalid={e => e.target.setCustomValidity("El campo Usuario no puede estar vacio")}
                        onInput={e => e.target.setCustomValidity('')}
                        required />
                </div>

                <div className="form-group my-lg-3">
                    <label>Password</label>
                    <input
                        type="password" className="form-control" placeholder="Ingresa tu password"
                        {...register("Password", { required: true })}
                        onInvalid={e => e.target.setCustomValidity("El campo Password no puede estar vacio")}
                        onInput={e => e.target.setCustomValidity('')}
                        required />
                </div>
                <div>
                    <button id='btnReg' type="submit" className="btn btn-success btn-lg btn-block my-3">Registrarse</button>
                    <button onClick={back} id='btnBack' type="submit" className="btn btn-primary btn-lg btn-block my-3">Volver a la pagina principal</button>
                </div>

            </form>
        </div>
    )
}

export default SignIn