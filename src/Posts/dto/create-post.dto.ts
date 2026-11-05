// src/products/dto/create-product.dto.ts
import { IsString, 
        IsNotEmpty, 
        MaxLength, 
        MinLength} 
from 'class-validator';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(40)
  title: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(40)
  description: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(40)
  @MaxLength(400)
  content: string;
}