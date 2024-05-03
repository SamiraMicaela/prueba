import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './movies.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
