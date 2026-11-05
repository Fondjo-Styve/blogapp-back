// src/prisma/prisma.module.ts
import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service.js';

@Global() // 🌍 Makes PrismaService available app-wide without re-importing in every feature module
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // 👈 Crucial: allows other modules to inject it
})
export class PrismaModule {}