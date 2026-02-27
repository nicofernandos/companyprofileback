import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateMenuDto {
  @IsString()
  @IsNotEmpty()
  nama: string;

  @IsString()
  @IsNotEmpty()
  deskripsi: string;

  @IsNumber()
  harga: number;
}
