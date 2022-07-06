import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Carrito from '../CartWidget/CartWidget'
import logo from '../../assets/images/logo.jpg'
import { CartContext } from "../../Context/CartContext";
import { useContext } from 'react'
import { UserContext } from '../../Context/UserContext';
import  LoginContainer   from '../../pages/Containers/LoginContainer/LoginContainer'

const NavBar = () => {
  const { cartList } = useContext(CartContext);
  const { user } = useContext(UserContext)


  let cantidad = cartList.length;
  return (
    <Navbar className="navegador" variant="dark" expand="lg">
      <Container>
        <Link to={'/'} id="brandNav" href="#home"><img alt="" id="logo" src={logo}/>Japoneando</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className='categorias' id="basic-navbar-nav">
          <Nav className="me-auto" id='contenedorMenu'>
          {user.length > 0 ? (user[0].admin !== true ?  false:<Link to={'/admin'} className='selected' href="#link">Panel de Administrador</Link>):(false) }
            <Link to={'/'} className='selected' href="#link">Productos</Link>
            <NavDropdown className='selector' title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to={'/categoria/adorno'}>Adorno</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={'/categoria/cocina'}>Utiles de Cocina</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={'/categoria/comidas'}>Comidas</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={'/categoria/bebidas'}>Bebidas</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={'/categoria/dulces'}>Dulces</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <>
       <LoginContainer/>
      </>
      <div className='contador' style={{ display: cantidad !== 0 ? 'flex' : 'none' }}>{cantidad}</div>
      <>
        <Link to='/cart'><Carrito/></Link>
      </>
    </Navbar>
  )
}
export default NavBar