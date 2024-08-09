import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { FlowersService } from './flowers.service';
import { FlowersController } from './flowers.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [FlowersController],
  providers: [ConfigService, FlowersService, PrismaService],
})
export class FlowersModule {}
