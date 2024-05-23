import React, { useEffect, useState } from 'react';
import { getMovies } from '../services/movieService';

const MovieList = ({ onSelectMovie }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviesData = await getMovies();
        setMovies(moviesData);
      } catch (error) {
        console.error('Error al obtener las películas', error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Listado de Películas</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id} onClick={() => onSelectMovie(movie.id)}>
            {movie.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
