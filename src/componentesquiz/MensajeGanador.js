import React from 'react';

const MensajeGanador = ({ reiniciarJuego, intentos }) => {
  return (
    <div className="winner-message">
      <p>¡Enhorabuena, lo has conseguido en {intentos} intentos!</p>
      <button onClick={reiniciarJuego}>Volver a Jugar</button>
    </div>
  );
};

export default MensajeGanador;
