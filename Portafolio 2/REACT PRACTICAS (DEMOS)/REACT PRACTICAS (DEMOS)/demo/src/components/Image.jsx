import React from 'react';
import oca from '..//assets/images/oca.jpeg';
import moca from '..//assets/images/moca.jpeg';
import toca from '..//assets/images/toca.jpeg';

const images = [oca, moca, toca]; // Array de imágenes

export default function Image() {
  return (
    <div id="carouselExample" class="carousel slide"> {/* Contenedor del carousel */}
      <div class="carousel-inner"> {/* Contenedor de los items del carousel */}
        <div class="carousel-item active"> {/* Item activo */}
          <img src={oca} class="d-block w-100" alt="..."/> {/* Imagen */}
        </div>
        <div class="carousel-item"> {/* Item del carousel */}
          <img src={moca} class="d-block w-100" alt="..."/> {/* Imagen */}
        </div>
        <div class="carousel-item"> {/* Item del carousel */}
          <img src={toca} class="d-block w-100" alt="..."/> {/* Imagen */}
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev"> {/* Botón para ir a la imagen anterior */}
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next"> {/* Botón para ir a la imagen siguiente */}
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}