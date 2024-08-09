import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CreateFlowerDto } from './dto/flowers.dto';
import { EnumAppMode } from '../types';
import { PrismaService } from '../prisma.service';

@Injectable()
export class FlowersService {
  constructor(
    private readonly configService: ConfigService,
    private readonly prismaService: PrismaService,
  ) {}

  findAll() {
    console.log(this.configService.get<EnumAppMode>('MODE'));
    return this.prismaService.flower.findMany();
  }

  create(dto: CreateFlowerDto) {
    return this.prismaService.flower.create({ data: dto });
  }
}
