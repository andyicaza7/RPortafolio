import React from 'react'
import './Contacto.css'

const Contacto = () => {
    return (
      <section id="CONTACTO" class="contact">
        <div class="nine">
           <div class="nicont">
            <h2>Contáctanos</h2>
           </div>
          <div id ="#Nav1" class="nine1">
            <input type="text" placeholder="   Nombre" class="i1"></input>
            <input type="text" placeholder="   Correo" class="i2"></input>
            <input type="text" placeholder="   Mensaje" class="i3"></input>
            <input type="submit" class="submit"
            value="Enviar"></input>
          </div>
        </div>
      <footer id="footer">
         <div class="container footer-bottom clearfix">
            <div class="copyright">
             &copy; Copyright <strong><span>Andy</span></strong> | Todos los Derechos Reservados
           </div>
          <div class="credits">
             Diseñado por <a href="#">Andy Icaza</a>
          </div>
        </div>
      </footer>
  </section>
    )
}
export default Contacto