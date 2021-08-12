import React, { Component } from 'react';
import './navegador.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Navbar,Nav} from 'react-bootstrap';
import Billetera from '../modal';



export default class Menu extends Component {
 render(){
   
  return(
   
    <Navbar className="navbar navbar-expand-lg navbar-light fixed-top">
  <Container className="container-fluid">
    <Navbar.Brand className="navbar-brand" href="carrusel.js">Website</Navbar.Brand>
    <Navbar.Toggle className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    
    <i className="fas fa-bars ml-1"></i>
    </Navbar.Toggle>

    <Navbar.Collapse className="collapse navbar-collapse" id="navbarSupportedContent">
      <Nav className="navbar-nav me-auto mb-2 mb-lg-0">
        <Nav.Item className="nav-item">
          <Nav.Link className="nav-link active" aria-current="page" href="carrusel.js">Inicio</Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav-item">
          <Nav.Link className="nav-link" href="#nosotros">Nosotros</Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav-item">
          <Nav.Link className="nav-link" href="#services">Servicios</Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav-item">
          <Nav.Link className="nav-link" href="#contacto">Contacto</Nav.Link>
        </Nav.Item>

        <Nav.Item className="nav-item">
        <i className="fab fa-instagram"></i>
        </Nav.Item>

        <Nav.Item className="nav-item">
        <i className="fab fa-facebook-f"></i>
        </Nav.Item>

        <Billetera/>
         </Nav>
     
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}
}




