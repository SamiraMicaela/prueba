const BASE_URL = 'http://localhost:3000/movies';

export const getMovies = async () => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error('No se pudo encontrar el listado de las películas');
    }
    return await response.json();
  } catch (error) {
    console.error('Error al obtener el listado de las películas:', error);
    throw error;
  }
};

export const getMovieById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    if (!response.ok) {
      throw new Error('No se encontraron los detalles de la película');
    }
    return await response.json();
  } catch (error) {
    console.error('Error al obtener los detalles de la película:', error);
    throw error;
  }
};