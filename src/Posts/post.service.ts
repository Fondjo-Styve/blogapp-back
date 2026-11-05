// src/products/products.service.ts
import { Injectable, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import {CreatePostDto } from './dto/create-post.dto.js';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(CreatePostDto: CreatePostDto) {
    // 1. Business Rule: Check if a blog post with this title already exists
    const existingPost = await this.prisma.post.findFirst({
      where: { title: CreatePostDto.title },
    });

    if (existingPost) {
      throw new ConflictException(
        `A blog post with the title "${CreatePostDto.title}" already exists.`,
      );
    }

    // 2. Persistence: Insert into database (timestamps are handled automatically)
    return this.prisma.post.create({
      data: {
        title: CreatePostDto.title,
        description: CreatePostDto.description,
        content: CreatePostDto.content,
      },
    });
  }
}