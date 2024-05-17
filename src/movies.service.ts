import { Injectable } from '@nestjs/common';
import { iMovies } from './moviesInterface';
import { v4 as uuidv4 } from 'uuid';
const BASE_URL = 'http://localhost:3030/movies/';

@Injectable()
export class MoviesService {
    async getMovies(): Promise<iMovies[]> {
        const res = await fetch(BASE_URL);
        const movies = await res.json();
        return movies as iMovies[];
    }

    async getMovieById(id: string): Promise<iMovies[]> {
        const res = await fetch(BASE_URL + id);
        const movies = await res.json();
        return movies;
    }

    async addMovie(movie: iMovies[]): Promise<any> {
        const id = this.generateId();
        const newMovie = { id, ...movie };
        const res = await fetch(BASE_URL, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newMovie),
        });
        const parsed = await res.json();
        return parsed;
    }
    
    private generateId(): string {
        // Genera un nuevo ID basado en la fecha actual en base 36
        return Date.now().toString(36);
    }
}
