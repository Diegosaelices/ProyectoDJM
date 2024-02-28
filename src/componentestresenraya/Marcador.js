import React from 'react';

const Marcador = ({ puntuacionX, puntuacionO, nombreJugadorO, nombreJugadorX }) => (
  <div className="grid grid-flow-col gap-8 mt-5">
    <div className="text-center bg-gray-800 p-4 rounded-md">
      <p className="text-white font-semibold mb-2">{nombreJugadorX}</p>
      <p className="text-2xl text-white">{puntuacionX}</p>
    </div>
    <div className="text-center bg-gray-800 p-4 rounded-md">
      <p className="text-white font-semibold mb-2">{nombreJugadorO}</p>
      <p className="text-2xl text-white">{puntuacionO}</p>
    </div>
  </div>
);


export default Marcador;
