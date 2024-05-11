import { Controller, Get, Param } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { iMovies } from './moviesInterface';


@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) { }

  @Get()
  getMovies(): Promise<iMovies[]> {
    return this.moviesService.getMovies();
  }
  @Get(':id')
  getMovieById(@Param('id')id: number): Promise<iMovies[]>{
    return this.moviesService.getMovieById(id);
  }
}

