import "./AdminPanel.css";
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


const AdminPanel = ({productos, addProduct}) => {

  return (
    <div className="table-data">
      <div className="Admintable-data__title">
        <h1>Panel de Productos de Admin</h1>
        <h5>Desde este panel podras modificar tus productos!</h5>
        <span>Tambien puedes cargar un nuevo producto desde aqui: <button onClick={addProduct} className="btn btn-primary">Cargar Nuevo producto</button> </span>

      </div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Nombre</th>  
            <th scope="col">Stock</th>
            <th scope="col">Precio</th>
            <th scope="col">Foto</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.Id}>
              <th scope="row">{producto.Nombre}</th>             
              <td>{producto.Stock}</td>
              <td>${producto.Precio}</td>
              <td><img className="fotoCart" src={producto.Foto} alt={"logo"} /></td>  
              <td>
                <Link to={`/admin/modificar/${producto.Id}`}>
                  <Button variant='primary'>
                    Modificar Producto
                  </Button>
                </Link>
              </td>      
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;