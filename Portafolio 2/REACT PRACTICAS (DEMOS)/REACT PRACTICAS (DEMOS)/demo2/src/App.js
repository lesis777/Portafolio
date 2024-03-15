// Importa el archivo de estilos de la aplicación
import './App.css';
// Importa el componente Btc2 desde el archivo Btc2.jsx
import Btc2 from "./components/Btc2.jsx";

// Función principal de la aplicación
export default function App() {
  return (
    // Contenedor principal de la aplicación con clase "App"
    <div className="App">
      {/* Renderiza el componente Btc2 */}
      <Btc2/>
    </div>
  );
}

// Estilos para los textos
const styles = {
  textProps : {
    // Establece la alineación de los elementos al centro
    alignItems: 'center',
    // Establece la justificación de los elementos al centro
    justifyContent: 'center',
  }
}