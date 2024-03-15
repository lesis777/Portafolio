import React from 'react';

export default function Cabecera({ setCurrentPage }) {
  return (
    <header className="App-header"> {/* Encabezado de la aplicación */}
      <nav className="navbar navbar-expand-lg bg-danger"> {/* Barra de navegación */}
        <div className="container-fluid"> {/* Contenedor fluido */}
          <a className="navbar-brand" href="#">Inicio</a> {/* Enlace de inicio */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> {/* Botón para mostrar menú en dispositivos pequeños */}
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent"> {/* Contenido del menú */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"> {/* Lista de elementos del menú */}
              <li className="nav-item"> {/* Elemento del menú */}
                <button className="nav-link active" onClick={() => setCurrentPage('home')}>Contacto</button> {/* Botón para la página de contacto */}
              </li>
              <li className="nav-item"> {/* Elemento del menú */}
                <button className="nav-link" onClick={() => setCurrentPage('contact')}>Tienda</button> {/* Botón para la página de tienda */}
              </li>
              {/* Agrega más botones para otras páginas si es necesario */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}