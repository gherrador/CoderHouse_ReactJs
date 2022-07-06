import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Table from "../../components/Table/Table";
import { CartContext } from "../../Context/CartContext";
import "./Cart.css";
import FinishBuyContainer from "../Containers/FinishBuyContainer/FinishBuyContainer";

const Cart = () => {
  const { cartList } = useContext(CartContext);

  const messageConditional = (
    <div id="cartMessage" className="card text-center cart-message">
      <div className="card-header">Ops!</div>
      <div className="card-body">
        <h5 className="card-title">¡Tu carrito está vacío!</h5>
        <p className="card-text">
          ¿No sabés qué comprar? ¡Miles de productos te esperan!
        </p>
        <Link to="/" className="btn btn-primary">
          Ir a comprar
        </Link>
      </div>
    </div>
  );

  return (
    <div className="cart">
      {cartList.length === 0 ? (
        messageConditional
      ) : (
        <div className="tablero">
          <div className="carritoTable">
            <Table />
          </div>
          <div className="carritoFinish">
            <FinishBuyContainer/>           
          </div>
        </div>
      )}    
    </div>
  );
};

export default Cart;
