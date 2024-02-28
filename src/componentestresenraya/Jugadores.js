// Definición de la URL de la API
const API_URL = "https://randomuser.me/api/?results=6";

// Función asincrónica para obtener nombres de usuarios desde la API
export async function getNombres() {
  try {
    // Realiza una solicitud a la API utilizando fetch
    const response = await fetch(API_URL);
    // Convierte la respuesta a formato JSON
    const data = await response.json();
    // Mapea los resultados para obtener un array de nombres completos
    return data.results.map(user => {
      return `${user.name.first} ${user.name.last}`;
    });
  } catch (error) {
    // Maneja errores, imprime un mensaje de error en la consola y lanza el error
    console.error("Error al obtener nombres de la API:", error);
    throw error;
  }
}

// Función asincrónica para obtener URLs de fotos de usuarios desde la API
export async function getFotos() {
  try {
    // Realiza una solicitud a la API utilizando fetch
    const response = await fetch(API_URL);
    // Convierte la respuesta a formato JSON
    const data = await response.json();
    // Mapea los resultados para obtener un array de URLs de fotos grandes
    return data.results.map(user => {
      return user.picture.large;
    });
  } catch (error) {
    // Maneja errores, imprime un mensaje de error en la consola y lanza el error
    console.error("Error al obtener fotos de la API:", error);
    throw error;
  }
}

