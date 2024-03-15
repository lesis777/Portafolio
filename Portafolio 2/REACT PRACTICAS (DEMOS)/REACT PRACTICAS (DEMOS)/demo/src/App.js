import Cabecera from './components/Cabecera'; // Importa el componente Cabecera
import './App.css'; // Importa los estilos de la aplicación
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap
import Welcome from './components/Welcome'; // Importa el componente 
import Text from './components/Text'; // Importa el componente 
import Image from './components/Image'; // Importa el componente 
import Form from './components/Form'; // Importa el componente 
import Footer from './components/Footer'; // Importa el componente 

function App() {
  return (
    <div className="App"> 
      <Cabecera> </Cabecera> {/* Componente Cabecera */}
      <Welcome name=""/> 
      <Welcome msg= ""/> {/* Componente  */}
      <Text p= "Bienvenido a Celmex"/> {/* Componente  */}
      <Image /> {/* Componente  */}
      <Form/> {/* Componente */}
      <Footer/> {/* Componente */}
    </div>
  );
}

export default App;