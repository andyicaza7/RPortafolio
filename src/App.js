
import Acerca from './Componentes/Acerca/Acerca';
import Portada from './Componentes/Portada/Portada';
import Servicios from './Componentes/Servicios/Servicios';
import Portafolio from './Componentes/Portafolio/Portafolio';
import Testimonios from './Componentes/Testimonios/Testimonios';
import Contacto from './Componentes/Contacto/Contacto';

function App() {
  return (
    <div className="App">
      <Portada></Portada>
      <Acerca/>
      <Servicios/>
      <Portafolio/>
      <Testimonios/>
      <Contacto/>
    </div>
  );
}
export default App;

