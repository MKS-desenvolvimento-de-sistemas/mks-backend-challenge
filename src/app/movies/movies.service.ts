import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMovieDto } from './dto/create-movie.dto';
import { updateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entity/movie.entity';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepository: Repository<Movie>){}

    async findAll(){
      return await this.movieRepository.find()
    }

    async findOne(id : string){
      try {
        return await this.movieRepository.findOneByOrFail({id})
      } catch (error) {
        throw new NotFoundException(error.message)
      }
    }

    async create(data: CreateMovieDto){
      return await this.movieRepository.save(this.movieRepository.create(data))
    }

    async update (id : string, data : updateMovieDto){
      const movie = await this.findOne(id)

      this.movieRepository.merge(movie, data)
      return await this.movieRepository.save(movie)
    }

    async delete(id : string){
      await this.findOne(id)
      await this.movieRepository.softDelete(id)
    }
}
