// Importa los hooks useState y useEffect desde React
import { useState, useEffect } from 'react';
// Importa el archivo de estilos de la aplicación
import '../App.css';

// URL de la API para obtener el precio actual de Bitcoin
const url = "https://api.coindesk.com/v1/bpi/currentprice.json";

// Componente principal Btc2
export default function Btc2() {
  // Define estados para almacenar los datos, el estado de carga y los errores
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Efecto para cargar los datos al montar el componente
  useEffect(() => {
    // Realiza una solicitud a la API y actualiza el estado correspondiente
    fetch(url)
      .then(response => response.json())
      .then(result => {
        setIsLoading(false);
        setData(result);
      })
      .catch(error => {
        setIsLoading(false);
        setError(error);
      });
  }, []);

  // Función para renderizar el contenido según el estado de carga y los errores
  const getContent = () => {
    // Si está cargando, muestra un mensaje de carga
    if (isLoading) {
      return (
        <div className="App">
          <h4>Loading Data ...</h4>
          <progress value={null} />
        </div>
      );
    }

    // Si hay un error, muestra un mensaje de error
    if (error) {
      return <h4>Error</h4>;
    }

    // Si se cargaron los datos con éxito, muestra la tabla con la información de Bitcoin
    return (
      <div className="App">
        <h1>BTC to USD | EUR | GBP</h1>
        <h3>BTC to USD</h3>
        {/* Tabla para mostrar los datos */}
        <div className="d-flex justify-content-center">
          <div className="col-8">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>RATE</th>
                  <th>RATE FLOAT</th>
                  <th>DESCRIPTION</th>
                  <th>UPDATE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{data["bpi"]["USD"].rate}</td>
                  <td>{data["bpi"]["USD"].rate_float}</td>
                  <td>{data["bpi"]["USD"].description}</td>
                  <td>{data["time"].updated}</td>
                </tr>
                <tr>
                  <td>{data["bpi"]["EUR"].rate}</td>
                  <td>{data["bpi"]["EUR"].rate_float}</td>
                  <td>{data["bpi"]["EUR"].description}</td>
                  <td>{data["time"].updated}</td>
                </tr>
                <tr>
                  <td>{data["bpi"]["GBP"].rate}</td>
                  <td>{data["bpi"]["GBP"].rate_float}</td>
                  <td>{data["bpi"]["GBP"].description}</td>
                  <td>{data["time"].updated}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  // Renderiza el contenido
  return (
    <div className="App">
      {getContent()}
    </div>
  );
}