import { Body, Controller, Get, Param, Post, Put, Patch } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(readonly moviesService: MoviesService) {}

  @Get('/')
  getAll() {
    return this.moviesService.getAll();
  }

  @Get(':id')
  getMovie(@Param('id') id: number) {
    return this.moviesService.getMovie(id);
  }

  @Post('/')
  create(@Body() movieData) {
    return this.moviesService.createMovie(movieData);
  }

  @Put(':id')
  updateMovie(@Param('id') id: number, @Body() movieData) {
    return this.moviesService.updateMovie(id, movieData);
  }

  @Patch(':id')
  deleteMovie(@Param('id') id: number) {
    return this.moviesService.deleteMovie(id);
  }
}
