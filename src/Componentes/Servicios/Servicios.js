import React, {useState} from 'react'
import './Servicios.css'
import foto1 from '../Imagenes/acerca1.png'
import foto2 from '../Imagenes/imgserv.png'
import foto3 from '../Imagenes/desarrolloweb.png'
const Servicios = () => {
    const [servicios, setServicios]=useState([
        {
            imagen: foto1,
            titulo: "Analisis y Diseño",
            contenido: "Realizo el levantamiento de información de los requerimientos del proyecto con los usuarios expertos."
        },
        {
            imagen: foto2,
            titulo: "Desarrollo web",
            contenido: "Realizo el levantamiento de información de los requerimientos del proyecto con los usuarios expertos."
        },
        {
            imagen: foto3,
            titulo: "Cursos de Capacitación",
            contenido: "Realizo el levantamiento de información de los requerimientos del proyecto con los usuarios expertos."
        },
        
    ]) 

    return (
        <div id ="SERVICIOS" className="Servicios">
            <h1 className = "titulo">Servicios</h1>
         <div className = "dserv1">
         {servicios.map(servicio=>
                    <div className="divuno">
                        <img src={servicio.imagen} alt=""></img>
                        <h3 className="tarjeta-titulo">{servicio.titulo}</h3>
                        <p className="tarjeta-parrafo">{servicio.contenido}</p>
                    </div>
          )}

         </div>

        </div>
    )
}
export default Servicios