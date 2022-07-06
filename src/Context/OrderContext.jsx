import { createContext } from "react";
import CreateOrders from "../Dal/Dao/Ordenes/Ordenes";

export const OrderContext = createContext([])

export const OrderContextProvider = ({ children }) => {
    const orderGenerated = async (user, carrito, precioTotal) => {        
        try{        
        let orden = {}

        orden.Comprador = { 
            nombre: user[0].Usuario, 
            Correo: user[0].Email, 
            Telefono: user[0].Telefono 
        }

        orden.Total = precioTotal
        orden.Fecha = Date().toLocaleString()

        orden.Productos = carrito.map(cartItem => {
            const Id = cartItem.Id
            const Nombre = cartItem.Nombre
            const Descripcion = cartItem.Descripcion
            const Precio = cartItem.Precio
            const Foto = cartItem.Foto
            const Categoria = cartItem.Categoria
            const Cantidad = cartItem.Cantidad

            return { Id, Nombre, Descripcion, Precio, Foto, Categoria, Cantidad }
        })

        await CreateOrders(carrito, orden)       
    }catch(err){
        console.error("fue imposible realizar la compra", err)
    }
}

    return (
        <OrderContext.Provider value={{
            orderGenerated

        }}>
            {children}
        </OrderContext.Provider>
    )
}
