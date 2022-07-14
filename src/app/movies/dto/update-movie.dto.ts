import { PartialType } from "@nestjs/swagger";
import { CreateMovieDto } from "./create-movie.dto";


export class updateMovieDto extends PartialType(CreateMovieDto){
  
}