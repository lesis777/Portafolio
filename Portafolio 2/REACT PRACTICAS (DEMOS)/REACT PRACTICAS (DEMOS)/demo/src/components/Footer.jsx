import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-body-tertiary text-center text-lg-start"> {/* Footer con estilos */}
      <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}> {/* Contenido del footer */}
        © 2022 Copyright:Lesis {/* Texto de derechos de autor */}
        <a className="text-body" href="https://mdbootstrap.com/">MDBootstrap.com</a> {/* Enlace */}
      </div>
    </footer>
  );
}