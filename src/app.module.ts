// src/app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PrismaModule } from './prisma/prisma.module.js'; // 🔌 Import PrismaModule
//import { ProductsModule } from './products/products.module.js';
import { ProductsModule } from './Posts/post.module.js';

@Module({
  imports: [
    PrismaModule,
    ProductsModule, 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}