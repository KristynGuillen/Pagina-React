import React from 'react';
import ReactDOM from 'react-dom';
import Navegador from './navegador';
import Carrusel from './carrusel';
import Servicios from './servicios';
import Nosotros from './nosotros';
import Contacto from './contacto';
import Footer from './footer';





ReactDOM.render(
  <React.StrictMode>
    <Navegador />
    <Carrusel />
    <Servicios />
    <Nosotros />
    <Contacto />
    <Footer />
    

  </React.StrictMode>,
  document.getElementById('root')
);




