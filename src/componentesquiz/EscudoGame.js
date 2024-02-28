import React, { useState, useEffect } from 'react';
import data from './api'; // Importa la API que contiene los datos de los equipos.
import '../componentesquiz/juegoscss/escudogame.css'; // Importa los estilos del juego.
import MensajeGanador from './MensajeGanador'; // Importa el componente MensajeGanador.

// Define el componente EscudoGame, que representa el juego de adivinar qué equipo tiene más ligas.
const EscudoGame = () => {
  // Estados para almacenar la puntuación, el número de intentos, los equipos seleccionados, el estado del ganador y la visibilidad del mensaje de error.
  const [puntuacion, setPuntuacion] = useState(0);
  const [intentos, setIntentos] = useState(0);
  const [equipo1, setEquipo1] = useState(null);
  const [equipo2, setEquipo2] = useState(null);
  const [ganador, setGanador] = useState(false);
  const [error, setError] = useState(false);

  // Función para generar equipos aleatorios.
  const generarEquipos = () => {
    if (!ganador) {
      // Selecciona dos equipos aleatorios de la API.
      const equipoAleatorio1 = data.equipos[Math.floor(Math.random() * data.equipos.length)];
      let equipoAleatorio2;
      do {
        equipoAleatorio2 = data.equipos[Math.floor(Math.random() * data.equipos.length)];
      } while (equipoAleatorio1.nombre === equipoAleatorio2.nombre); // Evita que se repitan los equipos.

      // Actualiza los estados de los equipos.
      setEquipo1(equipoAleatorio1);
      setEquipo2(equipoAleatorio2);
    }
  };

  // Función para comprobar qué equipo es el ganador.
  const comprobarGanador = (equipoSeleccionado) => {
    if (equipo1 && equipo2) {
      setIntentos(intentos + 1); // Incrementa el contador de intentos.
      // Comprueba qué equipo tiene más ligas y actualiza la puntuación y el mensaje de error en consecuencia.
      if (
        (equipoSeleccionado === equipo1.nombre && equipo1.ligas_totales > equipo2.ligas_totales) ||
        (equipoSeleccionado === equipo2.nombre && equipo2.ligas_totales > equipo1.ligas_totales)
      ) {
        setPuntuacion(puntuacion + 1); // Aumenta la puntuación si acierta.
        setError(false); // Oculta el mensaje de error.
      } else {
        setError(true); // Muestra el mensaje de error.
        setTimeout(() => setError(false), 900); // Oculta el mensaje de error después de 0.9 segundos.
      }
      // Comprueba si se ha alcanzado la puntuación máxima para declarar al ganador.
      if (puntuacion === 9) {
        setGanador(true);
      }
      generarEquipos(); // Genera nuevos equipos después de cada selección.
    }
  };

  // Efecto para generar equipos aleatorios al cargar el componente.
  useEffect(() => {
    generarEquipos();
  }, []);

  // Efecto para declarar al ganador cuando se alcanza la puntuación máxima.
  useEffect(() => {
    if (puntuacion === 10) {
      setTimeout(() => {
        setGanador(true);
      }, 0);
    }
  }, [puntuacion]);

  // Función para reiniciar el juego.
  const reiniciarJuego = () => {
    setPuntuacion(0); // Reinicia la puntuación.
    setIntentos(0); // Reinicia el número de intentos.
    setTimeout(() => {
      setGanador(false); // Oculta el mensaje de ganador.
      generarEquipos(); // Genera nuevos equipos.
    }, 0);
  };

  // Renderiza el juego de adivinar qué equipo tiene más ligas.
  return (
    <div className="game-container">
      <h1>¿Qué equipo tiene más ligas?</h1>
      {/* Renderiza los equipos seleccionados si aún no hay un ganador. */}
      {!ganador && (
        <div className="teams-container">
          {equipo1 && equipo2 && (
            <>
              {/* Renderiza el primer equipo. */}
              <div>
                <img src={equipo1.imagen} alt={equipo1.nombre} onClick={() => comprobarGanador(equipo1.nombre)} />
                <p>{equipo1.nombre}</p>
              </div>
              {/* Renderiza el segundo equipo. */}
              <div>
                <img src={equipo2.imagen} alt={equipo2.nombre} onClick={() => comprobarGanador(equipo2.nombre)} />
                <p>{equipo2.nombre}</p>
              </div>
            </>
          )}
        </div>
      )}
      {/* Renderiza el mensaje de error si se produce un fallo al seleccionar un equipo. */}
      {error && (
        <div className="error-message">
          <p>Fallasteee!!</p>
        </div>
      )}
      {/* Renderiza el marcador con la puntuación y el número de intentos. */}
      <div className="scoreboard">
        <p>Puntuación: {puntuacion}</p>
        <p>Intentos: {intentos}</p>
      </div>
      {/* Renderiza el mensaje de ganador si se ha alcanzado la puntuación máxima. */}
      {ganador && <MensajeGanador intentos={intentos} reiniciarJuego={reiniciarJuego} />}
    </div>
  );
};

export default EscudoGame; // Exporta el componente EscudoGame.

