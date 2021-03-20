import React from 'react'
import './Portada.css'
import Header from '../Header/Header';
const Portada = () => {
    return (
        <div className="Portada">
            <Header></Header>
            <div className="Contenido">
                <h1>Hola soy Andy Icaza, Estudiante de Ingeniería en Software</h1>
                <h2>Formándome para ser un futuro Profesional
                  Universidad Estatal de Milagro</h2>
                <button href="#" class="btn btn-info">Contactame</button>
            </div>
            
        </div>
        
    ) 
}
export default Portada

