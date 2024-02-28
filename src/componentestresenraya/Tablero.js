import React from 'react'; // Importa React desde la librería 'react'
import Cuadro from './Cuadro'; // Importa el componente Cuadro desde './Cuadro'

const Tablero = ({ cuadros, onClick, turno, cuadrosGanadores }) => {
  // Función para crear los cuadros del tablero a partir de un array de valores
  const crearCuadros = (valores) =>
    valores.map((valor) => (
      <Cuadro
        ganador={cuadrosGanadores.includes(valor)} // Define si el cuadro es un ganador
        turno={turno} // Define el turno actual
        onClick={() => onClick(valor)} // Función para manejar el clic en el cuadro
        valor={cuadros[valor]} // Valor del cuadro (X, O o null)
        key={`cuadro_${valor}`} // Clave única para el cuadro
      />
    ));

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">¡Tres en Raya!</h2> {/* Título del tablero */}
      <div className="grid grid-cols-3 gap-2"> {/* Contenedor de filas */}
        <div className="grid grid-rows-3"> {/* Primera fila de cuadros */}
          {crearCuadros([0, 1, 2])} {/* Crea los cuadros para los valores 0, 1 y 2 */}
        </div>
        <div className="grid grid-rows-3"> {/* Segunda fila de cuadros */}
          {crearCuadros([3, 4, 5])} {/* Crea los cuadros para los valores 3, 4 y 5 */}
        </div>
        <div className="grid grid-rows-3"> {/* Tercera fila de cuadros */}
          {crearCuadros([6, 7, 8])} {/* Crea los cuadros para los valores 6, 7 y 8 */}
        </div>
      </div>
    </div>
  );
};

export default Tablero; // Exporta el componente Tablero
