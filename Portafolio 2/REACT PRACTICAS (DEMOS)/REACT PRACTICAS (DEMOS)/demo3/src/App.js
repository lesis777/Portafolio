// Importa los estilos de la aplicación desde el archivo App.css
import './App.css';
// Importa el componente MiDataTable desde el archivo tabla.js ubicado en la carpeta components
import MiDataTable from './components/tabla';

// Función principal que representa la aplicación
function App() {
  // Retorna la estructura de la aplicación
  return (
    // Contenedor principal de la aplicación con clase "App"
    <div className="App">
      {/* Encabezado de la aplicación */}
      <header className="App-header">
        {/* Renderiza el componente MiDataTable */}
        <MiDataTable/>
      </header>
    </div>
  );
}

// Exporta la función App como el componente predeterminado de la aplicación
export default App