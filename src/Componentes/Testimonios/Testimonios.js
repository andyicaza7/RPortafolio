import React from 'react'
import '../Testimonios/Testimonios.css'
import foto1 from '../Imagenes/hombre1.jpg'
import foto2 from '../Imagenes/hombre2.jpg'
import foto3 from '../Imagenes/mujer.jpg'
import foto4 from '../Imagenes/hombre3.jpg'
const Testimonios = () => {
    return (
        <div id="TESTIMONIOS" class="Testi">
            <h2 class="titulo">Testimonios</h2>
            <div class="contenedor">
            <div class="cards">
                <div class="card">
                <img src = {foto1} ></img>
                    <div class="contenido-texto-card">
                        <h4><b>John Preciado</b></h4>
                        <h6><i>Web developer</i></h6>
                        <p><i>Maneja los problemas de forma serena, en situaciones extremas es decidido en sus objetivos</i></p>
                    </div>
                </div>
                <div class="card">
                    <img src = {foto2} ></img>
                    <div class="contenido-texto-card">
                        <h4><b>Anthony Naranjo</b></h4>
                        <h6><i>Web developer</i></h6>
                        <p><i>Siempre tratando de dar el 100%, nunca baja su nivel de esfuerzo en cada trabajo</i></p>
                    </div>
                </div>
               <div class="card">
               <img src = {foto3} ></img>
                    <div class="contenido-texto-card">
                        <h4><b>María Espinoza</b></h4>
                        <h6><i>Web developer</i></h6>
                        <p><i>Trabajador, actitud positiva, abierto a cambios y compromiso con el proyecto u objetivos</i></p>
                    </div>
                </div>
                <div class="card">
                <img src = {foto4} ></img>
                    <div class="contenido-texto-card">
                        <h4><b>Juan Pinos</b></h4>
                        <h6><i>Web developer</i></h6>
                        <p><i>Muy flexible y adaptativo a la hora de trabajar en un proyecto ya sea solo o con un equipo</i></p>
                    </div>
                </div>
               
            </div>
        </div>
        </div>
        )
    }
export default Testimonios