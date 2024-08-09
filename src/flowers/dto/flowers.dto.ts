import { IsNumber, IsString } from 'class-validator';

export class CreateFlowerDto {
  @IsString({ message: 'Имя не строка!' })
  name: string;

  @IsString()
  color: string;

  @IsNumber()
  price: number;
}

export type TUpdateFlowerDto = Partial<CreateFlowerDto>;
