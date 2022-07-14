import { Body, Controller, Delete, Get, HttpCode, Param, ParseUUIDPipe, Patch, Post, Put } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { updateMovieDto } from './dto/update-movie.dto';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly movieService: MoviesService){}

  @Get()
  async listAll (){
    return await this.movieService.findAll()
  }

  @Get(':id')
  async listOne (@Param('id', new ParseUUIDPipe()) id: string){
    return await this.movieService.findOne(id)
  }

  @Post()
  async create (@Body() body: CreateMovieDto){
    return await this.movieService.create(body)
  }

  @Patch(':id')
  async update (@Param('id', new ParseUUIDPipe()) id: string, @Body() body: updateMovieDto){
    return await this.movieService.update(id,body)
  }

  @Delete(':id')
  @HttpCode(204)
  async delete (@Param('id', new ParseUUIDPipe()) id: string){
    await this.movieService.delete(id)
  }
}
