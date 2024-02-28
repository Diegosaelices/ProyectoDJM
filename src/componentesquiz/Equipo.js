import React from 'react';

// Define el componente Equipo, que representa un elemento de equipo.
const Equipo = ({ equipo, onClick }) => {
  return (
    <div>
      {/* Renderiza el componente si se proporciona un equipo. */}
      {equipo && (
        <>
          {/* Muestra la imagen del equipo y llama a la función onClick al hacer clic en ella. */}
          <img src={equipo.imagen} alt={equipo.nombre} onClick={() => onClick(equipo.nombre)} />
          <p>{equipo.nombre}</p>
        </>
      )}
    </div>
  );
};

export default Equipo;


