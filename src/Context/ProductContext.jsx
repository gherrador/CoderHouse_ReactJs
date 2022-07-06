import { createContext } from "react";
import { AddProductsFirebase, ModificarProductoFirebase } from "../Dal/Dao/Productos/GetItemFirebase"
import { useState } from "react";
import { useNavigate } from 'react-router-dom';


export const ProductsContext = createContext([])

export const ProductsContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [producto, setProducto] = useState({})
  const AddProducts = (data) => {
    AddProductsFirebase(data)
    .then((resp) => console.log(resp))
    .catch((err) => console.log(err))
    .finally(() => navigate('/admin'))
  }


  const productToModify =async (producto, id) => {
    setProducto({...producto, Id:id})   
  }

  const modifyProduct = async(producto) => {
    ModificarProductoFirebase(producto)
    .then((resp) => console.log(resp))
    .catch((err) => console.log(err))
    .finally(() => navigate('/admin'))
  }

  return (
    <ProductsContext.Provider value={{
      AddProducts,
      productToModify,
      producto, 
      modifyProduct

    }}>
      {children}
    </ProductsContext.Provider>
  )
}
