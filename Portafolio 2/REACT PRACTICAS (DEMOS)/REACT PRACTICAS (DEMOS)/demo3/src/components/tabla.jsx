import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';

// Componente funcional que renderiza una tabla de razas de perros
const MiDataTable = () => {
  // Estado para almacenar las razas de perros
  const [dogs, setDogs] = useState([]); 

  // Función para obtener datos de la API de razas de perros
  const fetchData = async () => {
    try {
      // Realiza una solicitud a la API de razas de perros
      const response = await fetch('https://dog.ceo/api/breeds/list/all');
      // Convierte la respuesta en formato JSON
      const data = await response.json();
      // Extrae las razas de perros de los datos recibidos
      const dogBreeds = Object.keys(data.message); 
      // Actualiza el estado con las razas de perros
      setDogs(dogBreeds);
    } catch (error) {
      // Maneja cualquier error ocurrido durante la solicitud
      console.error('Error fetching dog breeds:', error);
    }
  };

  // Efecto que se ejecuta una vez al montar el componente para obtener datos
  useEffect(() => {
    fetchData();
  }, []);

  // Define las columnas de la tabla
  const columns = [
    {
      name: 'Breed', // Nombre de la columna
      selector: (row) => row, // Selector para obtener el valor de la celda
    },
  ];

  // Retorna la tabla de datos utilizando el componente DataTable
  return (
    <DataTable
      columns={columns} // Propiedad para pasar las columnas
      data={dogs} // Propiedad para pasar los datos de las razas de perros
      pagination // Habilita la paginación
    />
  );
};

export default MiDataTable; // Exporta el componente MiDataTable