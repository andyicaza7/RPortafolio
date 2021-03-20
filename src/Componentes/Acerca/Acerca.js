import React, {useState} from 'react'
import './Acerca.css'
import Foto1 from '../Imagenes/fotoCarnet.png'
import Foto2 from '../Imagenes/segundaima.png'

const Acerca = () => {
    const [foto,setFoto]= useState(Foto1);
    const [bandera,setBandera]=useState(true);

    const cambiarFoto=()=>{
        if (bandera){
            setFoto(Foto2)
            setBandera(false)
        }
        else{
            setFoto(Foto1)
            setBandera(true)
        }
    }
    return (
    <div id="ACERCA" className="Second">
        <img onClick={()=>cambiarFoto()}
        src={foto} alt=""></img>
        <h2 class="texto">Mi nombre es Andy Icaza</h2>
        <p class="texto">Soy Estudiante y Aprendiz en Desarrollador web en el Front-end como en el Black-end</p>
        <a href="#Nav1">Contacto</a>
    </div>
    )
}
export default Acerca
