import React, { useState, useEffect } from 'react'; // Importa React, useState y useEffect desde la librería 'react'
import * as API from './Jugadores'; // Importa la API de jugadores desde './Jugadores'

const CardsUsuarios = ({ onUsuarioSeleccionado }) => { // Define un componente funcional llamado CardsUsuarios que recibe una función onUsuarioSeleccionado como prop

  // Define dos estados locales con useState: nombres y fotos, inicializados como arrays vacíos
  const [nombres, setNombres] = useState([]);
  const [fotos, setFotos] = useState([]);

  // Define un efecto con useEffect que se ejecuta una vez al montar el componente
  useEffect(() => {
    const fetchData = async () => { // Define una función asíncrona fetchData
      try {
        const nombresData = await API.getNombres(); // Obtiene los nombres de los usuarios mediante la función getNombres de la API
        const fotosData = await API.getFotos(); // Obtiene las fotos de los usuarios mediante la función getFotos de la API
        setNombres(nombresData); // Actualiza el estado nombres con los nombres obtenidos
        setFotos(fotosData); // Actualiza el estado fotos con las fotos obtenidas
      } catch (error) { // Maneja errores
        console.error("Error al obtener datos de usuarios:", error); // Imprime el error en la consola
      }
    };

    fetchData(); // Ejecuta la función fetchData
  }, []); // El efecto se ejecuta solo una vez al montar el componente, ya que el array de dependencias está vacío

  return (
    <section className="flex flex-col items-center justify-center p-8"> {/* Sección principal del componente */}
      <h2 className="text-3xl font-bold mb-4">Selecciona 2 Usuarios</h2> {/* Título del componente */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Contenedor de tarjetas de usuarios */}
        {nombres.map((nombre, index) => ( // Mapea los nombres y genera una tarjeta por cada nombre
          <div key={index} className="group bg-blue-100 rounded-md overflow-hidden shadow-md p-4 hover:bg-blue-200 transition duration-300"> {/* Tarjeta de usuario */}
            <img // Elemento de imagen
              src={fotos[index]} // URL de la imagen
              alt={nombre} // Texto alternativo de la imagen
              className="w-full h-32 object-cover rounded-full mb-4" // Clases de estilo para la imagen
            />
            <p className="text-lg font-semibold">{nombre}</p> {/* Nombre del usuario */}
            <button // Botón de selección de usuario
              onClick={() => onUsuarioSeleccionado(nombre)} // Manejador de clic que llama a la función onUsuarioSeleccionado con el nombre del usuario como argumento
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 mt-2" // Clases de estilo para el botón
            >
              Seleccionar
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardsUsuarios; // Exporta el componente CardsUsuarios
