import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { iMovies } from './moviesInterface';
import { post } from 'superagent';


@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) { }

  @Get()
  getMovies(): Promise<iMovies[]> {
    return this.moviesService.getMovies();
  }
  @Get('/:id')
  getMovieById(@Param('id') id: string): Promise<iMovies[]> {
    return this.moviesService.getMovieById(id);
  }
  @Post()
  addMovie(@Body()Movies:iMovies []){
     return this.moviesService.addMovie(Movies);
      
  }
}

