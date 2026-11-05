import { Module } from '@nestjs/common';
import { ProductsController } from './post.controller.js';
import { ProductsService } from './post.service.js';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {}
