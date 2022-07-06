import { useEffect, useState } from "react"
import { alertaAddCarrito, alertaRemove, alertaCarrito } from "../Alerts/Alertas"
import { Button } from "react-bootstrap"
import './ItemCount.css'



export default function ItemCount({ stock, initial, onAdd, producto }) {

  const [count, setCount] = useState(initial)
  const [disable, setDisable] = useState(false)
  const [stockItems, setStock] = useState(stock) 


  function comprar() {   
    if (stockItems >= count) {
      setStock(stockItems - count)
      alertaCarrito(count, producto.Nombre)
      setCount(1)
    }
  }

  useEffect(() => {
    stockItems < 1 && setDisable(true)
  }, [stockItems])

  function addItem() {
    if (count < stockItems) {
      setCount(count + 1)
    } else {
      alertaAddCarrito()
    }
  }
  function remove() {
    if (count > 1) {
      setCount(count - 1)
    } else {
      alertaRemove()
    }
  }

  return (
    <div className="Card">
      <div className="cajon">
        <Button id='btnMinus' className="rounded-circle" variant="primary" onClick={remove}><p>-</p></Button>
        <input className="Cantidad" type="text" value={count} readOnly></input>
        <Button id='btnPlus' className="rounded-circle" variant="primary" onClick={addItem}><p>+</p></Button>
      </div>
      <div>
        <p>Stock: {stockItems} unidades</p>
        <Button id="btn-agregar" variant="success" disabled={disable} onClick={() => {comprar(); onAdd(count, producto)}}>Agregar</Button>
      </div>
    </div>
  )
}
