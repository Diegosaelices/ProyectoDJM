// Importa el hook useState de React, así como otros componentes necesarios.
import { useState } from "react";
import PantallaPrincipal from "./PantallaPrincipal"; // Importa el componente PantallaPrincipal.
import '../componentesmemoria/styles/sylesmemoria.css'; // Importa estilos CSS.
import PantallaJuego from "./PantallaJuego"; // Importa el componente PantallaJuego.
import PantallaFinal from "./PantallaFinal"; // Importa el componente PantallaFinal.

// Función componente Memoria que representa el juego de memoria.
function Memoria() {
  // VARIABLES DE ESTADO
  const [stateGame, setStateGame] = useState(0); // Estado del juego (0: no iniciado, 1: en proceso, 2: finalizado).
  const [level, setLevel] = useState(0); // Nivel de dificultad del juego.

  // OBJETO CON NUMERO DE CARTAS, SEGUN NIVEL
  const cardsByLevel = {
    0: 8,
    1: 16,
    2: 24
  };

  // CAMBIAR DIFICULTAD
  const changeDifficulty = () => {
    setLevel(level === 2 ? 0 : level + 1); // Cambia el nivel de dificultad del juego.
  };

  // CAMBIAR EL ESTADO DE JUEGO
  const changeStateGame = (value) => {
    setStateGame(value); // Cambia el estado del juego.
    if (value === 1) playTimer(); // Si el juego está en proceso, inicia el contador de tiempo.
  };

  // REINICIAR EL JUEGO
  const restartGame = () => {
    setStateGame(0); // Reinicia el estado del juego.
    setLevel(0); // Reinicia el nivel de dificultad.
    resetTimer(); // Reinicia el contador de tiempo.
  };

  // CONTADOR DE TIEMPO
  const [intervalId, setIntervalId] = useState(0); // Estado del intervalo de tiempo.
  const [mainMiliseconds, setMainMiliseconds] = useState(0); // Estado del tiempo transcurrido.

  const playTimer = () => {
    // Función para iniciar el contador de tiempo.
    if (intervalId) {
      clearInterval(intervalId); // Limpia el intervalo de tiempo si ya está corriendo.
      setIntervalId(0);
    }

    // Crea un nuevo intervalo de tiempo para actualizar el tiempo transcurrido cada segundo.
    const newIntervalId = setInterval(() => {
      setMainMiliseconds((mainMiliseconds) => mainMiliseconds + 1000); // Incrementa el tiempo transcurrido cada segundo.
    }, 1000);

    setIntervalId(newIntervalId); // Actualiza el estado del intervalo de tiempo.
  };

  const resetTimer = () => {
    // Función para reiniciar el contador de tiempo.
    setMainMiliseconds(0); // Reinicia el tiempo transcurrido.
    if (intervalId) {
      clearInterval(intervalId); // Limpia el intervalo de tiempo si está corriendo.
      setIntervalId(0);
    }
  };

  return (
    // Renderiza el contenido del juego dependiendo del estado actual del juego.
    <div className="container middle">
      {stateGame === 0 ? ( // Si el juego no ha iniciado, muestra la pantalla principal.
        <PantallaPrincipal
          setStart={changeStateGame} // Pasa la función para iniciar el juego como prop.
          level={level} // Pasa el nivel de dificultad actual como prop.
          changeDifficulty={changeDifficulty} // Pasa la función para cambiar la dificultad como prop.
        />
      ) : stateGame === 1 ? ( // Si el juego está en proceso, muestra la pantalla de juego.
        <PantallaJuego
          numCards={cardsByLevel[level]} // Pasa el número de cartas según el nivel como prop.
          setRestart={restartGame} // Pasa la función para reiniciar el juego como prop.
          setFinish={changeStateGame} // Pasa la función para finalizar el juego como prop.
          time={mainMiliseconds} // Pasa el tiempo transcurrido como prop.
        />
      ) : ( // Si el juego ha finalizado, muestra la pantalla final.
        <PantallaFinal setRestart={restartGame} /> // Pasa la función para reiniciar el juego como prop.
      )}
    </div>
  );
}

export default Memoria; // Exporta el componente Memoria.
