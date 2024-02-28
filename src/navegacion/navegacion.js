import React from 'react';

function Navigation() {
  return (
    <div className="flex justify-center space-x-4 mt-8">
      <button
        onClick={() => (window.location.href = '/componentestresenraya/Tresenraya')}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        TRES EN RAYA
      </button>
      <button
        onClick={() => (window.location.href = '/componentesquiz/Quiz')}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        JUEGO HIGHER LOWER
      </button>
      <button
        onClick={() => (window.location.href = '/componentesmemoria/Memoria')}
        className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        JUEGO DE MEMORIA
      </button>
    </div>
  );
}

export default Navigation;
