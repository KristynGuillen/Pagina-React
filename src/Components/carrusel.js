import './carrusel.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {Carousel,Button} from "react-bootstrap";
import imagen from './img/imagen1.jpg';
import imagen2 from './img/imagen2.png';
import imagen3 from './img/imagen3.jpg';


function Carrusel() {
   
    return(

      <Carousel>
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src={imagen}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="text-dark">Bienvenidos a Website</h3>
          <p>Somos una compañia conformada por un equipo capacitado para resolver todas tus dudas e inquitudes, y dispuestos a llegar al resultado deseado por el cliente.</p>
          <Button className="btn" variant = "dark" href="#nosotros"> Más sobre nosotros </Button>
         </Carousel.Caption>
         </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagen2}
          alt="Second slide"
        />
    
        <Carousel.Caption>
          <h3 className="text-dark" >Variedad de Servicios</h3>
          <p>Te ofrecemos distintos servicios con la finalidad de crear un sitio web completo y que cumpla con todo lo necesario para su optimización.</p>
          <Button className="btn" variant = "dark" href="#services"> Nuestros Servicios </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagen3}
          alt="Third slide"
        />
    
        <Carousel.Caption>
          <h3 className="text-dark">Atención las 24hs</h3>
          <p>Tenemos un equipo encargado en la atención al cliente, para responder a cualquier consulta que desees, no dudes en ponerte en contacto con nosotros.</p>
          <Button className="btn" variant = "dark" href="#contacto"> Contactanos </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
}

export default Carrusel;