import Item from "../Item/Item"
import './ItemList.css'

export const ItemList = ({ productos }) => {

    return (
        <div  className="productosCard">
            {productos.map(producto =>
                <Item
                    key={producto.Id}                    
                    producto={producto}
                />)}
        </div>
    )

}

export default ItemList