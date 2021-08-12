import './servicios.css';
import icon1 from './img/web.png';
import icon2 from './img/diseno-grafico.png';
import icon3 from './img/publicidad-digital.png';

function Servicios() {

    return(
      
        <section className=" row justify-content-around text-center" id="services">
            <h2 className="col-12 display-4 text-capitalize mt-4">
                Nuestros servicios
            </h2>
            
            <article className="col-10 col-md-10 col-lg-3 bg-white rounded shadow p-3 fw-light">
                <img src={icon1} alt="" className=" bg-gradient d-inline-bloc rounded-circle mb-3 icon-service"></img>
                <h3 className="text">
                    Desarrollo Web
                </h3>
                <p className="text2">
                Servicio integral de diseño,<br/> maquetado y desarrollo web;<br/> Optimización de circuitos y<br/> estructura digital. Somos<br/> especialistas en la creación de<br/> Sitios Webs, assets de Marketing<br/>
                e e-commerce.      </p>
            </article>

            <article className="col-10 col-md-10 col-lg-3 bg-white rounded shadow p-3 fw-light">
                <img src={icon2} alt="" className=" bg-gradient d-inline-bloc rounded-circle mb-3 icon-service"></img>
                <h3 className="text">
                    Diseño Gráfico
                </h3>
                <p className="text2">
                La identidad visual es una parte<br/> importante de la estrategias de<br/> comunicación de las empresas.<br/> Colaboramos en la creación de<br/> todos los activos de identidad de<br/> marca y comunicación de su<br/> empresa, tanto a nivel digital<br/> como off-line.
                </p>
            </article>

            <article className="col-10 col-md-10 col-lg-3 bg-white rounded shadow p-3 fw-light">
                <img src={icon3} alt="" class=" bg-gradient d-inline-bloc rounded-circle mb-3 icon-service  "></img>
                <h3 className="text">
                    Marketing Digital
                </h3>
                <p className="text2">
                Administramos, y optimizamos las<br/> distintas herramientas de<br/> marketing digital en función de la<br/> demanda del cliente. Google Ads<br/>Serch, display, youtube, y<br/> Shopping, Facebook, Instagram,<br/> Mailing, entre otras.
                </p>
            </article>
        </section>
    );


}

export default Servicios;
