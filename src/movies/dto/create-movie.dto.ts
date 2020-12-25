import { IsString, IsNumber } from 'class-validator';

export class CreateMovieDto {
  @IsNumber()
  id: number;
  @IsString()
  title: string;
  @IsString()
  describe: string;
  @IsString({ each: true })
  genres: string[];
}
