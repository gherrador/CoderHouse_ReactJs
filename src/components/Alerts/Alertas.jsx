import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)


const alertaCarrito = (count, itemNombre) => {
    MySwal.fire({
        title: <strong>Items agregados a carrito</strong>,
        html: <i>Se han agregado {count} producto/s {itemNombre} al carrito</i>,
        icon: 'success'
    })
}

const alertaRemove = () => {
    MySwal.fire({
        title: <strong>Imposible realizar acción</strong>,
        html: <i>No es posible disminuir de 1 unidad</i>,
        icon: 'error'
      })
}

const alertaAddCarrito = () => {
    MySwal.fire({
        title: <strong>Imposible realizar acción</strong>,
        html: <i>No hay stock suficiente del item requerido!</i>,
        icon: 'error'
      })
}


const alertLoginError = () => {
    MySwal.fire({
        title: <strong>Imposible realizar acción</strong>,
        html: <i>El usuario o la contraseña no son correctos</i>,
        icon: 'error'
      })
}

const alertLoginSuccess = (user) => {    
    MySwal.fire({
        title: <strong>Bienvenido!</strong>,
        html: <i>Bienvenido {user}</i>,
        icon: 'success'
      })
}

const logginMissed = () => {
    MySwal.fire({
        title: <strong>Imposible realizar acción</strong>,
        html: <i>Para proceder con la compra, por favor logeese en el sitio</i>,
        icon: 'error'
      })
}

const dataMissed = () => {
    MySwal.fire({
        title: <strong>Imposible realizar acción</strong>,
        html: <i>Por favor, complete todos los datos solicitados</i>,
        icon: 'error'
      })
}

const registerSuccessAlert = () => {
    MySwal.fire({
        title: <strong>Felicidades!!</strong>,
        html: <i>Ya podes logearte en nuestra pagina!</i>,
        icon: 'success'
      })
}

const registerErrorAlert = () => {
    MySwal.fire({
        title: <strong>Imposible realizar acción</strong>,
        html: <i>El usuario ya se encuentra registrado en el sitio</i>,
        icon: 'error'
      })
}


export {alertaCarrito, alertaRemove, alertaAddCarrito, alertLoginError, alertLoginSuccess, logginMissed, registerSuccessAlert, registerErrorAlert, dataMissed}



