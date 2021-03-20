import React from 'react'
import './Header.css';
import {Link} from "wouter"
import foto1 from '../Imagenes/menuh.png'
const Header = () => {
    return (
            <header>
                <input type = "checkbox" id = "btn-menu"></input>
                <label for = "btn-menu"> <img src = {foto1}  alt =""></img> </label>
              <nav className="menu">
                <ul>
                <li><Link to="/">INICIO</Link></li>
                <li><a href="#ACERCA">ACERCA</a></li>
                <li><a href="#SERVICIOS">SERVICIOS</a></li>
                <li><a href="#PORTAFOLIO">PORTAFOLIO</a></li>
                <li><a href="#TESTIMONIOS">TESTIMONIOS</a></li>
                <li><a href="#CONTACTO">CONTACTO</a></li>
                <li><a href="/configuracion">CONFIGURACIÓN</a></li>
                </ul>
              </nav>
            </header>
    )
}
export default Header