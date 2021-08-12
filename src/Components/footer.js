import './footer.css';

function Footer () {

    return(

      <footer>
          <div className="footer-content">
              <h3>Website</h3>
              <p>Empresa especializada en el Desarrollo web,Diseño web, Marketing Digital, Diseño Gráfico, Community management.
             </p>
             <ul className="redes">
                 <li><a href="#"> <i className="fab fa-facebook-f"></i></a></li>
                 <li><a href="#"> <i className="fab fa-instagram"></i></a></li>
                 <li><a href="#"> <i className="fab fa-google-plus-g"></i></a></li>
                 <li><a href="#"> <i className="fab fa-linkedin-in"></i></a></li>

             </ul>
          </div>

          <div className="footer-pie">
              <p>copyright &copy;2021 Website. designed by <span>Kristyn Guillen</span></p>
          </div>

      </footer>
    );
}

export default Footer;