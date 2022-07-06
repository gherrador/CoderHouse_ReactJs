import FinishBuy from "../Botones/FinishBuy/FinishBuy";
import "./Checkout.css";

const Checkout = ({pago, totalPrice}) => {  
  return (
    <div className="card-body">
      <h5 className="card-title">Total de su compra: ${totalPrice}</h5>
      <div>
        <FinishBuy generarOrden={pago} />
      </div>
    </div>
  );
};

export default Checkout;
