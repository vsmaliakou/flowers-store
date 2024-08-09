import {
  Controller,
  Get,
  Query,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FlowersService } from './flowers.service';
import { AuthGuard } from '../conception/guard';
import { LoggingInterceptor } from '../conception/interceptor';
import { ParseIntPipe } from '../conception/pipe';

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
}
