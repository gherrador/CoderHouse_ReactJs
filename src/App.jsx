import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/Navbar/NavBar';
import Mensaje from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className='App'>
      <div>
        <NavBar />
      </div>  
      <Mensaje greeting='hola, soy un saludo para CoderHouse'/>   
    </div>
  );
}

export default App;
