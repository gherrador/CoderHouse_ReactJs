import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container,Navbar, Nav, NavDropdown } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar className="navegador" variant="dark" expand="lg">
  <Container>
    <Navbar.Brand id="brandNav" href="#home"><img alt="" id="logo" src="/logo.jpg"/>Japoneando</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">        
        <Nav.Link href="#link">Nosotros</Nav.Link>
        <Nav.Link href="#link">Contactanos</Nav.Link>
        <NavDropdown title="Productos" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Bebidas</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Accesorios</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Comidas</NavDropdown.Item>          
          <NavDropdown.Item href="#action/3.4">Regalos</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
      )
}
export default NavBar