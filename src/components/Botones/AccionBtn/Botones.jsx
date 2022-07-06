import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Botones.css'
import { useState, useContext } from "react";
import { CartContext } from "../../../Context/CartContext";

export function AccionBoton() {
  return (
    <div className='btnComprarContainer'>
      <Link to='/cart'>
        <Button className='btnComprar' variant='primary'>Ir al carrito</Button>
      </Link>
      <Link to='/'>
        <Button className='btnComprar' variant='primary'>Seguir comprando</Button>
      </Link>
    </div>
  )
}

export function ModifyBoton({ producto }) {
  const { sumarCantidad, restarCantidad } = useContext(CartContext);
  const [Modify, setModify] = useState(false)

  const ModifyBtn = () => {
    if (Modify === false) {
      setModify(true)
    } else {
      setModify(false)
    }
  }
  return (
    <div className='btnModify'>
      {Modify ?
        <div>
          <div className="Cajon">
            <Button id='btnMinus' className="rounded-circle" variant="danger" onClick={() => restarCantidad(producto.Id)}><p>-</p></Button>
            <input className="Cantidad" type="text" value={producto.Cantidad} readOnly></input>
            <Button id='btnPlus' className="rounded-circle" variant="success" onClick={() => sumarCantidad(producto.Id)}><p>+</p></Button>
          </div>
          <Button onClick={ModifyBtn} variant='success'>Aplicar</Button>
        </div>
        :
        <Button onClick={ModifyBtn} >Modificar Cantidad</Button>}
    </div>
  )
}


