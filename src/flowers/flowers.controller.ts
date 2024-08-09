import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  UseGuards,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { FlowersService } from './flowers.service';
import { AuthGuard } from '../conception/guard';
import { LoggingInterceptor } from '../conception/interceptor';
import { ParseIntPipe } from '../conception/pipe';
import { CreateFlowerDto } from './dto/flowers.dto';

@Controller('flowers')
@UseInterceptors(LoggingInterceptor)
export class FlowersController {
  constructor(private readonly flowersService: FlowersService) {}

  @UseGuards(AuthGuard)
  @Get()
  findAll(@Query('pageNumber', ParseIntPipe) pageNumber: number) {
    console.log('pageNumber', pageNumber);
    return this.flowersService.findAll();
  }

  @UseGuards(AuthGuard)
  @UsePipes(new ValidationPipe())
  @Post()
  create(@Body() dto: CreateFlowerDto) {
    return this.flowersService.create(dto);
  }
}
