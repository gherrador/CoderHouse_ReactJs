import { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import CreditCard from '../../../components/CreditCard/CreditCard'
import emailjs from 'emailjs-com'
import { dataMissed, logginMissed } from '../../../components/Alerts/Alertas'
import { UserContext } from '../../../Context/UserContext'
import { OrderContext } from "../../../Context/OrderContext";
import { CartContext } from "../../../Context/CartContext";


function CreditCardContainer() {
  const { user } = useContext(UserContext)
  const { orderGenerated } = useContext(OrderContext)
  const { cartList, vaciarCarrito } = useContext(CartContext);
  const navigate = useNavigate();
  const [totalPrice, setTotalPrice] = useState();
  const [totalProduct, setTotalProduct] = useState();
  const [state, setState] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    focus: ""
  })

// Mediante las funciones map y reduce, se obtienen el precio total de los productos en carrito 
//y la cantidad de productos totales en el mismo
  useEffect(() => {
    if (cartList.length > 0) {
      setTotalPrice(
        cartList
          .map((product) => product.Precio * product.Cantidad)
          .reduce((total, valor) => total + valor)
      );
      setTotalProduct(
        cartList
          .map((product) => product.Cantidad)
          .reduce((total, valor) => total + valor)
      )
    }
  }, [cartList]);

// Funciones que capturan los eventos desarrollados en CreditCard. Con el objetivo de cambiar de focus como asi tambien guardar valores en estado
  const InputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
    e.preventDefault()
  }

  const FocusChange = (e) => {
    setState({
      ...state,
      focus: e.target.name
    })
    e.preventDefault()
  }
//La funcion pago finaliza la compra. Generando la orden y enviando el recibo al correo del usuario
  const pago = async () => {
    if (user.length > 0) {
      if ((state.number && state.name && state.expiry && state.cvc) !== '') {
        await orderGenerated(user, cartList, totalPrice)
          .then(enviarEmail())
          .then(navigate("/finalizarcompra"))
          .catch(err => console.error(err))
          .finally(vaciarCarrito())
      } else {
        dataMissed()
      }
    } else {
      logginMissed()
    }
  }

  //Funcion que se encarga de enviar el recibo de la compra al correo del cliente señalado en el formulario mediante la API "Emailjs"

  function enviarEmail() {
    emailjs.init('aRzIOsicfDfpquvcQ')
    emailjs.send("service_fum4ewf", "template_9qeuuxp", {
      nombre: `${state.name}`,
      message: `<table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Nombre</th>           
          <th scope="col">Cantidad</th>
          <th scope="col">Precio</th>
          <th scope="col">Total</th>
          <th scope="col">Foto</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        ${cartList.map((producto) => (
        `<tr key=${producto.Id}>
            <th scope="row">${producto.Nombre}</th>             
            <td>${producto.Cantidad}</td>
            <td>${producto.Precio}</td>
            <td>${producto.Cantidad * producto.Precio}</td>
            <td><img className="fotoCart" src=${producto.Foto} alt=${"logo"} /></td>            
          </tr>`
      ))}
        </tbody>
    </table>`,
      total: `$${totalPrice}`,
      cantidad: totalProduct,
      to_name: user[0].Email,
      from_name: "Japoneando",
      imagen: `<img src=https://drive.google.com/uc?export=donwload&id=1vtGNg8p-lAMut2ckEDXJF9Orp-mFSCXz style="width: 450px; height: 100px; margin-left: 20px"></img>`
    })
      .then(function (response) {
        //En caso de exito al mandar correo, muestro por consola "SUCCESS"
        console.log('SUCCESS!', response.status, response.text);
      }, function (error) {
        //En caso de falla al mandar correo, muestro por consola "FAILED"
        console.error('FAILED...', error);
      });
  }

  return (
    <div><CreditCard state={state} precioTotal={totalPrice} handleInputChange={InputChange} handleFocusChange={FocusChange} processPayment={pago} /></div>
  )
}

export default CreditCardContainer
