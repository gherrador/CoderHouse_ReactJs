import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import "./Table.css";
import { ModifyBoton } from "../Botones/AccionBtn/Botones";
import DeleteCart from "../Botones/DeleteCart/DeleteCart";

const Table = () => {
  const { cartList, deleteProduct, vaciarCarrito } = useContext(CartContext);
  return (
    <div className="table-data">
      <div className="table-data__title">
        <h1>Carrito</h1>
      </div>
      <table className="table">
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
          {cartList.map((producto) => (
            <tr key={producto.Id}>
              <th scope="row">{producto.Nombre}</th>             
              <td>{producto.Cantidad}</td>
              <td>${producto.Precio}</td>
              <td>${producto.Cantidad * producto.Precio}</td>
              <td><img className="fotoCart" src={producto.Foto} alt={"logo"} /></td>
              <td>
                <div className="acciones">
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteProduct(producto.Id)}
                  >
                    Eliminar Producto
                  </button>
                  <ModifyBoton producto={producto} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>        
      </table>
      <DeleteCart borrar={vaciarCarrito}/>
    </div>
  );
};

export default Table;
