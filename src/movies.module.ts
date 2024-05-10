import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import * as serveStatic from 'serve-static';

@Module({
  imports: [ ],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class AppModule {}
