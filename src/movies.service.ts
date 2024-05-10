import { Injectable } from '@nestjs/common';
import { iMovies } from './moviesInterface';
const BASE_URL = 'http://localhost:3030/movies';   

@Injectable()
export class MoviesService {
    async getMovies(): Promise<iMovies[]> { 
        const res = await fetch(BASE_URL);
        const parsed = await res.json();
        return parsed as iMovies[];
    }

    
}
