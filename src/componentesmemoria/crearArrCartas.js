// Importa el módulo "data" desde el archivo Api.js ubicado en el mismo directorio.
import data from "./Api";

// Función que crea un array de cartas basado en un número proporcionado.
export default function crearArrCartas(numCards) {
    // Obtiene la longitud de la lista de equipos desde el módulo "data".
    const numEquipos = data.equipos.length;
    // Array que contendrá índices aleatorios para seleccionar equipos.
    const indicesAleatorios = [];

    // Generar índices aleatorios únicos para representar cartas.
    while (indicesAleatorios.length < numCards) {
        // Genera un índice aleatorio dentro del rango de la cantidad de equipos.
        const randomIndex = Math.floor(Math.random() * numEquipos);
        // Verifica si el índice generado ya está en la lista de índices aleatorios.
        if (!indicesAleatorios.includes(randomIndex)) {
            // Si no está incluido, agrega el índice a la lista.
            // Se añade dos veces para formar pares de cartas idénticas.
            indicesAleatorios.push(randomIndex);
            indicesAleatorios.push(randomIndex);
        }
    }

    // Baraja los índices aleatorios utilizando el algoritmo de Fisher-Yates.
    for (let i = indicesAleatorios.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indicesAleatorios[i], indicesAleatorios[j]] = [indicesAleatorios[j], indicesAleatorios[i]];
    }

    // Crea un array de objetos que representan cartas utilizando los índices aleatorios.
    const arr = indicesAleatorios.map((index, cardId) => ({
        id: cardId, // Identificador único de la carta.
        symbol: data.equipos[index].imagen, // Símbolo o imagen de la carta obtenido del módulo "data".
        bind: index, // Valor asociado a la carta (posiblemente el índice del equipo).
        rotate: false, // Estado de rotación de la carta.
        validating: 0, // Estado de validación de la carta.
        pinUp: 0 // Estado de "levantado" de la carta.
    }));

    return arr; // Retorna el array de cartas creado.
}
