import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './pages/Containers/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './pages/Containers/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './pages/Cart/Cart';
import { CartContextProvider } from './Context/CartContext';
import EndShop from './pages/EndShop/EndShop';
import { UserContextProvider } from './Context/UserContext';
import RegisterContainer  from './pages/Containers/RegisterContainer/RegisterContainer'
import { OrderContextProvider } from './Context/OrderContext';
import PrivateRoute from './Helpers/PrivateRoute';
import { ProductsContextProvider } from './Context/ProductContext';

function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <ProductsContextProvider>
        <CartContextProvider>
          <OrderContextProvider>
          <div className='App'>
            <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer greetings={'Bienvenido a la pagina de Japoneando'} />} />
              <Route path='/detalle/:id' element={<ItemDetailContainer />} />
              <Route path='/categoria/:id' element={<ItemListContainer greetings={'Bienvenido a la pagina de Japoneando'} />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/finalizarcompra' element={<EndShop />} />
              <Route path='/signin' element={<RegisterContainer/>}/>              
              <Route path='/*' element={<PrivateRoute/>}/>
            </Routes>
          </div>
          </OrderContextProvider>
        </CartContextProvider>
        </ProductsContextProvider>
      </UserContextProvider>
    </BrowserRouter>


  );
}

export default App;
