import { Injectable } from '@nestjs/common';
import { iMovies } from './moviesInterface';
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
}
