// Importa los módulos necesarios desde React y otros componentes locales.
import React, { useEffect, useState } from 'react';
import Boton from './Boton'; // Importa el componente Boton.
import Carta from './Carta'; // Importa el componente Carta.
import convertirTiempo from './convertirTiempo'; // Importa la función convertirTiempo.
import crearArrCartas from './crearArrCartas'; // Importa la función crearArrCartas.

// Define el componente PantallaJuego que representa la pantalla del juego de memoria.
export default function PantallaJuego(props) {
  // VARIABLES DE ESTADO
  const [cardsArr, setCardsArr] = useState([]); // Estado para almacenar el array de cartas.
  const [moves, setMoves] = useState(0); // Estado para contar los movimientos del jugador.

  // GENERAR TARJETAS ALEATORIAS INICIALES
  useEffect(() => {
    // Utiliza useEffect para generar el array de cartas aleatorias cuando cambia el número de cartas.
    setCardsArr(crearArrCartas(props.numCards)); // Genera el array de cartas utilizando la función crearArrCartas.
  }, [props.numCards]); // Se ejecuta cuando props.numCards cambia.

  // FUNCION: ROTAR
  const rotate = (id, pinUp) => {
    if (pinUp === 0) {
      // Si la carta no está volteada, se rota.
      setCardsArr(prevArr => {
        prevArr[id].rotate = true; // Cambia el estado de rotación de la carta.
        prevArr[id].validating = 1; // Marca la carta como validada.
        return [...prevArr]; // Devuelve un nuevo array de cartas actualizado.
      });
      setTimeout(() => validar(), 500); // Llama a la función validar después de 500 milisegundos.
    }
  };

  // FUNCION: VALIDAR
  const validar = () => {
    // Función para validar si las cartas son iguales o no.
    setMoves(moves + 1); // Incrementa el contador de movimientos.

    // Filtra las cartas que están siendo validadas.
    const validatingCards = cardsArr.filter(card => card.validating === 1);

    if (validatingCards.length === 2) {
      // Si hay dos cartas en proceso de validación...
      if (validatingCards[0].bind !== validatingCards[1].bind) {
        // Si las cartas son distintas, se les da la vuelta nuevamente después de 500 milisegundos.
        setTimeout(() => {
          setCardsArr(prevArr => {
            prevArr[validatingCards[0].id].rotate = false; // Deshace la rotación de la primera carta.
            prevArr[validatingCards[0].id].validating = 0; // Restaura el estado de validación de la primera carta.
            prevArr[validatingCards[1].id].rotate = false; // Deshace la rotación de la segunda carta.
            prevArr[validatingCards[1].id].validating = 0; // Restaura el estado de validación de la segunda carta.
            return [...prevArr]; // Devuelve un nuevo array de cartas actualizado.
          });
        }, 500);
      } else {
        // Si las cartas son iguales, se les marca como descubiertas.
        setCardsArr(prevArr => {
          prevArr[validatingCards[0].id].pinUp = 1; // Marca la primera carta como descubierta.
          prevArr[validatingCards[0].id].validating = 0; // Restaura el estado de validación de la primera carta.
          prevArr[validatingCards[1].id].pinUp = 1; // Marca la segunda carta como descubierta.
          prevArr[validatingCards[1].id].validating = 0; // Restaura el estado de validación de la segunda carta.
          return [...prevArr]; // Devuelve un nuevo array de cartas actualizado.
        });
      }
    }

    // Verifica si todas las cartas han sido descubiertas.
    const allCardsFlipped = cardsArr.every(card => card.pinUp === 1);
    if (allCardsFlipped) {
      props.setFinish(2); // Indica que el juego ha sido completado.
    }
  };

  return (
    // Renderiza la pantalla del juego con los siguientes elementos:
    <div className='gamescreen'>
      <div className='gamescreen--score grid grid-2'>
        {/* Muestra el número de movimientos realizados por el jugador. */}
        <div className='gamescreen--moves'>
          <p>Movimientos: {moves}</p>
        </div>
        {/* Muestra el tiempo transcurrido durante el juego. */}
        <div className='gamescreen--time text-right'>
          <p>Tiempo: {convertirTiempo(props.time)}</p>
        </div>
      </div>
      {/* Renderiza las cartas del juego. */}
      <div className='gamescreen--cards grid grid-4'>
        {cardsArr
          .sort((a, b) => a.id - b.id) // Ordena las cartas por su identificador.
          .map(card => (
            <Carta
              key={card.id}
              id={card.id}
              rotate={card.rotate}
              symbol={card.pinUp ? card.symbol : card.symbol} // Muestra el símbolo de la carta si está descubierta, de lo contrario, muestra el símbolo de interrogación.
              pinUp={card.pinUp}
              bind={card.bind}
              actionRotate={rotate} // Pasa la función rotate como prop a cada carta para que pueda ser rotada al hacer clic en ella.
            />
          ))}
      </div>
      {/* Renderiza un botón para reiniciar el juego. */}
      <div className='text-center'>
        <Boton label="Reiniciar juego" action={props.setRestart} />
      </div>
    </div>
  );
}
