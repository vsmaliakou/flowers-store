import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class FlowersService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.flower.findMany();
  }
}
