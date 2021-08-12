import './nosotros.css';
import imagen from './img/nosotros.jpg';

function Nosotros() {

    return(

        
        <div className="nosotros" id="nosotros">
            <img src={imagen}></img>
            <div className="texto-nosotros">
            <h1>Sobre Nosotros</h1>
            <p> Somos una Agencia de Marketing Online especializada en diseño gráfico y desarrollo web situada en Ourense y nos dedicamos a todo lo que tenga que ver con el branding empresarial, desde la concepción de la marca pasando por el desarrollo de la identidad corporativa, hasta, por supuesto, el desarrollo y mantenimiento de la web, hosting, marketing online, SEO SEM y Social Media.</p>
            </div>
        </div>
       

        
    );
}

export default Nosotros;
