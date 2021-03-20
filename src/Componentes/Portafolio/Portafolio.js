import React from 'react'
import './Portafolio.css'
import foto1 from '../Imagenes/Proyecto1.jpg'
import foto2 from '../Imagenes/Proyecto2.png'
import foto3 from '../Imagenes/Proyecto3.jpg'
import foto4 from '../Imagenes/Proyecto4.jpg'
import foto5 from '../Imagenes/Proyecto5.jpg'
import foto6 from '../Imagenes/Proyecto6.jpg'
import foto7 from '../Imagenes/icono1.png'
const Portafolio = () => {
    return (
        <section id="PORTAFOLIO" class="Proyecto"> 
        <h2 class="titulop">Proyectos realizados</h2>
         <div class="contenedorp">
                <div class="galeria-pro">
                    <div class="imagen-pro">
                        <img src = {foto1} alt="" ></img>
                        <div class="hover-galeria">
                            <img src = {foto7} alt="icono"></img>
                        </div>
                    </div>
                    <div class="imagen-pro">
                        <img src = {foto2} alt="" ></img>
                        <div class="hover-galeria">
                          <img src = {foto7} alt="icono"></img>
                        </div>
                    </div>
                    <div class="imagen-pro">
                        <img src = {foto3} alt="" ></img>
                        <div class="hover-galeria">
                          <img src = {foto7} alt="icono"></img>
                        </div>
                    </div>
                    <div class="imagen-pro">
                        <img src = {foto4} alt="" ></img>
                        <div class="hover-galeria">
                          <img src = {foto7} alt="icono"></img>
                        </div>
                    </div>
                    <div class="imagen-pro">
                        <img src = {foto5} alt="" ></img>
                        <div class="hover-galeria">
                         <img src = {foto7} alt="icono"></img>
                        </div>
                    </div>
                    <div class="imagen-pro">
                        <img src = {foto6} alt="" ></img>
                        <div class="hover-galeria">
                          <img src = {foto7} alt="icono"></img>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            
    )
}
export default Portafolio