import React, { useEffect, useState } from 'react';
import { getMovieById } from '../services/movieService';

const MovieDetails = ({ movieId }) => {
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const movieData = await getMovieById(movieId);
                setMovie(movieData);
            } catch (error) {
                console.error('Error al obtener los detalles de la pelicula:', error);

            }
        };
        fetchMovie();
    }, [movieId]);

    if (!movie) {
        return <div>Cargando...</div>;
    }

    return (
        <div>
            <h1>{movie.title}</h1>
            <p>Año: {movie.year}</p>
            <p>Director:{movie.director}</p>
            <p>Duracion:{movie.duration} minutos</p>
            <p>Genero: {movie.genre}</p>
            <p>Calificacion: {movie.rate}</p>
            <img src={movie.poster} alt={movie.title} />
        </div>
    );
};

export default MovieDetails;