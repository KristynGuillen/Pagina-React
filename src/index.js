import React from 'react';
import ReactDOM from 'react-dom';
import Navegador from './Components/navegador';
import Carrusel from './Components/carrusel';
import Servicios from './Components/servicios';
import Nosotros from './Components/nosotros';
import Contacto from './Components/contacto';
import Footer from './Components/footer';



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




