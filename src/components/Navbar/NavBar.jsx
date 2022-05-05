import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container,Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Carrito from './Cart.jsx'
import logo from '../../assets/images/logo.jpg'

const NavBar = () => {
    return (
        <Navbar className="navegador" variant="dark" expand="lg">
  <Container>
    <Navbar.Brand id="brandNav" href="#home"><img alt="" id="logo" src={logo}/>Japoneando</Navbar.Brand>    
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse className='categorias' id="basic-navbar-nav">
      <Nav className="me-auto">        
        <Nav.Link id='selector' href="#link">Contactanos</Nav.Link>
        <Nav.Link id='selector' href="#link">Productos</Nav.Link>
        <NavDropdown className='selector' title="Categorias" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Bebidas</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Accesorios</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Comidas</NavDropdown.Item>          
          <NavDropdown.Item href="#action/3.4">Regalos</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
  <>  
      <Carrito/>
  </> 
</Navbar>
      )
}
export default NavBar