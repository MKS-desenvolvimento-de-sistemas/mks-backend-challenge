import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesModule } from './app/movies/movies.module';
import { config } from 'dotenv'

config()
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      ssl: process.env.NODE_ENV === "production" ? {rejectUnauthorized: false} : false ,
      entities: [__dirname + '/**/*.entity{.js,.ts}'],
      synchronize: true,   
  }), MoviesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
