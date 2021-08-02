import './contacto.css';

function Contacto(){
    
   return (
    
               <form action="">
                   <div className="form" id="contacto">
                    <h1>Contactanos</h1>
                   
                    <div className="contenido">
                   <input type="text" id="nombre" required /><span className="barra"></span>
                   <label>Nombre:</label>
                   </div>

                   <div className="contenido">
                   <input type="email" id="email" required/><span className="barra"></span>
                   <label>Email:</label>
                   </div>

                   <div className="contenido">
                   <textarea name="mensaje" required/><span class="barra"></span>
                   <label>Mensaje:</label>
                   </div>
                   <button type="submit"> Enviar</button>
                  </div>

                 

                 
               </form>
          
    
   );

}

export default Contacto;
