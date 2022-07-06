import { createContext, useState } from "react";
/* import { db } from '../Firebase/config' */

export const CartContext = createContext([])

export const CartContextProvider = ({ children }) => {
    const [cartList, setcartList] = useState([])

    function addToCart({ producto, count }) {
        if (!cartList.find(prod => prod.Id === producto.Id)) {
            setcartList([
                ...cartList, {
                    Id: producto.Id,
                    Nombre: producto.Nombre,
                    Descripcion: producto.Descripcion,
                    Precio: Number(producto.Precio),
                    Foto: producto.Foto,
                    Categoria: producto.Categoria,
                    Cantidad: count
                }])

        } else {
            const prodIndex = cartList.findIndex((prod => prod.Id === producto.Id))
            cartList[prodIndex].Cantidad = cartList[prodIndex].Cantidad + count
            setcartList([...cartList])
        }
    }

    const deleteProduct = (Id) => {
        setcartList(cartList.filter(((item) => item.Id !== Id)))
    };

    const sumarCantidad = (Id) => {
        const prodIndex = cartList.findIndex((prod => prod.Id === Id))
        cartList[prodIndex].Cantidad = cartList[prodIndex].Cantidad + 1
        setcartList([...cartList])

    };

    const restarCantidad = (Id) => {
        const prodIndex = cartList.findIndex((prod => prod.Id === Id))
        if (cartList[prodIndex].Cantidad > 1) {
            cartList[prodIndex].Cantidad = cartList[prodIndex].Cantidad - 1
            setcartList([...cartList])
        } else {
            setcartList([...cartList])
        }
    }

    const vaciarCarrito = () => {
        setcartList([])
    }
    
    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            deleteProduct,
            sumarCantidad,
            restarCantidad,
            vaciarCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}
