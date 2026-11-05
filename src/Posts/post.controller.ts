// src/products/products.controller.ts
import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { ProductsService } from './post.service.js';
import { CreatePostDto } from './dto/create-post.dto.js';

@Controller('products')
export class ProductsController {
  // 💉 Dependency Injection: NestJS provides ProductsService automatically
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED) // Returns 201 Created on success
  async create(@Body() createProductDto: CreatePostDto) {
    // The request body has already passed through CreateProductDto validation here!
    return this.productsService.create(createProductDto);
  }
}